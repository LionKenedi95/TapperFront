<script setup lang="ts">
import router from '@/router';
import { Routes } from '@/constants/Routes'
import { CheckmarkStarburst16Filled, GiftCard16Filled, CurrencyDollarEuro16Filled, Emoji16Filled } from '@vicons/fluent' 

const onClickStart = () => {
  router.push({ name: Routes.Home })
}
</script>

<template>
  <main class="flex-vertical-center-center">
    <div class="flex-center-center">
      <h1 class="text-center">
        <n-gradient-text >Привет, это Tapper </n-gradient-text>
      </h1>
      <n-icon size="40" color="#18623b">
        <CheckmarkStarburst16Filled />
      </n-icon>
    </div>
    
    <h2 class="text-center">1. Тапай и получай <n-gradient-text>Атомы</n-gradient-text> ⚛️</h2>
    <h2 class="text-center">
      2. Обменивай койны на 🎁 призы, 👏 эвенты и 💵 реальные деньги!
    </h2>
    <n-button strong round type="success" size="large" @click="onClickStart">
      Начнем
    </n-button>
  </main>
</template>

<style scoped>
</style>