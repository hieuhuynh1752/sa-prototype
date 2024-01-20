const express = require("express");
const app = express();

let preferenceChangeCounter = 0;

app.get("/", (req, res) => {
  let message = req.query.message || "standard-messageee";
  res.status(200).send(message);
});

app.get("/Householdinfrastructure-module/scheduler", (req, res) => {
  function schedulePreferenceChanges() {
    const duration = 60 * 1000; // 1 minute in milliseconds
    const interval = 10 * 1000; // Change preference every 10 seconds
    let currentTime = 0;

    function schedulePreferenceChange(preferenceType, value, time) {
      setTimeout(() => {
        console.log(`Scheduling preference change (${preferenceType}) to ${value} at ${time / 1000} seconds`);
      }, time);
    }

    while (currentTime < duration) {
      schedulePreferenceChange("temperature", 20, currentTime);
      schedulePreferenceChange("humidity", 50, currentTime);
      schedulePreferenceChange("light", "on", currentTime);

      currentTime += interval;
    }
  }

  schedulePreferenceChanges();

  res.status(200).send("Scheduled preference changes for a whole minute");
});

exports.appfunc = app;

