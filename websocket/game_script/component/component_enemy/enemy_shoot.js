const { ComponentEnemyBullet } = require("../component_enemy_bullet");

exports.enemyShoot = function () {
  if (this.timerShoot > 0) {
    this.timerShoot -= 1;
  } else if (this.timerShoot === 0) {
    this.componentBulletArray.push(
      new ComponentEnemyBullet(
        this.gameArea,
        Math.floor(this.width / 6),
        Math.floor(this.width / 3),
        this.x,
        this.y,
        this.angle,
        "gray",
        this.color,
        "enemyBullet",
        5,
        1
      )
    );
    this.timerShoot = this.cooldownShoot;
  }
};
