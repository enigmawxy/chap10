<script setup>
import { computed } from 'vue'
import { Position, Handle } from '@vue-flow/core'
import Icon from './Icon.vue'

// 接收Vue Flow传递的节点属性
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  data: {
    type: Object,
    required: true
  },
  selected: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'default'
  }
})

// 计算节点类型
const nodeType = computed(() => props.data.nodeType || 'default')
</script>

<template>
  <div class="custom-node" :class="{ selected }" :data-id="id">
    <!-- 图标包装器 -->
    <div class="icon-wrapper">
      <Icon :name="nodeType" />
    </div>

    <!-- 标签 -->
    <div class="node-label">
      {{ data.label }}
    </div>

    <!-- 连接点 -->
    <Handle type="target" :position="Position.Top" class="handle handle-top nodrag" />
    <Handle type="source" :position="Position.Right" class="handle handle-right nodrag" />
    <Handle type="source" :position="Position.Bottom" class="handle handle-bottom nodrag" />
    <Handle type="target" :position="Position.Left" class="handle handle-left nodrag" />
  </div>
</template>

<style scoped>
.custom-node {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent !important;
  border: none !important;
  font-family: "Microsoft YaHei", "微软雅黑", sans-serif;
  transition: all 0.2s;
  width: auto !important;
  height: auto !important;
  padding: 0 !important;
  margin: 0 !important;
  box-shadow: none !important;
  outline: none !important;
}

.custom-node.selected {
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
  outline: none !important;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
  margin-bottom: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* ElementPlus节点 */
.custom-node[data-id="element-plus"] .icon-wrapper {
  background-color: #f0f9ff;
  border: 2px solid #409EFF;
}

/* Tailwind节点 */
.custom-node[data-id="tailwind"] .icon-wrapper {
  background-color: #f0fdf9;
  border: 2px solid #38B2AC;
}

/* Vue Router节点 */
.custom-node[data-id="vue-router"] .icon-wrapper {
  background-color: #f0fdf4;
  border: 2px solid #42B883;
}

/* 组件相关节点 */
.custom-node[data-id="component-advanced"] .icon-wrapper,
.custom-node[data-id="component-basics"] .icon-wrapper,
.custom-node[data-id="component-registration"] .icon-wrapper,
.custom-node[data-id="global-registration"] .icon-wrapper,
.custom-node[data-id="local-registration"] .icon-wrapper,
.custom-node[data-id="built-in-components"] .icon-wrapper,
.custom-node[data-id="dynamic-components"] .icon-wrapper,
.custom-node[data-id="keep-alive"] .icon-wrapper,
.custom-node[data-id="transition"] .icon-wrapper,
.custom-node[data-id="teleport"] .icon-wrapper,
.custom-node[data-id="component-v-model"] .icon-wrapper,
.custom-node[data-id="dependency-injection"] .icon-wrapper,
.custom-node[data-id="attrs"] .icon-wrapper {
  background-color: #ebf5fb;
  border: 2px solid #3498db;
}

/* 基础元素节点 */
.custom-node[data-id="circle"] .icon-wrapper,
.custom-node[data-id="square"] .icon-wrapper,
.custom-node[data-id="text"] .icon-wrapper {
  background-color: #f0f9eb;
  border: 2px solid #67c23a;
}

.node-label {
  font-size: 12px;
  font-weight: 500;
  color: #333;
  text-align: center;
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.custom-node :deep(svg) {
  width: 20px;
  height: 20px;
  color: #666;
}

/* 连接点样式 */
.handle {
  width: 8px;
  height: 8px;
  background-color: #3498db;
  border: 2px solid white;
  opacity: 0;
  transition: opacity 0.2s, transform 0.2s;
  z-index: 10;
  pointer-events: auto;
}

.custom-node:hover .handle {
  opacity: 0.8;
}

/* 连接点位置 */
.handle-top {
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.handle-right {
  top: 50%;
  right: 0;
  transform: translateX(50%) translateY(-50%);
}

.handle-bottom {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
}

.handle-left {
  top: 50%;
  left: 0;
  transform: translateX(-50%) translateY(-50%);
}
</style>
