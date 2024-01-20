const express = require("express");
// const mysql = require('mysql');
const app = express();

app.get("/", (req, res) => {
    let message = req.query.message || "standard-messageee";

    res.status(200).send(message);
});

app.get("/ai-module/people-profiling/people-recognizer/:id", (req, res) => {
    const profile_id = req.params.id;

    let recognizers;

    if (profile_id == 12) {
        recognizers = {
            "recognitions": {
                "data": [{
                        "personID": "person_x1",
                        "imageReference": "link_to_image_1"
                    },
                    {
                        "personID": "person_x1",
                        "imageReference": "link_to_image_2"
                    },
                    {
                        "personID": "person_x1",
                        "imageReference": "link_to_image_3"
                    },
                    {
                        "personID": "person_x1",
                        "imageReference": "link_to_image_4"
                    },
                    {
                        "personID": "person_x1",
                        "imageReference": "link_to_image_5"
                    },
                    {
                        "personID": "person_x1",
                        "imageReference": "link_to_image_6"
                    },
                    {
                        "personID": "person_x1",
                        "imageReference": "link_to_image_7"
                    },
                    {
                        "personID": "person_x1",
                        "imageReference": "link_to_image_8"
                    },
                    {
                        "personID": "person_x1",
                        "imageReference": "link_to_image_9"
                    },
                    {
                        "personID": "person_x1",
                        "imageReference": "link_to_image_10"
                    }
                ]
            }
        };
    } else if (profile_id == 45) {
        recognizers = {
            "recognitions": {
                "data": [{
                        "personID": "person_x2",
                        "imageReference": "link_to_image_1"
                    },
                    {
                        "personID": "person_x2",
                        "imageReference": "link_to_image_2"
                    },
                    {
                        "personID": "person_x2",
                        "imageReference": "link_to_image_3"
                    },
                    {
                        "personID": "person_x2",
                        "imageReference": "link_to_image_4"
                    },
                    {
                        "personID": "person_x2",
                        "imageReference": "link_to_image_5"
                    },
                    {
                        "personID": "person_x2",
                        "imageReference": "link_to_image_6"
                    },
                    {
                        "personID": "person_x2",
                        "imageReference": "link_to_image_7"
                    },
                    {
                        "personID": "person_x2",
                        "imageReference": "link_to_image_8"
                    },
                    {
                        "personID": "person_x2",
                        "imageReference": "link_to_image_9"
                    },
                    {
                        "personID": "person_x2",
                        "imageReference": "link_to_image_10"
                    }
                ]
            }
        };
    } else if (profile_id == 76) {
        recognizers = {
            "recognitions": {
                "data": [{
                        "personID": "person_x3",
                        "imageReference": "link_to_image_1"
                    },
                    {
                        "personID": "person_x3",
                        "imageReference": "link_to_image_2"
                    },
                    {
                        "personID": "person_x3",
                        "imageReference": "link_to_image_3"
                    },
                    {
                        "personID": "person_x3",
                        "imageReference": "link_to_image_4"
                    },
                    {
                        "personID": "person_x3",
                        "imageReference": "link_to_image_5"
                    },
                    {
                        "personID": "person_x3",
                        "imageReference": "link_to_image_6"
                    },
                    {
                        "personID": "person_x3",
                        "imageReference": "link_to_image_7"
                    },
                    {
                        "personID": "person_x3",
                        "imageReference": "link_to_image_8"
                    },
                    {
                        "personID": "person_x3",
                        "imageReference": "link_to_image_9"
                    },
                    {
                        "personID": "person_x3",
                        "imageReference": "link_to_image_10"
                    }
                ]
            }
        };
    } else {
        console.error("Profile with id ", profile_id, " was not found.");
        reject(err);
    }

    res.status(200).send(recognizers);
});

exports.appfunc = app;