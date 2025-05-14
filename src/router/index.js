import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';

// Create a route for the FormSample component
const routes = [
  {
    path: '/',
    name: 'Home',
    component: App
  },
  {
    path: '/form-sample',
    name: 'FormSample',
    component: () => import('../views/FormSample.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
