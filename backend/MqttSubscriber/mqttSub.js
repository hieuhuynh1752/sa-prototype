const mqtt = require("mqtt");

// MQTT broker details
const broker = "mqtt://test.mosquitto.org";
const topic = "/smart_home_data";

// Create an MQTT client
const client = mqtt.connect(broker);

// Callback when the client is connected
client.on("connect", () => {
  console.log("Connected to MQTT broker");
  // Subscribe to the specified topic
  client.subscribe(topic);
});

// Callback when a message is received from the subscribed topic
client.on("message", (topic, message) => {
  console.log(`Received message on topic ${topic}: ${message.toString()}`);
  // You can parse the message as needed
  const data = JSON.parse(message.toString());
  console.log("Parsed Data:", data);
});

// Callback when the client is disconnected
client.on("close", () => {
  console.log("Disconnected from MQTT broker");
});

// Callback when an error occurs
client.on("error", (err) => {
  console.error("Error:", err);
});

// Handle graceful shutdown
process.on("SIGINT", () => {
  client.end();
  console.log("Closed MQTT connection on SIGINT");
  process.exit();
});
