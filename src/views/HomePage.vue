<script setup lang="ts">
import { ref } from 'vue'

const userName = ref('Пользователь123')
const counter = ref('150067')
</script>

<template>
  <main class="home-grid">
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
      <div class="action">+ 100 тысяч ⚛️</div>
      <div class="action">Тапай с друзьями и ускоряйте прогресс</div>
      <div class="action">Ежедневный подарок</div>
      <div class="action">Прокачать ⚡</div>
    </div>

    <div class="home-promo"></div>

    <div class="home-counter">
      <h1 class="text-center">
        <n-gradient-text :gradient="{
          deg: 75,
          from: '#7E3F8F',
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
  height: calc(100% - 64px);
  grid-template-columns: auto;
  grid-template-rows: 125px auto auto 100px 250px 35px;
  
}

.home-title {
  padding: 52px 24px 0;
  background-color: #12100E;
  box-shadow: 0 4px 8px rgba(99, 226, 183, .8), 0 6px 20px rgba(99, 226, 183, .8);
  border-radius: 0 0 10px 10px;
}
.home-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content min-content;
  gap: 8px;
  padding: 24px 24px 8px;
}
.home-promo {
  padding: 0 24px;
}
.home-counter {
  display: flex;
  align-items: end;
  justify-content: center;
  padding: 0 24px;

  h1 .n-gradient-text {
    font-family: sans-serif;
    font-weight: 800;
  }
}
.home-tapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
}
.home-energy {
  display: grid;
  grid-template-columns: 36px calc(100% - 86px);
  align-items: center;
  gap: 16px;
  padding: 0 24px;
}

.home-title__info {
  display: flex;
  align-items: left;
  gap: 16px;
  font-size: 16px;
}

.action {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
  font-size: 12px;
  height: 55px;
  text-align: center;
  border: 1px solid #2274A5;
  color: #ffffff;
}

.tapper {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #86a8e7;
}

.energy-bar {
  display: block;
  height: 16px;
  border-radius: 4px;
  width: 100%;
  border: 1px solid;
  border-color: linear-gradient(45deg, #ff7e5f, #feb47b, #F6F930, #3A7D44, #3A7D44);

  > div {
    display: block;
    height: 14px;
    width: 100%;
    border-radius: 4px;
    background: linear-gradient(25deg, #ff7e5f, #feb47b, #F6F930, #3A7D44, #3A7D44);
  }
}
</style>