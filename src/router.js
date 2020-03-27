import Vue from 'vue'
import Router from 'vue-router'
import Stats from './components/Stats/Stats.vue'
import Search from './components/Search/Search.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'stats',
      component: Stats
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})