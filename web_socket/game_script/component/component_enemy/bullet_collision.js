exports.bulletCollision = function () {
  var i;

  const componentBulletArray = this.componentBulletArray;
  var conponentBulletArrayLength = componentBulletArray.length;

  const gameAreaWidth = this.gameArea.width;
  const gameAreaHeight = this.gameArea.height;

  for (i = 0; i < conponentBulletArrayLength; i++) {
    if (
      componentBulletArray[i].x < 0 ||
      componentBulletArray[i].x > gameAreaWidth ||
      componentBulletArray[i].y < 0 ||
      componentBulletArray[i].y > gameAreaHeight
    ) {
      componentBulletArray.splice(i, 1);
      conponentBulletArrayLength -= 1;
      continue;
    }
    const componentMapPlayer = this.gameArea.componentMapPlayer;
    for (const [id, player] of componentMapPlayer) {
      if (
        componentBulletArray[i].x < player.x + player.width / 2 &&
        componentBulletArray[i].x > player.x - player.width / 2 &&
        componentBulletArray[i].y < player.y + player.height / 2 &&
        componentBulletArray[i].y > player.y - player.height / 2
      ) {
        player.health -= 1;
        player.updateHealth(player.health, player.maxHealth);
        if (player.health <= 0) {
          player.setInformationText("Game Over");
        }
        componentBulletArray[i].health -= 1;
        if (componentBulletArray[i].health <= 0) {
          componentBulletArray.splice(i, 1);
          conponentBulletArrayLength -= 1;
          break;
        }
      }
    }
  }
};
