import Vue from 'vue'
import Router from 'vue-router'
import routes from './table'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router
