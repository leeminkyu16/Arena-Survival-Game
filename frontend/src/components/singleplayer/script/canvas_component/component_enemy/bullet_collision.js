export function bulletCollision() {
  var i;
  for (i = 0; i < this.componentBulletArray.length; i++) {
    if (
      this.componentBulletArray[i].x < 0 ||
      this.componentBulletArray[i].x > this.gameArea.width ||
      this.componentBulletArray[i].y < 0 ||
      this.componentBulletArray[i].y > this.gameArea.height
    ) {
      this.componentBulletArray.splice(i, 1);
      continue;
    }
    const self = this;
    this.gameArea.componentArrayPlayer.forEach(function (player) {
      if (
        self.componentBulletArray[i].x < player.x + player.width / 2 &&
        self.componentBulletArray[i].x > player.x - player.width / 2 &&
        self.componentBulletArray[i].y < player.y + player.height / 2 &&
        self.componentBulletArray[i].y > player.y - player.height / 2
      ) {
        self.componentBulletArray[i].health -= 1;
        if (self.componentBulletArray[i].health <= 0) {
          self.componentBulletArray.splice(i, 1);
        }
        player.health -= 1;
        self.gameArea.updateHealth(player.health, player.maxHealth);
        if (player.health <= 0) {
          self.gameArea.onGameOver();
        }
      }
    });
  }
}
