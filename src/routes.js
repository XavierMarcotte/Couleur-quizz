import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/HomePage.vue";
import NameGameVue from "./components/Namegame.vue";
import ColorGame from "./components/ColorGame.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/name",
    name: "NameGameVue",
    component: NameGameVue,
  },
  {
    path: "/color",
    name: "ColorGame",
    component: ColorGame,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
