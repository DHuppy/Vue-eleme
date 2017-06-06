// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import goods from './components/goods/goods'
import seller from './components/seller/seller'
import ratings from './components/ratings/ratings'

import './common/stylus/index.styl'

/* eslint-disable no-new */
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

let routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
]

let router = new VueRouter({
  linkActiveClass: 'active',
  routes // （缩写）相当于 routes: routes
})

new Vue({
  el: '#app',
  template: '<App/>',
  router: router,
  components: { App }
})
// 默认访问到goods
router.push('/goods')
