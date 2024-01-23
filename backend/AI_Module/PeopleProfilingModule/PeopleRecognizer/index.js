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

  // Assuming you have a decryption map
  const decryptionMap = {
    "3bc51062": "Rafi",
    cd9fb1e1: "Hieu",
    "6e81b125": "Aleksa",
    b554d1a6: "Lorenzo",
  };

  // Assuming rawPeople.people is an array of encrypted people
  const decryptedPeople = rawPeople.person_detected.map((encryptedPerson) =>
    decrypt_person(encryptedPerson, decryptionMap)
  );

  console.log(decryptedPeople);
  console.log("===========");

  res.status(200).send(decryptedPeople);
});

exports.appfunc = app;
