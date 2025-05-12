<script setup>
import { ref } from 'vue'
import Icon from './Icon.vue'
import useDragAndDrop from '@/utils/useDnD'

const { onDragStart } = useDragAndDrop()
const isCollapsed = ref(false)

// const nodes = [
//   {
//     type: 'circle',
//     label: '圆形节点',
//     data: { type: 'circle' }
//   },
//   {
//     type: 'square',
//     label: '方形节点',
//     data: { type: 'square' }
//   }
// ]

</script>

<template>
  <div class="sidebar" :class="{ collapsed: isCollapsed }">
    <button class="collapse-btn" @click="isCollapsed = !isCollapsed">
      <Icon :name="isCollapsed ? 'chevron-right' : 'chevron-left'" />
    </button>

    <div class="nodes-container">
      <div class="vue-flow__node-input mt-1" :draggable="true" @dragstart="onDragStart($event, 'input')">
        Input Node
      </div>

      <div class="vue-flow__node-default mt-1" :draggable="true" @dragstart="onDragStart($event, 'default')">
        Default Node
      </div>

      <div class="vue-flow__node-output mt-1" :draggable="true" @dragstart="onDragStart($event, 'output')">
        Output Node
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 160px;
  background-color: #2d3748;
  border-right: 1px solid #4a5568;
  transition: all 0.3s ease;
  z-index: 5;
}

.sidebar.collapsed {
  width: 40px;
}

.collapse-btn {
  position: absolute;
  right: -20px;
  top: 20px;
  width: 20px;
  height: 20px;
  background-color: #2d3748;
  border: 1px solid #4a5568;
  border-left: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.nodes-container {
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100%; */
}

.node-item {
  background-color: #4a5568;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  cursor: move;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.node-preview {
  width: 40px;
  height: 40px;
  border: 2px solid #2563eb;
}

.node-preview.circle {
  border-radius: 50%;
}

.node-preview.square {
  border-radius: 4px;
}

.node-label {
  color: white;
  font-size: 12px;
  text-align: center;
}

.collapsed .node-label {
  display: none;
}

.collapsed .node-item {
  padding: 5px;
}
</style>