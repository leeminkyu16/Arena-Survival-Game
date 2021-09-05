export function playerMovement() {
  this.moveAngle = 0;
  this.speed = 0;

  if (
    this.gameArea.downKeys &&
    (this.gameArea.downKeys["a"] || this.gameArea.downKeys["ArrowLeft"])
  ) {
    this.moveAngle = -1 * this.turnSpeed;
  }

  if (
    this.gameArea.downKeys &&
    (this.gameArea.downKeys["d"] || this.gameArea.downKeys["ArrowRight"])
  ) {
    this.moveAngle = this.turnSpeed;
  }
  if (
    this.gameArea.downKeys &&
    (this.gameArea.downKeys["w"] || this.gameArea.downKeys["ArrowUp"])
  ) {
    this.speed = this.forwardSpeed;

    if (this.x < 0) {
      this.x += Math.ceil(Math.abs(this.speed) * 1.5);
    } else if (this.x > this.gameArea.canvas.width) {
      this.x -= Math.ceil(Math.abs(this.speed) * 1.5);
    } else if (this.y < 0) {
      this.y += Math.ceil(Math.abs(this.speed) * 1.5);
    } else if (this.y > this.gameArea.canvas.height) {
      this.y -= Math.ceil(Math.abs(this.speed) * 1.5);
    }
  }
  if (
    this.gameArea.downKeys &&
    (this.gameArea.downKeys["s"] || this.gameArea.downKeys["ArrowDown"])
  ) {
    this.speed = -1 * this.backwardSpeed;

    if (this.x < 0) {
      this.x += Math.abs(this.speed) * 1.5;
    } else if (this.x > this.gameArea.canvas.width) {
      this.x -= Math.abs(this.speed) * 1.5;
    } else if (this.y < 0) {
      this.y += Math.abs(this.speed) * 1.5;
    } else if (this.y > this.gameArea.canvas.height) {
      this.y -= Math.abs(this.speed) * 1.5;
    }
  }
  this.newPos();
  this.update();
}
