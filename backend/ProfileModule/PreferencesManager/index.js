const express = require("express");
// const mysql = require('mysql');
const app = express();

app.get("/", (req, res) => {
  let message = req.query.message || "standard-messageee";

  res.status(200).send(message);
});

app.post("/get-preferences", (req, res) => {
  const recognizedData = req.body;

  console.log(recognizedData);

  const preferences = fetchPreferences(recognizedData);

  console.log(preferences);
  console.log("=============");

  // looking like this:
  // [
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
  // ]

  res.status(200).send(preferences);
});

function fetchPreferences(recognizedData) {
  const recognizedPeople = recognizedData.person_detected;
  const recognizedBehavior = recognizedData.detected_activities;

  let preferences = [];

  recognizedPeople.forEach((person, index) => {
    const preference = fetchPreferencesForPerson(
      person,
      recognizedBehavior[index]
    );
    preferences.push({
      preferences: preference,
      recognizedPerson: person,
      recognizedActivity: recognizedBehavior[index],
    });
  });

  return preferences;
}

function fetchPreferencesForPerson(person, activity) {
  let peoplePreferences = {
    Rafi: {
      reading: {
        temperature: 22,
        humidity: 35,
        light_intensity: 5,
        sound_volume: 20,
      },
      playing: {
        temperature: 21,
        humidity: 40,
        light_intensity: 5,
        sound_volume: 50,
      },
      relaxing: {
        temperature: 23,
        humidity: 45,
        light_intensity: 1,
        sound_volume: 25,
      },
      sleeping: {
        temperature: 18,
        humidity: 50,
        light_intensity: 0,
        sound_volume: 15,
      },
      cooking: {
        temperature: 24,
        humidity: 50,
        light_intensity: 3,
        sound_volume: 30,
      },
      eating: {
        temperature: 22,
        humidity: 45,
        light_intensity: 3,
        sound_volume: 35,
      },
    },
    Hieu: {
      reading: {
        temperature: 24,
        humidity: 30,
        light_intensity: 5,
        sound_volume: 25,
      },
      playing: {
        temperature: 23,
        humidity: 35,
        light_intensity: 5,
        sound_volume: 55,
      },
      relaxing: {
        temperature: 22,
        humidity: 40,
        light_intensity: 3,
        sound_volume: 20,
      },
      sleeping: {
        temperature: 19,
        humidity: 45,
        light_intensity: 0,
        sound_volume: 10,
      },
      cooking: {
        temperature: 25,
        humidity: 50,
        light_intensity: 5,
        sound_volume: 35,
      },
      eating: {
        temperature: 23,
        humidity: 40,
        light_intensity: 3,
        sound_volume: 30,
      },
    },
    Aleksa: {
      reading: {
        temperature: 21,
        humidity: 45,
        light_intensity: 3,
        sound_volume: 30,
      },
      playing: {
        temperature: 22,
        humidity: 40,
        light_intensity: 5,
        sound_volume: 45,
      },
      relaxing: {
        temperature: 20,
        humidity: 50,
        light_intensity: 1,
        sound_volume: 35,
      },
      sleeping: {
        temperature: 18,
        humidity: 55,
        light_intensity: 0,
        sound_volume: 20,
      },
      cooking: {
        temperature: 23,
        humidity: 45,
        light_intensity: 3,
        sound_volume: 40,
      },
      eating: {
        temperature: 21,
        humidity: 45,
        light_intensity: 3,
        sound_volume: 25,
      },
    },
    Lorenzo: {
      reading: {
        temperature: 23,
        humidity: 40,
        light_intensity: 5,
        sound_volume: 20,
      },
      playing: {
        temperature: 24,
        humidity: 45,
        light_intensity: 5,
        sound_volume: 50,
      },
      relaxing: {
        temperature: 22,
        humidity: 50,
        light_intensity: 3,
        sound_volume: 30,
      },
      sleeping: {
        temperature: 20,
        humidity: 60,
        light_intensity: 0,
        sound_volume: 15,
      },
      cooking: {
        temperature: 25,
        humidity: 50,
        light_intensity: 3,
        sound_volume: 35,
      },
      eating: {
        temperature: 24,
        humidity: 45,
        light_intensity: 3,
        sound_volume: 30,
      },
    },
  };

  if (person === "Rafi") {
    if (activity === "reading") {
      return peoplePreferences.Rafi.reading;
    } else if (activity === "playing") {
      return peoplePreferences.Rafi.playing;
    } else if (activity === "relaxing") {
      return peoplePreferences.Rafi.relaxing;
    } else if (activity === "sleeping") {
      return peoplePreferences.Rafi.sleeping;
    } else if (activity === "cooking") {
      return peoplePreferences.Rafi.cooking;
    } else if (activity === "eating") {
      return peoplePreferences.Rafi.eating;
    }
  } else if (person === "Hieu") {
    if (activity === "reading") {
      return peoplePreferences.Hieu.reading;
    } else if (activity === "playing") {
      return peoplePreferences.Hieu.playing;
    } else if (activity === "relaxing") {
      return peoplePreferences.Hieu.relaxing;
    } else if (activity === "sleeping") {
      return peoplePreferences.Hieu.sleeping;
    } else if (activity === "cooking") {
      return peoplePreferences.Hieu.cooking;
    } else if (activity === "eating") {
      return peoplePreferences.Hieu.eating;
    }
  } else if (person === "Lorenzo") {
    if (activity === "reading") {
      return peoplePreferences.Lorenzo.reading;
    } else if (activity === "playing") {
      return peoplePreferences.Lorenzo.playing;
    } else if (activity === "relaxing") {
      return peoplePreferences.Lorenzo.relaxing;
    } else if (activity === "sleeping") {
      return peoplePreferences.Lorenzo.sleeping;
    } else if (activity === "cooking") {
      return peoplePreferences.Lorenzo.cooking;
    } else if (activity === "eating") {
      return peoplePreferences.Lorenzo.eating;
    }
  } else if (person === "Aleksa") {
    if (activity === "reading") {
      return peoplePreferences.Aleksa.reading;
    } else if (activity === "playing") {
      return peoplePreferences.Aleksa.playing;
    } else if (activity === "relaxing") {
      return peoplePreferences.Aleksa.relaxing;
    } else if (activity === "sleeping") {
      return peoplePreferences.Aleksa.sleeping;
    } else if (activity === "cooking") {
      return peoplePreferences.Aleksa.cooking;
    } else if (activity === "eating") {
      return peoplePreferences.Aleksa.eating;
    }
  }
}

exports.appfunc = app;
