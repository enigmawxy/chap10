<template>
  <div class="sidebar" :class="{ collapsed: isCollapsed }">
    <div class="collapse-button" @click="toggleCollapse">
      <span v-if="isCollapsed">›</span>
      <span v-else>‹</span>
    </div>
    <button v-for="tab in tabList" :key="tab.name" :class="{ active: current === tab.name }"
      @click="$emit('update:currentTab', tab.name)">
      {{ tab.label }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  tabList: Array,
  current: String
})

const isCollapsed = ref(false)

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>

<style scoped>
.sidebar {
  width: 180px;
  background: #2e3b4e;
  padding: 10px 0;
  min-height: 100vh;
  transition: width 0.3s ease;
  position: relative;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #4a5568;
}

.sidebar.collapsed {
  width: 40px;
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
}

button {
  display: block;
  width: 100%;
  margin: 8px 0;
  padding: 10px;
  background: none;
  color: white;
  border: none;
  text-align: left;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

button.active {
  background: #4caf50;
  color: white;
}

.collapsed button {
  padding: 10px 5px;
  text-align: center;
}
</style>
