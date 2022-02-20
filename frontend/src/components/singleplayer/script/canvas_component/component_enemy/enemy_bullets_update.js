export function enemyBulletsUpdate() {
  this.componentBulletArray.forEach(function (bullet) {
    bullet.newPos();
    bullet.update();
  });
}
