const express = require("express");
// const mysql = require('mysql');
const app = express();

app.get("/", (req, res) => {
  let message = req.query.message || "weather-monitoring";

  res.status(200).send(message);
});

app.get("/weather-monitoring", (req, res) => {
  const today = new Date();
  const todayDateStr = today.toISOString().split("T")[0];

  weather_data = {
    current_weather: {
      temperature: 22.5,
      humidity: 60,
      wind_speed: 10,
      air_quality: "Good",
      conditions: "Partly Cloudy",
    },
    today_weather: {
      temperature_min: 20,
      temperature_max: 25,
      humidity: 55,
      wind_speed: 12,
      air_quality: "Good",
      conditions: "Clear",
    },
    date: todayDateStr,
  };

  res.status(200).send(weather_data);
});

exports.appfunc = app;
