const { ComponentEnemy } = require("../../component/component_enemy");

exports.spawnEnemy = function () {
  if (this.timerSpawn > 0) {
    this.timerSpawn -= 1;
  } else if (this.timerSpawn <= 0) {
    if (Math.random() * 100 < this.chanceSpawn) {
      this.componentArrayEnemy.push(
        new ComponentEnemy(
          this,
          30,
          30,
          Math.random() * this.width,
          Math.random() * this.height,
          Math.random() * (Math.PI * 2),
          "red",
          "enemyRegular",
          0,
          1,
          100
        )
      );
    }

    if (Math.random() * 500 < this.chanceSpawn && this.currentWave > 3) {
      this.componentArrayEnemy.push(
        new ComponentEnemy(
          this,
          36,
          36,
          Math.random() * this.width,
          Math.random() * this.height,
          Math.random() * (Math.PI * 2),
          "red",
          "enemyLarge",
          0,
          2,
          75
        )
      );
    }

    this.timerSpawn += this.cooldownSpawn;
  }

  if (this.currentWave < this.maxWave) {
    if (this.timerCooldownSpawnDecrease > 0) {
      this.timerCooldownSpawnDecrease -= 1;
    } else if (this.timerCooldownSpawnDecrease <= 0) {
      this.cooldownSpawn -= 25;
      this.timerCooldownSpawnDecrease = this.cooldownCooldownSpawnDecrease;
      this.currentWave += 1;
      this.updateWave();
    }

    if (this.timerChanceSpawnIncrease > 0) {
      this.timerChanceSpawnIncrease -= 1;
    } else if (this.timerChanceSpawnIncrease <= 0) {
      this.chanceSpawn += 5;
      this.timerChanceSpawnIncrease = this.cooldownChanceSpawnIncrease;
    }
  }
};
