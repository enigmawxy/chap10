<template>
  <div class="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
    <!-- 顶部深色导航栏 -->
    <header class="h-12 flex items-center justify-between px-6 bg-[#2d3a4b] text-white">
      <div class="flex items-center space-x-2">
        <el-icon><i-ep-menu /></el-icon>
        <span class="font-bold text-base">前端开发框架技术与应用例子 - Element Plus + Tailwind CSS + Vue3 + Vite</span>
      </div>
      <div class="space-x-2">
        <el-button size="small" class="!bg-[#223047] !border-none">登录</el-button>
        <el-button size="small" class="!bg-[#223047] !border-none">注册</el-button>
      </div>
    </header>
    <div class="flex flex-1 min-h-0">
      <!-- 左侧菜单栏 -->
      <aside class="w-56 bg-[#223047] text-white min-h-0">
        <el-menu
          :default-active="activeMenu"
          class="el-menu-vertical-demo bg-[#223047] text-white border-none"
          @select="handleMenuSelect"
          :router="false"
          :collapse="false"
          background-color="#223047"
          text-color="#fff"
          active-text-color="#67c23a"
        >
          <el-menu-item
            v-for="item in menuItems"
            :key="item.name"
            :index="item.name"
          >
            <el-icon class="mr-1"><i-ep-menu /></el-icon>
            <span>{{ item.label }}</span>
          </el-menu-item>
        </el-menu>
      </aside>
      <!-- 右侧内容区 -->
      <main class="flex-1 bg-gray-100 dark:bg-gray-900 p-6 overflow-auto">
        <component :is="currentComponent" />
      </main>
    </div>
  </div>
</template>

<script setup>
import { shallowRef, ref } from 'vue'
import AppBasic from './AppBasic.vue'
import AppDark from './AppDark.vue'
import AppCustom from './AppCustom.vue'

// 菜单项配置
const menuItems = [
  { name: 'AppBasic', label: '基础组件', component: AppBasic },
  { name: 'AppDark', label: '深色组件', component: AppDark },
  { name: 'AppCustom', label: '自定义组件', component: AppCustom },
]

const activeMenu = ref(menuItems[0].name)
const currentComponent = shallowRef(menuItems[0].component)

function handleMenuSelect(key) {
  const found = menuItems.find(item => item.name === key)
  if (found) {
    activeMenu.value = key
    currentComponent.value = found.component
  }
}
</script>

<style scoped>
.el-menu-vertical-demo {
  border-right: none;
}
.el-menu-vertical-demo .el-menu-item.is-active {
  background: #1abc9c !important;
  color: #fff !important;
}
</style> 