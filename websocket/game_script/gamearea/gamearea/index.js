const { stop } = require("./stop");

class GameArea {
  constructor(socketio, width = 1300, height = 800) {
    this.socketio = socketio;

    this.width = width;
    this.height = height;

    this.interval = setInterval(this.gameTickAction, 20, this);
  }

  gameTickAction() {}
}

GameArea.prototype.stop = stop;

exports.GameArea = GameArea;
