const express = require("express");
// const mysql = require('mysql');
const app = express();
const axios = require("axios");

app.get("/", (req, res) => {
  let message = req.query.message || "energy-management";

  res.status(200).send(message);
});

app.get("/energy-management/make-energy-decision", async (req, res) => {
  let susDecision, decision;

  try {
    const susResponse = await axios.get(
      "http://localhost:8090/sustainability-manager/decisions"
    );
    susDecision = susResponse.data;

    // making decision logic
    // do the work
    // make decisions on how to optimise energy consumption

    decision = {
      decision:
        "Use standard central grid power. Minimize entrance of heat inside the house.",
    };
  } catch (error) {
    console.error(
      "Error fetching data from SustainabilityManager-API:",
      error.message
    );
    res.status(500).send("Internal Server Error");
  }

  // make decision
  res.status(200).send(decision);
});

exports.appfunc = app;
