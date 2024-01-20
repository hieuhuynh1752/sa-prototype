const express = require("express");
// const mysql = require('mysql');
const app = express();

app.get("/", (req, res) => {
  let message = req.query.message || "standard-messageee";

  res.status(200).send(message);
});

app.get("/Householdinfrastructure-module/behaviourmimicking-module", (req, res) => {

  res.status(200).send("Behaviour Mimicking Module");
});

exports.appfunc = app;
