import Vue from 'vue'
import Router from 'vue-router'
import routes from './table'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

router.afterEach((to, from, next) => {
  setTimeout(() => {
    /* eslint-disable */
    let _hmt =
      _hmt ||
      [](function() {
        // 每次执行前，先移除上次插入的代码
        document.getElementById('baidu_tj') && document.getElementById('baidu_tj').remove()
        let hm = document.createElement('script')
        hm.src = 'https://hm.baidu.com/hm.js?9ef817de9ac6d7b7c73e599208a5150b'
        hm.id = 'baidu_tj'
        let s = document.getElementsByTagName('script')[0]
        s.parentNode.insertBefore(hm, s)
      })()
  }, 0)
})

export default router
