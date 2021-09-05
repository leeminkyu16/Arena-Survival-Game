<template>
  <div id="app">
    <nav class="navbar navbar-light navbar-expand-sm bg-light">
      <a class="navbar-brand">
        <router-link class="text-dark" to="/">Arena Survival Game</router-link>
      </a>

      <ul class="navbar-nav px-4">
        <li class="nav-item">
          <router-link class="nav-link text-dark" to="/"
            >Singleplayer</router-link
          >
        </li>

        <li class="nav-item px-4">
          <router-link class="nav-link text-dark" to="/multiplayer"
            >Multiplayer</router-link
          >
        </li>

        <li class="nav-item px-4">
          <router-link class="nav-link text-dark" to="/leaderboard"
            >Leaderboard</router-link
          >
        </li>

        <li class="nav-item px-4">
          <router-link class="nav-link text-dark" to="/about"
            >About</router-link
          >
        </li>
      </ul>
    </nav>
    <hr />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
