<script setup>
import { ref } from 'vue'
import Icon from './Icon.vue'
import useDragAndDrop from '@/utils/useDnD'

const { onDragStart } = useDragAndDrop()
const isCollapsed = ref(false)
const baseOpen = ref(true)
const kgOpen = ref(true)

const baseNodes = [
  { type: 'circle', label: '圆形节点', class: 'circle', style: { background: '#c6f7d0' } },
  { type: 'square', label: '矩形节点', class: 'square', style: { background: '#c6f7d0' } },
  { type: 'text', label: '文字节点', class: 'square', style: { background: '#c6f7d0' } },
]

const kgNodes = [
  { type: 'person', label: '个人', icon: 'user' },
  { type: 'people', label: '人物', icon: 'user' },
  { type: 'tag', label: '标识', icon: 'star' },
  { type: 'case', label: '病例', icon: 'box' },
  { type: 'taxi', label: '出租车', icon: 'car' },
  { type: 'phone', label: '电话', icon: 'phone' },
  { type: 'location', label: '地址', icon: 'map' },
  { type: 'vehicle', label: '动车', icon: 'car' },
  { type: 'flight', label: '航班', icon: 'plane' },
  { type: 'nurse', label: '护士', icon: 'user' },
  { type: 'prison', label: '监狱', icon: 'bank' },
  { type: 'car', label: '机动车', icon: 'car' },
  { type: 'hotel', label: '酒店', icon: 'building' },
  { type: 'ambulance', label: '救护车', icon: 'ambulance' },
  { type: 'truck', label: '卡口', icon: 'truck' },
  { type: 'port', label: '口岸', icon: 'anchor' },
  { type: 'ship', label: '轮船', icon: 'ship' },
  { type: 'event', label: '事件', icon: 'calendar' },
  { type: 'space', label: '时空', icon: 'cube' },
  { type: 'call', label: '通话记录', icon: 'phone' },
  { type: 'netbar', label: '网吧', icon: 'home' },
]
</script>

<template>
  <div class="sidebar" :class="{ collapsed: isCollapsed }">
    <button class="collapse-btn" @click="isCollapsed = !isCollapsed">
      <Icon :name="isCollapsed ? 'chevron-right' : 'chevron-left'" />
    </button>

    <div class="sidebar-section">
      <div class="section-title" @click="baseOpen = !baseOpen">
        基础元素
        <span class="arrow"><Icon :name="baseOpen ? 'chevron-left' : 'chevron-right'" /></span>
      </div>
      <div v-show="baseOpen" class="base-nodes">
        <div
          v-for="node in baseNodes"
          :key="node.type"
          class="base-node"
          :class="node.class"
          :style="node.style"
          :draggable="true"
          @dragstart="onDragStart($event, node.type)"
        >
          <span>{{ node.label }}</span>
        </div>
      </div>
    </div>

    <div class="sidebar-section">
      <div class="section-title" @click="kgOpen = !kgOpen">
        图谱元素
        <span class="arrow"><Icon :name="kgOpen ? 'chevron-left' : 'chevron-right'" /></span>
      </div>
      <div v-show="kgOpen" class="kg-nodes">
        <div
          v-for="node in kgNodes"
          :key="node.type"
          class="kg-node"
          :draggable="true"
          @dragstart="onDragStart($event, node.type)"
        >
          <div class="kg-icon"><Icon :name="node.icon" /></div>
          <div class="kg-label">{{ node.label }}</div>
        </div>
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
  width: 220px;
  background: #f7fafd;
  border-right: 1px solid #e0e6ed;
  transition: all 0.3s ease;
  z-index: 5;
  overflow-y: auto;
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
  background: #f7fafd;
  border: 1px solid #e0e6ed;
  border-left: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
}
.sidebar-section {
  margin-bottom: 16px;
  background: #fff;
  border-radius: 0 0 6px 6px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.03);
  padding-bottom: 8px;
}
.section-title {
  font-size: 15px;
  font-weight: bold;
  color: #444;
  padding: 10px 16px;
  border-bottom: 1px solid #e0e6ed;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f7fafd;
}
.arrow {
  margin-left: 8px;
  font-size: 12px;
}
.base-nodes {
  display: flex;
  gap: 16px;
  padding: 16px;
  justify-content: flex-start;
}
.base-node {
  min-width: 70px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-size: 15px;
  color: #222;
  background: #c6f7d0;
  margin-right: 8px;
  margin-bottom: 8px;
  cursor: move;
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);
  transition: box-shadow 0.2s, border 0.2s;
  border: 2px solid transparent;
}
.base-node.circle {
  border-radius: 50%;
  width: 56px;
  height: 56px;
  justify-content: center;
  font-weight: bold;
}
.base-node.square {
  border-radius: 6px;
  width: 56px;
  height: 56px;
  justify-content: center;
  font-weight: bold;
}
.base-node:active, .base-node:focus {
  border: 2px solid #8ce99a;
}
.kg-nodes {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 0;
  padding: 12px 8px 8px 8px;
  justify-content: flex-start;
}
.kg-node {
  width: 56px;
  height: 56px;
  background: #fff;
  border-radius: 50%;
  border: 1px solid #e0e6ed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 8px 12px 8px;
  cursor: move;
  transition: box-shadow 0.2s, border 0.2s;
}
.kg-node:active, .kg-node:focus {
  border: 2px solid #2563eb;
}
.kg-icon {
  font-size: 24px;
  color: #b0b0b0;
  margin-bottom: 2px;
}
.kg-label {
  font-size: 12px;
  color: #666;
  text-align: center;
  margin-top: 2px;
}
</style>