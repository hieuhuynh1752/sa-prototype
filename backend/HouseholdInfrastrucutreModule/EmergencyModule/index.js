const express = require("express");
const app = express();
const axios = require("axios");

app.post("/analyse-for-emergency", async (req, res) => {
  console.log("analysing data for emergency...");
  const detectedData = req.body;

  // apstraction of EmergencyRecognizer call
  const emergencyData = recognizeEmergency(
    detectedData.person_detected,
    detectedData.detected_activities,
    detectedData.room
  );

  // apstraction of EmergencyProtocolActivator call
  if (emergencyData.users.length > 0) {
    console.log("something is happening!");
    activateEmergencyProtocol(emergencyData);

    try {
      responseOrch = await axios
        .post("http://localhost:8098/make-emergency-decision", {
          emergencyData,
        }) // send post to DecisionManager (real is directly to DeviceOrchestrator but for the prototype purposes we go through decisionmanager)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.error("Error making API request:", error);
        });
    } catch (error) {
      console.error("Error making API request:", error);
    }
  } else {
    console.log("all good");
  }

  return res.json("done");
});

// apstraction of EmergencyRecognizer
function recognizeEmergency(detectedPeople, detectedActivities, room) {
  let emergencyData = {
    users: [],
    room: room,
  };

  for (let i = 0; i < detectedPeople.length; i++) {
    let username = detectedPeople[i];

    if (username === "Unknown") {
      let activity = "suspicious";
      let status = "warning";

      //   if (activity === "suspicious") {
      //     status = "warning";
      //   } else {
      //     activity = "other";
      //     status = "warning";
      //   }

      let user = {
        username,
        activity,
        status,
        color: "bg-red-500",
      };

      emergencyData.users.push(user);
    }
  }

  return emergencyData;
}

// apstraction of EmergencyProtocolActivator
function activateEmergencyProtocol(emergencyData) {
  console.log(emergencyData);
  console.log();
  console.log("ACTIVATED EMERGENCY PROTOCOL");
}

exports.appfunc = app;
