export function updateScore() {
  this.vueComponent.$store.commit("setScore", this.score);
  this.vueComponent.$store.commit("setCircles", this.circles);
}

export function updateHealth() {
  this.vueComponent.$store.commit(
    "setPlayerHealth",
    this.componentArrayPlayer[0].health
  );
  this.vueComponent.$store.commit(
    "setPlayerMaxHealth",
    this.componentArrayPlayer[0].maxHealth
  );
}

export function updateBullet() {
  this.vueComponent.$store.commit(
    "setPlayerBulletCount",
    this.componentArrayPlayer[0].bullet
  );
  this.vueComponent.$store.commit(
    "setPlayerMaxBulletCount",
    this.componentArrayPlayer[0].maxBullet
  );
}

export function updateWave() {
  this.vueComponent.$store.commit("setCurrentWave", this.currentWave);
  this.vueComponent.$store.commit("setMaxWave", this.maxWave);
}

export function updateAttackRateCost() {
  this.vueComponent.$store.commit("setAttackRateCost", this.attackRateCost);
}

export function updateForwardSpeedCost() {
  this.vueComponent.$store.commit("setForwardSpeedCost", this.forwardSpeedCost);
}

export function updateBackwardSpeedCost() {
  this.vueComponent.$store.commit(
    "setBackwardSpeedCost",
    this.backwardSpeedCost
  );
}

export function updateTurnSpeedCost() {
  this.vueComponent.$store.commit("setTurnSpeedCost", this.turnSpeedCost);
}

export function updateBulletSpeedCost() {
  this.vueComponent.$store.commit("setBulletSpeedCost", this.bulletSpeedCost);
}

export function updateTripleShotCost() {
  this.vueComponent.$store.commit("setTripleShotCost", this.tripleShotCost);
}
