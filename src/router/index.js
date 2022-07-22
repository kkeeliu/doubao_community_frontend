import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/common/404')
  }
]

const router = new VueRouter({
  routes
})

export default router
