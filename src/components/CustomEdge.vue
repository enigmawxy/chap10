<script setup>
import { computed, watch } from 'vue'
import { BaseEdge, getBezierPath, getStraightPath, useVueFlow } from '@vue-flow/core'
import CustomMarker from './CustomMarker.vue'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  sourceX: {
    type: Number,
    required: true,
  },
  sourceY: {
    type: Number,
    required: true,
  },
  targetX: {
    type: Number,
    required: true,
  },
  targetY: {
    type: Number,
    required: true,
  },
  sourcePosition: {
    type: String,
    required: true,
  },
  targetPosition: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    required: true,
  },
  data: {
    type: Object,
    required: false,
  },
  style: {
    type: Object,
    default: () => ({})
  },
  markerEnd: {
    type: Object,
    default: undefined
  },
  selected: {
    type: Boolean,
    default: false
  }
})

const { findNode } = useVueFlow()

// 根据连线类型选择路径生成函数
const path = computed(() => {
  // 使用data.edgeType决定路径类型
  const edgeType = props.data?.edgeType || 'straight';
  
  // 获取源节点和目标节点
  const sourceNode = findNode(props.source);
  const targetNode = findNode(props.target);
  
  if (edgeType === 'bezier') {
    return getBezierPath(props);
  } else {
    // 计算节点半径（假设节点是圆形）
    const sourceRadius = (sourceNode?.dimensions?.width || 34) / 2;
    const targetRadius = (targetNode?.dimensions?.width || 34) / 2;
    
    // 计算从源点到目标点的向量
    const dx = props.targetX - props.sourceX;
    const dy = props.targetY - props.sourceY;
    const length = Math.sqrt(dx * dx + dy * dy);
    
    if (length > 0) {
      // 计算源点边缘位置（在向量方向上前进一个半径长度）
      const sourceRatio = sourceRadius / length;
      const adjustedSourceX = props.sourceX + dx * sourceRatio;
      const adjustedSourceY = props.sourceY + dy * sourceRatio;
      
      // 计算目标点边缘位置（在向量方向上回退一个半径长度）
      const targetRatio = targetRadius / length;
      const adjustedTargetX = props.targetX - dx * targetRatio;
      const adjustedTargetY = props.targetY - dy * targetRatio;
      
      // 使用调整后的坐标
      return getStraightPath({
        ...props,
        sourceX: adjustedSourceX,
        sourceY: adjustedSourceY,
        targetX: adjustedTargetX,
        targetY: adjustedTargetY
      });
    }
    
    // 如果无法计算，使用原始坐标
    return getStraightPath(props);
  }
})

const markerId = computed(() => `${props.id}-marker`)

// 计算连线颜色
const edgeColor = computed(() => {
  // 优先检查连线自身的选中状态
  if (props.selected) {
    return '#ff0072' // 连线选中时的颜色
  }
  
  // 优先使用style中的stroke颜色
  if (props.style?.stroke) {
    return props.style.stroke
  }
  
  // 其次使用data中的颜色
  if (props.data?.color) {
    return props.data.color
  }
  
  // 默认颜色
  return '#4a5568'
})

// 计算连线宽度
const edgeWidth = computed(() => {
  return props.style?.strokeWidth || props.data?.width || 2
})

// 计算虚线样式
const edgeDashArray = computed(() => {
  return props.style?.strokeDasharray || props.data?.dashedStyle || 'none'
})

// 计算标记颜色
const markerColor = computed(() => {
  console.log(`Edge ${props.id} :`, props)
  console.log(`Edge ${props.id} marker color:`, props.data?.markerStart?.color)
  
  // 优先检查连线自身的选中状态
  if (props.selected) {
    return '#409EFF' // 连线选中时的标记颜色
  }
  
  // 优先使用markerStart.color颜色
  if (props.data?.markerStart?.color) {
    return props.data.markerStart.color
  }
  
  // 使用连线颜色作为标记颜色
  return edgeColor.value
})

