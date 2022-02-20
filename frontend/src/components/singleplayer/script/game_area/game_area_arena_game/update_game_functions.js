export function updateGameFunctions() {
  this.updateAttackRateCost();
  this.updateForwardSpeedCost();
  this.updateBackwardSpeedCost();
  this.updateTurnSpeedCost();
  this.updateBulletSpeedCost();
  this.updateTripleShotCost();

  this.vueComponent.$emit("set-button-actions", {
    buttonAttackRateAction: this.buttonAttackRateAction.bind(this),
    buttonForwardSpeedAction: this.buttonForwardSpeedAction.bind(this),
    buttonBackwardSpeedAction: this.buttonBackwardSpeedAction.bind(this),
    buttonTurnSpeedAction: this.buttonTurnSpeedAction.bind(this),
    buttonBulletSpeedAction: this.buttonBulletSpeedAction.bind(this),
    buttonTripleShotAction: this.buttonTripleShotAction.bind(this),
  });
}
