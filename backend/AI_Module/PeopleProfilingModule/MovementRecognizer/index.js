const express = require("express");
// const mysql = require('mysql');
const app = express();

app.get("/", (req, res) => {
  let message = req.query.message || "standard-messageee";

  res.status(200).send(message);
});

app.get("/ai-module/people-profiling/movement-recognizer/:id", (req, res) => {
  const profile_id = req.params.id;

  let recognizers;

  if (profile_id == 12) {
    recognizers = {
      movementPatterns: {
        personID: "person_x1",
        movements: [
          {
            time: "7:00 AM",
            location: "Entrance",
            activity: "Entering Home",
          },
          {
            time: "7:05 AM",
            location: "Kitchen",
            activity: "Preparing Breakfast",
          },
          {
            time: "7:30 AM",
            location: "Living Room",
            activity: "Eating Breakfast",
          },
          {
            time: "8:00 AM",
            location: "Entrance",
            activity: "Leaving Home",
          },
          {
            time: "6:00 PM",
            location: "Entrance",
            activity: "Entering Home",
          },
          {
            time: "6:15 PM",
            location: "Kitchen",
            activity: "Cooking Dinner",
          },
          {
            time: "7:00 PM",
            location: "Living Room",
            activity: "Dining",
          },
          {
            time: "8:00 PM",
            location: "Living Room",
            activity: "Watching TV",
          },
          {
            time: "10:00 PM",
            location: "Kitchen",
            activity: "Cleaning Up",
          },
          {
            time: "10:30 PM",
            location: "Entrance",
            activity: "Checking Doors Before Bed",
          },
        ],
      },
    };
  } else if (profile_id == 45) {
    recognizers = {
      movementPatterns: {
        personID: "person_x2",
        movements: [
          {
            time: "6:30 AM",
            location: "Entrance",
            activity: "Entering Home",
          },
          {
            time: "6:35 AM",
            location: "Kitchen",
            activity: "Making Coffee",
          },
          {
            time: "7:00 AM",
            location: "Living Room",
            activity: "Morning Exercise",
          },
          {
            time: "12:00 PM",
            location: "Kitchen",
            activity: "Lunch Preparation",
          },
          {
            time: "6:30 PM",
            location: "Living Room",
            activity: "Relaxing",
          },
          {
            time: "9:00 PM",
            location: "Kitchen",
            activity: "Snacking",
          },
          {
            time: "9:30 PM",
            location: "Entrance",
            activity: "Stepping Out",
          },
        ],
      },
    };
  } else if (profile_id == 76) {
    recognizers = {
      movementPatterns: {
        personID: "person_x3",
        movements: [
          {
            time: "8:00 AM",
            location: "Entrance",
            activity: "Leaving Home",
          },
          {
            time: "12:30 PM",
            location: "Kitchen",
            activity: "Making Lunch",
          },
          {
            time: "1:00 PM",
            location: "Living Room",
            activity: "Working from Home",
          },
          {
            time: "5:00 PM",
            location: "Living Room",
            activity: "Video Call",
          },
          {
            time: "7:00 PM",
            location: "Kitchen",
            activity: "Dinner Preparation",
          },
          {
            time: "10:00 PM",
            location: "Living Room",
            activity: "Watching a Movie",
          },
          {
            time: "11:00 PM",
            location: "Entrance",
            activity: "Checking Locks",
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
