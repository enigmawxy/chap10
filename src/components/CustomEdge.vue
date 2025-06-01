<script setup>
import { BaseEdge, getBezierPath, getStraightPath, useVueFlow } from '@vue-flow/core'
import { computed } from 'vue'
import CustomMarker from '@/components/CustomMarker.vue'

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

const markerColor = computed(() => {
  const sourceNode = findNode(props.source)
  const targetNode = findNode(props.target)

  if (sourceNode.selected) {
    return '#ff0072'
  }

  if (targetNode.selected) {
    return '#2563eb'
  }

  return '#4a5568'
})

const markerType = computed(() => {
  const sourceNode = findNode(props.source)
  const targetNode = findNode(props.target)
  
  let type = 'arrow'
  
  // 如果边上有箭头标记配置，使用箭头类型
  if (props.markerEnd || props.markerStart) {
    type = 'arrow'
  } else if (sourceNode.selected) {
    type = 'diamond'
  } else if (targetNode.selected) {
    type = 'circle'
  }

  // 调试：打印标记类型
  console.log(`Edge ${props.id} marker type: ${type}`)
  return type
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
    :marker-start="`url(#${markerId})`"
    :label="`${markerType} marker`"
    :label-x="path[1]"
    :label-y="path[2]"
    label-bg-style="fill: whitesmoke"
  />

  <CustomMarker :id="markerId" :type="markerType" :stroke="markerColor" :stroke-width="2" :width="20" :height="20" />
</template>
