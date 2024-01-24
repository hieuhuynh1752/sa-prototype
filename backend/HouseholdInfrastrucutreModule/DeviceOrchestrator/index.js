const express = require("express");
const mqtt = require("mqtt");
const app = express();

const broker = "mqtt://test.mosquitto.org";
const topic = "/bet_system_device_orch";
const client = mqtt.connect(broker);

app.post("/apply-decisions-to-devices", (req, res) => {
  const decisions = req.body;
  const messageString = JSON.stringify(decisions);
  client.publish(topic, messageString);

  //TODO @Lorenzo send info about this through socket (like everything else)
  
  res.status(200).send(topic);
});

exports.appfunc = app;
