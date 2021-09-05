export function updateGameFunctions() {
  this.updateAttackRateCost();
  this.updateForwardSpeedCost();
  this.updateBackwardSpeedCost();
  this.updateTurnSpeedCost();
  this.updateBulletSpeedCost();
  this.updateTripleShotCost();

  this.setButtonAttackRateAction();
  this.setButtonForwardSpeedAction();
  this.setButtonBackwardSpeedAction();
  this.setButtonTurnSpeedAction();
  this.setButtonBulletSpeedAction();
  this.setButtonTripleShotAction();
}
