exports.enemyMovement = function () {
  if (Math.random() * 100 < 2) {
    this.speed = 0;
    this.speed = Math.floor(Math.random() * 4) - 1;
  }

  if (Math.random() * 100 < 20) {
    this.moveAngle = 0;

    const self = this;
    const componentArrayPlayer = Array.from(
      this.gameArea.componentMapPlayer
    ).map(function ([key, value]) {
      return value;
    });
    const distanceSquared = componentArrayPlayer.map(function (player) {
      return ((player.x - self.x) ** 2) + ((player.y - self.y) ** 2);
    });

    const closestPlayer =
      componentArrayPlayer[
        distanceSquared.indexOf(Math.min.apply(null, distanceSquared))
      ];

    if (closestPlayer) {
      const relativeAngle = mod(
        Math.atan2(this.y - closestPlayer.y, closestPlayer.x - this.x) -
          Math.PI / 2 +
          this.angle,
        2 * Math.PI
      );

      if (relativeAngle > Math.PI) {
        this.moveAngle = 1;
      } else if (relativeAngle < Math.PI) {
        this.moveAngle = -1;
      }
    }
  }

  if (this.x < 0) {
    this.x += Math.ceil(Math.abs(this.speed) * 1.5);
  } else if (this.x > this.gameArea.width) {
    this.x -= Math.ceil(Math.abs(this.speed) * 1.5);
  } else if (this.y < 0) {
    this.y += Math.ceil(Math.abs(this.speed) * 1.5);
  } else if (this.y > this.gameArea.height) {
    this.y -= Math.ceil(Math.abs(this.speed) * 1.5);
  }

  this.newPos();
};

function mod(x, y) {
  return ((x % y) + y) % y;
}
