<script setup>
import { ref, computed, onMounted, onUnmounted, defineProps, defineEmits, watchEffect } from 'vue'

// 定义props
const props = defineProps({
  selectedElements: {
    type: Array,
    default: () => []
  }
})

// 定义事件
const emit = defineEmits([
  'update-global-settings',
  'update-node-settings',
  'update-connection-settings'
])

// 当前激活的选项卡
const activeTab = ref('global')

// 面板宽度 - 默认值为250px
const panelWidth = ref(250)
// 是否正在调整宽度
const isResizing = ref(false)
// 记录鼠标开始拖动时的位置和面板宽度
const startX = ref(0)
const startWidth = ref(250)
// 面板宽度范围
const MIN_WIDTH = 230
const MAX_WIDTH = 350

// 全局设置数据
const globalSettings = ref({
  graphId: `graph-${Date.now()}`,
  graphName: '自定义图谱',
  lineWidth: 2,
  lineColor: '#ff0000'
})

// 节点设置数据
const nodeSettings = ref({
  nodeId: 'node-1721579000582',
  nodeText: '中国银行',
  textPosition: '下方',
  textStyle: 'normal 13px YaHei',
  textColor: '#000000',
  bgColor: '#ffcccc',
  imageUrl: 'http://www.graphvis.cn/graphvis/v2-application',
  size: 34
})

// 连线设置数据
const connectionSettings = ref({
  text: '开户行',
  textStyle: 'normal 14px Arial',
  type: '直线',
  width: 2,
  showArrow: '是',
  dashedStyle: '[0]',
  color: '#ff9999',
  textColor: '#333333'
})

// 计算样式
const panelStyle = computed(() => {
  return {
    width: `${panelWidth.value}px`,
    minWidth: `${panelWidth.value}px`,
    maxWidth: `${panelWidth.value}px`
  }
})

// 处理窗口大小变化
const handleWindowResize = () => {
  // 不做任何操作，保持面板宽度不变
  console.log('窗口大小变化，面板宽度保持不变:', panelWidth.value)
}

// 确保组件正确初始化
onMounted(() => {
  console.log('SettingsPanel component mounted')

  // 添加全局鼠标事件监听器
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)

  // 添加窗口大小变化事件监听器
  window.addEventListener('resize', handleWindowResize)

  // 调试信息
  setTimeout(() => {
    const handle = document.getElementById('settings-resize-handle')
    if (handle) {
      console.log('找到resize-handle元素:', handle)
      console.log('resize-handle样式:', window.getComputedStyle(handle))

      // 添加一个明显的调试样式
      handle.style.backgroundColor = 'rgba(255, 0, 0, 0.2)'
      setTimeout(() => {
        handle.style.backgroundColor = 'rgba(0, 0, 0, 0.02)'
      }, 2000)
    } else {
      console.error('未找到resize-handle元素')
    }
  }, 1000)
})

// 组件卸载时清理
onUnmounted(() => {
  // 移除全局鼠标事件监听器
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)

  // 移除窗口大小变化事件监听器
  window.removeEventListener('resize', handleWindowResize)
})

// 开始调整宽度
const startResize = (event) => {
  console.log('开始调整宽度')
  isResizing.value = true
  startX.value = event.clientX
  startWidth.value = panelWidth.value

  // 更改光标样式
  document.body.style.cursor = 'ew-resize'

  // 防止默认行为和文本选择
  event.preventDefault()
}

// 处理鼠标移动
const handleMouseMove = (event) => {
  if (!isResizing.value) return

  console.log('鼠标移动中...')

  // 计算新宽度 (基于鼠标移动的距离)
  const dx = event.clientX - startX.value
  // 鼠标向右移动，dx为正，宽度应减小；鼠标向左移动，dx为负，宽度应增加
  const newWidth = Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, startWidth.value - dx))

  console.log('鼠标位置:', event.clientX, '开始位置:', startX.value, '移动距离:', dx, '新宽度:', newWidth)

  // 设置新宽度
  panelWidth.value = newWidth

  // 防止文本选择
  event.preventDefault()
}

