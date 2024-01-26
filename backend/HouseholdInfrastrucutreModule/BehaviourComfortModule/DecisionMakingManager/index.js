const express = require("express");
// const mysql = require('mysql');
const app = express();
const axios = require("axios");
const { sendLogsThroughWS } = require("../../../utils");

// users: [
//   {
//     username: "Lori",
//     activity: "reading",
//     color: "bg-red-500",
//     status: "warning",
//   },
//   {
//     username: "Hieu",
//     activity: "reading",
//     color: "bg-indigo-500",
//     status: "bad",
//   },
// ],

let EMERGENCIES = [];

let HOUSE_STATE = [
  {
    users: [],
    activities: [],
    location: "living",
    temperature: 19,
    humidity: 85,
    lightIntensity: 5,
    soundVolume: 76,
  },
  {
    users: [],
    location: "room1",
    temperature: 22,
    humidity: 90,
    lightIntensity: 3,
    soundVolume: 0,
  },
  {
    users: [],
    location: "room2",
    temperature: 24,
    humidity: 70,
    lightIntensity: 2,
    soundVolume: 0,
  },
  {
    users: [],
    location: "kitchen",
    humidity: 60,
    lightIntensity: 0,
    soundVolume: 0,
    temperature: 27,
  },
  {
    users: [],
    location: "entrance",
    humidity: 70,
    lightIntensity: 0,
    soundVolume: 10,
    temperature: 13,
  },
];

