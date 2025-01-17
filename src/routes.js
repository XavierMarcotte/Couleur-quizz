import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/HomePage.vue";
import NameGame from "./components/NameGame.vue";
import ColorGame from "./components/ColorGame.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/name",
    name: "NameGame",
    component: NameGame,
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
