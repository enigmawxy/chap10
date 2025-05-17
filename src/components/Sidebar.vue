<template>
  <div
    class="relative w-[200px] min-h-screen bg-[#2e3b4e] transition-all duration-300 shadow-md border-r border-[#4a5568]"
    :class="{ 'w-16': isCollapsed }"
  >
    <div
      class="absolute -right-3 top-5 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center cursor-pointer text-white z-10 transition-transform duration-300"
      @click="toggleCollapse"
    >
      <el-icon v-if="isCollapsed" class="text-lg">
        <Expand />
      </el-icon>
      <el-icon v-else class="text-lg">
        <Fold />
      </el-icon>
    </div>

    <el-menu
      :default-active="current"
      class="border-none h-full"
      :class="{ 'w-full': !isCollapsed }"
      :collapse="isCollapsed"
      :collapse-transition="false"
      :unique-opened="true"
      background-color="#2e3b4e"
      text-color="#ffffff"
      active-text-color="#ffffff"
      @select="handleSelect"
    >
      <el-menu-item
        v-for="tab in tabList"
        :key="tab.name"
        :index="tab.name"
        class="h-[50px] leading-[50px] my-1"
      >
        <el-tooltip
          v-if="isCollapsed"
          :content="tab.label"
          placement="right"
          effect="dark"
        >
          <el-icon class="text-lg"><component :is="tab.icon" /></el-icon>
        </el-tooltip>
        <template v-else>
          <el-icon class="mr-3 text-lg"><component :is="tab.icon" /></el-icon>
          <span>{{ tab.label }}</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  tabList: Array,
  current: String
})

const emit = defineEmits(['update:currentTab'])

const isCollapsed = ref(false)

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}

const handleSelect = (key) => {
  emit('update:currentTab', key)
}
</script>

<style scoped>
/* 自定义菜单项样式 */
:deep(.el-menu-item.is-active) {
  background-color: #4caf50 !important;
}

:deep(.el-menu-item:hover) {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

:deep(.el-menu--collapse .el-menu-item .el-icon) {
  margin: 0;
  font-size: 1.25rem;
}
</style>
