import { createRouter, createWebHistory } from 'vue-router';
import Welcome from './views/Welcome.vue';
import Home from './views/Home.vue';

const routes = [
  { path: '/', component: Welcome },
  { path: '/home', component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
