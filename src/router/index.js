// src/router.js (Vue 3 example)
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    { path: '/', redirect: '/dashboard'},
  { path: '/dashboard', name: 'Home', component: Home },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
