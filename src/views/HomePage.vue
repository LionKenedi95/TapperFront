<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router';
import { Routes } from '@/constants/Routes'
import UserInfoHeader from '@/components/UserInfoHeader.vue'

const onClickAction = () => {
  router.push({ name: Routes.ActionPage })
}

const counter = ref(0)

const tapperWrapperRef = ref<HTMLElement | null>(null)

const drawSign = (touch: Touch) => {
  const wrappeBox = tapperWrapperRef.value.getBoundingClientRect()
  const clientY = touch.pageY - wrappeBox.y

  const sign = document.createElement('div')
  sign.className = 'sign'
  sign.style.left = touch.pageX + 'px'
  sign.style.top = clientY + 'px'
  sign.textContent = '⚛️'

  tapperWrapperRef.value.appendChild(sign)

  setTimeout(() => {
    sign.remove()
  }, 500)
}

const onClickTapper = (e: TouchEvent) => {
  counter.value += e.touches.length
  if (!tapperWrapperRef.value) return

  Array.from(e.touches).forEach((touch: Touch) => {
    drawSign(touch)
  })

  e.preventDefault()
  e.stopPropagation()
}
</script>

<template>
  <main class="home-grid">
    <UserInfoHeader />

    <div class="home-actions">
      <div class="action" @click="onClickAction"><span class="text-18">⚛️</span> +100 тысяч</div>
      <div class="action" @click="onClickAction">Тапай с друзьями и ускоряйте прогресс</div>
      <div class="action" @click="onClickAction"><span class="text-18">🎁</span> Ежедневный подарок</div>
      <div class="action" @click="onClickAction"><span class="text-18">⚡</span> Прокачать</div>
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

    <div
      ref="tapperWrapperRef"
      class="home-tapper"
      @touchstart="onClickTapper"
      @touchmove.stop.prevent
      @touchend.stop.prevent
    >
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
  grid-template-rows: 82px 125px 75px 50px 200px 35px;
  
}

.home-title {
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

  h1 {
    left: 24px;
    position: relative;
  }

  h1 .n-gradient-text {
    font-family: sans-serif;
    font-weight: 800;
  }
}
.home-tapper {
  position: relative;
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

.action {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
  font-size: 10px;
  height: 50px;
  text-align: center;
  border: 1px solid #2274A5;
  color: #ffffff;
  background-color: #12100E;
}

.tapper {
  width: 175px;
  height: 175px;
  border-radius: 50%;
  background-color: #86a8e7;
  box-shadow: 0 0 8px #86a8e7;
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

<style>
.sign {
  position: absolute;
  animation-name: sign;
  animation-duration: .5s;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
}

@keyframes sign {
  0% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(-100px);
    opacity: 0;
  }
}
</style>