const axios = require("axios");

function getCurrentFormattedTime() {
  const now = new Date();

  const currentHour = addLeadingZero(now.getHours());
  const currentMinute = addLeadingZero(now.getMinutes());
  const currentSecond = addLeadingZero(now.getSeconds());
  const currentMillisecond = now.getMilliseconds();

  return `${currentHour}:${currentMinute}:${currentSecond}:${currentMillisecond}`;
}

function addLeadingZero(number) {
  return number < 10 ? `0${number}` : number;
}

async function sendThroughWS(body) {
  try {
    responseDecision = await axios
      .post("http://localhost:8121/send-message", body) // sending to WebSocket
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error("Error making API request:", error);
      });
  } catch (error) {
    console.error("Error making API request:", error);
  }
}

function sendLogsThroughWS(body) {
  sendThroughWS({ message: getCurrentFormattedTime() + " " + body });
}

module.exports = {
  sendThroughWS,
  sendLogsThroughWS,
};
