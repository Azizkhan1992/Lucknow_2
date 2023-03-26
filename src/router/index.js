import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomePage.vue"),
    },
    {
      path: "/menu",
      name: "menu",
      component: () => import("../views/MenuPage.vue"),
    },
    {
      path: "/treending",
      name: "trending",
      component: () => import("../views/TrendingPage.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("../views/SettingsPage.vue"),
    },
  ],
});

export default router;
