exports.setButtonActions = function (socket) {
  const player = this.componentMapPlayer.get(socket.id);
  socket.on("buttonAction", (actionType) => {
    switch (actionType) {
      case "setButtonTurnSpeedAction":
        if (player.circles >= player.turnSpeedCost) {
          player.circles -= player.turnSpeedCost;
          player.turnSpeed += 1;
          player.turnSpeedCost *= 2;
          player.updateTurnSpeedCost();
          player.updateScore();
        } else {
          player.setInformationText("You have insufficient Circles.");
        }
        break;
      case "setButtonForwardSpeedAction":
        if (player.circles >= player.forwardSpeedCost) {
          player.circles -= player.forwardSpeedCost;
          player.forwardSpeed += 1;
          player.forwardSpeedCost *= 2;
          player.updateForwardSpeedCost();
          player.updateScore();
        } else {
          player.setInformationText("You have insufficient Circles.");
        }
        break;
      case "setButtonBackwardSpeedAction":
        if (player.circles >= player.backwardSpeedCost) {
          player.circles -= player.backwardSpeedCost;
          player.backwardSpeed += 1;
          player.backwardSpeedCost *= 2;
          player.updateBackwardSpeedCost();
          player.updateScore();
        } else {
          player.setInformationText("You have insufficient Circles.");
        }
        break;
      case "setButtonAttackRateAction":
        if (player.circles >= player.attackRateCost) {
          player.circles -= player.attackRateCost;
          player.cooldownShoot /= 1.5;
          player.attackRateCost *= 2;
          player.updateAttackRateCost();
          player.updateScore();
        } else {
          player.setInformationText("You have insufficient Circles.");
        }
        break;
      case "setButtonBulletSpeedAction":
        if (player.circles >= player.bulletSpeedCost) {
          player.circles -= player.bulletSpeedCost;
          player.bulletSpeed += 1;
          player.bulletSpeedCost *= 2;
          player.updateBulletSpeedCost();
          player.updateScore();
        } else {
          player.setInformationText("You have insufficient Circles.");
        }
        break;
      case "setButtonTripleShotAction":
        if (player.circles >= player.tripleShotCost) {
          player.circles -= player.tripleShotCost;
          player.abilityTripleShot += 1;
          player.tripleShotCost *= 2;
          player.updateTripleShotCost();
          player.updateScore();
        } else {
          player.setInformationText("You have insufficient Circles.");
        }
        break;
    }
  });
};
