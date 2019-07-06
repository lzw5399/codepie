import Vue from 'vue'
import App from './App.vue'
import router from './route/router'
import store from './store'
import '@/assets/css/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/* eslint-disable */
var _hmt = _hmt || []
window._hmt = _hmt(
  // 必须把_hmt挂载到window下，否则找不到
  function() {
    var hm = document.createElement('script')
    hm.src = 'https://hm.baidu.com/hm.js?' + 百度站点id
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(hm, s)
  }
)()
