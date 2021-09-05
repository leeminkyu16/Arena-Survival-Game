export function draw_player_bullet(context, drawData) {
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
  context.strokeStyle = drawData.colorPlayer;
  context.lineWidth = 1;
  context.strokeRect(
    drawData.width / -2,
    drawData.height / -2,
    drawData.width,
    drawData.height
  );
  context.restore();
}
