/*
 * @Description:
 * @Version: 2.0
 * @Autor: czklove
 * @Date: 2019-11-11 10:07:17
 * @LastEditors: czklove
 * @LastEditTime: 2019-11-15 15:16:06
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: r => require.ensure([], () => r(require('../docs/test.md')))
  }
]

const router = new VueRouter({
  routes
})

export default router
