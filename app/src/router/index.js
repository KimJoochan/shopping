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

import AdminIndexView from '../views/admin/index'
import AdminGsRegisterView from '../views/admin/gs_register'
import AdminGsListView from '../views/admin/gs_list'
import AdminUserAddView from '../views/admin/user_register'
import AdminUserListdView from '../views/admin/user_list'

import AdminBannerAddtdView from '../views/admin/banner_register'
import AdminBannerListView from '../views/admin/banner_list'

import AdminOrderListView from '../views/admin/order_list'

import AdminCateRegisterView from '../views/admin/category_register'
import AdminCateFlowEditView from '../views/admin/category_flow_edit'




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
  },
  {
    path : '/admin',
    name:"AdminIndexView",
    component:AdminIndexView
  },
  {
    path : '/admin/gs_register',
    name:"AdminGsRegisterView",
    component:AdminGsRegisterView
  },
  {
    path : '/admin/gs_list',
    name:"AdminGsListView",
    component:AdminGsListView
  },
  {
    path : '/admin/user_register',
    name:"AdminUserAddView",
    component:AdminUserAddView
  },
  {
    path : '/admin/user_list',
    name:"AdminUserListdView",
    component:AdminUserListdView
  },
  {
    path : '/admin/banner_register',
    name:"AdminBannerAddtdView",
    component:AdminBannerAddtdView
  },
  {
    path : '/admin/banner_list',
    name:"AdminBannerListtdView",
    component:AdminBannerListView
  },
  {
    path : '/admin/order_list',
    name:"AdminOrderListdView",
    component:AdminOrderListView
  },
  {
    path : '/admin/category_register',
    name:"AdminCateRegisterdView",
    component:AdminCateRegisterView
  },
  {
    path : '/admin/category_flow_edit',
    name:"AdminCateFlowEditView",
    component:AdminCateFlowEditView
  },
  
  
  
  
  
  
  
  
  

]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
