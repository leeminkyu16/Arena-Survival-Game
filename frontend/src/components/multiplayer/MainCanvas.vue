<template>
  <div>
    <canvas
      id="canvasMain"
      width="1300"
      height="800"
      style="border: 1px solid #000000"
    >
      Please use a browser that supports canvas.
    </canvas>
  </div>
</template>

<script>
import { startGame } from "./script/main";

export default {
  name: "MainCanvas",
  components: {},
  props: {
    setInformationText: {
      type: Function,
      default: () => {},
    },
  },
  data: function () {
    return {};
  },
  mounted() {
    startGame(document.getElementById("canvasMain"), this);
  },
};
</script>
