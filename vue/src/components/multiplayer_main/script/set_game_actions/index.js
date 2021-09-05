import {
  setButtonTurnSpeedAction,
  setButtonForwardSpeedAction,
  setButtonBackwardSpeedAction,
  setButtonAttackRateAction,
  setButtonBulletSpeedAction,
  setButtonTripleShotAction,
} from "./set_button_actions";

export function setGameActions(vueComponent, socketio) {
  setButtonTurnSpeedAction(vueComponent, socketio);
  setButtonForwardSpeedAction(vueComponent, socketio);
  setButtonBackwardSpeedAction(vueComponent, socketio);
  setButtonAttackRateAction(vueComponent, socketio);
  setButtonBulletSpeedAction(vueComponent, socketio);
  setButtonTripleShotAction(vueComponent, socketio);
}
