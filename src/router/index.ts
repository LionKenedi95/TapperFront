import { createRouter, createWebHistory } from 'vue-router'
import RootView from '../views/RootView.vue'
import WelcomePage1 from '@/views/WelcomePage1.vue'
import HomePage from '@/views/HomePage.vue'
import { Routes } from '@/constants/Routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: Routes.Root,
      component: RootView,
    },
    {
      path: '/welcome/1',
      name: Routes.WelcomePage1,
      component: WelcomePage1,
    },
    {
      parh: '/home',
      name: Routes.Home,
      component: HomePage,
    },
    {
      path: '/action',
      name: Routes.ActionPage,
      component: () => import('@/views/ActionPage.vue'),
    }
  ]
})

export default router
