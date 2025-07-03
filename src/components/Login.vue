<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 px-4 py-10">
    <div class="w-full max-w-sm">
      <div class="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8 space-y-6 text-white text-center">
        <!-- Icon -->
        <div class="text-4xl text-primary-400 flex justify-center">
          <span class="icon-[tabler--lock] size-10" />
        </div>

        <!-- Title & Subtitle -->
        <div>
          <h1 class="text-2xl font-bold">Login to Dashboard</h1>
          <p class="text-sm text-white/70 mt-1">Use your account to continue</p>
        </div>

        <!-- Login Button -->
        <button
          @click="login"
          class="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-xl transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
        >
          <span class="icon-[tabler--login] size-5" />
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuth0 } from "@auth0/auth0-vue";

const { loginWithRedirect } = useAuth0();

const login = () =>
  loginWithRedirect({
    authorizationParams: {
      audience: "your-audience",
      scope: "read:current_user",
    },
  });
</script>
