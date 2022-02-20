<template>
  <div>
    <table class="table table-bordered table-striped table-hover">
      <tr>
        <th colspan="2">
          <p class="h1 py-3">Arena Survival Game</p>
        </th>
      </tr>
      <tr>
        <td colspan="2">
          <p class="blockquote">
            {{ informationText }}
          </p>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <p class="blockquote">Score: {{ score }}</p>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <p class="blockquote">Circles: {{ circles }}</p>
        </td>
      </tr>
      <tr>
        <th scope="col">Upgrades</th>
        <th scope="col">Cost</th>
      </tr>
      <template v-for="info in buttonInfo">
        <tr :key="info.label">
          <td>
            <input
              type="button"
              :value="info.label"
              class="btn btn-secondary btn-block"
              @click="info.onClick"
            />
          </td>
          <td class="lead py-3">{{ info.cost }}</td>
        </tr>
      </template>
      <tr>
        <td colspan="2">
          <b-button class="btn-block" @click="onSaveClick()">Save</b-button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "RightSideBar",
  components: {},
  props: {
    stopGame: {
      type: Function,
      default: () => {},
    },
    buttonActions: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      informationText: "",
      buttonInfo: [],
    };
  },
  computed: {
    score: {
      get() {
        return this.$store.state.gameInfo.score;
      },
    },
    circles: {
      get() {
        return this.$store.state.gameInfo.circles;
      },
    },
  },
  watch: {
    buttonActions: function (newButtonActions) {
      const self = this;
      this.buttonInfo = [
        {
          label: "Attack Rate Increase",
          onClick: newButtonActions.buttonAttackRateAction,
          get cost() {
            return self.$store.state.gameInfo.attackRateCost;
          },
        },
        {
          label: "Forward Movement Speed Increase",
          onClick: newButtonActions.buttonForwardSpeedAction,
          get cost() {
            return self.$store.state.gameInfo.forwardSpeedCost;
          },
        },
        {
          label: "Backward Movement Speed Increase",
          onClick: newButtonActions.buttonBackwardSpeedAction,
          get cost() {
            return self.$store.state.gameInfo.backwardSpeedCost;
          },
        },
        {
          label: "Turn Speed Increase",
          onClick: newButtonActions.buttonTurnSpeedAction,
          get cost() {
            return self.$store.state.gameInfo.turnSpeedCost;
          },
        },
        {
          label: "Bullet Speed Increase",
          onClick: newButtonActions.buttonBulletSpeedAction,
          get cost() {
            return self.$store.state.gameInfo.bulletSpeedCost;
          },
        },
        {
          label: "Diagonal Triple Shot",
          onClick: newButtonActions.buttonTripleShotAction,
          get cost() {
            return self.$store.state.gameInfo.tripleShotCost;
          },
        },
      ];
    },
  },
  created() {},
  mounted() {
    this.$emit("set-information-text", (newText) => {
      this.informationText = newText;
    });
  },
  methods: {
    onSaveClick: function () {
      if (this.$store.getters.accessToken !== "") {
        this.$bvModal.show("saveModal");
      }
      this.stopGame();
    },
  },
};
</script>

<style scoped></style>
