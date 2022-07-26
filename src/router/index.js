import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '首页',
    component: () => import('@/views/Home'),
    meta: { title: "首页" },
  },
  {
    path: '/404',
    name: 404,
    component: () => import('@/views/common/404'),
    meta: { title: "404-NotFound" },
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('@/views/common/Login'),
    meta: { title: "登录" }
  },
  {
    path: '/register',
    name: '注册',
    component: () => import('../views/common/Register'),
    meta: { title: "注册" }
  }
]

const router = new VueRouter({
  routes
})

export default router
