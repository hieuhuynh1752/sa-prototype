import { sendLogsThroughWS, sendThroughWS } from "../../utils";

import express from "express";
import { connect } from "mqtt";
const app = express();
import { post } from "axios";

const broker = "mqtt://test.mosquitto.org";
const topic = "/bet_system_device_orch";
const client = connect(broker);

app.post("/apply-decisions-to-devices", async (req, res) => {
  const decisions = req.body;
  const messageString = JSON.stringify(decisions);
  client.publish(topic, messageString);

  console.log(messageString);
  console.log("sent to:");
  console.log(topic);

  // sending map data to WS
  sendThroughWS(decisions);
  // try {
  //   responseDecision = await post("http://localhost:8121/send-message", {
  //     decisions,
  //   }) // sending to WebSocket
  //     .then((response) => {
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       console.error("Error making API request:", error);
  //     });
  // } catch (error) {
  //   console.error("Error making API request:", error);
  // }

  // sending logs
  sendLogsThroughWS("new instructions were sent");
  // try {
  //   responseDecision = await post(
  //     "http://localhost:8121/send-message",
  //     "new instructions were sent"
  //   ) // sending to WebSocket
  //     .then((response) => {
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       console.error("Error making API request:", error);
  //     });
  // } catch (error) {
  //   console.error("Error making API request:", error);
  // }

  res.status(200).send(topic);
});

export const appfunc = app;
