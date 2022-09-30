import Vue from 'vue'
import VueRouter from 'vue-router'
import indexView from '../views/index/index'
import listView from '../views/goods/list'
import infoView from '../views/goods/info'
import cartView from '../views/goods/cart'
import orderView from '../views/goods/order'

import loginView from '../views/user/login'
import findInfoView from '../views/user/find_info';
import joinView from '../views/user/join';


import boardListView from '../views/board/list'
import boardReadView from '../views/board/read'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: indexView
  },
  {
    path: '/list',
    name: 'list',
    component: listView
  },
  {
    path: '/info',
    name: 'info',
    component: infoView
  },
  {
    path: '/cart',
    name: 'cart',
    component: cartView
  },
  {
    path:'/login',
    name:'loginView',
    component:loginView
  },
  {
    path:'/find_info',
    name:'findInfoView',
    component:findInfoView
  },
  {
    path:'/join',
    name:'joinView',
    component:joinView
  },
  {
    path:'/order',
    name:'orderView',
    component:orderView
  },
  {
    path : '/board_list',
    name:"boardListView",
    component:boardListView
  },
  {
    path : '/board_read',
    name:"boardReadView",
    component:boardReadView
  }
  
  

]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
