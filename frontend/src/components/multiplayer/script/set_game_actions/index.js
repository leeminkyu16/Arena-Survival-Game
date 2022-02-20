import {
  buttonTurnSpeedAction,
  buttonForwardSpeedAction,
  buttonBackwardSpeedAction,
  buttonAttackRateAction,
  buttonBulletSpeedAction,
  buttonTripleShotAction,
} from "./button_actions";

export function setGameActions(vueComponent, socketio) {
  vueComponent.$emit("set-button-actions", {
    buttonTurnSpeedAction: () => {
      buttonTurnSpeedAction(socketio);
    },
    buttonForwardSpeedAction: () => {
      buttonForwardSpeedAction(socketio);
    },
    buttonBackwardSpeedAction: () => {
      buttonBackwardSpeedAction(socketio);
    },
    buttonAttackRateAction: () => {
      buttonAttackRateAction(socketio);
    },
    buttonBulletSpeedAction: () => {
      buttonBulletSpeedAction(socketio);
    },
    buttonTripleShotAction: () => {
      buttonTripleShotAction(socketio);
    },
  });
}
