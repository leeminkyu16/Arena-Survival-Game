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
  this.gameArea.context.restore();

  this.gameArea.context.save();
  this.gameArea.context.translate(this.x, this.y);
  this.gameArea.context.rotate(this.angle);
  this.gameArea.context.fillStyle = "black";
  this.gameArea.context.fillRect(
    this.width / 6 / -2,
    this.height / 2 / -2,
    this.width / 6,
    this.height / 3
  );
  this.gameArea.context.restore();

  if (this.abilityTripleShot) {
    this.gameArea.context.save();
    this.gameArea.context.translate(this.x, this.y);
    this.gameArea.context.rotate(this.angle + Math.PI / 4);
    this.gameArea.context.fillStyle = "black";
    this.gameArea.context.fillRect(
      this.width / 8 / -2,
      this.height / 2 / -2,
      this.width / 8,
      this.height / 3
    );
    this.gameArea.context.restore();

    this.gameArea.context.save();
    this.gameArea.context.translate(this.x, this.y);
    this.gameArea.context.rotate(this.angle - Math.PI / 4);
    this.gameArea.context.fillStyle = "black";
    this.gameArea.context.fillRect(
      this.width / 8 / -2,
      this.height / 2 / -2,
      this.width / 8,
      this.height / 3
    );
    this.gameArea.context.restore();
  }
}
