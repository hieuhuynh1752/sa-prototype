const express = require("express");
// const mysql = require('mysql');
const app = express();

app.get("/", (req, res) => {
  let message = req.query.message || "standard-messageee";

  res.status(200).send(message);
});

app.get("/preferences-manager/preferences/:id", (req, res) => {
  const profile_id = req.params.id;

  let preferences;

  if (profile_id == 12) {
    preferences = {
      preferences: {
        moods: {
          happy: {
            laying: {
              light_intensity: "bright",
              temperature: "warm",
              sound_volume: "moderate",
              humidity: "comfortable",
            },
            standing: {
              light_intensity: "bright",
              temperature: "neutral",
              sound_volume: "moderate",
              humidity: "normal",
            },
            studying: {
              light_intensity: "bright",
              temperature: "cool",
              sound_volume: "moderate",
              humidity: "normal",
            },
            eating: {
              light_intensity: "bright",
              temperature: "warm",
              sound_volume: "moderate",
              humidity: "normal",
            },
          },
          sad: {
            laying: {
              light_intensity: "dim",
              temperature: "comfortable",
              sound_volume: "low",
              humidity: "normal",
            },
            standing: {
              light_intensity: "dim",
              temperature: "neutral",
              sound_volume: "low",
              humidity: "normal",
            },
            studying: {
              light_intensity: "soft",
              temperature: "cozy",
              sound_volume: "low",
              humidity: "normal",
            },
            eating: {
              light_intensity: "soft",
              temperature: "cozy",
              sound_volume: "low",
              humidity: "normal",
            },
          },
          excited: {
            laying: {
              light_intensity: "vibrant",
              temperature: "cool",
              sound_volume: "high",
              humidity: "refreshing",
            },
            standing: {
              light_intensity: "vibrant",
              temperature: "cool",
              sound_volume: "high",
              humidity: "refreshing",
            },
            studying: {
              light_intensity: "vibrant",
              temperature: "cool",
              sound_volume: "high",
              humidity: "refreshing",
            },
            eating: {
              light_intensity: "vibrant",
              temperature: "cool",
              sound_volume: "high",
              humidity: "refreshing",
            },
          },
        },
      },
    };
  } else if (profile_id == 45) {
    preferences = {
      moods: {
        happy: {
          laying: {
            light_intensity: "dim",
            temperature: "warm",
            sound_volume: "low",
            humidity: "normal",
          },
          standing: {
            light_intensity: "dim",
            temperature: "neutral",
            sound_volume: "low",
            humidity: "normal",
          },
          studying: {
            light_intensity: "dim",
            temperature: "cool",
            sound_volume: "low",
            humidity: "normal",
          },
          eating: {
            light_intensity: "dim",
            temperature: "warm",
            sound_volume: "low",
            humidity: "normal",
          },
        },
        sad: {
          laying: {
            light_intensity: "soft",
            temperature: "comfortable",
            sound_volume: "moderate",
            humidity: "normal",
          },
          standing: {
            light_intensity: "soft",
            temperature: "neutral",
            sound_volume: "moderate",
            humidity: "normal",
          },
          studying: {
            light_intensity: "soft",
            temperature: "cozy",
            sound_volume: "moderate",
            humidity: "normal",
          },
          eating: {
            light_intensity: "soft",
            temperature: "cozy",
            sound_volume: "moderate",
            humidity: "normal",
          },
        },
        excited: {
          laying: {
            light_intensity: "vibrant",
            temperature: "cool",
            sound_volume: "high",
            humidity: "refreshing",
          },
          standing: {
            light_intensity: "vibrant",
            temperature: "cool",
            sound_volume: "high",
            humidity: "refreshing",
          },
          studying: {
            light_intensity: "vibrant",
            temperature: "cool",
            sound_volume: "high",
            humidity: "refreshing",
          },
          eating: {
            light_intensity: "vibrant",
            temperature: "cool",
            sound_volume: "high",
            humidity: "refreshing",
          },
        },
      },
    };
  } else if (profile_id == 76) {
    preferences = {
      moods: {
        happy: {
          laying: {
            light_intensity: "soft",
            temperature: "warm",
            sound_volume: "moderate",
            humidity: "comfortable",
          },
          standing: {
            light_intensity: "bright",
            temperature: "neutral",
            sound_volume: "moderate",
            humidity: "normal",
          },
          studying: {
            light_intensity: "bright",
            temperature: "cool",
            sound_volume: "high",
            humidity: "normal",
          },
          eating: {
            light_intensity: "vibrant",
            temperature: "warm",
            sound_volume: "moderate",
            humidity: "normal",
          },
        },
        sad: {
          laying: {
            light_intensity: "dim",
            temperature: "comfortable",
            sound_volume: "low",
            humidity: "normal",
          },
          standing: {
            light_intensity: "dim",
            temperature: "neutral",
            sound_volume: "low",
            humidity: "normal",
          },
          studying: {
            light_intensity: "soft",
            temperature: "cozy",
            sound_volume: "low",
            humidity: "normal",
          },
          eating: {
            light_intensity: "soft",
            temperature: "cozy",
            sound_volume: "low",
            humidity: "normal",
          },
        },
        excited: {
          laying: {
            light_intensity: "vibrant",
            temperature: "cool",
            sound_volume: "high",
            humidity: "refreshing",
          },
          standing: {
            light_intensity: "vibrant",
            temperature: "cool",
            sound_volume: "high",
            humidity: "refreshing",
          },
          studying: {
            light_intensity: "vibrant",
            temperature: "cool",
            sound_volume: "high",
            humidity: "refreshing",
          },
          eating: {
            light_intensity: "vibrant",
            temperature: "cool",
            sound_volume: "high",
            humidity: "refreshing",
          },
        },
      },
    };
  } else {
    console.error("Profile with id ", profile_id, " was not found.");
    reject(err);
  }

  res.status(200).send(preferences);
});

exports.appfunc = app;
