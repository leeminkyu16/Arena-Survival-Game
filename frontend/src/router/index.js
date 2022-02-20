import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      title: "Arena Survival Game",
    },
  },
  {
    path: "/singleplayer",
    name: "Singleplayer",
    component: () => import("../views/Singleplayer.vue"),
  },
  {
    path: "/multiplayer",
    name: "Multiplayer",
    component: () => import("../views/Multiplayer.vue"),
  },
  {
    path: "/leaderboard",
    name: "Leaderboard",
    component: () => import("../views/Leaderboard.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/createaccount",
    name: "CreateAccount",
    component: () => import("../views/CreateAccount.vue"),
  },
  {
    path: "/saves",
    name: "Saves",
    component: () => import("../views/Saves.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
