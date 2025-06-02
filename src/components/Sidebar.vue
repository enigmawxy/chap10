<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import useDragAndDrop from '@/utils/useDnD'
import Icon from './Icon.vue'

const { onDragStart } = useDragAndDrop()

// 基础元素分类是否展开
const basicExpanded = ref(true)
// 图谱元素分类是否展开
const graphExpanded = ref(true)
// Sidebar宽度
const sidebarWidth = ref(280)
// 是否正在调整宽度
const isResizing = ref(false)

// 基础元素数据
const basicElements = [
  { id: 'circle', name: '圆形节点' },
  { id: 'square', name: '矩形节点' },
  { id: 'text', name: '文字节点' }
]

// 图谱元素数据
const graphElements = [
  // 新增节点
  { id: 'element-plus', name: 'ElementPlus' },
  { id: 'tailwind', name: 'Tailwind CSS' },
  { id: 'core-concepts', name: '核心概念' },
  { id: 'installation', name: '安装' },
  { id: 'configuration', name: '配置' },
  { id: 'basic-usage', name: '基本使用' },
  { id: 'auto-import', name: '自动导入' },
  { id: 'vue-router', name: 'Vue Router' },
  // 组件相关节点
  { id: 'component-advanced', name: '组件进阶' },
  { id: 'component-basics', name: '组件基础' },
  { id: 'component-registration', name: '组件注册' },
  { id: 'global-registration', name: '全局注册' },
  { id: 'local-registration', name: '局部注册' },
  { id: 'built-in-components', name: '内置组件' },
  { id: 'dynamic-components', name: '动态组件' },
  { id: 'keep-alive', name: 'KeepAlive' },
  { id: 'transition', name: '动画组件' },
  { id: 'teleport', name: 'Teleport' },
  { id: 'component-v-model', name: '组件V-Model' },
  { id: 'dependency-injection', name: '依赖注入' },
  { id: 'attrs', name: '透传Attributes' },
  // 新增Vue概念节点
  { id: 'single-file-component', name: '单文件组件' },
  { id: 'component-basics-2', name: '组件基础' },
  { id: 'slots', name: '插槽' },
  { id: 'computed', name: '计算属性' },
  { id: 'watchers', name: '侦听器' },
  { id: 'lifecycle', name: '生命周期' },
  { id: 'hooks', name: '钩子函数' },
  { id: 'readonly', name: '只读性' },
  { id: 'caching', name: '缓存性' },
  { id: 'define-component', name: '定义组件' },
  { id: 'use-component', name: '使用组件' },
  { id: 'props', name: '传递Props' },
  { id: 'events', name: '监听事件' }
]

// 计算样式
const sidebarStyle = computed(() => {
  return {
    width: `${sidebarWidth.value}px`
  }
})

// 确保组件正确初始化
onMounted(() => {
  console.log('Sidebar component mounted')

  // 添加全局鼠标事件监听器
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)

  // 初始化content-area的位置
  setTimeout(() => {
    updateMainContentMargin()
  }, 100)
})

// 组件卸载时清理
onUnmounted(() => {
  // 移除全局鼠标事件监听器
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
})

// 切换分类展开/折叠状态
const toggleCategory = (category) => {
  if (category === 'basic') {
    basicExpanded.value = !basicExpanded.value
  } else if (category === 'graph') {
    graphExpanded.value = !graphExpanded.value
  }
}

// 开始调整宽度
const startResize = (event) => {
  isResizing.value = true
  event.preventDefault()
}

// 处理鼠标移动
const handleMouseMove = (event) => {
  if (!isResizing.value) return

  // 计算新宽度 (鼠标X坐标即为宽度，因为Sidebar从左侧0位置开始)
  const newWidth = Math.max(250, Math.min(320, event.clientX))

  // 设置新宽度
  sidebarWidth.value = newWidth

  // 更新主内容区域的左边距
  updateMainContentMargin()
}

// 处理鼠标释放
const handleMouseUp = () => {
  isResizing.value = false
}

// 更新主内容区域的左边距
const updateMainContentMargin = () => {
  // 获取content-area元素
  const contentArea = document.querySelector('.content-area')

  // 更新左边距
  if (contentArea) {
    contentArea.style.left = `${sidebarWidth.value}px`
  }
}
</script>

