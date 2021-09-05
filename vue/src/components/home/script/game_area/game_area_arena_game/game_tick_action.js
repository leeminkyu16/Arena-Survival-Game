export function gameTickAction(self) {
  try {
    self.clear();

    self.spawnEnemy();

    self.componentArrayPlayer.forEach(function (player) {
      player.playerMovement();
    });
    self.componentArrayPlayer.forEach(function (player) {
      player.playerShoot();
    });

    self.componentArrayEnemy.forEach(function (enemy) {
      enemy.enemyMovement();
      enemy.enemyShoot();
      enemy.enemyBulletsUpdate();
    });

    self.componentArrayPlayer.forEach(function (player) {
      player.bulletCollision();
    });
    self.componentArrayEnemy.forEach(function (enemy) {
      enemy.bulletCollision();
    });
  } catch (e) {
    console.log(e);
    self.stop();
  }
}
