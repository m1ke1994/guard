import { createRouter, createWebHistory } from 'vue-router'
import AboutSystem from '../views/AboutSystem.vue'
import TCP from '../views/TCP.vue'
import Timesync from '../views/Timesync.vue'


const routes = [
  {
    path: '/',
    redirect: '/about-system'
  },
  
  {
    path: '/about-system',
    name: 'AboutSystem',
    component: AboutSystem
  },
  {
    path: '/tcpip',
    name: 'TCP',
    component: TCP
  },
  {
    path: '/timesync',
    name: 'Timesync',
    component: Timesync
  },
]
  

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router