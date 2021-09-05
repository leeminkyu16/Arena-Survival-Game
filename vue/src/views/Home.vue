<template>
  <div>
    <GameOverModal />
    <div class="row">
      <div class="col-sm-9">
        <MainCanvas />
      </div>
      <div class="col-sm-3">
        <RightSideBar />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <BottomBar />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainCanvas from "@/components/home/MainCanvas.vue";
import RightSideBar from "@/components/home/RightSideBar.vue";
import BottomBar from "@/components/home/BottomBar.vue";
import GameOverModal from "@/components/home/GameOverModal";

export default {
  name: "Home",
  components: {
    MainCanvas,
    RightSideBar,
    BottomBar,
    GameOverModal,
  },
};
</script>
