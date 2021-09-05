import { draw_enemy_bullet } from "./draw_enemy_bullet";

export function draw_enemy(context, drawData) {
  context.save();
  context.translate(drawData.x, drawData.y);
  context.rotate(drawData.angle);
  context.fillStyle = drawData.color;
  context.fillRect(
    drawData.width / -2,
    drawData.height / -2,
    drawData.width,
    drawData.height
  );
  context.restore();

  context.save();
  context.translate(drawData.x, drawData.y);
  context.rotate(drawData.angle);
  context.fillStyle = "black";
  context.fillRect(
    drawData.width / 6 / -2,
    drawData.height / 2 / -2,
    drawData.width / 6,
    drawData.height / 3
  );
  context.restore();

  drawData.componentBulletArray.forEach(function (bullet) {
    draw_enemy_bullet(context, bullet);
  });
}
