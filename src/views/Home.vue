<script setup>
import { ref } from 'vue'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import DropzoneBackground from '@/components/DropzoneBackground.vue'
import useDragAndDrop from '@/utils/useDnD.js'
import CustomNode from '@/components/CustomNode.vue'
import SettingsPanel from '@/components/SettingsPanel.vue'

const { onConnect, addEdges } = useVueFlow()

const { onDragOver, onDrop, onDragLeave, isDragOver } = useDragAndDrop()

const nodes = ref([])
const edges = ref([])
const selectedElements = ref([])

onConnect((params) => {
  // 添加新的边到edges数组
  edges.value.push(params)
})

// 更新节点设置
const updateNodeSettings = ({ id, settings }) => {
  const nodeIndex = nodes.value.findIndex(node => node.id === id)
  if (nodeIndex > -1) {
    nodes.value[nodeIndex] = {
      ...nodes.value[nodeIndex],
      data: {
        ...nodes.value[nodeIndex].data,
        label: settings.nodeText,
        imageUrl: settings.imageUrl
      },
      style: {
        ...nodes.value[nodeIndex].style,
        backgroundColor: settings.bgColor,
        color: settings.textColor,
        fontSize: settings.textStyle.split(' ')[1],
        fontFamily: settings.textStyle.split(' ')[2],
        width: settings.size,
        height: settings.size
      }
    }
  }
}

// 更新连线设置
const updateConnectionSettings = ({ id, settings }) => {
  const edgeIndex = edges.value.findIndex(edge => edge.id === id)
  if (edgeIndex > -1) {
    edges.value[edgeIndex] = {
      ...edges.value[edgeIndex],
      label: settings.text,
      type: settings.type === '直线' ? 'default' : settings.type === '曲线' ? 'smoothstep' : 'step',
      style: {
        ...edges.value[edgeIndex].style,
        stroke: settings.color,
        strokeWidth: settings.width,
        strokeDasharray: settings.dashedStyle
      },
      markerEnd: settings.showArrow === '是' ? { type: 'arrow' } : undefined,
      labelStyle: {
        ...edges.value[edgeIndex].labelStyle,
        fill: settings.textColor,
        fontFamily: settings.textStyle.split(' ')[2],
        fontSize: settings.textStyle.split(' ')[1]
      }
    }
  }
}

// 更新全局设置
const updateGlobalSettings = (settings) => {
  // 更新所有连线的默认样式
  edges.value = edges.value.map(edge => ({
    ...edge,
    style: {
      ...edge.style,
      stroke: settings.lineColor,
      strokeWidth: settings.lineWidth
    }
  }))
}
</script>

<template>
    <div class="dnd-flow h-full" @drop="onDrop">
        <!-- 内容区域，左边距与Sidebar宽度匹配 -->
        <div class="vue-flow-wrapper pt-0">
            <VueFlow
              :nodes="nodes"
              :edges="edges"
              @dragover="onDragOver"
              @dragleave="onDragLeave"
              class="vue-flow-instance"
              :default-viewport="{ zoom: 1 }"
              :connect-on-drop="true"
              :snap-to-grid="true"
              :snap-grid="[15, 15]"
              @selectionchange="selectedElements = $event"
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

        <!-- 设置面板 -->
        <SettingsPanel
          :selectedElements="selectedElements"
          @update-node-settings="updateNodeSettings"
          @update-connection-settings="updateConnectionSettings"
          @update-global-settings="updateGlobalSettings"
        />
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