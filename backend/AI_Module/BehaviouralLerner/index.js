const express = require("express");
// const mysql = require('mysql');
const app = express();

app.get("/", (req, res) => {
  let message = req.query.message || "standard-messageee";

  res.status(200).send(message);
});

app.get("/ai_module/behavior-learner/:id", (req, res) => {
  // logic for learning about person's behaviour
  const profile_id = req.params.id;
  res.status(200).send(true);
});

exports.appfunc = app;
