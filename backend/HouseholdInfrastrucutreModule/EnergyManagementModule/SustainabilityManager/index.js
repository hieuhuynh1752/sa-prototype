const express = require("express");
// const mysql = require('mysql');
const app = express();
const axios = require("axios");
const { sendLogsThroughWS } = require("../../../utils");

app.get("/", (req, res) => {
  let message = req.query.message || "sustainability-manager";

  res.status(200).send(message);
});

app.get("/sustainability-manager/decisions", async (req, res) => {
  let weatherData, electricGridInfo, decision;

  try {
    const weatherResponse = await axios.get(
      "http://localhost:8092/weather-monitoring"
    );
    weatherData = weatherResponse.data;

    const eleGridresponse = await axios.get(
      "http://localhost:8090/sustainable-electrical-grid"
    );
    electricGridInfo = eleGridresponse.data;

    // making decision logic

    sendLogsThroughWS(
      "[SustainabilityManager] Continue working on the normal grid. No sustainable sources available at the moment."
    );

    decision = {
      decision:
        "Continue working on the normal grid, no sustainable sources available at the moment",
    };
  } catch (error) {
    console.error(
      "Error fetching data from WeatherMonitoring-API:",
      error.message
    );
    res.status(500).send("Internal Server Error");
  }

  console.log(decision);

  // make decision
  res.status(200).send(decision);
});

app.get("/sustainable-electrical-grid", async (req, res) => {
  elegrid_info = {
    current_sustainable_sources: "None",
  };

  res.status(200).send(elegrid_info);
});

exports.appfunc = app;
