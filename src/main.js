import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueGoodTablePlugin from 'vue-good-table'
import 'vue-good-table/dist/vue-good-table.css'
import VueFeather from 'vue-feather'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueGoodTablePlugin)
Vue.use(VueFeather)
Vue.use(VueLazyLoad)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
