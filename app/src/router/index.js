import Vue from 'vue'
import VueRouter from 'vue-router'
import indexView from '../views/index/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: indexView
  },

]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router