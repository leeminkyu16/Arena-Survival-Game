exports.playerMovement = function () {
  this.moveAngle = 0;
  this.speed = 0;

  const downKeys = this.downKeys;

  if (
    downKeys &&
    (downKeys["a"] || downKeys["ArrowLeft"])
  ) {
    this.moveAngle = -1 * this.turnSpeed;
  }

  if (
    downKeys &&
    (downKeys["d"] || downKeys["ArrowRight"])
  ) {
    this.moveAngle = this.turnSpeed;
  }
  if (
    downKeys &&
    (downKeys["w"] || downKeys["ArrowUp"])
  ) {
    this.speed = this.forwardSpeed;

    if (this.x < 0) {
      this.x += Math.ceil(Math.abs(this.speed) * 1.5);
    } else if (this.x > this.gameArea.width) {
      this.x -= Math.ceil(Math.abs(this.speed) * 1.5);
    } else if (this.y < 0) {
      this.y += Math.ceil(Math.abs(this.speed) * 1.5);
    } else if (this.y > this.gameArea.height) {
      this.y -= Math.ceil(Math.abs(this.speed) * 1.5);
    }
  }
  if (
    downKeys &&
    (downKeys["s"] || downKeys["ArrowDown"])
  ) {
    this.speed = -1 * this.backwardSpeed;

    if (this.x < 0) {
      this.x += Math.abs(this.speed) * 1.5;
    } else if (this.x > this.gameArea.width) {
      this.x -= Math.abs(this.speed) * 1.5;
    } else if (this.y < 0) {
      this.y += Math.abs(this.speed) * 1.5;
    } else if (this.y > this.gameArea.height) {
      this.y -= Math.abs(this.speed) * 1.5;
    }
  }
  this.newPos();
};
