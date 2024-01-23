const express = require("express");
// const mysql = require('mysql');
const app = express();

// Assume these are your encryption functions from the previous code
function decrypt_person(encrypted_person, decryption_map) {
  const decrypted_person = Object.keys(decryption_map).find(
    (key) => decryption_map[key] === encrypted_person
  );
  return decrypted_person || "Unknown";
}

app.get("/", (req, res) => {
  let message = req.query.message || "standard-messageee";
  res.status(200).send(message);
});

app.post("/recognize", (req, res) => {
  const rawPeople = req.body; // Assuming you have a request body with encrypted people
  console.log(rawPeople.person_detected);
  console.log("transfered into");

  const decryptedPeople = recognizePeople(rawPeople.person_detected);

  console.log(decryptedPeople);
  console.log("===========");

  res.status(200).send(decryptedPeople);
});

function recognizePeople(people) {
  let recognized_people = [];

  people.forEach((person) => {
    if (person === "3bc51062") {
      recognized_people.push("Rafi");
    } else if (person === "cd9fb1e1") {
      recognized_people.push("Hieu");
    } else if (person === "6e81b125") {
      recognized_people.push("Aleksa");
    } else if (person === "b554d1a6") {
      recognized_people.push("Lorenzo");
    } else {
      recognized_people.push("Unknown");
    }
  });

  return recognized_people;
}

exports.appfunc = app;
