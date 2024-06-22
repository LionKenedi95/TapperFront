<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import router from './router';
import { Routes } from '@/constants/Routes'

const isItFirstOpen = ref(true)

if (isItFirstOpen.value) {
  router.push({ name: Routes.WelcomePage1 })
}
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
