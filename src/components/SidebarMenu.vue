<template>
  <aside
    class="relative bg-[#223047] text-white transition-all duration-300 h-full overflow-y-auto"
    :class="{ 'w-56': !isCollapsed, 'w-16': isCollapsed }"
  >
    <!-- 折叠/展开按钮 -->
    <div
      class="absolute top-1/2 -translate-y-1/2 -right-3 w-6 h-6 bg-[#1abc9c] rounded-full flex items-center justify-center cursor-pointer text-white z-10 transition-transform hover:bg-[#16a085]"
      @click="toggleCollapse"
    >
      <el-icon class="text-xs">
        <ArrowRight v-if="isCollapsed" />
        <ArrowLeft v-else />
      </el-icon>
    </div>

    <!-- 添加一个提示，在折叠状态下显示 -->
    <div v-if="isCollapsed" class="text-center text-xs text-gray-400 mt-2 mb-4">
      <span>提示：鼠标悬停查看</span>
    </div>

    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo bg-[#223047] text-white border-none h-full"
      @select="handleMenuSelect"
      :router="false"
      :collapse="isCollapsed"
      background-color="#223047"
      text-color="#fff"
      active-text-color="#67c23a"
      popper-class="sidebar-tooltip"
    >
      <!-- 处理有子菜单的菜单项 -->
      <template v-for="item in menuItems" :key="item.name">
        <!-- 如果有子菜单，则渲染子菜单组 -->
        <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.name">
          <template #title>
            <el-icon>
              <component :is="item.icon" />
            </el-icon>
            <span>{{ item.label }}</span>
          </template>

          <!-- 渲染子菜单项 -->
          <el-menu-item
            v-for="child in item.children"
            :key="child.name"
            :index="child.name"
          >
            <el-icon>
              <component :is="child.icon" />
            </el-icon>
            <template #title>
              <span>{{ child.label }}</span>
            </template>
          </el-menu-item>
        </el-sub-menu>

        <!-- 如果没有子菜单，则渲染普通菜单项 -->
        <el-menu-item v-else :index="item.name">
          <el-icon>
            <component :is="item.icon" />
          </el-icon>
          <template #title>
            <span>{{ item.label }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </aside>
</template>

<script setup>
import { ref, watch } from 'vue'
import { ArrowRight, ArrowLeft } from '@element-plus/icons-vue'

const props = defineProps({
  menuItems: {
    type: Array,
    required: true
  },
  activeMenu: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['select', 'collapse-change'])
const isCollapsed = ref(false)

// 监听折叠状态变化，并通知父组件
watch(isCollapsed, (newValue) => {
  emit('collapse-change', newValue)
})

function handleMenuSelect(key) {
  emit('select', key)
}

function toggleCollapse() {
  isCollapsed.value = !isCollapsed.value
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

/* 添加悬停效果 */
.el-menu-vertical-demo .el-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

/* 确保折叠状态下的图标居中 */
.el-menu--collapse .el-menu-item .el-icon {
  margin: 0 auto;
}

/* 子菜单样式 */
:deep(.el-sub-menu__title) {
  color: #fff !important;
}

:deep(.el-sub-menu__title:hover) {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

:deep(.el-sub-menu.is-active .el-sub-menu__title) {
  color: #67c23a !important;
}

/* 子菜单弹出样式 */
:deep(.el-menu--popup) {
  background-color: #1e293b !important;
  border: none;
}

:deep(.el-menu--popup .el-menu-item) {
  background-color: #1e293b !important;
  color: #fff !important;
}

:deep(.el-menu--popup .el-menu-item.is-active) {
  background-color: #1abc9c !important;
  color: #fff !important;
}

:deep(.el-menu--popup .el-menu-item:hover) {
  background-color: rgba(255, 255, 255, 0.1) !important;
}
</style>

<style>
/* 自定义 tooltip 样式 */
.sidebar-tooltip {
  background-color: #1abc9c !important;
  color: white !important;
  font-weight: bold;
}
</style>
