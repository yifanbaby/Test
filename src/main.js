// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Get, Post, Put, Delete} from '@/api/axios.config.js'

Vue.config.devtools = true
Vue.config.productionTip = false

Vue.prototype.$get = Get
Vue.prototype.$get = Post
Vue.prototype.$get = Put
Vue.prototype.$get = Delete

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