// 处理鼠标释放
const handleMouseUp = () => {
  console.log('结束调整宽度')
  isResizing.value = false

  // 恢复光标样式
  document.body.style.cursor = 'default'
}

// 增减连线宽度
const decrementLineWidth = () => {
  if (globalSettings.value.lineWidth > 1) {
    globalSettings.value.lineWidth--
  }
}

const incrementLineWidth = () => {
  globalSettings.value.lineWidth++
}

// 增减节点大小
const decrementNodeSize = () => {
  if (nodeSettings.value.size > 1) {
    nodeSettings.value.size--
  }
}

const incrementNodeSize = () => {
  nodeSettings.value.size++
}

// 增减连线宽度
const decrementConnectionWidth = () => {
  if (connectionSettings.value.width > 1) {
    connectionSettings.value.width--
  }
}

const incrementConnectionWidth = () => {
  connectionSettings.value.width++
}

// 监听选中元素变化
watchEffect(() => {
  const elements = props.selectedElements

  if (elements.length === 1) {
    const element = elements[0]

    // 判断是节点还是连线
    if (element.type === 'custom') {
      // 是节点
      activeTab.value = 'node'
      nodeSettings.value = {
        nodeId: element.id || '',
        nodeText: element.data?.label || '',
        textPosition: '下方', // 默认文字位置
        textStyle: element.style?.fontStyle
          ? `${element.style.fontStyle} ${element.style.fontSize || '13px'} ${element.style.fontFamily || 'YaHei'}`
          : 'normal 13px YaHei',
        textColor: element.style?.color || '#000000',
        bgColor: element.style?.backgroundColor || '#ffcccc',
        imageUrl: element.data?.imageUrl || '',
        size: element.style?.width || 34
      }
    } else {
      // 是连线
      activeTab.value = 'connection'
      connectionSettings.value = {
        text: element.label || '',
        textStyle: element.labelStyle?.fontStyle
          ? `${element.labelStyle.fontStyle} ${element.labelStyle.fontSize || '14px'} ${element.labelStyle.fontFamily || 'Arial'}`
          : 'normal 14px Arial',
        type: element.type === 'default' ? '直线' : element.type === 'smoothstep' ? '曲线' : '折线',
        width: element.style?.strokeWidth || 2,
        showArrow: element.markerEnd ? '是' : '否',
        dashedStyle: element.style?.strokeDasharray || '[0]',
        color: element.style?.stroke || '#ff9999',
        textColor: element.labelStyle?.fill || '#333333'
      }
    }
  } else {
    // 没有选中元素或选中多个元素，显示全局设置
    activeTab.value = 'global'
  }
})

// 保存全局设置
const saveGlobalSettings = () => {
  emit('update-global-settings', globalSettings.value)
}

// 保存节点设置
const saveNodeSettings = () => {
  if (props.selectedElements.length === 1 && props.selectedElements[0].type === 'custom') {
    emit('update-node-settings', {
      id: props.selectedElements[0].id,
      settings: nodeSettings.value
    })
  }
}

// 保存连线设置
const saveConnectionSettings = () => {
  if (props.selectedElements.length === 1 && props.selectedElements[0].type !== 'custom') {
    const settings = connectionSettings.value;
    
    // 映射连线类型到Vue Flow类型
    let vueFlowType = 'default';
    if (settings.type === '曲线') {
      vueFlowType = 'smoothstep';
    } else if (settings.type === '折线') {
      vueFlowType = 'step';
    }
    
    emit('update-connection-settings', {
      id: props.selectedElements[0].id,
      settings: {
        ...settings,
        vueFlowType: vueFlowType
      }
    })
  }
}
</script>

