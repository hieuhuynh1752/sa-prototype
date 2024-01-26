#!/bin/bash

# Kill all Node.js processes
pkill -f "node.*mqttSub.js"
pkill -f "npm.*backend/AI_Module"
pkill -f "npm.*backend/HouseholdInfrastrucutreModule"

# Add more pkill commands if needed for other Node.js processes

echo "All Node.js processes terminated."