<template>
  <aside
    class="sidebar-container fixed left-0 bottom-0 bg-white border-r border-gray-200 z-10"
    :style="{ ...sidebarStyle, top: '6px' }"
  >
    <!-- 可滚动的内容区域 -->
    <div class="sidebar-content">
      <!-- 调整宽度的手柄 -->
      <div class="resize-handle" @mousedown="startResize"></div>

      <!-- 基础元素分类 -->
      <div class="category">
        <div class="category-header" @click="toggleCategory('basic')">
          <span class="category-title">基础元素</span>
          <span class="category-arrow" :class="{ 'rotate-180': !basicExpanded }">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </div>

        <div v-if="basicExpanded" class="category-content">
          <div class="node-grid">
            <div
              v-for="element in basicElements"
              :key="element.id"
              class="node-item"
              :class="`${element.id}-node`"
              :draggable="true"
              @dragstart="onDragStart($event, element.id)"
            >
              <div class="icon-wrapper">
                <Icon :name="element.id" />
              </div>
              <span>{{ element.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 图谱元素分类 -->
      <div class="category">
        <div class="category-header" @click="toggleCategory('graph')">
          <span class="category-title">图谱元素</span>
          <span class="category-arrow" :class="{ 'rotate-180': !graphExpanded }">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </div>

        <div v-if="graphExpanded" class="category-content">
          <div class="node-grid">
            <div
              v-for="element in graphElements"
              :key="element.id"
              class="node-item"
              :class="`${element.id}-node`"
              :draggable="true"
              @dragstart="onDragStart($event, element.id)"
            >
              <div class="icon-wrapper">
                <Icon :name="element.id" />
              </div>
              <span>{{ element.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped>
/* 侧边栏容器样式 */
.sidebar-container {
  font-family: "Microsoft YaHei", "微软雅黑", sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  transition: width 0.1s ease;
  margin-top: 0;
  padding-top: 0;
  border-top: none;
}

/* 侧边栏内容区域样式 */
.sidebar-content {
  flex: 1;
  overflow-y: auto;
  height: 100%;
  position: relative;
  padding-top: 0;
  margin-top: 0;
  border-top: none;
}

/* 调整宽度手柄样式 */
.resize-handle {
  position: absolute;
  top: 0;
  right: 0;
  width: 4px;
  height: 100%;
  background-color: transparent;
  cursor: ew-resize;
  z-index: 20;
}

.resize-handle:hover,
.resize-handle:active {
  background-color: rgba(0, 120, 255, 0.3);
}

/* 分类样式 */
.category {
  border-bottom: 1px solid #f0f0f0;
}

/* 第一个分类没有顶部边距 */
.category:first-child {
  margin-top: 0;
  padding-top: 0;
  border-top: none;
}

/* 第一个分类的标题栏没有顶部边距 */
.category:first-child .category-header {
  padding-top: 8px;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background-color: #f9f9f9;
  cursor: pointer;
  user-select: none;
}

.category-title {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.category-arrow {
  color: #999;
  transition: transform 0.2s ease;
}

.rotate-180 {
  transform: rotate(180deg);
}

.category-content {
  padding: 10px;
  background-color: #fff;
}

/* 节点网格布局 */
.node-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
  gap: 8px;
  padding: 4px;
  margin-bottom: 4px;
}

/* 确保在250px宽度下每行显示3个节点 */
@media (max-width: 250px) {
  .node-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* 节点项样式 */
.node-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 2px;
  cursor: grab;
  text-align: center;
  transition: all 0.2s;
  background-color: transparent;
  border: none;
}

.node-item:hover {
  transform: translateY(-2px);
}

.node-item span {
  margin-top: 2px;
  font-size: 12px;
  font-weight: 500;
  color: #333;
  width: 100%;
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2px 4px;
  border-radius: 4px;
  transition: all 0.2s;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.node-item:hover span {
  color: #1890ff;
}

/* 基础元素特殊样式 */
.circle-node .icon-wrapper {
  background-color: #f0f9eb;
  border: 2px solid #67c23a;
}

.square-node .icon-wrapper {
  background-color: #f0f9eb;
  border: 2px solid #67c23a;
}

.text-node .icon-wrapper {
  background-color: #f0f9eb;
  border: 2px solid #67c23a;
}

/* ElementPlus特殊样式 */
.element-plus-node .icon-wrapper {
  background-color: #f0f9ff;
  border: 2px solid #409EFF;
}

/* Tailwind特殊样式 */
.tailwind-node .icon-wrapper {
  background-color: #f0fdf9;
  border: 2px solid #38B2AC;
}

/* Vue Router特殊样式 */
.vue-router-node .icon-wrapper {
  background-color: #f0fdf4;
  border: 2px solid #42B883;
}

/* 图标包装器样式 */
.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
  margin-bottom: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  margin-left: auto;
  margin-right: auto;
}

.node-item:hover .icon-wrapper {
  transform: scale(1.05);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
}

/* 组件相关节点特殊样式 */
[class*="component-"] .icon-wrapper,
.keep-alive-node .icon-wrapper,
.transition-node .icon-wrapper,
.teleport-node .icon-wrapper,
.attrs-node .icon-wrapper,
.dependency-injection-node .icon-wrapper {
  background-color: #ebf5fb;
  border: 2px solid #3498db;
}

/* 图标样式 */
.node-item :deep(svg) {
  width: 20px;
  height: 20px;
  color: #666;
}

/* 确保滚动条样式美观 */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #ddd;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ccc;
}
</style>
