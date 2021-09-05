const state = {
  buttonAttackRateAction: function () {},
  buttonForwardSpeedAction: function () {},
  buttonBackwardSpeedAction: function () {},
  buttonTurnSpeedAction: function () {},
  buttonBulletSpeedAction: function () {},
  buttonTripleShotAction: function () {},
};

const getters = {
  buttonAttackRateAction: (state) => state.buttonAttackRateAction,
  buttonForwardSpeedAction: (state) => state.buttonForwardSpeedAction,
  buttonBackwardSpeedAction: (state) => state.buttonBackwardSpeedAction,
  buttonTurnSpeedAction: (state) => state.buttonTurnSpeedAction,
  buttonBulletSpeedAction: (state) => state.buttonBulletSpeedAction,
  buttonTripleShotAction: (state) => state.buttonTripleShotAction,
};

const actions = {};

const mutations = {
  setButtonAttackRateAction: (state, buttonAttackRateAction) =>
    (state.buttonAttackRateAction = buttonAttackRateAction),
  setButtonForwardSpeedAction: (state, buttonForwardSpeedAction) =>
    (state.buttonForwardSpeedAction = buttonForwardSpeedAction),
  setButtonBackwardSpeedAction: (state, buttonBackwardSpeedAction) =>
    (state.buttonBackwardSpeedAction = buttonBackwardSpeedAction),
  setButtonTurnSpeedAction: (state, buttonTurnSpeedAction) =>
    (state.buttonTurnSpeedAction = buttonTurnSpeedAction),
  setButtonBulletSpeedAction: (state, buttonBulletSpeedAction) =>
    (state.buttonBulletSpeedAction = buttonBulletSpeedAction),
  setButtonTripleShotAction: (state, buttonTripleShotAction) =>
    (state.buttonTripleShotAction = buttonTripleShotAction),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
