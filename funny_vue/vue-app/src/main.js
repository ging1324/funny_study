import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router/index.js'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
new Vue({
  i18n,
  axios,
  VueAxios,
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app')