<template>
  <aside class="settings-panel-container fixed right-0 top-[56px] bottom-0 bg-white border-l border-gray-200 z-10" :style="panelStyle">
    <!-- 调整宽度的手柄 -->
    <div class="resize-handle" @mousedown="startResize" title="拖动调整宽度" id="settings-resize-handle"></div>

    <!-- 选项卡 -->
    <div class="settings-tabs">
      <div
        class="tab-item"
        :class="{ active: activeTab === 'global' }"
        @click="activeTab = 'global'"
      >
        全局设置
      </div>
      <div
        class="tab-item"
        :class="{ active: activeTab === 'node' }"
        @click="activeTab = 'node'"
      >
        节点设置
      </div>
      <div
        class="tab-item"
        :class="{ active: activeTab === 'connection' }"
        @click="activeTab = 'connection'"
      >
        连线设置
      </div>
    </div>

    <!-- 内容区域 -->
    <div class="settings-content">
      <!-- 全局设置 -->
      <div v-if="activeTab === 'global'" class="tab-content">
        <div class="form-group">
          <label>图谱编码</label>
          <input type="text" v-model="globalSettings.graphId" readonly class="form-input readonly">
        </div>

        <div class="form-group">
          <label>图谱名称</label>
          <input type="text" v-model="globalSettings.graphName" class="form-input">
        </div>

        <div class="form-group">
          <label>连线宽度</label>
          <div class="number-input">
            <button @click="decrementLineWidth" class="number-btn">−</button>
            <input type="text" v-model.number="globalSettings.lineWidth" class="number-value" readonly>
            <button @click="incrementLineWidth" class="number-btn">+</button>
          </div>
        </div>

        <div class="form-group">
          <label>连线颜色</label>
          <input type="color" v-model="globalSettings.lineColor" class="color-picker">
        </div>

        <button class="save-button" @click="saveGlobalSettings">保存配置</button>
      </div>

      <!-- 节点设置 -->
      <div v-if="activeTab === 'node'" class="tab-content">
        <div class="form-group">
          <label>节点编码</label>
          <input type="text" v-model="nodeSettings.nodeId" readonly class="form-input readonly">
        </div>

        <div class="form-group">
          <label>节点文字</label>
          <textarea v-model="nodeSettings.nodeText" class="form-textarea"></textarea>
        </div>

        <div class="form-group">
          <label>文字位置</label>
          <select v-model="nodeSettings.textPosition" class="form-select">
            <option>上方</option>
            <option>下方</option>
            <option>左边</option>
            <option>右边</option>
            <option>居中</option>
          </select>
        </div>

        <div class="form-group">
          <label>文字样式</label>
          <input type="text" v-model="nodeSettings.textStyle" class="form-input">
        </div>

        <div class="form-group">
          <label>文字颜色</label>
          <input type="color" v-model="nodeSettings.textColor" class="color-picker">
        </div>

        <div class="form-group">
          <label>节点底色</label>
          <input type="color" v-model="nodeSettings.bgColor" class="color-picker">
        </div>

        <div class="form-group">
          <label>节点图片地址</label>
          <input type="text" v-model="nodeSettings.imageUrl" class="form-input">
        </div>

        <div class="form-group">
          <label>节点大小</label>
          <div class="number-input">
            <button @click="decrementNodeSize" class="number-btn">−</button>
            <input type="text" v-model.number="nodeSettings.size" class="number-value" readonly>
            <button @click="incrementNodeSize" class="number-btn">+</button>
          </div>
        </div>

        <button class="save-button" @click="saveNodeSettings">确定</button>
      </div>

      <!-- 连线设置 -->
      <div v-if="activeTab === 'connection'" class="tab-content">
        <div class="form-group">
          <label>连线文字</label>
          <input type="text" v-model="connectionSettings.text" class="form-input">
        </div>

        <div class="form-group">
          <label>文字样式</label>
          <input type="text" v-model="connectionSettings.textStyle" class="form-input">
        </div>

        <div class="form-group">
          <label>连线类型</label>
          <select v-model="connectionSettings.type" class="form-select">
            <option>直线</option>
            <option>曲线</option>
            <option>折线</option>
          </select>
        </div>

        <div class="form-group">
          <label>连线宽度</label>
          <div class="number-input">
            <button @click="decrementConnectionWidth" class="number-btn">−</button>
            <input type="text" v-model.number="connectionSettings.width" class="number-value" readonly>
            <button @click="incrementConnectionWidth" class="number-btn">+</button>
          </div>
        </div>

        <div class="form-group">
          <label>显示箭头</label>
          <select v-model="connectionSettings.showArrow" class="form-select">
            <option>是</option>
            <option>否</option>
          </select>
        </div>

        <div class="form-group">
          <label>虚线样式</label>
          <input type="text" v-model="connectionSettings.dashedStyle" class="form-input">
        </div>

        <div class="form-group">
          <label>连线颜色</label>
          <input type="color" v-model="connectionSettings.color" class="color-picker">
        </div>

        <div class="form-group">
          <label>文字颜色</label>
          <input type="color" v-model="connectionSettings.textColor" class="color-picker">
        </div>

        <button class="save-button" @click="saveConnectionSettings">确定</button>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.settings-panel-container {
  font-family: "Microsoft YaHei", "微软雅黑", sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  height: calc(100% - 56px);
  transition: width 0.1s ease;
  user-select: none;
  /* 确保宽度不会自动调整 */
  flex-shrink: 0;
  flex-grow: 0;
}

