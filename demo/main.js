// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import WeuiVue from 'weui-vue'
// import WeuiVue from '../dist/weui-vue/weui-vue'
import 'weui-vue/weui.css'

Vue.config.productionTip = false
Vue.use(WeuiVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
