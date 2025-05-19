<script setup>
import { ref, onMounted } from 'vue'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import DropzoneBackground from '@/components/DropzoneBackground.vue'
import useDragAndDrop from '@/utils/useDnD.js'

const { onConnect, addEdges } = useVueFlow()

const { onDragOver, onDrop, onDragLeave, isDragOver } = useDragAndDrop()

const nodes = ref([])

onConnect(addEdges)

// 确保VueFlow组件正确初始化
onMounted(() => {
  // 可以在这里添加初始化逻辑
  console.log('GraphBuild component mounted')
})
</script>

<template>
  <div class="dnd-flow h-full" @drop="onDrop">
    <!-- 内容区域，左边距与Sidebar宽度匹配 -->
    <div class="vue-flow-wrapper pt-0">
      <VueFlow
        :nodes="nodes"
        @dragover="onDragOver"
        @dragleave="onDragLeave"
        class="vue-flow-instance"
      >
        <DropzoneBackground :style="{
          backgroundColor: isDragOver ? '#e7f3ff' : 'transparent',
          transition: 'background-color 0.2s ease',
        }">
          <p v-if="isDragOver">拖放到这里</p>
        </DropzoneBackground>
      </VueFlow>
    </div>
  </div>
</template>

<style scoped>
.dnd-flow {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}

.vue-flow-wrapper {
  flex-grow: 1;
  height: 100%;
  width: 100%;
  position: relative;
}

.vue-flow-instance {
  width: 100%;
  height: 100%;
}

@media screen and (min-width: 640px) {
  .dnd-flow {
    flex-direction: row;
  }
}

/* 自定义节点样式 */
:deep(.vue-flow__node) {
  padding: 10px;
  border-radius: 4px;
  width: 120px;
  font-size: 14px;
  text-align: center;
  border: 1px solid #ddd;
  background-color: white;
  font-family: "Microsoft YaHei", "微软雅黑", sans-serif;
}

/* 基础元素节点样式 */
:deep(.circle-node) {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.square-node) {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.text-node) {
  min-width: 100px;
  height: auto;
  padding: 8px 12px;
}

/* 图谱元素节点样式 */
:deep(.person-node),
:deep(.people-node),
:deep(.bookmark-node),
:deep(.case-node),
:deep(.car-node),
:deep(.phone-node),
:deep(.location-node),
:deep(.bus-node),
:deep(.plane-node),
:deep(.doctor-node),
:deep(.building-node),
:deep(.truck-node),
:deep(.hotel-node),
:deep(.ambulance-node),
:deep(.camera-node),
:deep(.harbor-node),
:deep(.ship-node),
:deep(.event-node),
:deep(.time-node),
:deep(.record-node),
:deep(.bbs-node) {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border: 2px solid #ddd;
}
</style>
