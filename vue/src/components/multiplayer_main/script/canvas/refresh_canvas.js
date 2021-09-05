import { draw_enemy } from "./components/draw_enemy";
import { draw_player } from "./components/draw_player";

export function refreshCanvas(socketio, canvas) {
  const context = canvas.getContext("2d");
  socketio.on("refreshCanvas", (data) => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    //console.log(data);

    // Draw player

    data.componentMapPlayer.forEach(function (player) {
      draw_player(context, player.drawData);
    });

    data.componentArrayEnemy.forEach(function (enemy) {
      draw_enemy(context, enemy);
    });
  });
}
