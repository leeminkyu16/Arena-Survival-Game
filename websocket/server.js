const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const main = require("./game_script/main.js");

const websocketConfig = require("./websocket.config");

const allowlist = new Set(websocketConfig.allowlist);

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: (origin, callback) => {
      if (allowlist.has(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ["GET", "POST"]
  },
});

main.startGame(io);

io.on("connection", (socket) => {
  console.log(socket.id + " connected");

  main.playerJoin(socket.id);

  main.setKeyPresses(socket);
  main.setButtonActions(socket);

  socket.on("disconnect", () => {
    console.log(socket.id + " disconnected");
    main.playerExit(socket.id);
  });
});

const PORT = websocketConfig.port || 3001;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));