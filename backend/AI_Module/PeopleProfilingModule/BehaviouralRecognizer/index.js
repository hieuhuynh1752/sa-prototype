const express = require("express");
// const mysql = require('mysql');
const app = express();

app.get("/", (req, res) => {
  let message = req.query.message || "standard-messageee";

  res.status(200).send(message);
});

app.post("/recognize", (req, res) => {
  const rawBehaviour = req.body;
  console.log("received:");
  console.log(rawBehaviour);

  // do mapping logic here

  res.status(200).send(["sleeping"]); // <- change this of course
});

exports.appfunc = app;
