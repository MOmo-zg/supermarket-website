import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/homeView.vue'
import LoginViewVue from '@/views/LoginView.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/aboutView.vue')
  // }
  {
    path:'/login',
    name:LoginViewVue,
    component:LoginViewVue
  },
  {
    // 重定向到登录页，即默认打开登录页
    path:'/',
    redirect:'/login'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
