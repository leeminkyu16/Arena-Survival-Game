exports.enemyBulletsUpdate = function () {
  this.componentBulletArray.forEach(function (bullet) {
    bullet.newPos();
  });
};
