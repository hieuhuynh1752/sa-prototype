const WebSocket = require("ws");
const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('test');
});

exports.appfunc = app;

// Start the server
const PORT = process.env.PORT || 8099;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
