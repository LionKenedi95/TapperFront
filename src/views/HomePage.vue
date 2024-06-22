<script setup lang="ts">
import { ref } from 'vue'
const userName = ref('Пользователь123')
const counter = ref('150067')
const win = ref(window.Telegram)

navigator.geolocation.getCurrentPosition((result) => console.log('result', result), (error) => console.log('error', error))
</script>

<template>
  <main class="home-grid">
    {{ win }}
    <div class="home-title">
      <n-h3 class="mb-2" prefix="bar">
        <n-text type="primary">
          {{ userName }}  
        </n-text>
      </n-h3>
      <div class="home-title__info">
        <div class="home-title__level">Уровень #1</div>
        <div class="home-title__income">Прибыль в час: 0⚛️ в час</div>
      </div>
    </div>
    <div class="home-actions">
      <div class="action">action 1</div>
      <div class="action">action 2</div>
      <div class="action">action 3</div>
      <div class="action">action 4</div>
    </div>
    <div class="home-promo"></div>
    <div class="home-counter">
      <h1 class="text-center">
        <n-gradient-text :gradient="{
          deg: 75,
          from: '#ff7e5f',
          to: '#91eae4'
        }">
          {{ counter }}
        </n-gradient-text>
        ⚛️
      </h1>
    </div>
    <div class="home-tapper">
      <div class="tapper"></div>
    </div>
    <div class="home-energy">
      <h1>⚡</h1><div class="energy-bar"><div /></div>
    </div>
  </main>
</template>

<style scoped>
.home-grid {
  display: grid;
  padding: 32px 8px 8px;
  height: 100%;
  grid-template-columns: auto;
  grid-template-rows: 75px 50px auto 100px 250px 35px;
}

.home-title {}
.home-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.home-promo {}
.home-counter {}
.home-tapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-energy {
  display: grid;
  grid-template-columns: 36px calc(100% - 86px);
  align-items: center;
  gap: 16px;
}

.home-title__info {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 12px;
}

.action {
  border: 1px solid #243834;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
}

.tapper {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #86a8e7;
  margin-bottom: 50px;
}

.energy-bar {
  display: block;
  height: 16px;
  border-radius: 4px;
  width: 100%;
  border: 1px solid;
  border-color: linear-gradient(45deg, #ff7e5f, #feb47b, #86a8e7, #91eae4);

  > div {
    display: block;
    height: 14px;
    width: 100%;
    border-radius: 4px;
    background: linear-gradient(45deg, #ff7e5f, #feb47b, #86a8e7, #91eae4);
  }
}
</style>