<template>
  <div class="p-5 border">
    <h3 class="text-dark">Login</h3>
    <p class="text-secondary">{{ message }}</p>
    <b-form class="pb-5">
      <b-form-group
        id="maincard-username-group"
        class="text-left"
        label="Username: "
        label-for="maincard-username-input"
      >
        <b-form-input
          id="maincard-username-input"
          v-model="username"
          placeholder="Enter username"
          type="text"
          required
          @keydown="onUsernameKeyDown"
        />
      </b-form-group>
      <b-form-group
        id="maincard-password-group"
        class="text-left"
        label="Password: "
        label-for="maincard-password-input"
      >
        <b-form-input
          id="maincard-password-input"
          ref="inputPassword"
          v-model="password"
          placeholder="Enter password"
          type="password"
          required
          @keydown="onPasswordKeyDown"
        />
      </b-form-group>
    </b-form>

    <b-button class="mt-5" variant="primary" @click="onLoginClick()"
      >Login</b-button
    >
  </div>
</template>

<script>
import { login } from "./script/main";

export default {
  name: "MainCard",
  components: {},
  data() {
    return {
      username: "",
      password: "",
      message: "Please enter your username and password",
    };
  },
  created() {
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (
        mutation.type === "setLastLoginSuccess" &&
        state.account.lastLoginSuccess
      ) {
        this.$router.push("/");
      } else {
        this.message = "The username or password is not correct";
      }
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  },
  methods: {
    onLoginClick: function () {
      try {
        login(this, this.username, this.password);
      } catch (e) {
        console.log();
      }
    },
    onUsernameKeyDown: function (event) {
      if (event.key === "Enter") {
        this.$refs.inputPassword.focus();
      }
    },
    onPasswordKeyDown: function (event) {
      if (event.key === "Enter") {
        this.onLoginClick();
      }
    },
  },
};
</script>
