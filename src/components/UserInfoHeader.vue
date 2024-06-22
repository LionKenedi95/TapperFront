<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { useCounterStore } from '@/stores/counter'

const props = defineProps<{
  isShowCounter?: boolean
}>()

const counter = useCounterStore()
const userName = ref('Марина Никитишновная')
</script>

<template>
  <div class="user-info-header">
    <n-h3 class="user-info-header__h3 mb-2">
      <n-avatar
        :style="{
          color: 'blue',
          backgroundColor: 'white'
        }"
        size="small"
      >
        M
      </n-avatar>
      <n-text type="primary">
        {{ userName }}
      </n-text>
    </n-h3>
    <div class="user-info-header__info">
      <n-tag :bordered="false" type="info">
        Уровень #1
      </n-tag>
      <n-tag type="warning">
        0 ⚛️ в час
      </n-tag>
      <n-tag v-if="isShowCounter" :bordered="false" type="success">
        {{ counter.count }} ⚛️
      </n-tag>
    </div>
  </div>
</template>

<style scoped>
.user-info-header {
  padding: 8px 24px 0;
  background-color: #12100E;
  box-shadow: 0 2px 4px rgba(103, 175, 211, .8), 0 4px 10px rgba(103, 175, 211, .8);
  border-radius: 0 0 10px 10px;
  height: 82px;
}

.user-info-header__h3 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.user-info-header__info {
  display: flex;
  align-items: left;
  gap: 16px;
  font-size: 16px;
}
</style>