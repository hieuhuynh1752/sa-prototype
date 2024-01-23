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
  const rawBehaviour = req.body; // Assuming you have a request body with encrypted activities
  console.log(req.body);
  console.log(rawBehaviour.detected_activities);
  console.log("transfered into");

  // Assuming you have a decryption map
  const decryptionMap = {
    "a2f4g6h8": "reading",
    "b3c5d7e": "playing",
    "k1l3m5n7": "relaxing",
    "p2q4r6s8": "sleeping",
    "t1u3v5w7": "eating",
    "x2y4z6a": "cooking",
  };

  // Assuming rawBehaviour.activities is an array of encrypted activities
  const decryptedActivities = rawBehaviour.detected_activities.map(
    (encryptedActivity) => decrypt_activity(encryptedActivity, decryptionMap)
  );

  console.log(decryptedActivities);
  console.log("===========");

  res.status(200).send(decryptedActivities);
});

exports.appfunc = app;
