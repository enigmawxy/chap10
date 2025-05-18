<template>
  <div class="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
    <!-- 顶部深色导航栏 -->
    <HeaderView :title="appTitle" />
    <div class="flex flex-1 min-h-0">
      <!-- 左侧菜单栏 -->
      <SidebarMenu
        :menuItems="menuItems"
        :activeMenu="activeMenu"
        @select="handleMenuSelect"
      />

      <!-- 右侧内容区 -->
      <ContentView :currentComponent="currentComponent" />
    </div>
  </div>
</template>

<script setup>
import { shallowRef, ref } from 'vue'
import HeaderView from './components/HeaderView.vue'
import SidebarMenu from './components/SidebarMenu.vue'
import ContentView from './components/ContentView.vue'
import AppBasic from './AppBasic.vue'
import AppDark from './AppDark.vue'
import AppCustom from './AppCustom.vue'

const appTitle = '前端开发框架技术与应用例子 - Element Plus + Tailwind CSS + Vue3 + Vite'

// 不需要显式导入图标，因为已在 main.js 中全局注册

// 菜单项配置
const menuItems = [
  { name: 'AppBasic', label: '基础组件', component: AppBasic, icon: 'Menu' },
  { name: 'AppDark', label: '深色组件', component: AppDark, icon: 'Moon' },
  { name: 'AppCustom', label: '自定义组件', component: AppCustom, icon: 'Setting' },
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