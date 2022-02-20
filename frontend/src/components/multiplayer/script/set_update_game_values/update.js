export function setInformationText(vueComponent, socketio) {
  socketio.on("setInformationText", function (data) {
    vueComponent.setInformationText(data);
  });
}

export function updateScore(vueComponent, socketio) {
  socketio.on("updateScore", function (data) {
    vueComponent.$store.commit("setScore", data.score);
    vueComponent.$store.commit("setCircles", data.circles);
  });
}

export function updateHealth(vueComponent, socketio) {
  socketio.on("updateHealth", function (data) {
    vueComponent.$store.commit("setPlayerHealth", data.health);
    vueComponent.$store.commit("setPlayerMaxHealth", data.maxHealth);
  });
}

export function updateBullet(vueComponent, socketio) {
  socketio.on("updateBullet", function (data) {
    vueComponent.$store.commit("setPlayerBulletCount", data.bullet);
    vueComponent.$store.commit("setPlayerMaxBulletCount", data.maxBullet);
  });
}

export function updateWave(vueComponent, socketio) {
  socketio.on("updateWave", function (data) {
    vueComponent.$store.commit("setCurrentWave", data.currentWave);
    vueComponent.$store.commit("setMaxWave", data.maxWave);
  });
}

export function updateAttackRateCost(vueComponent, socketio) {
  socketio.on("updateAttackRateCost", function (data) {
    vueComponent.$store.commit("setAttackRateCost", data.attackRateCost);
  });
}

export function updateForwardSpeedCost(vueComponent, socketio) {
  socketio.on("updateForwardSpeedCost", function (data) {
    vueComponent.$store.commit("setForwardSpeedCost", data.forwardSpeedCost);
  });
}

export function updateBackwardSpeedCost(vueComponent, socketio) {
  socketio.on("updateBackwardSpeedCost", function (data) {
    vueComponent.$store.commit("setBackwardSpeedCost", data.backwardSpeedCost);
  });
}

export function updateTurnSpeedCost(vueComponent, socketio) {
  socketio.on("updateTurnSpeedCost", function (data) {
    vueComponent.$store.commit("setTurnSpeedCost", data.turnSpeedCost);
  });
}

export function updateBulletSpeedCost(vueComponent, socketio) {
  socketio.on("updateBulletSpeedCost", function (data) {
    vueComponent.$store.commit("setBulletSpeedCost", data.bulletSpeedCost);
  });
}

export function updateTripleShotCost(vueComponent, socketio) {
  socketio.on("updateTripleShotCost", function (data) {
    vueComponent.$store.commit("setTripleShotCost", data.tripleShotCost);
  });
}
