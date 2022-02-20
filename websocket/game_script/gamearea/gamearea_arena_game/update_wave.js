exports.updateWave = function () {
  this.socketio.emit("updateWave", {
    currentWave: this.currentWave,
    maxWave: this.maxWave,
  });
};
