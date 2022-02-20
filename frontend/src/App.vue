<template>
  <div id="app">
    <NavBar />

    <hr class="mt-0" />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/app/NavBar.vue";
import { AccountDataService } from "./services/account_data_service";

export default {
  components: { NavBar },
  metaInfo: {
    title: "Arena Survival Game",
  },
  created() {
    if (!this.$store.state.account.accessToken) {
      AccountDataService.refresh(this);
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

html,
body {
  height: 100%;
}
</style>
