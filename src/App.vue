<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
    <!-- Dark Mode Demo -->
    <DarkModeDemo />
    
    <!-- Simple Examples -->
    <div class="p-8 bg-white dark:bg-gray-800 transition-colors">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">简单示例</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-6 transition-colors">
          <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white">响应式文字</h3>
          <div class="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300">
            这段文字会根据屏幕大小自动调整大小
          </div>
        </div>
        
        <div class="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-6 transition-colors">
          <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white">自动切换背景色</h3>
          <div class="bg-blue-100 dark:bg-blue-900 p-4 rounded text-blue-800 dark:text-blue-100 transition-colors">
            这个元素会根据当前主题自动切换背景色
          </div>
        </div>
        
        <div class="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-6 transition-colors">
          <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white">交互按钮</h3>
          <button class="bg-blue-500 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-800 text-white px-4 py-2 rounded focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-700 transition-colors">
            点击我
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DarkModeDemo from './components/DarkModeDemo.vue';
</script>
