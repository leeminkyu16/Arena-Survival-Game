import { io } from "socket.io-client";
import websocketConfig from "../../../config/websocket.config";
import { refreshCanvas } from "./canvas/refresh_canvas";
import { set_key_down } from "./set_key_down";
import { setGameActions } from "./set_game_actions/index";
import { setUpdateGameValues } from "./set_update_game_values/index";

export function startGame(canvasVar, vueComponent) {
  const socketio = io(websocketConfig.url);

  set_key_down(socketio);

  setGameActions(vueComponent, socketio);
  setUpdateGameValues(vueComponent, socketio);
  refreshCanvas(socketio, canvasVar);
}
