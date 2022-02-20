export function buttonTurnSpeedAction() {
  console.log(this.circles);
  if (this.circles >= this.turnSpeedCost) {
    this.circles -= this.turnSpeedCost;
    this.componentArrayPlayer[0].turnSpeed += 1;
    this.turnSpeedCost *= 2;
    this.updateTurnSpeedCost();
    this.updateScore();
  } else {
    this.setInformationText("You have insufficient Circles.");
  }
}

export function buttonForwardSpeedAction() {
  if (this.circles >= this.forwardSpeedCost) {
    this.circles -= this.forwardSpeedCost;
    this.componentArrayPlayer[0].forwardSpeed += 1;
    this.forwardSpeedCost *= 2;
    this.updateForwardSpeedCost();
    this.updateScore();
  } else {
    this.setInformationText("You have insufficient Circles.");
  }
}

export function buttonBackwardSpeedAction() {
  if (this.circles >= this.backwardSpeedCost) {
    this.circles -= this.backwardSpeedCost;
    this.componentArrayPlayer[0].backwardSpeed += 1;
    this.backwardSpeedCost *= 2;
    this.updateBackwardSpeedCost();
    this.updateScore();
  } else {
    this.setInformationText("You have insufficient Circles.");
  }
}

export function buttonAttackRateAction() {
  if (this.circles >= this.attackRateCost) {
    this.circles -= this.attackRateCost;
    this.componentArrayPlayer[0].cooldownShoot /= 1.5;
    this.attackRateCost *= 2;
    this.updateAttackRateCost();
    this.updateScore();
  } else {
    this.setInformationText("You have insufficient Circles.");
  }
}

export function buttonBulletSpeedAction() {
  if (this.circles >= this.bulletSpeedCost) {
    this.circles -= this.bulletSpeedCost;
    this.componentArrayPlayer[0].bulletSpeed += 1;
    this.bulletSpeedCost *= 2;
    this.updateBulletSpeedCost();
    this.updateScore();
  } else {
    this.setInformationText("You have insufficient Circles.");
  }
}

export function buttonTripleShotAction() {
  if (this.circles >= this.tripleShotCost) {
    this.circles -= this.tripleShotCost;
    this.componentArrayPlayer[0].abilityTripleShot += 1;
    this.tripleShotCost *= 2;
    this.updateTripleShotCost();
    this.updateScore();
  } else {
    this.setInformationText("You have insufficient Circles.");
  }
}
