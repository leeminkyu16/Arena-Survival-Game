exports.bulletCollision = function () {
  var i;

  const componentBulletArray = this.componentBulletArray;
  var componentBulletArrayLength = componentBulletArray.length;

  const gameAreaWidth = this.gameArea.width;
  const gameAreaHeight = this.gameArea.height;

  for (i = 0; i < componentBulletArrayLength; i++) {
    if (
      componentBulletArray[i].x < 0 ||
      componentBulletArray[i].x > gameAreaWidth ||
      componentBulletArray[i].y < 0 ||
      componentBulletArray[i].y > gameAreaHeight
    ) {
      componentBulletArray.splice(i, 1);
      componentBulletArrayLength -= 1;
      continue;
    } else {
      var boolHit = false;

      var j;

      const componentArrayEnemy = this.gameArea.componentArrayEnemy;
      var componentArrayEnemyLength = componentArrayEnemy.length;

      for (j = 0; j < componentArrayEnemyLength; j++) {
        if (
          componentBulletArray[i].x - componentBulletArray[i].width / 2 <
            componentArrayEnemy[j].x + componentArrayEnemy[j].width / 2 &&
          componentBulletArray[i].x + componentBulletArray[i].width / 2 >
            componentArrayEnemy[j].x - componentArrayEnemy[j].width / 2 &&
          componentBulletArray[i].y - componentBulletArray[i].width / 2 <
            componentArrayEnemy[j].y + componentArrayEnemy[j].height / 2 &&
          componentBulletArray[i].y + componentBulletArray[i].width / 2 >
            componentArrayEnemy[j].y - componentArrayEnemy[j].height / 2
        ) {
          componentArrayEnemy[j].health -= 1;
          if (componentArrayEnemy[j].health <= 0) {
            if (componentArrayEnemy[j].type === "enemyRegular") {
              this.score += 50;
              this.circles += 50;
            } else if (componentArrayEnemy[j].type === "enemyLarge") {
              this.score += 100;
              this.circles += 100;
            }

            componentArrayEnemy.splice(j, 1);
            componentArrayEnemyLength -= 1;
          }
          componentBulletArray[i].health -= 1;
          if (componentBulletArray[i].health <= 0) {
            componentBulletArray.splice(i, 1);
            componentBulletArrayLength -= 1;
          }

          this.updateScore();
          boolHit = true;
          break;
        }
      }

      if (!boolHit) {
        const self = this;
        componentArrayEnemy.forEach(function (enemy) {
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
                componentBulletArrayLength -= 1;
              }

              self.componentBulletArray[i].health -= 1;
              if (self.componentBulletArray[i].health <= 0) {
                self.componentBulletArray.splice(i, 1);
                componentBulletArrayLength -= 1;
                boolHit = true;
              }
              break;
            }
          }
        });
      }
    }
  }
};
