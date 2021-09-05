<template>
  <div>
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
import MainCanvas from "@/components/multiplayer_main/MainCanvas.vue";
import RightSideBar from "@/components/home/RightSideBar.vue";
import BottomBar from "@/components/home/BottomBar.vue";

export default {
  name: "Multiplayer",
  components: { MainCanvas, RightSideBar, BottomBar },
};
</script>
