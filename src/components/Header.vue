<template>
  <header class="bg-[#2d3a4b] text-white shadow-md" style="height: 56px; margin-bottom: 0; padding-bottom: 0;">
    <div class="px-4 py-2 flex items-center h-full">
      <!-- Logo and Title -->
      <div class="flex items-center space-x-2 mr-8">
        <GraphLogo />
        <span class="font-bold text-lg">GRAPHVIS开发演示</span>
      </div>

      <!-- Navigation Menu -->
      <nav class="flex-1">
        <ul class="flex space-x-6">
          <li>
            <router-link to="/graph-build" class="hover:text-blue-300 transition-colors py-2 px-1 inline-block">
              图谱构建
            </router-link>
          </li>
          <li>
            <router-link to="/graph-query" class="hover:text-blue-300 transition-colors py-2 px-1 inline-block">
              网络和分析
            </router-link>
          </li>
          <li>
            <router-link to="/knowledge-graph" class="hover:text-blue-300 transition-colors py-2 px-1 inline-block">
              知识图谱编辑
            </router-link>
          </li>
          <li>
            <router-link to="/about" class="hover:text-blue-300 transition-colors py-2 px-1 inline-block">
              关于图谱
            </router-link>
          </li>
          <li>
            <router-link to="/thinking-map" class="hover:text-blue-300 transition-colors py-2 px-1 inline-block">
              思维导图
            </router-link>
          </li>
          <li>
            <router-link to="/organization-chart" class="hover:text-blue-300 transition-colors py-2 px-1 inline-block">
              组织架构图
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import GraphLogo from './GraphLogo.vue';
</script>

<style scoped>
.router-link-active {
  color: #1abc9c;
  border-bottom: 2px solid #1abc9c;
}

/* 确保导航菜单使用微软雅黑字体 */
nav {
  font-family: "Microsoft YaHei", "微软雅黑", sans-serif;
}

/* 移除大写转换，使文字更易读 */
header {
  text-transform: none;
  margin-bottom: 0;
  padding-bottom: 0;
}
</style>
