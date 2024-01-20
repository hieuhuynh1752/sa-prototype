const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let message = req.query.message || "standard-messageee";
  res.status(200).send(message);
});

app.get("/Householdinfrastructure-module/DeviceOrchestrator", (req, res) => {
  let devices = {
    smart_devices: [
      {
        id: "23",
        name: "Smart Bulb",
        type: "lighting",
        status: "on",
        brightness: 80,
        color: "white",
      },
      {
        id: "34",
        name: "Smart Thermostat",
        type: "temperature",
        status: "on",
        mode: "cool",
        setpoint: 24,
      },
      {
        id: "56",
        name: "Smart Humidifier",
        type: "humidity",
        status: "off",
        level: 50,
      },
      {
        id: "67",
        name: "Smart Lamp",
        type: "lighting",
        status: "off",
        brightness: 40,
        color: "yellow",
      },
      {
        id: "78",
        name: "Smart Heater",
        type: "temperature",
        status: "on",
        mode: "heat",
        setpoint: 28,
      },
      {
        id: "89",
        name: "Smart Dehumidifier",
        type: "humidity",
        status: "on",
        level: 30,
      },
    ],
  };

  let statusValues = ["on", "off"];
  let brightnessValues = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  let colorValues = ["white", "red", "green", "blue", "yellow", "pink", "purple"];
  let modeValues = ["cool", "heat", "fan", "auto"];
  let levelValues = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  let interval = 10000;

  function changeValue(device) {
    let keys = Object.keys(device);
    let oldValue;
    let randomKey = keys[Math.floor(Math.random() * keys.length)];
    oldValue = device[randomKey];

    if (device.type === "lighting" && randomKey === "status") {
      let randomValue = statusValues[Math.floor(Math.random() * statusValues.length)];
      device.status = randomValue;
    } else if (device.type === "lighting" && randomKey === "brightness") {
      let randomValue = brightnessValues[Math.floor(Math.random() * brightnessValues.length)];
      device.brightness = randomValue;
    } else if (device.type === "lighting" && randomKey === "color") {
      let randomValue = colorValues[Math.floor(Math.random() * colorValues.length)];
      device.color = randomValue;
    } else if (device.type === "temperature" && randomKey === "status") {
      let randomValue = statusValues[Math.floor(Math.random() * statusValues.length)];
      device.status = randomValue;
    } else if (device.type === "temperature" && randomKey === "mode") {
      let randomValue = modeValues[Math.floor(Math.random() * modeValues.length)];
      device.mode = randomValue;
    } else if (device.type === "humidity" && randomKey === "status") {
      let randomValue = statusValues[Math.floor(Math.random() * statusValues.length)];
      device.status = randomValue;
    } else if (device.type === "humidity" && randomKey === "level") {
      let randomValue = levelValues[Math.floor(Math.random() * levelValues.length)];
      device.level = randomValue;
    }

    if (oldValue !== device[randomKey]) {
      console.log(device.name + " " + randomKey + " changed from " + oldValue + " to " + device[randomKey]);
    }
  }

  setInterval(() => {
    devices.smart_devices.forEach((device) => {
      changeValue(device);
    });
  }, interval);

  res.status(200).send(devices);
});

exports.appfunc = app;