// 计算标记类型
const markerType = computed(() => {
  const sourceNode = findNode(props.source)
  const targetNode = findNode(props.target)
  
  let type = 'square'
  
  // 如果边上有箭头标记配置，使用箭头类型
  if (props.markerEnd || props.data?.markerEnd) {
    type = 'arrow'
  } else if (sourceNode?.selected) {
    type = 'diamond'
  } else if (targetNode?.selected) {
    type = 'circle'
  }

  // 调试：打印标记类型
  console.log(`Edge ${props.id} marker type: ${type}`)
  return type
})

// 计算连线角度（弧度转角度）
const edgeAngle = computed(() => {
  const dx = props.targetX - props.sourceX
  const dy = props.targetY - props.sourceY
  // 计算角度（弧度），然后转换为度数
  const angleRad = Math.atan2(dy, dx)
  const angleDeg = angleRad * (180 / Math.PI)
  return angleDeg
})

// 计算标签样式 - 统一使用data中的属性，并添加旋转
const computedLabelStyle = computed(() => {
  const defaultStyle = {
    fill: '#333',
    fontSize: '12px',
    fontFamily: 'Microsoft YaHei'
  }
  
  // 解析textStyle字符串（格式："normal 14px Arial"）
  const textStyleParts = props.data?.textStyle?.split(' ') || []
  
  return {
    ...defaultStyle,
    fill: props.data?.textColor || defaultStyle.fill,
    fontSize: textStyleParts[1] || defaultStyle.fontSize,
    fontFamily: textStyleParts[2] || defaultStyle.fontFamily,
    fontWeight: textStyleParts[0] || 'normal',
    textAnchor: 'middle',
    dominantBaseline: 'middle'
  }
})

// 计算标签背景样式 - 使用data中的bgColor，确保背景可见
const labelBgStyle = computed(() => {
  const bgColor = props.data?.bgColor || '#ffffff'
  return {
    fill: bgColor,
    stroke: edgeColor.value,
    strokeWidth: '1px',
    rx: '3px',
    ry: '3px',
    fillOpacity: '0.9'
  }
})

// 监听props变化，确保响应式更新
watch(() => props.data, (newData, oldData) => {
  console.log(`Edge ${props.id} data changed:`, { old: oldData, new: newData })
}, { deep: true })

watch(() => props.style, (newStyle, oldStyle) => {
  console.log(`Edge ${props.id} style changed:`, { old: oldStyle, new: newStyle })
}, { deep: true })

watch(() => props.selected, (newSelected, oldSelected) => {
  console.log(`Edge ${props.id} selected changed:`, { old: oldSelected, new: newSelected })
})
</script>

<script>
export default {
  inheritAttrs: false,
}
</script>

<template>
  <BaseEdge
    :id="id"
    :path="path[0]"
    :marker-start="markerType === 'arrow' ? `url(#${markerId})` : undefined"
    :style="{
      stroke: edgeColor,
      strokeWidth: edgeWidth,
      strokeDasharray: edgeDashArray
    }"
  />

  <!-- 自定义旋转文字 -->
  <g v-if="data?.text">
    <!-- 文字背景 -->
    <rect
      :x="path[1] - (data?.text?.length || 0) * 6 - 12"
      :y="path[2] - 12"
      :width="(data?.text?.length || 0) * 12 + 24"
      :height="24"
      :fill="data?.bgColor || '#ffffff'"
      :stroke="data?.bgColor || '#ffffff'"
      stroke-width="1"
      :rx="6"
      :ry="6"
      fill-opacity="1"
      :transform="`rotate(${edgeAngle} ${path[1]} ${path[2]})`"
    />
    <!-- 旋转文字 -->
    <text
      :x="path[1]"
      :y="path[2]"
      :fill="data?.textColor || '#333'"
      :font-size="computedLabelStyle.fontSize"
      :font-family="computedLabelStyle.fontFamily"
      :font-weight="computedLabelStyle.fontWeight"
      text-anchor="middle"
      dominant-baseline="middle"
      :transform="`rotate(${edgeAngle > 90 || edgeAngle < -90 ? edgeAngle + 180 : edgeAngle} ${path[1]} ${path[2]})`"
    >
      {{ data?.text }}
    </text>
  </g>

  <!-- 只在source端渲染CustomMarker -->
  <CustomMarker 
    :id="markerId" 
    :type="markerType" 
    :stroke="markerColor" 
    :stroke-width="2" 
    :width="20" 
    :height="20" 
  />
</template>
