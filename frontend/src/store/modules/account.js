const state = {
  accessToken: "",
  lastLoginSuccess: false,
};

const getters = {
  accessToken: (state) => state.accessToken,
  lastLoginSuccess: (state) => state.lastLoginSuccess,
};

const actions = {};

const mutations = {
  setAccessToken: (state, accessToken) => (state.accessToken = accessToken),
  setLastLoginSuccess: (state, lastLoginSuccess) =>
    (state.lastLoginSuccess = lastLoginSuccess),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
