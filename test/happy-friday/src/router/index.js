import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home'
import Item from '@/views/item/Item'
import Score from '@/views/score/Score'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/item',
    name: 'item',
    component: Item
  },
  {
    path: '/score',
    name: 'score',
    component: Score
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
