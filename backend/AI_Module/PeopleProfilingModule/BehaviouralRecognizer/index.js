const express = require("express");
// const mysql = require('mysql');
const app = express();

// Assume these are your encryption functions from the previous code
function decrypt_activity(encrypted_activity, decryption_map) {
  const decrypted_activity = Object.keys(decryption_map).find(
    (key) => decryption_map[key] === encrypted_activity
  );
  return decrypted_activity || "Unknown";
}

app.get("/", (req, res) => {
  let message = req.query.message || "standard-messageee";
  res.status(200).send(message);
});

app.post("/recognize", (req, res) => {
  const rawBehaviour = req.body;
  console.log(rawBehaviour.detected_activities);
  console.log("transfered into");

  const decryptedActivities = recognizeBehaviour(
    rawBehaviour.detected_activities
  );

  console.log(decryptedActivities);
  console.log("===========");

  res.status(200).send(decryptedActivities);
});

function recognizeBehaviour(behaviours) {
  let recognized_behaviours = [];

  behaviours.forEach((behaviour) => {
    if (behaviour === "a2f4g6h8") {
      recognized_behaviours.push("reading");
    } else if (behaviour === "b3c5d7e") {
      recognized_behaviours.push("playing");
    } else if (behaviour === "k1l3m5n7") {
      recognized_behaviours.push("relaxing");
    } else if (behaviour === "p2q4r6s8") {
      recognized_behaviours.push("sleeping");
    } else if (behaviour === "t1u3v5w7") {
      recognized_behaviours.push("eating");
    } else if (behaviour === "x2y4z6a") {
      recognized_behaviours.push("cooking");
    } else if (behaviour === "i3y89za") {
      recognized_behaviours.push("suspicious_activities");
    } else {
      recognized_behaviours.push("unknown");
    }
  });

  return recognized_behaviours;
}

exports.appfunc = app;
