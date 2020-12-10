import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/Home')
  },
  {
    path: '/item',
    name: 'item',
    component: () => import('@/views/item/Item')
  },
  {
    path: '/score',
    name: 'score',
    component: () => import('@/views/score/Score')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
