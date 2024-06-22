<script setup lang="ts">
import router from '@/router';
import { Routes } from '@/constants/Routes'
import { CheckmarkStarburst16Filled } from '@vicons/fluent' 

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
      2. Обменивай ⚛️ на<br> 🎁 призы от маркетплейсов,<br> 👏 эвенты с инфлюэнсерами<br> и 💵 реальные деньги!
    </h2>
    <n-button strong round class="start-button" type="success" size="large" @click="onClickStart">
      Старт <span class="icon-start">👇🏻</span>
    </n-button>
  </main>
</template>

<style scoped>
.start-button {
  padding: 36px;
  font-size: 24px;
  margin-top: 48px;
}

.icon-start {
  position: relative;
  animation-name: tap;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;
}

@keyframes tap {
  0%   { top: 0px; }
  50%  { top: -2px; }
  75%  { top: 0px; }
  100% { top: 2px; }
}
</style>