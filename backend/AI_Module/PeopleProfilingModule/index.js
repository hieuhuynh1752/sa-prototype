const express = require("express");
const axios = require("axios");
// const mysql = require('mysql');
const app = express();

app.get("/", (req, res) => {
  let message = req.query.message || "people-profiling-module/";

  res.status(200).send(message);
});

app.post("/raw-sensoring-device-data", async (req, res) => {
  receivedData = req.body;

  console.log("received data:");
  console.log(receivedData);

  recognizedPeople = [];
  recognizedBehavior = [];

  try {
    const responsePeople = await axios
      .post("http://localhost:8103/recognize", {
        person_detected: receivedData.person_detected,
      }) // people recognizer
      .then((response) => {
        recognizedPeople = response.data;
      })
      .catch((error) => {
        console.error("Error making API request:", error);
      });
    console.log(responsePeople);
    recognizedPeople = responsePeople.data;
  } catch (error) {
    console.error("Error making API request:", error);
  }

  try {
    const responseBehaviour = await axios
      .post("http://localhost:8101/recognize", {
        detected_activities: receivedData.detected_activities,
      }) // behaviour recognizer
      .then((response) => {
        recognizedBehavior = response.data;
      })
      .catch((error) => {
        console.error("Error making API request:", error);
      });
    recognizedBehaviour = responseBehaviour.data;
  } catch (error) {
    console.error("Error making API request:", error);
  }

  receivedData.person_detected = recognizedPeople;
  receivedData.detected_activities = recognizedBehavior;

  console.log("parsed data:");
  console.log(receivedData);
  console.log("=================");

  //
  // should send data to BehavioralLearner but since this is just a prototype then that step is skipped
  //
  // therefore sending data directly to the ProfileModule for the purposes of gathering preferences and adjusting the
  // house for each user
  // as well as sending the data to the EmergencyModule for checking if it's an emergency and if so, to activate the protocol
  //
  //

  //TODO send first to the EmergencyModule

  // doesn't have to be 'await'

  try {
    const responsePeople = await axios
      .post("http://localhost:8089/take-preferences-and-forward", receivedData) // ProfileModule and PreferencesManager
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error("Error making API request:", error);
      });
  } catch (error) {
    console.error("Error making API request:", error);
  }

  return res.json("all good");
});

exports.appfunc = app;
