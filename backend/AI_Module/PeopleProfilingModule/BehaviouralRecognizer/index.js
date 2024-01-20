const express = require("express");
// const mysql = require('mysql');
const app = express();

app.get("/", (req, res) => {
  let message = req.query.message || "standard-messageee";

  res.status(200).send(message);
});

app.get("/ai-module/people-profiling/behavior-recognizer/:id", (req, res) => {
  const profile_id = req.params.id;

  let recognizers;

  if (profile_id == 12) {
    recognizers = {
      dailyBehaviors: {
        personID: "person_x1",
        behaviors: [
          {
            time: "7:00 AM",
            activity: "Waking Up",
          },
          {
            time: "7:30 AM",
            activity: "Having Breakfast",
          },
          {
            time: "8:30 AM",
            activity: "Going to Work",
          },
          {
            time: "6:00 PM",
            activity: "Returning Home",
          },
          {
            time: "6:30 PM",
            activity: "Cooking Dinner",
          },
          {
            time: "11:00 PM",
            activity: "Sleeping",
          },
        ],
      },
    };
  } else if (profile_id == 45) {
    recognizers = {
      dailyBehaviors: {
        personID: "person_x2",
        behaviors: [
          {
            time: "6:00 AM",
            activity: "Waking Up",
          },
          {
            time: "6:30 AM",
            activity: "Having Breakfast",
          },
          {
            time: "7:30 AM",
            activity: "Going to Work",
          },
          {
            time: "5:30 PM",
            activity: "Returning Home",
          },
          {
            time: "7:00 PM",
            activity: "Cooking Dinner",
          },
          {
            time: "10:30 PM",
            activity: "Sleeping",
          },
        ],
      },
    };
  } else if (profile_id == 76) {
    recognizers = {
      dailyBehaviors: {
        personID: "person_x3",
        behaviors: [
          {
            time: "8:00 AM",
            activity: "Waking Up",
          },
          {
            time: "8:30 AM",
            activity: "Having Breakfast",
          },
          {
            time: "9:00 AM",
            activity: "Working from Home",
          },
          {
            time: "1:00 PM",
            activity: "Lunch Break",
          },
          {
            time: "7:00 PM",
            activity: "Cooking Dinner",
          },
          {
            time: "11:30 PM",
            activity: "Sleeping",
          },
        ],
      },
    };
  } else {
    console.error("Profile with id ", profile_id, " was not found.");
    reject(err);
  }

  res.status(200).send(recognizers);
});

exports.appfunc = app;
