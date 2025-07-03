// src/router/router.js
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import routes from './routes'
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Navigation guard con Pinia
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  // se il token non è ancora stato caricato (es. su refresh), lo carico da localStorage
  if (!authStore.token) {
    authStore.loadTokenFromStorage()
  }

  const isAuth = authStore.isAuthenticated

  if (to.meta.requiresAuth && !isAuth) {
    next({ name: 'login' })
  } else if (to.meta.guest && isAuth) {
    next({ name: 'dashboard' })
  } else {
    next()
  }
})

export { router }
