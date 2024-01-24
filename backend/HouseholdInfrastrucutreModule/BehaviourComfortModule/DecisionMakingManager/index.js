const express = require("express");
// const mysql = require('mysql');
const app = express();
const axios = require("axios");

let room_history = [];

let temperature_history = 0;
let humidity_history = 0;
let light_history = 0;
let sound_history = 0;

function form_json_structure (person_detected, detected_activities, responsePreferences, room, output_array, update_flag=false)
{
  let users_array = [];
  let user_data = {};
  
  for(let i = 0; i < person_detected.length; i++)
  {
    if (person_detected[i] == "Unknown") {
      user_data = {
        username: "Undefined",
        activity: "Undefined",
        color: "bg-red-500",
        status: "warning"
      };
    }
    else {
      user_data = {
        username: person_detected[i],
        activity: detected_activities[i],
        color: "bg-teal-500",
        status: "good"
      };
    }
    users_array.push(user_data)
  }
  let temperature = 0;
  let humidity = 0;
  let light = 0;
  let sound = 0;
  if(!update_flag)
  {
    let number_of_people = responsePreferences.length;
    if (number_of_people != 0)
    {
      for(let i = 0; i < responsePreferences.length; i++)
      {
        if(responsePreferences[i].recognizedPerson != "Unknown")
        {
          temperature += responsePreferences[i].preferences.temperature;
          humidity += responsePreferences[i].preferences.humidity;
          light += responsePreferences[i].preferences.light;
          sound += responsePreferences[i].preferences.sound_volume;
        }
        else
        {
          temperature += 0;
          humidity += 0;
          light += 0;
          sound += 0;
        }
      }
      temperature = temperature_history = Math.round(temperature/number_of_people);
      humidity = humidity_history = Math.round(humidity/number_of_people);
      light = Math.round(light/number_of_people);
      sound = sound_history =Math.round(sound/number_of_people);
    }

    if(light==0)
    {
      light = light_history = "off";
    }
    else if(light>0 && light<=3)
    {
      light = light_history = "dimming";
    }
    else if(light>3 && light<=7)
    {
      light = light_history = "normal";
    }
    else
    {
      light = light_history = "intense";
    }
  }
  else{
    temperature = responsePreferences[0];
    humidity = responsePreferences[1];
    light = responsePreferences[2];
    sound = responsePreferences[3];
  }

  let room_wise_info = {
    users: users_array,
    location: room,
    temperature: temperature,
    humidity: humidity,
    lightIntensity: light,
    soundVolume: sound
  };
  output_array.push(room_wise_info)
  return output_array;
}
app.post("/make-decision", async (req, res) => {
  const preferencedData = req.body;
  let energyDecision;
  try {
    const response = await axios.get(
      "http://localhost:8093/energy-management/make-energy-decision" // EnergyManagementModule
    );
    energyDecision = response.data;
  } catch (error) {
    console.error(
      "Error fetching data from SustainabilityManager-API:",
      error.message
    );
    res.status(500).send("Internal Server Error");
  }
  //people doing what, room 
  // TODO (@Lorenzo or @Rafi)
  // make decision based on preferences
  // do average or whatever other logic
  // looking like below:
  //
  // BUT FOR EVERY ROOM !!!!!!!!!!
  //
  // decision = {
  //   room1{
  //     temperature: 100,
  //     humidity: 100,
  //     light_intensity: 100,
  //     sound_volume: 100,
  //   }
  // }
  
  rooms = ["Room 1", "Room 2", "Living Room", "Kitchen", "Entrance"];
  
  let output_array = [];
  if(room_history.length == 0)
  {
    for(let i=0; i<rooms.length; i++)
    {
      if(rooms[i]==preferencedData.room)
      {
        output_array = form_json_structure(preferencedData.person_detected, preferencedData.detected_activities, preferencedData.responsePreferences, preferencedData.room, output_array);
      }
      else
      {
        output_array = form_json_structure([], [], [], rooms[i], output_array);
      }
    }
  }
  else{
    for(let i=0; i<rooms.length; i++)
    {
      if(rooms[i]==preferencedData.room)
      {
        output_array = form_json_structure(preferencedData.person_detected, preferencedData.detected_activities, preferencedData.responsePreferences, preferencedData.room, output_array);
      }
      else if(rooms[i] == room_history[room_history.length-1].room)
      {
        let index_to_be_removed = [];
        for(let i=0; i<room_history[room_history.length-1].persons.length; i++)
        {
          for(let j=0; j<preferencedData.person_detected.length; j++)
          {
            if(room_history[room_history.length-1].persons[i] == preferencedData.person_detected[j])
            {
              index_to_be_removed.push(i);
            }
          }
        }

        let persons_remaining = [];
        let activity_remaining = [];

        for(let i=0; i<room_history[room_history.length-1].persons.length; i++)
        {
          for(let j=0; j<index_to_be_removed.length; j++)
          {
            if(i != index_to_be_removed[j])
            {
              persons_remaining.push(room_history[room_history.length-1].persons[i]);
              activity_remaining.push(room_history[room_history.length-1].activity[i]);
            }
          }
        }
        
        output_array = form_json_structure(persons_remaining, activity_remaining, room_history[room_history.length-1].settings, room_history[room_history.length-1].room, output_array, true);
      }
      else
      {
        output_array = form_json_structure([], [], [], rooms[i], output_array);
      }
    }
  }
  
  let output = JSON.stringify(output_array);
  console.log(output);

  let history = {
    persons : preferencedData.person_detected,
    activity: preferencedData.detected_activities,
    room : preferencedData.room,
    settings: [temperature_history, humidity_history, light_history, sound_history]
  }
  
  room_history.push(history)
  console.log(room_history)
  
  try {
    responseOrch = await axios
      .post("http://localhost:8096/apply-decisions-to-devices", {
        output,
      }) // DeviceOrchestrator
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error("Error making API request:", error);
      });
  } catch (error) {
    console.error("Error making API request:", error);
  }

  // console.log(responseOrch);

  res.status(200).send({ decided: output });
});

exports.appfunc = app;
