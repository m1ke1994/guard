import { createRouter, createWebHistory } from 'vue-router'
import { jwtDecode } from 'jwt-decode'

import AboutSystem from '../views/dashbord/AboutSystem.vue'
import TCP from '../views/dashbord/TCP.vue'
import Timesync from '../views/dashbord/Timesync.vue'
import Login from '../views/Login.vue'
import Dashbord from '../views/Dashbord.vue'

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashbord',
    component: Dashbord,
    children: [
      { path: 'about-system', component: AboutSystem },
      { path: 'tcpip', component: TCP },
      { path: 'timesync', component: Timesync },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Проверка на истечение токена
function isTokenExpired(token) {
  try {
    const decoded = jwtDecode(token)
    const currentTime = Math.floor(Date.now() / 1000)
    return decoded.exp < currentTime
  } catch (e) {
    return true
  }
}

// Глобальный guard
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  if (to.path !== '/login' && (!token || isTokenExpired(token))) {
    localStorage.removeItem('token')
    next('/login')
  } else {
    next()
  }
})

export default router
