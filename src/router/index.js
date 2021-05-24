import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    children: [
      {
        path: '/home',
        name: 'Login',
        component: () => import('../views/Login.vue')
      },
      {
        path: '/home/reg',
        name: 'Reg',
        component: () => import('../views/Reg.vue')
      }
    ],
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/inner',
    name: 'Inner',
    component: () => import('../views/inner/inner.vue'),

    children: [
      {
        path: '/inner',
        redirect: '/inner/user'
      },
      {
        path: '/inner/user',
        name: 'User',
        component: () => import('../views/inner/user.vue')
      },
      {
        path: '/inner/status',
        name: 'Status',
        component: () => import('../views/inner/status.vue')
      },
      {
        path: '/inner/exam',
        name: 'Exam',
        component: ()=> import('../views/inner/exam/exam.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
