// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from './router'
// import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(VRouter)
// Vue.use(Vuex);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  VRouter,
  // Vuex,
  template: '<App/>',
  components: { App }
})
