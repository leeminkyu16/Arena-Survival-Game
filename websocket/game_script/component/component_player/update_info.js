exports.setInformationText = function (informationText) {
  this.gameArea.socketio
    .to(this.id)
    .emit("setInformationText", informationText);
};

exports.updateAllInfo = function () {
  this.updateScore();
  this.updateHealth();
  this.updateAttackRateCost();
  this.updateForwardSpeedCost();
  this.updateBackwardSpeedCost();
  this.updateTurnSpeedCost();
  this.updateBulletSpeedCost();
  this.updateTripleShotCost();
}

exports.updateScore = function () {
  this.gameArea.socketio.to(this.id).emit("updateScore", {
    score: this.score,
    circles: this.circles,
  });
};

exports.updateHealth = function () {
  this.gameArea.socketio.to(this.id).emit("updateHealth", {
    health: this.health,
    maxHealth: this.maxHealth,
  });
};

exports.updateBullet = function () {
  this.gameArea.socketio.to(this.id).emit("updateBullet", {
    bullet: this.bullet,
    maxBullet: this.maxBullet,
  });
};

exports.updateAttackRateCost = function () {
  this.gameArea.socketio.to(this.id).emit("updateAttackRateCost", {
    attackRateCost: this.attackRateCost,
  });
};

exports.updateForwardSpeedCost = function () {
  this.gameArea.socketio.to(this.id).emit("updateForwardSpeedCost", {
    forwardSpeedCost: this.forwardSpeedCost,
  });
};

exports.updateBackwardSpeedCost = function () {
  this.gameArea.socketio.to(this.id).emit("updateBackwardSpeedCost", {
    backwardSpeedCost: this.backwardSpeedCost,
  });
};

exports.updateTurnSpeedCost = function () {
  this.gameArea.socketio.to(this.id).emit("updateTurnSpeedCost", {
    turnSpeedCost: this.turnSpeedCost,
  });
};

exports.updateBulletSpeedCost = function () {
  this.gameArea.socketio.to(this.id).emit("updateBulletSpeedCost", {
    bulletSpeedCost: this.bulletSpeedCost,
  });
};

exports.updateTripleShotCost = function () {
  this.gameArea.socketio.to(this.id).emit("updateTripleShotCost", {
    tripleShotCost: this.tripleShotCost,
  });
};
