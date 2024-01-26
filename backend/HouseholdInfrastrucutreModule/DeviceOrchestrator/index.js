const express = require("express");
const mqtt = require("mqtt");
const app = express();
const axios = require("axios");

const broker = "mqtt://test.mosquitto.org";
const topic = "/bet_system_device_orch";
const client = mqtt.connect(broker);

app.post("/apply-decisions-to-devices", (req, res) => {
  const decisions = req.body;
  const messageString = JSON.stringify(decisions);
  client.publish(topic, messageString);

  console.log(messageString);
  console.log("sent to:");
  console.log(topic);

  //TODO @Lorenzo send info about this through socket (like everything else)

  try {
    responseDecision = axios
      .post("http://localhost:8121/send-message", { decisions }) // sending to WebSocket
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error("Error making API request:", error);
      });
  } catch (error) {
    console.error("Error making API request:", error);
  }

  res.status(200).send(topic);
});

exports.appfunc = app;
