const express = require("express");
// const mysql = require('mysql');
const app = express();

app.get("/", (req, res) => {
  let message = req.query.message || "people-profiling-module/";

  res.status(200).send(message);
});

app.post("/raw-sensoring-device-data", async (req, res) => {
  // const eventDTO = createEventDTO(req.body);
  // if (!validateNewEventData(eventDTO)){
  //     return res.status(400).send("Invalid event data.");
  // }
  // let newEvent = createNewEvent(eventDTO);
  // const query = fillInsertEventQuery(newEvent);
  // const sqlOkPacket = await doQuery(query); // sqlOkPacket is a return value when inserting/updating sql table
  // const eventId = sqlOkPacket.insertId;
  // if (!eventId){
  //     return res.status(400).send("Did not create new event.");
  // }
  // const isOkay = await addEventDesc(eventId, eventDTO.description);
  // if (!isOkay){
  //     return res.status(409).send("Did not update description.");
  // }
  // await addEventPrice(eventId, eventDTO.price);
  // newEvent.id = eventId;
  // const eventResponse = await createEventResponse(newEvent);
  console.log("received data");
  console.log(req.body);
  return res.json("all good");
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
