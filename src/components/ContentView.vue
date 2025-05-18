<template>
  <main class="flex-1 bg-gray-100 dark:bg-gray-900 p-6 overflow-auto h-[calc(100vh-3rem)]">
    <component :is="currentComponent" />
  </main>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  currentComponent: {
    type: Object,
    required: true
  }
})
</script>
