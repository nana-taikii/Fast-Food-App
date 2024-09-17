import { createRouter, createWebHistory } from '@ionic/vue-router';

import HomePage from '../pages/HomePage.vue'
import OrderNowPage from '../pages/OrderNowPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import SteakFries from '../pages/orders/SteakFries.vue'


const routes = [
  {
    path: '/',
    redirect: '/HomePage'
  },
  {
    path: '/HomePage',
    component: HomePage
  },
  {
    path: '/OrderNowPage',
    component:OrderNowPage,
  },
  {
    path:'/SteakFries',
    component:SteakFries
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
