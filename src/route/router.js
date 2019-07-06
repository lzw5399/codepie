import Vue from 'vue'
import Router from 'vue-router'
import routes from './table'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

router.beforeEach((to, from, next) => {
  if (to.path) {
    // eslint-disable-next-line
    _hmt.push(['_trackPageview', '/#' + to.fullPath])
  }
  next()
})

export default router
