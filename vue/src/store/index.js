import Vuex from "vuex";
import Vue from "vue";
import gameInfo from "./modules/game_info";
import gameFunction from "./modules/game_function";
import playerInfo from "./modules/player_info";
import saveData from "./modules/save_data";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    gameInfo,
    gameFunction,
    playerInfo,
    saveData,
  },
});
