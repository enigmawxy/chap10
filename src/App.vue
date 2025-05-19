<script setup>
import Header from '@/components/Header.vue'
</script>

<template>
  <div class="app-container h-screen flex flex-col">
    <!-- 顶部导航栏 -->
    <Header />

    <!-- 主要内容区域 -->
    <div class="flex-1 overflow-hidden">
      <router-view />
    </div>
  </div>
</template>
