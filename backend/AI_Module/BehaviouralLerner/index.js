const express = require("express");
// const mysql = require('mysql');
const app = express();

app.get("/", (req, res) => {
    let message = req.query.message || "standard-messageee";

    res.status(200).send(message);
});

app.get("/ai_module/behavior-learner/:id", (req, res) => {
    const profile_id = req.params.id;

    let behaviors;

    if (profile_id == 12) {
        behaviors = {
            "behaviors": [{
                    "behaviorID": "001",
                    "description": "Morning Routine",
                    "actions": [{
                            "time": "7:00 AM",
                            "device": "Smart Blinds",
                            "action": "Open"
                        },
                        {
                            "time": "7:10 AM",
                            "device": "Smart Lights",
                            "action": "On"
                        },
                        {
                            "time": "7:10 AM",
                            "device": "Smart Lights",
                            "action": "Adjust",
                            "settings": {
                                "color-temperature": "cool"
                            }
                        },
                        {
                            "time": "7:30 AM",
                            "device": "Smart Thermostat",
                            "action": "Adjust",
                            "settings": {
                                "temperature": "23°C"
                            }
                        }
                    ]
                },
                {
                    "behaviorID": "002",
                    "description": "Noon Work Routine",
                    "actions": [{
                            "time": "12:00 PM",
                            "device": "Smart Blinds",
                            "action": "Off"
                        },
                        {
                            "time": "12:00 PM",
                            "device": "Smart Lights",
                            "action": "Off"
                        },
                        {
                            "time": "12:30 PM",
                            "device": "Smart Thermostat",
                            "action": "Off"
                        }
                    ]
                },
                {
                    "behaviorID": "003",
                    "description": "Evening Routine",
                    "actions": [{
                            "time": "5:00 PM",
                            "device": "Smart Blinds",
                            "action": "On"
                        },
                        {
                            "time": "5:00 PM",
                            "device": "Smart Lights",
                            "action": "On"
                        },
                        {
                            "time": "5:00 PM",
                            "device": "Smart Lights",
                            "action": "Adjust",
                            "settings": {
                                "color-temperature": "cool"
                            }
                        },
                        {
                            "time": "4:00 PM",
                            "device": "Smart Thermostat",
                            "action": "On"
                        },
                        {
                            "time": "4:05 AM",
                            "device": "Smart Thermostat",
                            "action": "Adjust",
                            "settings": {
                                "temperature": "25°C"
                            }
                        },
                    ]
                },
                {
                    "behaviorID": "004",
                    "description": "Bedtime Routine",
                    "actions": [{
                            "time": "9:30 PM",
                            "device": "Smart Blinds",
                            "action": "Off"
                        },
                        {
                            "time": "12:00 AM",
                            "device": "Smart Lights",
                            "action": "Off"
                        },
                        {
                            "time": "9:00 PM",
                            "device": "Smart Thermostat",
                            "action": "On"
                        },
                        {
                            "time": "9:05 PM",
                            "device": "Smart Thermostat",
                            "action": "Adjust",
                            "settings": {
                                "temperature": "20°C"
                            }
                        },
                    ]
                }
            ]
        };
    } else if (profile_id == 45) {
        behaviors = {
            "behaviors": [{
                    "behaviorID": "001",
                    "description": "Morning Routine",
                    "actions": [{
                            "time": "5:30 AM",
                            "device": "Smart Blinds",
                            "action": "Open"
                        },
                        {
                            "time": "6:30 AM",
                            "device": "Smart Lights",
                            "action": "On"
                        },
                        {
                            "time": "6:30 AM",
                            "device": "Smart Lights",
                            "action": "Adjust",
                            "settings": {
                                "color-temperature": "warm"
                            }
                        },
                        {
                            "time": "7:30 AM",
                            "device": "Smart Thermostat",
                            "action": "Adjust",
                            "settings": {
                                "temperature": "18°C"
                            }
                        }
                    ]
                },
                {
                    "behaviorID": "002",
                    "description": "Noon Work Routine",
                    "actions": [{
                            "time": "1:00 PM",
                            "device": "Smart Blinds",
                            "action": "On"
                        },
                        {
                            "time": "12:00 PM",
                            "device": "Smart Lights",
                            "action": "On"
                        },
                        {
                            "time": "7:30 AM",
                            "device": "Smart Lights",
                            "action": "Adjust",
                            "settings": {
                                "color-temperature": "cool"
                            }
                        },
                        {
                            "time": "3:30 PM",
                            "device": "Smart Thermostat",
                            "action": "Off"
                        }
                    ]
                },
                {
                    "behaviorID": "003",
                    "description": "Evening Routine",
                    "actions": [{
                            "time": "6:00 PM",
                            "device": "Smart Blinds",
                            "action": "On"
                        },
                        {
                            "time": "6:00 PM",
                            "device": "Smart Lights",
                            "action": "On"
                        },
                        {
                            "time": "5:00 PM",
                            "device": "Smart Lights",
                            "action": "Adjust",
                            "settings": {
                                "color-temperature": "warm"
                            }
                        },
                        {
                            "time": "6:00 PM",
                            "device": "Smart Thermostat",
                            "action": "On"
                        },
                        {
                            "time": "6:05 AM",
                            "device": "Smart Thermostat",
                            "action": "Adjust",
                            "settings": {
                                "temperature": "35°C"
                            }
                        },
                    ]
                },
                {
                    "behaviorID": "004",
                    "description": "Bedtime Routine",
                    "actions": [{
                            "time": "10:30 PM",
                            "device": "Smart Blinds",
                            "action": "Off"
                        },
                        {
                            "time": "1:00 AM",
                            "device": "Smart Lights",
                            "action": "Off"
                        },
                        {
                            "time": "10:00 PM",
                            "device": "Smart Thermostat",
                            "action": "On"
                        },
                        {
                            "time": "10:05 AM",
                            "device": "Smart Thermostat",
                            "action": "Adjust",
                            "settings": {
                                "temperature": "30°C"
                            }
                        },
                    ]
                }
            ]
        };
    } else if (profile_id == 76) {
        behaviors = {
            "behaviors": [{
                    "behaviorID": "001",
                    "description": "Morning Routine",
                    "actions": [{
                            "time": "6:30 AM",
                            "device": "Smart Blinds",
                            "action": "Open"
                        },
                        {
                            "time": "6:30 AM",
                            "device": "Smart Lights",
                            "action": "On"
                        },
                        {
                            "time": "6:30 AM",
                            "device": "Smart Lights",
                            "action": "Adjust",
                            "settings": {
                                "color-temperature": "cool"
                            }
                        },
                        {
                            "time": "7:30 AM",
                            "device": "Smart Thermostat",
                            "action": "Adjust",
                            "settings": {
                                "temperature": "28°C"
                            }
                        }
                    ]
                },
                {
                    "behaviorID": "002",
                    "description": "Noon Work Routine",
                    "actions": [{
                            "time": "11:00 PM",
                            "device": "Smart Blinds",
                            "action": "Off"
                        },
                        {
                            "time": "12:00 PM",
                            "device": "Smart Lights",
                            "action": "Off"
                        },

                        {
                            "time": "12:30 PM",
                            "device": "Smart Thermostat",
                            "action": "On"
                        },
                        {
                            "time": "12:30 PM",
                            "device": "Smart Thermostat",
                            "action": "Adjust",
                            "settings": {
                                "temperature": "20°C"
                            }
                        },
                    ]
                },
                {
                    "behaviorID": "003",
                    "description": "Evening Routine",
                    "actions": [{
                            "time": "5:30 PM",
                            "device": "Smart Blinds",
                            "action": "On"
                        },
                        {
                            "time": "6:00 PM",
                            "device": "Smart Lights",
                            "action": "On"
                        },
                        {
                            "time": "6:00 PM",
                            "device": "Smart Lights",
                            "action": "Adjust",
                            "settings": {
                                "color-temperature": "cool"
                            }
                        },
                        {
                            "time": "6:00 PM",
                            "device": "Smart Thermostat",
                            "action": "On"
                        },
                        {
                            "time": "6:05 PM",
                            "device": "Smart Thermostat",
                            "action": "Adjust",
                            "settings": {
                                "temperature": "30°C"
                            }
                        },
                    ]
                },
                {
                    "behaviorID": "004",
                    "description": "Bedtime Routine",
                    "actions": [{
                            "time": "10:30 PM",
                            "device": "Smart Blinds",
                            "action": "Off"
                        },
                        {
                            "time": "1:00 AM",
                            "device": "Smart Lights",
                            "action": "Off"
                        },
                        {
                            "time": "1:00 AM",
                            "device": "Smart Thermostat",
                            "action": "Off"
                        }
                    ]
                }
            ]
        };
    } else {
        console.error("Profile with id ", profile_id, " was not found.");
        reject(err);
    }

    res.status(200).send(behaviors);
});

exports.appfunc = app;