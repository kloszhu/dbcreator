// import Vue from 'vue'
import Router from 'vue-router'

const routes = [
    { path: '/layout', component: () => import(/* webpackChunkName:'login'*/ './pages/layout.vue') },
    { path: '/menu', component: () => import(/* webpackChunkName:'login'*/ './components/layoutmenu.vue') },
  ]

  var router =  new Router({
    routes
})
export default router;