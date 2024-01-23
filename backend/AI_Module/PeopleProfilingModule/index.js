const express = require("express");
// const mysql = require('mysql');
const app = express();

app.get("/", (req, res) => {
  let message = req.query.message || "people-profiling-module/";

  res.status(200).send(message);
});

app.get("/people-profiling-module/", (req, res) => {
  let members = {
    household_members: [
      {
        id: "12",
        name: "Rafi Papa",
        gender: "male",
        picture:
          "https://i.ibb.co/60qcsSS/Screenshot-2024-01-21-at-10-33-42.png",
        age: 32,
        role: "OWNER",
      },
      {
        id: "45",
        name: "Hieu",
        gender: "male",
        picture:
          "https://i.ibb.co/GJCn6Pp/Screenshot-2024-01-21-at-10-30-09.png",
        age: 35,
        role: "MEBMBER",
      },
      {
        id: "76",
        name: "Lori",
        gender: "male",
        picture:
          "https://i.ibb.co/HY25J3c/Screenshot-2024-01-21-at-10-32-51.png",
        age: 14,
        role: "MEBMBER",
      },
      {
        id: "23",
        name: "Aleksa",
        gender: "male",
        picture:
          "https://i.ibb.co/xC1yCFM/Screenshot-2023-08-05-at-18-20-42.png",
        age: 23,
        role: "MEBMBER",
      },
    ],
  };

  res.status(200).send(members);
});

exports.appfunc = app;