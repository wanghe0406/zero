import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/finished.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/finished',
    name: 'finished',
    component: Home
  },
  {
    path: '/',
    name: 'unfinished',
    component: () => import('../views/unfinished.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
