import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: "",
    name: "dashboardContainer",
    component: () => import("@/layouts/dashboard.vue"),
    redirect: {name: "home",},
    children: [
      {
        path: '',
        name: 'home',
        component: () => import("@/views/home.vue"),
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {x: 0, y: 0}
  }
});

export default router
