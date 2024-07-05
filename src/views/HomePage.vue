<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router';
import { Routes } from '@/constants/Routes'
import UserInfoHeader from '@/components/UserInfoHeader.vue'
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

const onClickAction = () => {
  router.push({ name: Routes.ActionPage })
}

// const tapperWrapperRef = ref<HTMLElement | null>(null)

// const signVariants = ['⚛️', '💚', '🩵', '✨', '🎈', '🎁', '🎟️', '🎫', '⚛️', '⚛️']
// const getSignContent = () => {
//   const rareFactor = Math.floor(Math.random() * 10);

//   if (rareFactor !== 9) {
//     return signVariants[0]
//   }

//   const i = Math.floor(Math.random() * 10);
//   return signVariants[i]
// }

// const drawSign = (touch: Touch) => {
//   const wrappeBox = tapperWrapperRef.value.getBoundingClientRect()
//   const clientY = touch.pageY - wrappeBox.y

//   const sign = document.createElement('div')
//   sign.className = 'sign'
//   sign.style.left = touch.pageX + 'px'
//   sign.style.top = clientY + 'px'
//   sign.textContent = getSignContent()

//   tapperWrapperRef.value.appendChild(sign)

//   setTimeout(() => {
//     sign.remove()
//   }, 500)
// }

// const onClickTapper = (e: TouchEvent) => {
//   counter.increment(e.touches.length)
//   if (!tapperWrapperRef.value) return

//   Array.from(e.touches).forEach((touch: Touch) => {
//     drawSign(touch)
//   })

//   e.preventDefault()
//   e.stopPropagation()
//   e.stopImmediatePropagation()
// }

// const onMoveTapper = (e: TouchEvent) => {
//   e.preventDefault()
//   e.stopPropagation()
//   e.stopImmediatePropagation()
// }
</script>

<template>
  <main class="home-grid default-page-height">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </main>
</template>

<style scoped>
.home-grid {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: minmax(80px, 164px) 86px 321px 45px 91px;

  > div {
    border: 1px solid white;
  }
}

</style>

<style>
.sign {
  position: absolute;
  font-size: 18px;
  animation-name: sign;
  animation-duration: .5s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
}

@keyframes sign {
  0% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(-100px);
    opacity: 0.1;
  }
}
</style>