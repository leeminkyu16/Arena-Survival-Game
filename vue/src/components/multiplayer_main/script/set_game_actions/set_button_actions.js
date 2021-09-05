export function setButtonTurnSpeedAction(vueComponent, socketio) {
  vueComponent.$store.commit("setButtonTurnSpeedAction", function () {
    socketio.emit("buttonAction", "setButtonTurnSpeedAction");
  });
}

export function setButtonForwardSpeedAction(vueComponent, socketio) {
  vueComponent.$store.commit("setButtonForwardSpeedAction", function () {
    socketio.emit("buttonAction", "setButtonForwardSpeedAction");
  });
}

export function setButtonBackwardSpeedAction(vueComponent, socketio) {
  vueComponent.$store.commit("setButtonBackwardSpeedAction", function () {
    socketio.emit("buttonAction", "setButtonBackwardSpeedAction");
  });
}

export function setButtonAttackRateAction(vueComponent, socketio) {
  vueComponent.$store.commit("setButtonAttackRateAction", function () {
    console.log("Hi");
    socketio.emit("buttonAction", "setButtonAttackRateAction");
  });
}

export function setButtonBulletSpeedAction(vueComponent, socketio) {
  vueComponent.$store.commit("setButtonBulletSpeedAction", function () {
    socketio.emit("buttonAction", "setButtonBulletSpeedAction");
  });
}

export function setButtonTripleShotAction(vueComponent, socketio) {
  vueComponent.$store.commit("setButtonTripleShotAction", function () {
    socketio.emit("buttonAction", "setButtonTripleShotAction");
  });
}
