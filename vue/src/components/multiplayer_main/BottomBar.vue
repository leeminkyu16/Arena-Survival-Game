<template>
  <div>
    <table table table-bordered table-striped>
      <tr>
        <th class="px-5">
          <p class="blockquote">
            Health: {{ playerInfo.playerHealth }} /
            {{ playerInfo.playerMaxHealth }}
          </p>
        </th>
        <th class="px-5">
          <p class="blockquote">
            Bullets: {{ playerInfo.playerBulletCount }} /
            {{ playerInfo.playerMaxBulletCount }}
          </p>
        </th>
        <th class="px-5">
          <p class="blockquote">Wave {{ currentWave }} of {{ maxWave }}</p>
        </th>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
  components: {},
  computed: {
    playerInfo: {
      get() {
        return this.$store.state.playerInfo;
      },
    },
    currentWave: {
      get() {
        return this.$store.state.gameInfo.currentWave;
      },
    },
    maxWave: {
      get() {
        return this.$store.state.gameInfo.maxWave;
      },
    },
  },
};
</script>
