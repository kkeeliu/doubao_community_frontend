import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '首页',
    component: () => import('@/views/Home')
  },
  {
    path: '/404',
    name: 404,
    component: () => import('@/views/common/404')
  },
  {
    path: '/register',
    name: '注册',
    component: () => import('@/views/common/register')
  }
]

const router = new VueRouter({
  routes
})

export default router
