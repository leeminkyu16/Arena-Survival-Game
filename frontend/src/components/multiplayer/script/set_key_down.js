export function set_key_down(socketio) {
  window.addEventListener("keydown", (e) => {
    socketio.emit("keydown", e.key);
  });
  window.addEventListener("keyup", (e) => {
    socketio.emit("keyup", e.key);
  });
}
