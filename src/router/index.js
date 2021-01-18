import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  linkActiveClass: 'router-link--active',
  linkExactActiveClass: 'router-link--exact-active',
});

export default router;
