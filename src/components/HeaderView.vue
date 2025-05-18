<template>
  <header class="h-12 flex items-center justify-between px-6 bg-[#2d3a4b] text-white">
    <div class="flex items-center space-x-2">
      <el-icon><i-ep-menu /></el-icon>
      <span class="font-bold text-base">{{ title }}</span>
    </div>
    <div class="space-x-2">
      <el-button size="small" class="!bg-[#223047] !border-none">登录</el-button>
      <el-button size="small" class="!bg-[#223047] !border-none">注册</el-button>
    </div>
  </header>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '前端开发框架技术与应用例子 - Element Plus + Tailwind CSS + Vue3 + Vite'
  }
})
</script>
