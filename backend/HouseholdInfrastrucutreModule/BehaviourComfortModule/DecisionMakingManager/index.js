const express = require("express");
// const mysql = require('mysql');
const app = express();
const axios = require("axios");

app.post("/make-decision", async (req, res) => {
  // list looking like is in the body:
  // [
  //   {
  //     preferences: {
  //       temperature: 18,
  //       humidity: 55,
  //       light_intensity: 0,
  //       sound_volume: 20
  //     },
  //     recognizedPerson: 'Aleksa'
  //      recognizedActivity: 'sleeping'
  //   },
  //   {
  //     preferences: {
  //       temperature: 20,
  //       humidity: 60,
  //       light_intensity: 0,
  //       sound_volume: 15
  //     },
  //     recognizedPerson: 'Lorenzo'
  //    recognizedActivity: 'sleeping'
  //   }
  // ]
  const preferencedData = req.body;
  let energyDecision;

  // @Rafi with this you are working I belive:
  console.log(preferencedData);

  try {
    const response = await axios.get(
      "http://localhost:8093/energy-management/make-energy-decision" // EnergyManagementModule
    );
    energyDecision = response.data;
  } catch (error) {
    console.error(
      "Error fetching data from SustainabilityManager-API:",
      error.message
    );
    res.status(500).send("Internal Server Error");
  }

  // TODO (@Lorenzo or @Rafi)
  // make decision based on preferences
  // do average or whatever other logic
  // looking like below:
  //
  // BUT FOR EVERY ROOM !!!!!!!!!!
  //
  // decision = {
  //   room1{
  //     temperature: 100,
  //     humidity: 100,
  //     light_intensity: 100,
  //     sound_volume: 100,
  //   }
  // }

  decision = {
    temperature: 100,
    humidity: 100,
    light_intensity: 100,
    sound_volume: 100,
  };

  console.log(energyDecision);
  console.log({ decided: decision });

  // @Rafi you send data here on this API
  // inside the decision object
  try {
    responseOrch = await axios
      .post("http://localhost:8096/apply-decisions-to-devices", {
        decision,
      }) // DeviceOrchestrator
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error("Error making API request:", error);
      });
  } catch (error) {
    console.error("Error making API request:", error);
  }

  console.log(responseOrch);

  res.status(200).send({ decided: decision });
});

exports.appfunc = app;
