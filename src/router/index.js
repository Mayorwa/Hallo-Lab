import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: "",
    name: "dashboardContainer",
    component: () => import("@/layouts/dashboard.vue"),
    redirect: {name: "overview",},
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: () => import("@/views/overview.vue"),
      },
      {
        path: 'services',
        name: 'services',
        component: () => import("@/views/services.vue"),
      },
      {
        path: 'transactions',
        name: 'transactions',
        component: () => import("@/views/transactions.vue"),
      },
      {
        path: 'office',
        name: 'office',
        component: () => import("@/views/office.vue"),
      },
      {
        path: 'customer',
        name: 'customer',
        component: () => import("@/views/customer.vue"),
      },
      {
        path: 'employee',
        name: 'employee',
        component: () => import("@/views/employee.vue"),
      },
      {
        path: 'order',
        name: 'order',
        component: () => import("@/views/order.vue"),
      },
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
