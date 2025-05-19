<template>
  <div class="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
    <!-- 顶部深色导航栏 - 固定在顶部 -->
    <HeaderView :title="appTitle" class="fixed top-0 left-0 right-0 z-10" />

    <!-- 主体内容区域 -->
    <div class="flex pt-12 h-[calc(100vh-3rem)]">
      <!-- 左侧菜单栏 - 固定位置 -->
      <div class="fixed top-12 left-0 bottom-0 z-10">
        <SidebarMenu
          :menuItems="menuItems"
          :activeMenu="activeMenu"
          @select="handleMenuSelect"
          @collapse-change="handleSidebarCollapse"
        />
      </div>

      <!-- 右侧内容区 - 添加左侧边距以避免被固定的侧边栏遮挡 -->
      <div class="flex-1 transition-all duration-300"
           :class="{ 'ml-16': sidebarCollapsed, 'ml-56': !sidebarCollapsed }">
        <ContentView :currentComponent="currentComponent" />
      </div>
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
import BasicSample from './views/BasicSample.vue'
import FormSample from './views/FormSample.vue'
import DataSample from './views/DataSample.vue'
import NavigationSample from './views/NavigationSample.vue'
import FeedbackSample from './views/FeedbackSample.vue'

const appTitle = '前端开发框架技术与应用例子 - Element Plus + Tailwind CSS + Vue3 + Vite'

// 侧边栏折叠状态
const sidebarCollapsed = ref(false)

// 不需要显式导入图标，因为已在 main.js 中全局注册

// 菜单项配置
const menuItems = [
  {
    name: 'ElementPlusExamples',
    label: '第10章-Element Plus例子',
    icon: 'Eleme',
    children: [
      { name: 'BasicSample', label: '基础类组件', component: BasicSample, icon: 'Collection' },
      { name: 'FormSample', label: '表单类组件', component: FormSample, icon: 'Tickets' },
      { name: 'DataSample', label: '数据展示', component: DataSample, icon: 'DataLine' },
      { name: 'NavigationSample', label: '导航组件', component: NavigationSample, icon: 'Guide' },
      { name: 'FeedbackSample', label: '反馈组件', component: FeedbackSample, icon: 'Bell' },
    ]
  },
  {
    name: 'TailwindExamples',
    label: '第10章-Tailwind例子',
    icon: 'Histogram',
    children: [
      { name: 'AppBasic', label: '基础组件', component: AppBasic, icon: 'Menu' },
      { name: 'AppDark', label: '深色组件', component: AppDark, icon: 'Moon' },
      { name: 'AppCustom', label: '自定义组件', component: AppCustom, icon: 'Setting' },
    ]
  }
]

// 设置默认选中的菜单项为第一个子菜单的第一项
const defaultMenuItem = menuItems[0].children[0]
const activeMenu = ref(defaultMenuItem.name)
const currentComponent = shallowRef(defaultMenuItem.component)

function handleMenuSelect(key) {
  // 在所有菜单项中查找匹配的项
  let found = null

  // 先在顶级菜单中查找
  for (const item of menuItems) {
    if (item.name === key) {
      found = item
      break
    }

    // 如果有子菜单，则在子菜单中查找
    if (item.children && item.children.length > 0) {
      const childItem = item.children.find(child => child.name === key)
      if (childItem) {
        found = childItem
        break
      }
    }
  }

  // 如果找到了匹配的菜单项，并且它有组件，则更新当前组件
  if (found && found.component) {
    activeMenu.value = key
    currentComponent.value = found.component
  }
}

// 处理侧边栏折叠状态变化
function handleSidebarCollapse(collapsed) {
  sidebarCollapsed.value = collapsed
}
</script>