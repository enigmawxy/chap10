<template>
  <div class="p-8">
    <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">深色模式示例</h2>
    
    <div class="mb-6">
      <DarkModeToggle />
    </div>
    
    <!-- 深色模式演示卡片 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <!-- 基本卡片 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors">
        <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white">自动切换背景色</h3>
        <p class="text-gray-600 dark:text-gray-300">
          这个卡片会根据当前主题自动切换背景色和文字颜色。在浅色模式下，背景是白色的；在深色模式下，背景是深灰色的。
        </p>
      </div>
      
      <!-- 带边框的卡片 -->
      <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 transition-colors">
        <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white">自动切换边框色</h3>
        <p class="text-gray-600 dark:text-gray-300">
          这个卡片不仅会切换背景色和文字颜色，还会切换边框颜色。在浅色模式下，边框是浅灰色的；在深色模式下，边框是深灰色的。
        </p>
      </div>
    </div>
    
    <!-- 更多深色模式元素 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- 按钮 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors">
        <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white">按钮</h3>
        <div class="space-y-3">
          <button class="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors">
            主要按钮
          </button>
          <button class="w-full bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 py-2 px-4 rounded transition-colors">
            次要按钮
          </button>
        </div>
      </div>
      
      <!-- 表单元素 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors">
        <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white">表单元素</h3>
        <div class="space-y-3">
          <input 
            type="text" 
            placeholder="输入文本..." 
            class="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
          />
          <select class="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors">
            <option>选项 1</option>
            <option>选项 2</option>
            <option>选项 3</option>
          </select>
        </div>
      </div>
      
      <!-- 提示信息 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors">
        <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white">提示信息</h3>
        <div class="space-y-3">
          <div class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 p-3 rounded transition-colors">
            信息提示
          </div>
          <div class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 p-3 rounded transition-colors">
            成功提示
          </div>
          <div class="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 p-3 rounded transition-colors">
            警告提示
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DarkModeToggle from './DarkModeToggle.vue';
</script>
