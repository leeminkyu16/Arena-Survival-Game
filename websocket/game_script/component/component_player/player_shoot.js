const { ComponentPlayerBullet } = require("../component_player_bullet");

exports.playerShoot = function () {
  // Reload timer
  if (this.maxBullet > this.bullet) {
    if (this.timerShoot <= 0) {
      this.timerShoot = this.cooldownShoot;
      this.bullet += 1;
      this.updateBullet();
    } else if (this.timerShoot > 0) {
      this.timerShoot -= 1;
    }
  }

  // Auto fire toggle
  if (
    this.downKeys &&
    this.downKeys["e"] &&
    !this.stickyEKey
  ) {
    this.stickyEKey = true;

    if (this.autoFire) {
      this.setInformationText("Manual fire enabled.");
      this.autoFire = false;
    } else {
      this.setInformationText("Automatic fire enabled.");
      this.autoFire = true;
    }
  } else if (!(this.downKeys && this.downKeys["e"])) {
    this.stickyEKey = false;
  }

  // Key handling
  if (
    this.downKeys &&
    this.downKeys[" "] &&
    this.bullet > 0 &&
    (this.autoFire || !this.stickySpaceKey)
  ) {
    this.stickySpaceKey = true;

    this.componentBulletArray.push(
      new ComponentPlayerBullet(
        this.gameArea,
        5,
        10,
        this.x,
        this.y,
        this.angle,
        "gray",
        this.color,
        "playerBullet",
        this.bulletSpeed,
        1
      )
    );
    this.bullet -= 1;
    this.updateBullet();

    if (this.abilityTripleShot) {
      this.componentBulletArray.push(
        new ComponentPlayerBullet(
          this.gameArea,
          5,
          10,
          this.x,
          this.y,
          this.angle - Math.PI / 4,
          "gray",
          "green",
          "playerBullet",
          this.bulletSpeed,
          1
        )
      );
      this.componentBulletArray.push(
        new ComponentPlayerBullet(
          this.gameArea,
          5,
          10,
          this.x,
          this.y,
          this.angle + Math.PI / 4,
          "gray",
          "green",
          "playerBullet",
          this.bulletSpeed,
          1
        )
      );
    }
  } else if (!(this.downKeys && this.downKeys[" "])) {
    this.stickySpaceKey = false;
  }

  // Displaying player bullets
  this.componentBulletArray.forEach(function (bullet) {
    bullet.newPos();
  });
};
