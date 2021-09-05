import {
  setInformationText,
  updateScore,
  updateHealth,
  updateBullet,
  updateWave,
  updateAttackRateCost,
  updateForwardSpeedCost,
  updateBackwardSpeedCost,
  updateTurnSpeedCost,
  updateBulletSpeedCost,
  updateTripleShotCost,
} from "./update";

export function setUpdateGameValues(vueComponent, socketio) {
  setInformationText(vueComponent, socketio);
  updateScore(vueComponent, socketio);
  updateHealth(vueComponent, socketio);
  updateBullet(vueComponent, socketio);
  updateWave(vueComponent, socketio);
  updateAttackRateCost(vueComponent, socketio);
  updateForwardSpeedCost(vueComponent, socketio);
  updateBackwardSpeedCost(vueComponent, socketio);
  updateTurnSpeedCost(vueComponent, socketio);
  updateBulletSpeedCost(vueComponent, socketio);
  updateTripleShotCost(vueComponent, socketio);
}
