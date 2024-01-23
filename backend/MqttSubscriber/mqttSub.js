const mqtt = require("mqtt");
const axios = require("axios");

const broker = "mqtt://test.mosquitto.org";
const topic = "/smart_home_data";

const client = mqtt.connect(broker);

client.on("connect", () => {
  console.log("Connected to MQTT broker");
  client.subscribe(topic);
});

client.on("message", (topic, message) => {
  console.log(`Received message on topic ${topic}: ${message.toString()}`);
  const data = JSON.parse(message.toString());
  console.log("Parsed Data:", data);

  axios
    .post("http://localhost:8097/raw-sensoring-device-data", data)
    .then((response) => {
      console.log("API Response:", response.data);
    })
    .catch((error) => {
      console.error("Error making API request:", error);
    });
});

client.on("close", () => {
  console.log("Disconnected from MQTT broker");
});

client.on("error", (err) => {
  console.error("Error:", err);
});

process.on("SIGINT", () => {
  client.end();
  console.log("Closed MQTT connection on SIGINT");
  process.exit();
});
