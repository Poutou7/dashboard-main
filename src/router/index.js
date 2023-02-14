import { createRouter, createWebHistory } from "vue-router";
import DashboardHome from '../views/DashboardHome.vue';
import BranchManagement from '../views/BranchManagement.vue';

const routes = [
  {
    path: "/",
    name: "home",
    component: DashboardHome,
  },
  {
    path: "/chat",
    name: "chat",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ChatView.vue"),
  },
  {
    path: "/branch-management",
    name: 'branch-management',
    component: BranchManagement,
  },
  {
    path: "/emploee-list",
    name: 'emploee-list',
    component: BranchManagement
  },
  {
    path: "/role-list",
    name: 'role-list',
    component: BranchManagement
  },
  {
    path: "/emploee-log",
    name: 'emploee-log',
    component: BranchManagement
  },
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
