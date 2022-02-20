<template>
  <b-navbar type="light" varient="primary">
    <b-navbar-brand to="/">Arena Survival Game</b-navbar-brand>

    <b-navbar-nav>
      <template v-for="item in leftBarItems">
        <b-nav-item
          :key="item.name"
          :to="item.url"
          exact-active-class="active"
          >{{ item.name }}</b-nav-item
        >
      </template>
    </b-navbar-nav>

    <b-navbar class="ml-auto navbar-dropdown">
      <b-nav-item-dropdown text="Account" right>
        <div v-if="emptyToken">
          <b-dropdown-item to="/createaccount">
            Create Account
          </b-dropdown-item>
          <b-dropdown-item to="/login"> Login </b-dropdown-item>
        </div>

        <b-dropdown-item v-else @click="onLogoutClick()">
          Logout
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar>
  </b-navbar>
</template>

<script>
import { logout } from "./script/main";

export default {
  name: "NavBar",
  components: {},
  data() {
    return { token: "", leftBarItems: [] };
  },
  computed: {
    emptyToken: function () {
      return this.token === "";
    },
  },
  watch: {},
  created() {
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === "setAccessToken") {
        this.token = state.account.accessToken;
      }
    });

    this.leftBarItems = [
      {
        name: "Singleplayer",
        url: "/singleplayer",
      },
      {
        name: "Multiplayer",
        url: "/multiplayer",
      },
      {
        name: "Saves",
        url: "/saves",
      },
      {
        name: "Leaderboard",
        url: "/leaderboard",
      },
    ];
  },
  beforeDestroy() {
    this.unsubscribe();
  },
  methods: {
    onLogoutClick: function () {
      logout(this);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="scss">
@use "./style/NavBar.scss";
</style>
