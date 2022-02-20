const state = {
  score: 0,
  circles: 0,
  currentWave: 0,
  maxWave: 0,
  attackRateCost: 0,
  forwardSpeedCost: 0,
  backwardSpeedCost: 0,
  turnSpeedCost: 0,
  bulletSpeedCost: 0,
  tripleShotCost: 0,
};

const getters = {
  score: (state) => state.score,
  circles: (state) => state.circles,
  currentWave: (state) => state.currentWave,
  maxWave: (state) => state.maxWave,
  attackRateCost: (state) => state.attackRateCost,
  forwardSpeedCost: (state) => state.forwardSpeedCost,
  backwardSpeedCost: (state) => state.backwardSpeedCost,
  turnSpeedCost: (state) => state.turnSpeedCost,
  bulletSpeedCost: (state) => state.bulletSpeedCost,
  tripleShotCost: (state) => state.tripleShotCost,
};

const actions = {};

const mutations = {
  setScore: (state, score) => (state.score = score),
  setCircles: (state, circles) => (state.circles = circles),
  setCurrentWave: (state, currentWave) => (state.currentWave = currentWave),
  setMaxWave: (state, maxWave) => (state.maxWave = maxWave),
  setAttackRateCost: (state, attackRateCost) =>
    (state.attackRateCost = attackRateCost),
  setForwardSpeedCost: (state, forwardSpeedCost) =>
    (state.forwardSpeedCost = forwardSpeedCost),
  setBackwardSpeedCost: (state, backwardSpeedCost) =>
    (state.backwardSpeedCost = backwardSpeedCost),
  setTurnSpeedCost: (state, turnSpeedCost) =>
    (state.turnSpeedCost = turnSpeedCost),
  setBulletSpeedCost: (state, bulletSpeedCost) =>
    (state.bulletSpeedCost = bulletSpeedCost),
  setTripleShotCost: (state, tripleShotCost) =>
    (state.tripleShotCost = tripleShotCost),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
