import { RouteRecordRaw, Router, RouterHistory, createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
]

const history: RouterHistory = createWebHistory()

const router: Router = createRouter({
  history,
  routes,
})

export default router
