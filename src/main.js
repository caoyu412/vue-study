import Vue from 'vue'
import Layout from './components/Layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import DetailAnaPage from './pages/detail/analysis'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'
import DetailCouPage from './pages/detail/count'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage,
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'forecast',
          component: DetailForPage
        },
        {
          path: 'analysis',
          component: DetailAnaPage
        },
        {
          path: 'count',
          component: DetailCouPage
        },
        {
          path: 'publish',
          component: DetailPubPage
        },
      ]
    }
  ]
})


new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})

