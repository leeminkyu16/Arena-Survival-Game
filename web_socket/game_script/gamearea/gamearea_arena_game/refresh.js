exports.refresh = function () {
  this.socketio.emit("refreshCanvas", this.toDrawData());
};
