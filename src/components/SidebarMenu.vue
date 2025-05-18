<template>
  <aside
    class="relative bg-[#223047] text-white min-h-0 transition-all duration-300"
    :class="{ 'w-56': !isCollapsed, 'w-16': isCollapsed }"
  >
    <!-- 折叠/展开按钮 -->
    <div
      class="absolute bottom-4 -right-3 w-6 h-6 bg-[#1abc9c] rounded-full flex items-center justify-center cursor-pointer text-white z-10 transition-transform hover:bg-[#16a085]"
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
      <el-menu-item
        v-for="item in menuItems"
        :key="item.name"
        :index="item.name"
      >
        <el-icon>
          <component :is="item.icon" />
        </el-icon>
        <template #title>
          <span>{{ item.label }}</span>
        </template>
      </el-menu-item>
    </el-menu>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
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

const emit = defineEmits(['select'])
const isCollapsed = ref(false)

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
</style>

<style>
/* 自定义 tooltip 样式 */
.sidebar-tooltip {
  background-color: #1abc9c !important;
  color: white !important;
  font-weight: bold;
}
</style>
