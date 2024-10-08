import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cardapio",
      name: "cardapio",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Cardapio.vue"),
    },
    {
      path: "/CardBebidas",
      name: "CardBebidas",
      component: () => import("../components/CardBebidas.vue"),
    },
    {
      path: "/CardDrinks",
      name: "CardDrinks",
      component: () => import("../components/CardDrinks.vue"),
    },
  ],
});

export default router;