app.post("/make-decision", async (req, res) => {
  // {
  //   person_detected: [Aleksa, Lorenzo],
  //   detected_activities: [sleeping, sleeping],
  //   responsePreferences:
  //  [
  //   {
  //     preferences: {
  //       temperature: 18,
  //       humidity: 55,
  //       light_intensity: 0,
  //       sound_volume: 20
  //     },
  //     recognizedPerson: 'Aleksa'
  //      recognizedActivity: 'sleeping'
  //   },
  //   {
  //     preferences: {
  //       temperature: 20,
  //       humidity: 60,
  //       light_intensity: 0,
  //       sound_volume: 15
  //     },
  //     recognizedPerson: 'Lorenzo'
  //    recognizedActivity: 'sleeping'
  //   }
  // ],
  //   room: recognizedData.room,
  // }

  const preferencedData = req.body;
  let energyDecision;

  // @Rafi with this you are working I belive:
  console.log(preferencedData);
  updateHouseState(preferencedData);
  sendLogsThroughWS(
    "[DecisionMakingManager] New updates arrived. Requesting data from about available energy."
  );

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

  console.log(energyDecision);

  updateHouseState(preferencedData);

  const decision = addActivitiesAndFormatUsersToHouseState();
  console.log(decision);

  // @Rafi you send data here on this API
  // inside the decision object

  sendLogsThroughWS("[DecisionMakingManager] Making decisions...");

  try {
    responseOrch = await axios
      .post("http://localhost:8096/apply-decisions-to-devices", {
        decision,
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

  console.log(responseOrch);

  res.status(200).send({ decided: decision });
});

function addActivitiesAndFormatUsersToHouseState(preferencedData) {
  let decision = JSON.parse(JSON.stringify(HOUSE_STATE)); // deep copy

  for (let room of decision) {
    for (let i = 0; i < room.users.length; i++) {
      user = room.users[i];
      room.users[i] = {
        username: user.name,
        activity: user.activity,
        color: "bg-red-500",
        status: "good",
      };
    }
  }

  return decision;
}

function updateHouseState(update) {
  // {
  //   person_detected: [Aleksa, Lorenzo],
  //   detected_activities: [sleeping, sleeping],
  //   responsePreferences:
  //  [
  //   {
  //     preferences: {
  //       temperature: 18,
  //       humidity: 55,
  //       light_intensity: 0,
  //       sound_volume: 20
  //     },
  //     recognizedPerson: 'Aleksa'
  //      recognizedActivity: 'sleeping'
  //   },
  //   {
  //     preferences: {
  //       temperature: 20,
  //       humidity: 60,
  //       light_intensity: 0,
  //       sound_volume: 15
  //     },
  //     recognizedPerson: 'Lorenzo'
  //    recognizedActivity: 'sleeping'
  //   }
  // ],
  //   room: recognizedData.room,
  // }
  const averagedPreferencesForRoom = decideOnPreferences(
    update.responsePreferences,
    update.room
  );

  console.log("averagedPreferencesForRoom");
  console.log(averagedPreferencesForRoom);

  // add people and set stats
  for (let room of HOUSE_STATE) {
    // remove detected persons from rooms
    for (let person of update.person_detected) {
      room.users = room.users.filter((user) => user.name !== person);
    }
    if (room.location === update.room) {
      // update room stats for updated room
      room.temperature = averagedPreferencesForRoom.temperature;
      room.humidity = averagedPreferencesForRoom.humidity;
      room.lightIntensity = averagedPreferencesForRoom.light_intensity;
      room.soundVolume = averagedPreferencesForRoom.sound_volume;

      for (let i = 0; i < update.person_detected.length; i++) {
        // add detected persons and their activities
        let name = update.person_detected[i];
        let activity = update.detected_activities[i];

        if (name !== "Unknown") {
          room.users.push({ name, activity });
        }
      }

      // room.users = room.users.filter((user) => user.name !== "Unknown");
    }
  }

  // adding emergencies
  // remove Unknown persons from rooms
  for (let room of HOUSE_STATE) {
    room.users = room.users.filter((user) => user.name !== "Unknown");
  }

  // add Unknown people from emergencies
  for (let emergency of EMERGENCIES) {
    for (let room of HOUSE_STATE) {
      if (room.location === emergency.room) {
        for (let user of emergency.users) {
          let name = user.username;
          let activity = user.activity;
          room.users.push({ name, activity });
        }
      }
    }
  }
}

function decideOnPreferences(preferencesByPerson, roomBeingUpdated) {
  // average preferences
  let temperature = 0;
  let humidity = 0;
  let light_intensity = 0;
  let sound_volume = 0;
  let numOfConsideredPeople = 0;

  preferencesByPerson.forEach((person) => {
    if (person.recognizedPerson !== "Unknown") {
      temperature += person.preferences.temperature;
      humidity += person.preferences.humidity;
      light_intensity += person.preferences.light_intensity;
      sound_volume += person.preferences.sound_volume;
      numOfConsideredPeople += 1;
    }
  });

  if (numOfConsideredPeople !== 0) {
    temperature = Math.round(temperature / numOfConsideredPeople);
    humidity = Math.round(humidity / numOfConsideredPeople);
    light_intensity = Math.round(light_intensity / numOfConsideredPeople);
    sound_volume = Math.round(sound_volume / numOfConsideredPeople);
  } else {
    // in case of Unknown should be returned from 0s to the already existing stats
    for (let room of HOUSE_STATE) {
      if (room.location === roomBeingUpdated) {
        temperature = room.temperature;
        humidity = room.humidity;
        lightIntensity = room.lightIntensity;
        soundVolume = room.soundVolume;
      }
    }
  }

  return {
    temperature,
    humidity,
    light_intensity,
    sound_volume,
  };
}

app.post("/make-emergency-decision", async (req, res) => {
  const emergencyData = req.body.emergencyData;
  EMERGENCIES.push(emergencyData);

  console.log("EMERGENCY");
  console.log(emergencyData);

  updateEmergencyHouseState(emergencyData);
  let roomsDecisions = addActivitiesAndFormatUsersToHouseState();

  // for (room of roomsDecisions) {
  //   if (room.location === emergencyData.room) {
  //     room.users.concat(emergencyData.users);
  //   }
  // }

  console.log("EMERGENCY UPDATE");
  console.log(HOUSE_STATE);

  try {
    responseOrch = await axios
      .post("http://localhost:8096/apply-decisions-to-devices", {
        roomsDecisions,
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

  res.status(200).send({ decided: roomsDecisions });
});

function updateEmergencyHouseState(emergencyData) {
  // add people and set stats
  for (let room of HOUSE_STATE) {
    // remove detected persons from rooms
    for (let user of emergencyData.users) {
      room.users = room.users.filter((user) => user.name !== user.username);
    }
    if (room.location === emergencyData.room) {
      for (let user of emergencyData.users) {
        let name = user.username;
        let activity = user.activity;
        room.users.push({ name, activity });
      }
    }
  }
}

exports.appfunc = app;
