const { sendLogsThroughWS, sendThroughWS } = require("../../utils");
const express = require("express");
const mqtt = require("mqtt");
const app = express();
const axios = require("axios");

const broker = "mqtt://test.mosquitto.org";
const topic = "/bet_system_device_orch";
const client = mqtt.connect(broker);

app.post("/apply-decisions-to-devices", async (req, res) => {
  const decisions = req.body;
  const messageString = JSON.stringify(decisions);
  client.publish(topic, messageString);

  console.log(messageString);
  console.log("sent to:");
  console.log(topic);

  sendThroughWS(decisions);
  sendLogsThroughWS("new instructions were sent");

  res.status(200).send(topic);
});

exports.appfunc = app;
