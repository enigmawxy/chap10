<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import DropzoneBackground from '@/components/DropzoneBackground.vue'
import useDragAndDrop from '@/utils/useDnD.js'
import CustomNode from '@/components/CustomNode.vue'
import SettingsPanel from '@/components/SettingsPanel.vue'
import { saveGraphData, loadGraphData } from '@/utils/graphStorage.js'

const { onConnect, addEdges } = useVueFlow()

// 获取拖放相关函数
const { onDragOver, onDragLeave, isDragOver } = useDragAndDrop()

// 自定义onDrop函数，添加节点后保存图谱
const { onDrop: originalOnDrop } = useDragAndDrop()
const onDrop = (event) => {
  // 调用原始onDrop函数并获取新节点
  const newNode = originalOnDrop(event)

  // 将新节点添加到本地nodes数组
  if (newNode) {
    nodes.value.push(newNode)
  }

  // 保存图谱数据
  setTimeout(() => {
    saveGraph()
  }, 100) // 短暂延迟，确保节点已添加
}

const nodes = ref([])
const edges = ref([])
const selectedElements = ref([])
const isLoading = ref(false)
const isSaving = ref(false)
const isClearing = ref(false)
const autoSaveInterval = ref(null)
const showMessage = ref(false)
const message = ref('')

// 连接节点时的处理函数
onConnect((params) => {
  // 添加新的边到edges数组
  edges.value.push(params)
  // 保存图谱数据
  saveGraph()
})

// 加载图谱数据
const loadGraph = async () => {
  try {
    isLoading.value = true
    console.log('开始加载图谱数据')
    const data = await loadGraphData()
    console.log('加载的图谱数据:', data)
    if (data && data.nodes && data.edges) {
      nodes.value = data.nodes
      edges.value = data.edges
      console.log('图谱数据加载成功')
    } else {
      console.log('加载的图谱数据格式不正确，使用空图谱')
      nodes.value = []
      edges.value = []
    }
  } catch (error) {
    console.error('加载图谱数据失败:', error)
    // 显示错误消息
    message.value = '加载失败: ' + error.message
    showMessage.value = true
    setTimeout(() => {
      showMessage.value = false
    }, 3000)
  } finally {
    isLoading.value = false
  }
}

// 保存图谱数据
const saveGraph = async () => {
  try {
    isSaving.value = true
    const graphData = {
      nodes: nodes.value,
      edges: edges.value
    }
    console.log('开始保存图谱数据', graphData)
    const success = await saveGraphData(graphData)
    console.log('保存结果:', success ? '成功' : '失败')

    if (success) {
      console.log('图谱数据保存成功')
      // 显示成功消息
      message.value = '图谱已保存'
      showMessage.value = true
      setTimeout(() => {
        showMessage.value = false
      }, 2000)
    } else {
      throw new Error('保存操作返回失败状态')
    }
  } catch (error) {
    console.error('保存图谱数据失败:', error)

    // 显示错误消息
    message.value = '保存失败: ' + error.message
    showMessage.value = true
    setTimeout(() => {
      showMessage.value = false
    }, 3000)
  } finally {
    isSaving.value = false
  }
}

// 清除图谱
const clearGraph = async () => {
  try {
    isClearing.value = true

    // 清空节点和边
    nodes.value = []
    edges.value = []

    // 保存空图谱
    await saveGraph()

    // 显示成功消息
    message.value = '图谱已清除'
    showMessage.value = true
    setTimeout(() => {
      showMessage.value = false
    }, 2000)
  } catch (error) {
    console.error('清除图谱失败:', error)

    // 显示错误消息
    message.value = '清除失败'
    showMessage.value = true
    setTimeout(() => {
      showMessage.value = false
    }, 2000)
  } finally {
    isClearing.value = false
  }
}

// 组件挂载时加载图谱数据
onMounted(async () => {
  console.log('Home组件挂载，加载图谱数据')
  await loadGraph()

  // 设置自动保存
  autoSaveInterval.value = setInterval(() => {
    if (nodes.value.length > 0 || edges.value.length > 0) {
      console.log('自动保存图谱数据')
      saveGraph()
    }
  }, 30000) // 每30秒自动保存一次
})

// 组件卸载时清理
onUnmounted(() => {
  // 清除自动保存定时器
  if (autoSaveInterval.value) {
    clearInterval(autoSaveInterval.value)
  }
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

    // 保存图谱数据
    saveGraph()
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

    // 保存图谱数据
    saveGraph()
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

  // 保存图谱数据
  saveGraph()
}
</script>

<template>
  <div class="dnd-flow h-full" @drop="onDrop">
    <!-- 内容区域，左边距与Sidebar宽度匹配 -->
    <div class="vue-flow-wrapper pt-0">
      <!-- 工具栏 -->
      <div class="toolbar">
        <button class="toolbar-button save-button" @click="saveGraph" :disabled="isSaving">
          {{ isSaving ? '保存中...' : '保存图谱' }}
        </button>
        <button class="toolbar-button clear-button" @click="clearGraph" :disabled="isClearing">
          {{ isClearing ? '清除中...' : '清除图谱' }}
        </button>
        <span v-if="isLoading" class="loading-indicator">加载中...</span>
      </div>

      <VueFlow :nodes="nodes" :edges="edges" @dragover="onDragOver" @dragleave="onDragLeave" class="vue-flow-instance"
        :default-viewport="{ zoom: 1 }" :connect-on-drop="true" :snap-to-grid="true" :snap-grid="[15, 15]"
        @selectionchange="selectedElements = $event">
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

      <!-- 消息提示 -->
      <div v-if="showMessage" class="message-toast">
        {{ message }}
      </div>
    </div>

    <!-- 设置面板 -->
    <SettingsPanel :selectedElements="selectedElements" @update-node-settings="updateNodeSettings"
      @update-connection-settings="updateConnectionSettings" @update-global-settings="updateGlobalSettings" />
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

/* 工具栏样式 */
.toolbar {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
  display: flex;
  gap: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.toolbar-button {
  padding: 6px 12px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  font-family: "Microsoft YaHei", "微软雅黑", sans-serif;
}

.toolbar-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.save-button {
  background-color: #409EFF;
  color: white;
}

.save-button:hover:not(:disabled) {
  background-color: #66b1ff;
}

.clear-button {
  background-color: #f56c6c;
  color: white;
}

.clear-button:hover:not(:disabled) {
  background-color: #f78989;
}

.loading-indicator {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;
}

/* 消息提示样式 */
.message-toast {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 14px;
  z-index: 9999;
  animation: fadeInOut 2s ease;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  80% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
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
