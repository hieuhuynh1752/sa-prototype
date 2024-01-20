const express = require("express");
// const mysql = require('mysql');
const app = express();

app.get("/", (req, res) => {
  let message = req.query.message || "standard-messageee";

  res.status(200).send(message);
});

app.get("/profile-module/household-members", (req, res) => {
  let members = {
    household_members: [
      {
        id: "12",
        name: "Emily Davis",
        gender: "female",
        picture: "https://example.com/emily_picture.jpg",
        age: 32,
        role: "OWNER",
      },
      {
        id: "45",
        name: "Michael Davis",
        gender: "male",
        picture: "https://example.com/michael_picture.jpg",
        age: 35,
        role: "MEBMBER",
      },
      {
        id: "76",
        name: "Olivia Davis",
        gender: "female",
        picture: "https://example.com/olivia_picture.jpg",
        age: 14,
        role: "MEBMBER",
      },
    ],
  };

  res.status(200).send(members);
});

exports.appfunc = app;
