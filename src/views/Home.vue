<script setup>
import { ref } from 'vue'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import DropzoneBackground from '@/components/DropzoneBackground.vue'
import useDragAndDrop from '@/utils/useDnD.js'
import CustomNode from '@/components/CustomNode.vue'

const { onConnect, addEdges } = useVueFlow()

const { onDragOver, onDrop, onDragLeave, isDragOver } = useDragAndDrop()

const nodes = ref([])

onConnect(addEdges)
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
</style>