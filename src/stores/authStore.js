import { defineStore } from 'pinia'
import { jwtDecode } from 'jwt-decode'  

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
  }),
  getters: {
    isAuthenticated(state) {
      if (!state.token) return false
      try {
        const decoded = jwtDecode(state.token)
        const now = Date.now() / 1000
        return decoded.exp && decoded.exp > now
      } catch (e) {
        return false
      }
    },
  },
  actions: {
    setToken(token) {
      this.token = token
      localStorage.setItem('token', token)
    },
    logout() {
      this.token = null
      localStorage.removeItem('token')
    },
    loadTokenFromStorage() {
      const storedToken = localStorage.getItem('token')
      this.token = storedToken
    },
  },
})
