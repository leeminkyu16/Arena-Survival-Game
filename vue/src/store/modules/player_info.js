const state = {
  playerHealth: 0,
  playerMaxHealth: 0,
  playerBulletCount: 0,
  playerMaxBulletCount: 0,
};

const getters = {
  playerHealth: (state) => state.playerHealth,
  playerMaxHealth: (state) => state.playerMaxHealth,
  playerBulletCount: (state) => state.playerBulletCount,
  playerMaxBulletCount: (state) => state.playerMaxBulletCount,
};

const actions = {};

const mutations = {
  setPlayerHealth: (state, playerHealth) => (state.playerHealth = playerHealth),
  setPlayerMaxHealth: (state, playerMaxHealth) =>
    (state.playerMaxHealth = playerMaxHealth),
  setPlayerBulletCount: (state, playerBulletCount) =>
    (state.playerBulletCount = playerBulletCount),
  setPlayerMaxBulletCount: (state, playerMaxBulletCount) =>
    (state.playerMaxBulletCount = playerMaxBulletCount),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
