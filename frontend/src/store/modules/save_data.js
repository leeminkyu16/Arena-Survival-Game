const state = { currentSave: null };

const getters = { currentSave: (state) => state.currentSave };
const actions = {};

const mutations = {
  setCurrentSave: (state, currentSave) => (state.currentSave = currentSave),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
