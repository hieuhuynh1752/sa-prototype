const express = require("express");
// const mysql = require('mysql');
const app = express();

app.get("/", (req, res) => {
  let message = req.query.message || "standard-messageee";

  res.status(200).send(message);
});

app.get("/Householdinfrastructure-module/emergency-module", (req, res) => {
  // Define a list of random rooms as a JSON object
  let rooms = {
    random_rooms: [
      "room 1",
      "room 2",
      "living room",
      "entrance",
      "kitchen"
    ],
  };

  // Get the current time in UTC/GMT using the toUTCString method
  let currentTime = new Date().toUTCString();

  // Pick a random room from the rooms object using the Math.random and Math.floor functions
  let randomRoom =
    rooms.random_rooms[Math.floor(Math.random() * rooms.random_rooms.length)];

  // Print the message to the console using the console.log function
  console.log(
    "EMERGENCY DETECTED AT : " + currentTime + " in " + randomRoom
  );

  // Send the rooms object as a response using the send method
  res.status(200).send(rooms);
});

exports.appfunc = app;
