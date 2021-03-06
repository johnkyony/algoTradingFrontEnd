import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ShowTrades from '../views/ShowTrades.vue'
import ShowPendingTrades from '../views/ShowPendingTrades.vue'
import ShowOpenPositions from '../views/ShowOpenPositions.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, 
  {
    path: '/ShowTrades',
    name: 'ShowTrades',
    component: ShowTrades, 
    props: true

  },
  {
    path: '/ShowPendingTrades',
    name: 'ShowPendingTrades',
    component: ShowPendingTrades, 
    props: true

  },
  {
    path: '/ShowOpenPositions',
    name: 'ShowOpenPositions',
    component: ShowOpenPositions, 
    props: true

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
