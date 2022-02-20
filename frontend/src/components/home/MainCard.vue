<template>
  <div class="w-100">
    <h1 class="title-text display-1 font-weight-bold">Arena Survival Game</h1>
    <div class="container w-100">
      <div class="spacer" />
      <div class="button-container">
        <div class="row">
          <h2 class="button-title mx-auto display-3">Play Now</h2>
        </div>
        <div class="row">
          <div class="col">
            <button class="main-button display-4" @click="onSinglePlayerClick">
              Singleplayer
            </button>
          </div>
          <div class="col">
            <button class="main-button display-4" @click="onMultiplayerClick">
              Multiplayer
            </button>
          </div>
        </div>
      </div>
      <div class="spacer" />
      <div class="button-container">
        <div class="row">
          <h2 class="button-title mx-auto display-3">Account</h2>
        </div>
        <div class="row">
          <div class="col">
            <button class="main-button display-4" @click="onCreateAccountClick">
              Create Account
            </button>
          </div>
          <div class="col">
            <button class="main-button display-4" @click="onLoginClick">
              Login
            </button>
          </div>
        </div>
      </div>
      <div class="spacer" />
      <div class="button-container">
        <div class="row">
          <h2 class="button-title mx-auto display-3">Scores</h2>
        </div>
        <div class="row">
          <div class="col">
            <button class="main-button display-4" @click="onLeaderboardClick">
              Leaderboard
            </button>
          </div>
        </div>
      </div>
      <div class="spacer" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainCard",
  components: {},
  methods: {
    onSinglePlayerClick: function () {
      this.$router.push("/singleplayer");
    },
    onMultiplayerClick: function () {
      this.$router.push("/multiplayer");
    },
    onCreateAccountClick: function () {
      this.$router.push("/createaccount");
    },
    onLoginClick: function () {
      this.$router.push("/login");
    },
    onLeaderboardClick: function () {
      this.$router.push("/leaderboard");
    },
  },
};
</script>

<style lang="scss" scoped>
@use "./style/MainCard.scss";
</style>
