const express = require("express");
// const mysql = require('mysql');
const app = express();
const axios = require("axios");

app.get("/", (req, res) => {
  let message = req.query.message || "household-infrastructure-management";

  res.status(200).send(message);
});

app.get("/Householdinfrastructure-module/Entertainment-device-connector", async (req, res) => {
  // Define a list of entertainment devices as a JSON object
  let devices = {
    entertainment_devices: [
      "PlayStation",
      "Xbox",
      "Fire TV",
      "Roku",
      "Apple TV",
      "Chromecast",
      "Nintendo Switch",
      "Blu-ray Player",
      "Soundbar",
      "Smart Speaker",
    ],
  };

  // Pick a random device from the devices object using the Math.random and Math.floor functions
  let randomDevice =
    devices.entertainment_devices[
      Math.floor(Math.random() * devices.entertainment_devices.length)
    ];

  // Print the message to the console using the console.log function
  console.log("Device: " + randomDevice + " connected to the system");

  // Send the devices object as a response using the send method
  res.status(200).send(devices);
});

exports.appfunc = app;
