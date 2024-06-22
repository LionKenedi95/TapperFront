import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment(value = 1) {
    count.value += value
  }

  return { count, increment }
})
