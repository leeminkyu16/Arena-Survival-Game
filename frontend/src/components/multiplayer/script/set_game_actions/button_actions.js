export function buttonTurnSpeedAction(socketio) {
  socketio.emit("buttonAction", "buttonTurnSpeedAction");
}

export function buttonForwardSpeedAction(socketio) {
  socketio.emit("buttonAction", "buttonForwardSpeedAction");
}

export function buttonBackwardSpeedAction(socketio) {
  socketio.emit("buttonAction", "buttonBackwardSpeedAction");
}

export function buttonAttackRateAction(socketio) {
  socketio.emit("buttonAction", "buttonAttackRateAction");
}

export function buttonBulletSpeedAction(socketio) {
  socketio.emit("buttonAction", "buttonBulletSpeedAction");
}

export function buttonTripleShotAction(socketio) {
  socketio.emit("buttonAction", "buttonTripleShotAction");
}
