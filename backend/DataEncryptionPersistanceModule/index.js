const express = require("express");
// const mysql = require('mysql');
const app = express();

app.get("/", (req, res) => {
  let message = req.query.message || "standard-messageee";

  res.status(200).send(message);
});

app.get("/sustainability-manager", (req, res) => {
  res.status(200).send();
});

exports.appfunc = app;
