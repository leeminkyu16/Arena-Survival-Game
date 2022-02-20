exports.gameTickAction = function gameTickAction(self) {
  try {
    self.spawnEnemy();

    self.componentMapPlayer.forEach(function (player) {
      player.playerMovement();
      player.playerShoot();
      player.bulletCollision();
    });

    self.componentArrayEnemy.forEach(function (enemy) {
      enemy.enemyMovement();
      enemy.enemyShoot();
      enemy.enemyBulletsUpdate();
      enemy.bulletCollision();
    });

    self.refresh();
  } catch (e) {
    console.log(e);
    self.stop();
  }
};
