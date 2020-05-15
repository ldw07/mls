import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import end from '../views/end.vue'
import question from '../views/question.vue'
import select from '../views/select.vue'
import successBase from '../views/successBase.vue'
import successSenior from '../views/successSenior.vue'
import timeout from '../views/timeout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/end',
    name: 'end',
    component: end
  },
  {
    path: '/question',
    name: 'question',
    component: question
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/select',
    name: 'select',
    component: select
  },
  {
    path: '/successBase',
    name: 'successBase',
    component: successBase
  },
  {
    path: '/successSenior',
    name: 'successSenior',
    component: successSenior
  },
  {
    path: '/timeout',
    name: 'timeout',
    component: timeout
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
