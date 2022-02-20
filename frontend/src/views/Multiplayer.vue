<template>
  <div>
    <b-container fluid="true">
      <b-row class="min-vh-80 justify-content-center">
        <b-col class="align-self-center">
          <MainCanvas
            :set-information-text="setInformationText"
            @set-button-actions="buttonActions = $event"
          />
        </b-col>
        <b-col class="col-3 align-self-center">
          <RightSideBar
            :button-actions="buttonActions"
            @set-information-text="setInformationText = $event"
          />
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="4">
          <BottomBar />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MainCanvas from "@/components/multiplayer/MainCanvas.vue";
import RightSideBar from "@/components/multiplayer/RightSideBar.vue";
import BottomBar from "@/components/multiplayer/BottomBar.vue";

export default {
  name: "Multiplayer",
  components: { MainCanvas, RightSideBar, BottomBar },
  data() {
    return {
      setInformationText: (newText) => {
        setTimeout(() => {
          this.setInformationText(newText), 200;
        });
      },
      buttonActions: {},
    };
  },
  methods: {},
};
</script>

<style scoped>
.min-vh-80 {
  min-height: 80vh;
}
</style>
