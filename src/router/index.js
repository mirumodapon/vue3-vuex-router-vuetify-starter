import DashboardLayout from '@/components/layout/dashboard.vue'
import DashboardIndexPage from '@/pages/dashboard.vue'
import HomePage from '@/pages/home.vue'
import Page1 from '@/pages/page1.vue'
import Page2 from '@/pages/page2.vue'

import { createRouter, createWebHistory } from 'vue-router'

export const dashboard_nav = [
  {
    name: 'dashboard-index',
    path: '',
    component: DashboardIndexPage,
  },
  {
    name: 'dashboard-page1',
    label: '我是測試頁',
    icon: 'mdi-folder',
    path: 'page1',
    component: Page1,
  },
  {
    name: 'dashboard-page2',
    label: '我是另一個測試頁',
    icon: 'mdi-star',
    path: 'page2',
    component: Page2,
  },
]

export const routes = [
  {
    name: 'home',
    path: '/',
    component: HomePage,
  },
  {
    path: '/dashboard',
    component: DashboardLayout,
    children: dashboard_nav,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
