<script setup>
import { ref, onMounted } from 'vue'
import useDragAndDrop from '@/utils/useDnD'
import Icon from './Icon.vue'

const { onDragStart } = useDragAndDrop()

// 基础元素分类是否展开
const basicExpanded = ref(true)
// 图谱元素分类是否展开
const graphExpanded = ref(true)

// 基础元素数据
const basicElements = [
  { id: 'circle', name: '圆形节点' },
  { id: 'square', name: '矩形节点' },
  { id: 'text', name: '文字节点' }
]

// 图谱元素数据
const graphElements = [
  { id: 'person', name: '个人' },
  { id: 'people', name: '人物' },
  { id: 'bookmark', name: '标记' },
  { id: 'case', name: '病例' },
  { id: 'car', name: '出租车' },
  { id: 'phone', name: '电话' },
  { id: 'location', name: '地址' },
  { id: 'bus', name: '动车' },
  { id: 'plane', name: '航班' },
  { id: 'doctor', name: '护士' },
  { id: 'building', name: '监狱' },
  { id: 'truck', name: '机动车' },
  { id: 'hotel', name: '酒店' },
  { id: 'ambulance', name: '救护车' },
  { id: 'camera', name: '卡口' },
  { id: 'harbor', name: '口岸' },
  { id: 'ship', name: '轮船' },
  { id: 'event', name: '事件' },
  { id: 'time', name: '时空' },
  { id: 'document', name: '通话记录' },
  { id: 'bbs', name: '网吧' }
]

// 确保组件正确初始化
onMounted(() => {
  console.log('Sidebar component mounted')
})

// 切换分类展开/折叠状态
const toggleCategory = (category) => {
  if (category === 'basic') {
    basicExpanded.value = !basicExpanded.value
  } else if (category === 'graph') {
    graphExpanded.value = !graphExpanded.value
  }
}
</script>

<template>
  <aside class="sidebar-container fixed left-0 top-14 bottom-0 w-[250px] bg-white border-r border-gray-200 z-10">
    <!-- 可滚动的内容区域 -->
    <div class="sidebar-content">
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
}

/* 侧边栏内容区域样式 */
.sidebar-content {
  flex: 1;
  overflow-y: auto;
  height: 100%;
}

/* 分类样式 */
.category {
  border-bottom: 1px solid #f0f0f0;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 2px;
}

/* 节点项样式 */
.node-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 2px;
  border-radius: 6px;
  cursor: grab;
  text-align: center;
  transition: all 0.2s;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.node-item:hover {
  background-color: #f5f5f5;
  transform: translateY(-2px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

.node-item span {
  margin-top: 4px;
  font-size: 11px;
  color: #666;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 基础元素特殊样式 */
.circle-node {
  background-color: #f0f9eb;
}

.square-node {
  background-color: #f0f9eb;
}

.text-node {
  background-color: #f0f9eb;
}

/* 图标包装器样式 */
.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #f0f0f0;
  margin-bottom: 3px;
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