/* 调整宽度手柄样式 */
.resize-handle {
  position: absolute;
  top: 0;
  left: -10px;
  width: 20px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.02);
  cursor: ew-resize;
  z-index: 999;
}

.resize-handle:hover {
  background-color: rgba(0, 120, 255, 0.1);
}

.resize-handle:active {
  background-color: rgba(0, 120, 255, 0.2);
}

/* 添加一个可见的拖动指示器 */
.resize-handle::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4px;
  height: 80px;
  background-color: #ccc;
  border-radius: 2px;
}

.resize-handle:hover::after {
  background-color: #409EFF;
}

/* 选项卡样式 */
.settings-tabs {
  display: flex;
  border-bottom: 1px solid #eaeaea;
}

.tab-item {
  flex: 1;
  padding: 12px 0;
  text-align: center;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  transition: all 0.2s;
  border-bottom: 2px solid transparent;
}

.tab-item:hover {
  color: #409EFF;
}

.tab-item.active {
  color: #409EFF;
  border-bottom-color: #409EFF;
}

/* 内容区域样式 */
.settings-content {
  flex: 1;
  overflow-y: auto;
  padding: 15px;
}

.tab-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* 表单组样式 */
.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 13px;
  color: #333;
}

.form-input,
.form-select,
.form-textarea {
  padding: 8px 10px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  font-size: 13px;
  color: #606266;
  transition: border-color 0.2s;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  border-color: #409EFF;
  outline: none;
}

.form-input.readonly {
  background-color: #f5f7fa;
  cursor: not-allowed;
}

.form-textarea {
  min-height: 60px;
  resize: vertical;
}

/* 数字输入框样式 */
.number-input {
  display: flex;
  align-items: center;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  overflow: hidden;
}

.number-btn {
  width: 40px;
  height: 32px;
  background-color: #f5f7fa;
  border: none;
  color: #606266;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;
}

.number-btn:hover {
  background-color: #e4e7ed;
}

.number-value {
  flex: 1;
  height: 32px;
  border: none;
  text-align: center;
  font-size: 14px;
  color: #606266;
}

/* 颜色选择器样式 */
.color-picker {
  width: 40px;
  height: 32px;
  padding: 0;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  cursor: pointer;
}

/* 保存按钮样式 */
.save-button {
  margin-top: 10px;
  padding: 10px 0;
  background-color: #409EFF;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.save-button:hover {
  background-color: #66b1ff;
}

/* 滚动条样式 */
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
