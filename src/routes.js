// src/router/routes.js
import Dashboard from '@/components/Dashboard.vue'
import Login from '@/components/Login.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { guest: true },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
  },
]

export default routes
