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

// 定义事件
const emit = defineEmits(['node-click'])

// 节点点击处理函数
const handleNodeClick = () => {
  console.log('节点被点击:', props.id)
  emit('node-click', { id: props.id, data: props.data })
}

// 计算节点类型
const nodeType = computed(() => props.data.nodeType || 'default')

// 计算文字位置样式
const labelPositionStyle = computed(() => {
  const position = props.data.textPosition || '下方'
  switch (position) {
    case '上方':
      return { order: -1, marginBottom: '6px', marginTop: '0' }
    case '下方':
      return { order: 1, marginTop: '6px', marginBottom: '0' }
    case '左边':
      return { order: -1, marginRight: '6px', alignSelf: 'center' }
    case '右边':
      return { order: 1, marginLeft: '6px', alignSelf: 'center' }
    case '居中':
      return { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
    default:
      return { order: 1, marginTop: '6px', marginBottom: '0' }
  }
})

// 计算节点容器样式
const nodeContainerStyle = computed(() => {
  const position = props.data.textPosition || '下方'
  return {
    flexDirection: position === '左边' || position === '右边' ? 'row' : 'column'
  }
})

// 计算图标包装器样式
const iconWrapperStyle = computed(() => {
  const baseStyle = props.selected ? { borderColor: '#409EFF', borderWidth: '2px' } : {}
  const size = props.data.size || 40
  const bgColor = props.data.bgColor || '#f0f0f0'
  
  return {
    ...baseStyle,
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: bgColor
  }
})

// 计算文字样式
const labelStyle = computed(() => {
  const textColor = props.data.textColor || '#333'
  return {
    color: textColor
  }
})
</script>

<template>
  <div class="custom-node" :class="{ selected: props.selected }" :data-id="id" :style="nodeContainerStyle" @click="handleNodeClick">
    <!-- 图标包装器（包含连接点） -->
    <div class="icon-wrapper" :style="iconWrapperStyle">
      <Icon :name="nodeType" />
      <!-- 连接点置于圆心（支持输入输出） -->
      <Handle type="source" :position="Position.Top" class="handle nodrag" />
      <Handle type="target" :position="Position.Top" class="handle nodrag" />
    </div>

    <!-- 标签 -->
    <div class="node-label" :style="{ ...labelPositionStyle, ...labelStyle }">
      {{ data.label }}
    </div>
  </div>
</template>

<style scoped>
.custom-node {
  position: relative;
  display: flex;
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
  cursor: pointer;
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
  /* background-color: #f0f0f0; */
  margin-bottom: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative; /* 作为连接点的定位参考 */
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
.custom-node[data-id="attrs"] .icon-wrapper,
.custom-node[data-id="single-file-component"] .icon-wrapper,
.custom-node[data-id="component-basics-2"] .icon-wrapper,
.custom-node[data-id="slots"] .icon-wrapper,
.custom-node[data-id="computed"] .icon-wrapper,
.custom-node[data-id="watchers"] .icon-wrapper,
.custom-node[data-id="lifecycle"] .icon-wrapper,
.custom-node[data-id="hooks"] .icon-wrapper,
.custom-node[data-id="readonly"] .icon-wrapper,
.custom-node[data-id="caching"] .icon-wrapper,
.custom-node[data-id="define-component"] .icon-wrapper,
.custom-node[data-id="use-component"] .icon-wrapper,
.custom-node[data-id="props"] .icon-wrapper,
.custom-node[data-id="events"] .icon-wrapper {
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

/* 连接点位置 - 全部聚合到圆心 */
.handle {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
