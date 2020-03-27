import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false

// Set Bootstrap config
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// Axios
window.axios = axios

new Vue({
	router,
  store,
  render: h => h(App)
}).$mount('#app')
