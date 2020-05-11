// import Vue from 'vue'
import Router from 'vue-router'
import DndList from './components/DndList.vue'
import App from './App'

const routes = [
    { path: '/dnd', component: DndList },
    { path: '/', component: App }
  ]

  var router =  new Router({
    routes
})
export default router;