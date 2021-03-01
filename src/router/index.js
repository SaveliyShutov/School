import Vue from 'vue'
import VueRouter from 'vue-router'
import Mainpage from '../components/Mainpage.vue'
import Form from '../components/form.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Mainpage',
    component: Mainpage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
  path:'/form',
  name:'Form',
  component: Form
  }
  
  
]

const router = new VueRouter({
  routes
})

export default router
