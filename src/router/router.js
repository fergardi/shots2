import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: () => import('@/components/Index') },
    { path: '/index', name: 'index', component: () => import('@/components/Index') },
    { path: '/world', name: 'world', component: () => import('@/components/World') }
  ]
})
