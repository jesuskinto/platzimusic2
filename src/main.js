import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'

import routes from '@/route'
import store from '@/store'
import i18n from '@/i18n'

// import EventBus from '@/plugins/event-bus'
import msToMn from '@/filters/ms-to-mn'
import firstUpper from '@/filters/first-upper'
import cut from '@/filters/cut'
import Blur from '@/directives/blur'

Vue.use(VueRouter)
// Vue.use(EventBus)
Vue.use(msToMn)
Vue.use(firstUpper)
Vue.use(cut)
Vue.use(Blur)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  i18n
})
