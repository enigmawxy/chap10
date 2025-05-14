<template>
  <div class="flex items-center">
    <button 
      @click="toggleDarkMode" 
      class="flex items-center px-3 py-2 rounded-lg transition-colors"
      :class="isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800 border border-gray-300'"
    >
      <el-icon class="mr-2">
        <component :is="isDarkMode ? 'Moon' : 'Sunny'" />
      </el-icon>
      {{ isDarkMode ? '深色模式' : '浅色模式' }}
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { Moon, Sunny } from '@element-plus/icons-vue';

// 创建一个响应式变量来跟踪当前模式
const isDarkMode = ref(false);

// 切换深色模式
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  updateDarkMode();
};

// 更新DOM和localStorage
const updateDarkMode = () => {
  // 更新HTML元素的class
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  // 保存到localStorage
  localStorage.setItem('darkMode', isDarkMode.value ? 'dark' : 'light');
};

// 组件挂载时，检查localStorage中的设置或系统偏好
onMounted(() => {
  // 首先检查localStorage
  const savedTheme = localStorage.getItem('darkMode');
  
  if (savedTheme) {
    // 如果有保存的主题设置，使用它
    isDarkMode.value = savedTheme === 'dark';
  } else {
    // 否则检查系统偏好
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  
  // 初始化
  updateDarkMode();
  
  // 监听系统主题变化
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // 只有当用户没有手动设置主题时才跟随系统
    if (!localStorage.getItem('darkMode')) {
      isDarkMode.value = e.matches;
      updateDarkMode();
    }
  });
});

// 导出isDarkMode，以便其他组件可以使用
defineExpose({ isDarkMode });
</script>
