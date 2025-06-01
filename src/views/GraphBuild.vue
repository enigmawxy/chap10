<script setup>
import { ref, onMounted } from 'vue'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import DropzoneBackground from '@/components/DropzoneBackground.vue'
import useDragAndDrop from '@/utils/useDnD.js'
import CustomNode from '@/components/CustomNode.vue'
import CustomEdge from '@/components/CustomEdge.vue'

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
        :default-viewport="{ zoom: 1 }"
        :connect-on-drop="true"
        :snap-to-grid="true"
        :snap-grid="[15, 15]"
      >
        <!-- 使用具名插槽注册自定义节点 -->
        <template #node-custom="nodeProps">
          <CustomNode v-bind="nodeProps" />
        </template>
         <!-- 自定义连接线 -->
        <template #edge-custom="edgeProps">
          <CustomEdge v-bind="edgeProps" />
        </template>
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

/* 自定义节点样式 - 移除所有默认样式 */
:deep(.vue-flow__node) {
  padding: 0;
  border-radius: 0;
  width: auto;
  height: auto;
  font-size: 14px;
  text-align: center;
  border: none;
  background-color: transparent;
  font-family: "Microsoft YaHei", "微软雅黑", sans-serif;
  box-shadow: none;
}

/* 移除节点选中时的样式 */
:deep(.vue-flow__node.selected) {
  box-shadow: none;
  border: none;
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
:deep(.bbs-node),
:deep(.element-plus-node),
:deep(.tailwind-node),
:deep(.core-concepts-node),
:deep(.installation-node),
:deep(.configuration-node),
:deep(.basic-usage-node),
:deep(.auto-import-node),
:deep(.vue-router-node) {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border: 2px solid #ddd;
}

/* 特殊样式 */
:deep(.element-plus-node) {
  background-color: #f0f9ff;
  border-color: #409EFF;
}

:deep(.tailwind-node) {
  background-color: #f0fdf9;
  border-color: #38B2AC;
}

:deep(.vue-router-node) {
  background-color: #f0fdf4;
  border-color: #42B883;
}

/* 组件相关节点样式 */
:deep(.component-advanced-node),
:deep(.component-basics-node),
:deep(.component-registration-node),
:deep(.global-registration-node),
:deep(.local-registration-node),
:deep(.built-in-components-node),
:deep(.dynamic-components-node),
:deep(.keep-alive-node),
:deep(.transition-node),
:deep(.teleport-node),
:deep(.component-v-model-node),
:deep(.dependency-injection-node),
:deep(.attrs-node) {
  background-color: #ebf5fb;
  border-color: #3498db;
}
</style>
