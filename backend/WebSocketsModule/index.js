const WebSocket = require("ws");
const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', async function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('test');
  const dataFromDecisionMaking = await axios.get("http://localhost:8096/apply-decisions-to-devices");
  ws.send(JSON.stringify(dataFromDecisionMaking))
});

function broadcastMessage(message) {
  wss.clients.forEach((client)=>{
    if (client.readyState === WebSocket.OPEN){
      client.send(message)
    }
  })
}

app.post('/send-message',(req, res)=>{
  const message = req.body;
  broadcastMessage(message)
})

exports.appfunc = app;

// Start the server
const PORT = process.env.PORT || 8099;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
