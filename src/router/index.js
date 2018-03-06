import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/Home'
import Login from '@/views/Login/Login'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  }
]

export default new Router({
  mode: 'history',
  routes
})
