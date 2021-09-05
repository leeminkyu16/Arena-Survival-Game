import { ComponentPlayerBullet } from "../component_player_bullet";

export function playerShoot() {
  // Reload timer
  if (this.maxBullet > this.bullet) {
    if (this.timerShoot <= 0) {
      this.timerShoot = this.cooldownShoot;
      this.bullet += 1;
      this.gameArea.updateBullet();
    } else if (this.timerShoot > 0) {
      this.timerShoot -= 1;
    }
  }

  // Auto fire toggle
  if (
    this.gameArea.downKeys &&
    this.gameArea.downKeys["e"] &&
    !this.gameArea.stickyEKey
  ) {
    this.gameArea.stickyEKey = true;

    if (this.autoFire) {
      this.gameArea.setInformationText("Manual fire enabled.");
      this.autoFire = false;
    } else {
      this.gameArea.setInformationText("Automatic fire enabled.");
      this.autoFire = true;
    }
  } else if (!(this.gameArea.downKeys && this.gameArea.downKeys["e"])) {
    this.gameArea.stickyEKey = false;
  }

  // Key handling
  if (
    this.gameArea.downKeys &&
    this.gameArea.downKeys[" "] &&
    this.bullet > 0 &&
    (this.autoFire || !this.gameArea.stickySpaceKey)
  ) {
    this.gameArea.stickySpaceKey = true;

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
    this.gameArea.updateBullet();

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
  } else if (!(this.gameArea.downKeys && this.gameArea.downKeys[" "])) {
    this.gameArea.stickySpaceKey = false;
  }

  // Displaying player bullets
  this.componentBulletArray.forEach(function (bullet) {
    bullet.newPos();
    bullet.update();
  });
}
