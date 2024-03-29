import { createRouter, createWebHistory } from 'vue-router';
import Orders                             from '@/components/Orders';
import Products                           from '@/components/products/Products';

const routes = [
  {
    path: '/',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;