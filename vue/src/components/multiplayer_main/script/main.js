import { io } from "socket.io-client";
import { refreshCanvas } from "./canvas/refresh_canvas";
import { set_key_down } from "./set_key_down";
import { setGameActions } from "./set_game_actions/index";
import { setUpdateGameValues } from "./set_update_game_values/index";

export function startGame(canvasVar, vueComponent) {
  const socketio = io("http://localhost:3000");

  set_key_down(socketio);

  setGameActions(vueComponent, socketio);
  setUpdateGameValues(vueComponent, socketio);
  refreshCanvas(socketio, canvasVar);
}
