import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/newsDetail',
    name: 'newsDetail',
    component: () => import('../views/NewsDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
