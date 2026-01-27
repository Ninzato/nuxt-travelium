<script setup lang="ts">
const authStore = useAuthStore();
</script>

<template>
  <div class="hero bg-base-300 container mx-auto mt-4">
    <div class="hero-content text-center min-h-96">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          Travellium
        </h1>
        <p class="py-6">
          Keep track of your travels adn adventures with this simple travel log app.
        </p>
        <AuthButton v-if="!authStore.user" />
        <NuxtLink
          v-else
          to="/dashboard"
          class="btn btn-primary"
        >
          Start logging
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
