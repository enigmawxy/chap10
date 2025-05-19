<script setup>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
  <div class="app-container h-screen flex flex-col">
    <!-- 顶部导航栏 -->
    <Header />
    <!-- 主要内容区域 -->
    <div class="flex-1 overflow-hidden relative" style="margin-top: 0; padding-top: 0;">
      <!-- 侧边栏 -->
      <Sidebar />

      <!-- 路由视图 -->
      <div class="content-area">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-area {
  height: 100%;
  overflow: auto;
  position: absolute;
  top: 0;
  left: 250px;
  right: 0;
  bottom: 0;
}
</style>
