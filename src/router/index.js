import Vue from 'vue'
import VueRouter from 'vue-router'
import QuestionForm from '../components/Mainpage.vue'
import AnswerForm from '../components/form.vue'
import Log from '../components/log.vue'
import Reg from '../components/reg.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/QuestionForm',
    name: 'QuestionForm',
    component: QuestionForm
  },
  {
    path: '/Answers',
    name: 'Answers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/AnswerForm',
    name: 'AnswerForm',
    component: AnswerForm
  },
  {
    path: '/Log',
    name: 'Log in',
    component:Log
  },
  {
    path: '/Reg',
    name: 'Registration',
    component: Reg
  }


]

const router = new VueRouter({
  routes
})

export default router
