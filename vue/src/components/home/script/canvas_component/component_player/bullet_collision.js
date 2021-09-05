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
    } else {
      var boolHit = false;

      var j;
      for (j = 0; j < this.gameArea.componentArrayEnemy.length; j++) {
        if (
          this.componentBulletArray[i].x -
            this.componentBulletArray[i].width / 2 <
            this.gameArea.componentArrayEnemy[j].x +
              this.gameArea.componentArrayEnemy[j].width / 2 &&
          this.componentBulletArray[i].x +
            this.componentBulletArray[i].width / 2 >
            this.gameArea.componentArrayEnemy[j].x -
              this.gameArea.componentArrayEnemy[j].width / 2 &&
          this.componentBulletArray[i].y -
            this.componentBulletArray[i].width / 2 <
            this.gameArea.componentArrayEnemy[j].y +
              this.gameArea.componentArrayEnemy[j].height / 2 &&
          this.componentBulletArray[i].y +
            this.componentBulletArray[i].width / 2 >
            this.gameArea.componentArrayEnemy[j].y -
              this.gameArea.componentArrayEnemy[j].height / 2
        ) {
          this.gameArea.componentArrayEnemy[j].health -= 1;
          if (this.gameArea.componentArrayEnemy[j].health <= 0) {
            if (this.gameArea.componentArrayEnemy[j].type === "enemyRegular") {
              this.gameArea.score += 50;
              this.gameArea.circles += 50;
            } else if (
              this.gameArea.componentArrayEnemy[j].type === "enemyLarge"
            ) {
              this.gameArea.score += 100;
              this.gameArea.circles += 100;
            }

            this.gameArea.componentArrayEnemy.splice(j, 1);
          }
          this.componentBulletArray[i].health -= 1;
          if (this.componentBulletArray[i].health <= 0) {
            this.componentBulletArray.splice(i, 1);
          }

          this.gameArea.updateScore();
          boolHit = true;
          break;
        }
      }

      if (!boolHit) {
        var self = this;
        this.gameArea.componentArrayEnemy.forEach(function (enemy) {
          for (j = 0; !boolHit && j < enemy.componentBulletArray.length; j++) {
            if (
              self.componentBulletArray[i].x -
                self.componentBulletArray[i].width / 2 <
                enemy.componentBulletArray[j].x +
                  enemy.componentBulletArray[j].width / 2 &&
              self.componentBulletArray[i].x +
                self.componentBulletArray[i].width / 2 >
                enemy.componentBulletArray[j].x -
                  enemy.componentBulletArray[j].width / 2 &&
              self.componentBulletArray[i].y -
                self.componentBulletArray[i].width / 2 <
                enemy.componentBulletArray[j].y +
                  enemy.componentBulletArray[j].width / 2 &&
              self.componentBulletArray[i].y +
                self.componentBulletArray[i].width / 2 >
                enemy.componentBulletArray[j].y -
                  enemy.componentBulletArray[j].width / 2
            ) {
              enemy.componentBulletArray[j].health -= 1;
              if (enemy.componentBulletArray[j].health <= 0) {
                enemy.componentBulletArray.splice(j, 1);
              }

              self.componentBulletArray[i].health -= 1;
              if (self.componentBulletArray[i].health <= 0) {
                self.componentBulletArray.splice(i, 1);
                boolHit = true;
              }
              break;
            }
          }
        });
      }
    }
  }
}
