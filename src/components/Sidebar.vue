<template>
  <div class="sidebar" :class="{ collapsed: isCollapsed }">
    <div class="collapse-button" @click="toggleCollapse">
      <el-icon v-if="isCollapsed">
        <Expand />
      </el-icon>
      <el-icon v-else>
        <Fold />
      </el-icon>
    </div>

    <div class="menu-items">
      <el-tooltip
        v-for="tab in tabList"
        :key="tab.name"
        :content="tab.label"
        placement="right"
        :disabled="!isCollapsed"
        :effect="tooltipEffect"
      >
        <button
          :class="{ active: current === tab.name }"
          @click="$emit('update:currentTab', tab.name)"
        >
          <el-icon class="menu-icon">
            <component :is="tab.icon" />
          </el-icon>
          <span class="menu-text" v-show="!isCollapsed">{{ tab.label }}</span>
        </button>
      </el-tooltip>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'

const props = defineProps({
  tabList: Array,
  current: String
})

const isCollapsed = ref(false)
const tooltipEffect = ref('dark')

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>

<style scoped>
.sidebar {
  width: 200px;
  background: #2e3b4e;
  padding: 10px 0;
  min-height: 100vh;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #4a5568;
}

.sidebar.collapsed {
  width: 64px;
}

.collapse-button {
  position: absolute;
  right: -12px;
  top: 20px;
  width: 24px;
  height: 24px;
  background: #4caf50;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 18px;
  z-index: 1;
  transition: transform 0.3s;
}

.menu-items {
  margin-top: 20px;
}

button {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 4px 0;
  padding: 12px 16px;
  background: none;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 4px;
  margin: 4px 8px;
  width: calc(100% - 16px);
}

button:hover {
  background: rgba(255, 255, 255, 0.1);
}

button.active {
  background: #4caf50;
  color: white;
}

.menu-icon {
  font-size: 18px;
  margin-right: 12px;
  flex-shrink: 0;
}

.menu-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: opacity 0.3s;
}

.collapsed button {
  justify-content: center;
  padding: 12px 0;
}

.collapsed .menu-icon {
  margin-right: 0;
  font-size: 20px;
}
</style>
