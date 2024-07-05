<script setup lang="ts">
import router from '@/router';
import { Routes } from '@/constants/Routes'

const onClickStart = () => {
  router.push({ name: Routes.Home })
}

onClickStart()
</script>

<template>
  <main class="">
  </main>
</template>

<style scoped>
</style>