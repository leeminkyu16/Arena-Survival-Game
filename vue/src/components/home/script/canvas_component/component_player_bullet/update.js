export function update() {
  this.gameArea.context.save();
  this.gameArea.context.translate(this.x, this.y);
  this.gameArea.context.rotate(this.angle);
  this.gameArea.context.fillStyle = this.color;
  this.gameArea.context.fillRect(
    this.width / -2,
    this.height / -2,
    this.width,
    this.height
  );
  this.gameArea.context.strokeStyle = this.colorPlayer;
  this.gameArea.context.lineWidth = 1;
  this.gameArea.context.strokeRect(
    this.width / -2,
    this.height / -2,
    this.width,
    this.height
  );
  this.gameArea.context.restore();
}
