<template>
  <div>
    <SaveModal :start-game="startGame" />
    <GameOverModal />
    <b-container fluid="true">
      <b-row class="min-vh-80 justify-content-center">
        <b-col class="align-self-center">
          <MainCanvas
            :set-information-text="setInformationText"
            @set-start-stop-game="setStartStopGame"
            @set-button-actions="buttonActions = $event"
          />
        </b-col>
        <b-col class="col-3 align-self-center">
          <RightSideBar
            :stop-game="stopGame"
            :button-actions="buttonActions"
            @set-information-text="setInformationText = $event"
          />
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="4">
          <div>
            <BottomBar />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import MainCanvas from "@/components/singleplayer/MainCanvas.vue";
import RightSideBar from "@/components/singleplayer/RightSideBar.vue";
import BottomBar from "@/components/singleplayer/BottomBar.vue";
import GameOverModal from "@/components/singleplayer/GameOverModal";
import SaveModal from "@/components/singleplayer/SaveModal";

export default {
  name: "Singleplayer",
  components: {
    MainCanvas,
    RightSideBar,
    BottomBar,
    GameOverModal,
    SaveModal,
  },
  data() {
    return {
      startGame: () => {},
      stopGame: () => {},
      setInformationText: (newText) => {
        setTimeout(() => {
          this.setInformationText(newText), 200;
        });
      },
      buttonActions: {},
    };
  },
  methods: {
    setStartStopGame: function (event) {
      const { startGame, stopGame } = event;
      this.startGame = startGame;
      this.stopGame = stopGame;
    },
  },
};
</script>

<style scoped>
.min-vh-80 {
  min-height: 80vh;
}
</style>
