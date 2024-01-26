#!/bin/bash

# Array of relative paths to Node.js applications
node_apps=(
    "backend/AI_Module/PeopleProfilingModule/BehaviouralRecognizer"
    "backend/AI_Module/PeopleProfilingModule/PeopleRecognizer"
    "backend/AI_Module/PeopleProfilingModule"
    "backend/HouseholdInfrastrucutreModule/BehaviourComfortModule/DecisionMakingManager"
    "backend/HouseholdInfrastrucutreModule/DeviceOrchestrator"
    "backend/HouseholdInfrastrucutreModule/EnergyManagementModule"
    "backend/HouseholdInfrastrucutreModule/EnergyManagementModule/ExternalWeatherMonitoring"
    "backend/ProfileModule"
    "backend/HouseholdInfrastrucutreModule/EnergyManagementModule/SustainabilityManager"
)

# Last script to start separately
last_script="backend/MqttSubscriber/mqttSub.js"

# Loop through the array and start each application in the background
for app in "${node_apps[@]}"; do
    (cd "$app" && npm start &)
done

# Start the last script separately
node "$last_script" &
