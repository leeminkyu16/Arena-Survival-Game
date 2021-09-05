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
      <tr class="divRightTr">
        <td>
          <input
            type="button"
            value="Attack Rate Increase"
            class="btn btn-secondary btn-block"
            @click="gameFunction.buttonAttackRateAction()"
          />
        </td>
        <td id="tdAttackRateCost" class="lead py-3">{{ attackRateCost }}</td>
      </tr>
      <tr class="divRightTr">
        <td>
          <input
            type="button"
            value="Forward Movement Speed Increase"
            class="btn btn-secondary btn-block"
            @click="gameFunction.buttonForwardSpeedAction()"
          />
        </td>
        <td id="tdForwardSpeedCost" class="lead py-3">
          {{ forwardSpeedCost }}
        </td>
      </tr>
      <tr class="divRightTr">
        <td>
          <input
            type="button"
            value="Backward Movement Speed Increase"
            class="btn btn-secondary btn-block"
            @click="gameFunction.buttonBackwardSpeedAction()"
          />
        </td>
        <td id="tdBackwardSpeedCost" class="lead py-3">
          {{ backwardSpeedCost }}
        </td>
      </tr>
      <tr class="divRightTr">
        <td>
          <input
            type="button"
            value="Turn Speed Increase"
            class="btn btn-secondary btn-block"
            @click="gameFunction.buttonTurnSpeedAction()"
          />
        </td>
        <td id="tdTurnSpeedCost" class="lead py-3">{{ turnSpeedCost }}</td>
      </tr>
      <tr class="divRightTr">
        <td>
          <input
            type="button"
            value="Bullet Speed Increase"
            class="btn btn-secondary btn-block"
            @click="gameFunction.buttonBulletSpeedAction()"
          />
        </td>
        <td id="tdBulletSpeedCost" class="lead py-3">{{ bulletSpeedCost }}</td>
      </tr>
      <tr class="divRightTr">
        <td>
          <input
            type="button"
            value="Diagonal Triple Shot"
            class="btn btn-secondary btn-block"
            @click="gameFunction.buttonTripleShotAction()"
          />
        </td>
        <td id="tdTripleShotCost" class="lead py-3">{{ tripleShotCost }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "RightSideBar",
  components: {},
  computed: {
    informationText: {
      get() {
        return this.$store.state.gameInfo.informationText;
      },
    },
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
    attackRateCost: {
      get() {
        return this.$store.state.gameInfo.attackRateCost;
      },
    },
    forwardSpeedCost: {
      get() {
        return this.$store.state.gameInfo.forwardSpeedCost;
      },
    },
    backwardSpeedCost: {
      get() {
        return this.$store.state.gameInfo.backwardSpeedCost;
      },
    },
    turnSpeedCost: {
      get() {
        return this.$store.state.gameInfo.turnSpeedCost;
      },
    },
    bulletSpeedCost: {
      get() {
        return this.$store.state.gameInfo.bulletSpeedCost;
      },
    },
    tripleShotCost: {
      get() {
        return this.$store.state.gameInfo.tripleShotCost;
      },
    },
    gameFunction: {
      get() {
        return this.$store.state.gameFunction;
      },
    },
  },
};
</script>

<style scoped></style>
