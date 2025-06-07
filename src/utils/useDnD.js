import { useVueFlow } from '@vue-flow/core'
import { ref, watch } from 'vue'
import { nanoid } from "nanoid";

let id = 0

/**
 * @returns {string} - A unique id.
 */
function getId() {
  return `dndnode_${id++}`
}

/**
 * In a real world scenario you'd want to avoid creating refs in a global scope like this as they might not be cleaned up properly.
 * @type {{draggedType: Ref<string|null>, isDragOver: Ref<boolean>, isDragging: Ref<boolean>}}
 */
const state = {
  /**
   * The type of the node being dragged.
   */
  draggedType: ref(null),
  isDragOver: ref(false),
  isDragging: ref(false),
}

export default function useDragAndDrop() {
  const { draggedType, isDragOver, isDragging } = state

  const { addNodes, screenToFlowCoordinate, onNodesInitialized, updateNode } = useVueFlow()

  watch(isDragging, (dragging) => {
    document.body.style.userSelect = dragging ? 'none' : ''
  })

  function onDragStart(event, type) {
    if (event.dataTransfer) {
      event.dataTransfer.setData('application/vueflow', type)
      event.dataTransfer.effectAllowed = 'move'
    }

    draggedType.value = type
    isDragging.value = true

    document.addEventListener('drop', onDragEnd)
  }

  /**
   * Handles the drag over event.
   *
   * @param {DragEvent} event
   */
  function onDragOver(event) {
    event.preventDefault()

    if (draggedType.value) {
      isDragOver.value = true

      if (event.dataTransfer) {
        event.dataTransfer.dropEffect = 'move'
      }
    }
  }

  function onDragLeave() {
    isDragOver.value = false
  }

  function onDragEnd() {
    isDragging.value = false
    isDragOver.value = false
    draggedType.value = null
    document.removeEventListener('drop', onDragEnd)
  }

  /**
   * Handles the drop event.
   *
   * @param {DragEvent} event
   */
  function onDrop(event) {
    const position = screenToFlowCoordinate({
      x: event.clientX,
      y: event.clientY,
    })

    const nodeId = nanoid()//getId()
    const nodeType = draggedType.value

    // 根据节点类型设置不同的标签和样式
    let nodeLabel = nodeId
    let nodeStyle = {}
    let nodeClass = ''
    let bgColor = '#f0f0f0' // 默认节点底色

    // 设置节点标签
    switch (nodeType) {
      // 基础元素
      case 'circle':
        nodeLabel = '圆形节点'
        bgColor = '#f0f9eb'
        nodeStyle = { backgroundColor: bgColor, borderRadius: '50%', border: '2px solid #67c23a' }
        nodeClass = 'circle-node'
        break
      case 'square':
        nodeLabel = '矩形节点'
        bgColor = '#f0f9eb'
        nodeStyle = { backgroundColor: bgColor, border: '2px solid #67c23a' }
        nodeClass = 'square-node'
        break
      case 'text':
        nodeLabel = '文字节点'
        bgColor = '#f0f9eb'
        nodeStyle = { backgroundColor: bgColor, border: '2px solid #67c23a' }
        nodeClass = 'text-node'
        break

      // 图谱元素
      case 'person':
        nodeLabel = '个人'
        nodeClass = 'person-node'
        break
      case 'people':
        nodeLabel = '人物'
        nodeClass = 'people-node'
        break
      case 'bookmark':
        nodeLabel = '标记'
        nodeClass = 'bookmark-node'
        break
      case 'case':
        nodeLabel = '病例'
        nodeClass = 'case-node'
        break
      case 'car':
        nodeLabel = '出租车'
        nodeClass = 'car-node'
        break
      case 'phone':
        nodeLabel = '电话'
        nodeClass = 'phone-node'
        break
      case 'location':
        nodeLabel = '地址'
        nodeClass = 'location-node'
        break
      case 'bus':
        nodeLabel = '动车'
        nodeClass = 'bus-node'
        break
      case 'plane':
        nodeLabel = '航班'
        nodeClass = 'plane-node'
        break
      case 'doctor':
        nodeLabel = '护士'
        nodeClass = 'doctor-node'
        break
      case 'building':
        nodeLabel = '监狱'
        nodeClass = 'building-node'
        break
      case 'truck':
        nodeLabel = '机动车'
        nodeClass = 'truck-node'
        break
      case 'hotel':
        nodeLabel = '酒店'
        nodeClass = 'hotel-node'
        break
      case 'ambulance':
        nodeLabel = '救护车'
        nodeClass = 'ambulance-node'
        break
      case 'camera':
        nodeLabel = '卡口'
        nodeClass = 'camera-node'
        break
      case 'harbor':
        nodeLabel = '口岸'
        nodeClass = 'harbor-node'
        break
      case 'ship':
        nodeLabel = '轮船'
        nodeClass = 'ship-node'
        break
      case 'event':
        nodeLabel = '事件'
        nodeClass = 'event-node'
        break
      case 'time':
        nodeLabel = '时空'
        nodeClass = 'time-node'
        break
      case 'record':
        nodeLabel = '通话记录'
        nodeClass = 'record-node'
        break
      case 'bbs':
        nodeLabel = '网吧'
        nodeClass = 'bbs-node'
        break
      // 新增节点类型
      case 'element-plus':
        nodeLabel = 'ElementPlus'
        bgColor = '#f0f9ff'
        nodeClass = 'element-plus-node'
        break
      case 'tailwind':
        nodeLabel = 'Tailwind CSS'
        bgColor = '#f0fdf9'
        nodeClass = 'tailwind-node'
        break
      case 'core-concepts':
        nodeLabel = '核心概念'
        nodeClass = 'core-concepts-node'
        break
      case 'installation':
        nodeLabel = '安装'
        nodeClass = 'installation-node'
        break
      case 'configuration':
        nodeLabel = '配置'
        nodeClass = 'configuration-node'
        break
      case 'basic-usage':
        nodeLabel = '基本使用'
        nodeClass = 'basic-usage-node'
        break
      case 'auto-import':
        nodeLabel = '自动导入'
        nodeClass = 'auto-import-node'
        break
      case 'vue-router':
        nodeLabel = 'Vue Router'
        bgColor = '#f0fdf4'
        nodeClass = 'vue-router-node'
        break
      // 组件相关节点
      case 'component-advanced':
        nodeLabel = '组件进阶'
        bgColor = '#ebf5fb'
        nodeClass = 'component-advanced-node'
        break
      case 'component-basics':
        nodeLabel = '组件基础'
        bgColor = '#ebf5fb'
        nodeClass = 'component-basics-node'
        break
      case 'component-registration':
        nodeLabel = '组件注册'
        bgColor = '#ebf5fb'
        nodeClass = 'component-registration-node'
        break
      case 'global-registration':
        nodeLabel = '全局注册'
        bgColor = '#ebf5fb'
        nodeClass = 'global-registration-node'
        break
      case 'local-registration':
        nodeLabel = '局部注册'
        bgColor = '#ebf5fb'
        nodeClass = 'local-registration-node'
        break
      case 'built-in-components':
        nodeLabel = '内置组件'
        bgColor = '#ebf5fb'
        nodeClass = 'built-in-components-node'
        break
      case 'dynamic-components':
        nodeLabel = '动态组件'
        bgColor = '#ebf5fb'
        nodeClass = 'dynamic-components-node'
        break
      case 'keep-alive':
        nodeLabel = 'KeepAlive'
        bgColor = '#ebf5fb'
        nodeClass = 'keep-alive-node'
        break
      case 'transition':
        nodeLabel = '动画组件'
        bgColor = '#ebf5fb'
        nodeClass = 'transition-node'
        break
      case 'teleport':
        nodeLabel = 'Teleport'
        bgColor = '#ebf5fb'
        nodeClass = 'teleport-node'
        break
      case 'component-v-model':
        nodeLabel = '组件V-Model'
        bgColor = '#ebf5fb'
        nodeClass = 'component-v-model-node'
        break
      case 'dependency-injection':
        nodeLabel = '依赖注入'
        bgColor = '#ebf5fb'
        nodeClass = 'dependency-injection-node'
        break
      case 'attrs':
        nodeLabel = '透传Attributes'
        bgColor = '#ebf5fb'
        nodeClass = 'attrs-node'
        break
      // 新增Vue概念节点
      case 'single-file-component':
        nodeLabel = '单文件组件'
        bgColor = '#ebf5fb'
        nodeClass = 'single-file-component-node'
        break
      case 'component-basics-2':
        nodeLabel = '组件基础'
        bgColor = '#ebf5fb'
        nodeClass = 'component-basics-2-node'
        break
      case 'slots':
        nodeLabel = '插槽'
        bgColor = '#ebf5fb'
        nodeClass = 'slots-node'
        break
      case 'computed':
        nodeLabel = '计算属性'
        bgColor = '#ebf5fb'
        nodeClass = 'computed-node'
        break
      case 'watchers':
        nodeLabel = '侦听器'
        bgColor = '#ebf5fb'
        nodeClass = 'watchers-node'
        break
      case 'lifecycle':
        nodeLabel = '生命周期'
        bgColor = '#ebf5fb'
        nodeClass = 'lifecycle-node'
        break
      case 'hooks':
        nodeLabel = '钩子函数'
        bgColor = '#ebf5fb'
        nodeClass = 'hooks-node'
        break
      case 'readonly':
        nodeLabel = '只读性'
        bgColor = '#ebf5fb'
        nodeClass = 'readonly-node'
        break
      case 'caching':
        nodeLabel = '缓存性'
        bgColor = '#ebf5fb'
        nodeClass = 'caching-node'
        break
      case 'define-component':
        nodeLabel = '定义组件'
        bgColor = '#ebf5fb'
        nodeClass = 'define-component-node'
        break
      case 'use-component':
        nodeLabel = '使用组件'
        bgColor = '#ebf5fb'
        nodeClass = 'use-component-node'
        break
      case 'props':
        nodeLabel = '传递Props'
        bgColor = '#ebf5fb'
        nodeClass = 'props-node'
        break
      case 'events':
        nodeLabel = '监听事件'
        bgColor = '#ebf5fb'
        nodeClass = 'events-node'
        break
      default:
        nodeLabel = nodeId
    }

    // 设置默认值
    const textColor = '#333333' // 默认文字颜色
    const textPosition = '下方' // 默认文字位置
    const nodeSize = 40 // 默认节点大小
    const textStyle = 'normal 13px YaHei' // 默认文字样式

    const newNode = {
      id: nodeId,
      type: 'custom', // 使用自定义节点类型
      position,
      data: {
        label: nodeLabel,
        nodeType: nodeType,
        textPosition: textPosition, // 添加文字位置属性
        bgColor: bgColor, // 添加节点底色属性
        size: nodeSize, // 添加节点大小属性
        textColor: textColor // 添加文字颜色属性
      },
      style: {
        ...nodeStyle,
        color: textColor, // 添加文字颜色到样式
        backgroundColor: bgColor, // 添加背景色到样式
        width: nodeSize, // 添加节点宽度到样式
        height: nodeSize, // 添加节点高度到样式
        fontStyle: textStyle.split(' ')[0], // 添加字体样式
        fontSize: textStyle.split(' ')[1], // 添加字体大小
        fontFamily: textStyle.split(' ')[2] // 添加字体族
      },
      class: nodeClass,
      connectable: true,
      // 添加自定义属性，用于CSS选择器
      attrs: {
        'data-id': nodeId
      }
    }

    /**
     * Align node position after drop, so it's centered to the mouse
     *
     * We can hook into events even in a callback, and we can remove the event listener after it's been called.
     */
    const { off } = onNodesInitialized(() => {
      updateNode(nodeId, (node) => ({
        position: { x: node.position.x - node.dimensions.width / 2, y: node.position.y - node.dimensions.height / 2 },
      }))

      off()
    })

    addNodes(newNode)
    return newNode
  }

  return {
    draggedType,
    isDragOver,
    isDragging,
    onDragStart,
    onDragLeave,
    onDragOver,
    onDrop,
  }
}
