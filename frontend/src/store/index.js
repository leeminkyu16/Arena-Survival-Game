import Vuex from "vuex";
import Vue from "vue";
import gameInfo from "./modules/game_info";
import playerInfo from "./modules/player_info";
import saveData from "./modules/save_data";
import account from "./modules/account";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    gameInfo,
    playerInfo,
    saveData,
    account,
  },
});
