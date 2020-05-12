// import Vue from 'vue'
import Router from 'vue-router'

const routes = [
    { path: '/', component: () => import(/* webpackChunkName:'login'*/ './pages/layout.vue') }
  ]

  var router =  new Router({
    routes
})
export default router;