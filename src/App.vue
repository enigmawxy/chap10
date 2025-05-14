<template>
  <div class="comparison-container">
    <div class="header-section">
      <!-- <h2 class="header-title">Tailwind CSS Header:</h2> -->
      <Header />
    </div>

    <div class="header-section mt-8">
      <!-- <h2 class="header-title">Regular CSS Header:</h2> -->
      <HeaderOne />
    </div>
  </div>

  <div class="mx-2 mt-8 max-w-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    <img class="w-full h-48 object-cover" src="./images/image.jpg">
    <div class="px-6 py-4">
      <h3 class="text-xl font-bold mb-2">卡片标题</h3>
      <p class="text-gray-600 text-base">
        这是一个使用 Tailwind 构建的卡片组件示例...
      </p>
    </div>
  </div>

  <div class="mt-3">
    <h1 class="inline-block text-3xl font-bold underline mx-2">
      Hello world!
    </h1>
    <!-- Element Plus 组件示例 -->
    <el-button class="inline-block mr-2" type="primary">按钮</el-button>
    <el-icon>
      <Search />
    </el-icon>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import HeaderOne from './components/HeaderOne.vue';
// 无需手动导入组件和图标，已通过自动导入配置
</script>

<style>
.comparison-container {
  padding: 1rem;
}

.header-section {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
}

.header-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #4b5563;
}
</style>