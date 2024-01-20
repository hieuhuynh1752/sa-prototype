const express = require("express");
// const mysql = require('mysql');
const app = express();
const axios = require("axios");

app.get("/", (req, res) => {
  let message = req.query.message || "household-infrastructure-management";

  res.status(200).send(message);
});

app.get("/adapt-facilities-to-user-preferences", async (req, res) => {
  let eDecision, decision;

  try {
    const eResponse = await axios.get(
      "http://localhost:8093/energy-management/make-energy-decision"
    );
    eDecision = eResponse.data;

    decision = {
      instructions: [
        "lower_blinders",
        "close_windows",
        "turn_off_lights",
        "fan_turn_on",
        "temperature_low",
        "central_grid",
      ],
    };
  } catch (error) {
    console.error(
      "Error fetching data from EnergyManagemenetModule-API:",
      error.message
    );
    res.status(500).send("Internal Server Error");
  }

  res.status(200).send(decision);
});

exports.appfunc = app;
