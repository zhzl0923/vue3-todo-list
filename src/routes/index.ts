import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/index.vue"),
      redirect: "/all",
      children: [
        {
          path: "/all",
          component: () => import("@/views/AllTodos.vue"),
        },
        {
          path: "/unfinished",
          component: () => import("@/views/Unfinished.vue"),
        },
        {
          path: "/finished",
          component: () => import("@/views/Finished.vue"),
        },
      ],
    },
  ],
});
