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
  //console.log(`Received message on topic ${topic}: ${message.toString()}`);
  // Print raw message
  //console.log("Raw Message:", message.toString());
  
  try {
    const data = JSON.parse(message.toString());
    console.log("Parsed Data:", data);
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
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
