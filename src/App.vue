<template>
  <div class="container mx-auto">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { watch, onMounted } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import { useAuthStore } from "@/stores/authStore";

const { isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0();
const authStore = useAuthStore();

// 1. Aspetta che Auth0 abbia finito il caricamento
watch(isLoading, async (loading) => {
  if (!loading) {
    // 2. Quando ha finito, se autenticato prendi il token
    if (isAuthenticated.value) {
      const token = await getAccessTokenSilently();
      authStore.setToken(token);
    } else {
      authStore.logout();
    }
  }
  console.log("Auth0 loading state:", loading);
  console.log("Is Authenticated?", isAuthenticated.value);
});
</script>
