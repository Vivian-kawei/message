import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      name: 'news',
      component: resolve => require(['src/components/news'], resolve)
    },
    {
      path: '/order',
      name: 'order',
      component: resolve => require(['src/components/order'], resolve)
    },
    {
      path: '/me',
      name: 'me',
      component: resolve => require(['src/components/me'], resolve)
    }
  ]
})
