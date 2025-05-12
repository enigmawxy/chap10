<template>
  <div class="layout-flow" @drop="onDrop">
    <SideBar />
    <VueFlow v-model:nodes="nodes" v-model:edges="edges" :default-edge-options="{ type: 'animation', animated: true }"
      @nodes-initialized="layoutGraph('LR')" @dragover="onDragOver" @dragleave="onDragLeave" :class="{ dark }">
      <DropEffect :style="{
        backgroundColor: isDragOver ? '#e7f3ff' : 'transparent',
        transition: 'background-color 0.2s ease',
      }">
        <p v-if="isDragOver">Drop here</p>
      </DropEffect>
      <template #node-process="props">
        <ProcessNode :data="props.data" :source-position="props.sourcePosition"
          :target-position="props.targetPosition" />
      </template>

      <template #edge-animation="edgeProps">
        <AnimationEdge :id="edgeProps.id" :source="edgeProps.source" :target="edgeProps.target"
          :source-x="edgeProps.sourceX" :source-y="edgeProps.sourceY" :targetX="edgeProps.targetX"
          :targetY="edgeProps.targetY" :source-position="edgeProps.sourcePosition"
          :target-position="edgeProps.targetPosition" :data="edgeProps.data" />
      </template>

      <template #node-circle="{ data }">
        <div style="width:28px;height:28px;border-radius:50%;background:#c6f7d0;display:flex;align-items:center;justify-content:center;font-weight:bold;border:2px solid #8ce99a;">
          {{ data.label }}
        </div>
      </template>
      <template #node-square="{ data }">
        <div style="width:28px;height:28px;border-radius:6px;background:#c6f7d0;display:flex;align-items:center;justify-content:center;font-weight:bold;border:2px solid #8ce99a;">
          {{ data.label }}
        </div>
      </template>
      <template #node-text="{ data }">
        <div style="width:28px;height:28px;border-radius:6px;background:#c6f7d0;display:flex;align-items:center;justify-content:center;font-weight:bold;border:2px solid #8ce99a;">
          {{ data.label }}
        </div>
      </template>
      <template v-for="node in kgNodes" :key="node.type" v-slot:[`node-${node.type}`]="{ data }">
        <div style="width:28px;height:28px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;border:1px solid #e0e6ed;">
          <Icon :name="data.icon" />
        </div>
        <div style="font-size:12px;color:#666;text-align:center;width:28px;">{{ data.label }}</div>
      </template>

      <Background pattern-color="red" :gap="8" variant="lines" />

      <Panel class="process-panel" position="top-right">
        <div class="layout-panel">
          <button v-if="isRunning" class="stop-btn" title="停止" @click="stop">
            <Icon name="stop" />
            <span class="spinner" />
          </button>
          <button v-else title="开始" @click="run(nodes)">
            <Icon name="play" />
          </button>

          <button title="设为水平布局" @click="layoutGraph('LR')">
            <Icon name="horizontal" />
          </button>

          <button title="设为垂直布局" @click="layoutGraph('TB')">
            <Icon name="vertical" />
          </button>
        </div>

        <div class="checkbox-panel">
          <label>取消错误</label>
          <input v-model="cancelOnError" type="checkbox" />
        </div>
      </Panel>

      <Controls position="bottom-right">
      <ControlButton title="Reset Transform" @click="resetTransform">
        <Icon name="reset" />
      </ControlButton>

      <ControlButton title="Shuffle Node Positions" @click="updatePos">
        <Icon name="update" />
      </ControlButton>

      <ControlButton title="Toggle Dark Mode" @click="toggleDarkMode">
        <Icon v-if="dark" name="sun" />
        <Icon v-else name="moon" />
      </ControlButton>

      <ControlButton title="Log `toObject`" @click="logToObject">
        <Icon name="log" />
      </ControlButton>
    </Controls>
    </VueFlow>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { Panel, VueFlow, useVueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import Icon from '@/components/Icon.vue'
import ProcessNode from '@/components/ProcessNode.vue'
import AnimationEdge from '@/components/AnimationEdge.vue'
import SideBar from '@/components/SideBar.vue'
import { initialEdges, initialNodes, kgNodes } from '@/utils/initial-elements.js'
import { useRunProcess } from '@/utils/useRunProcess'
import { useLayout } from '@/utils/useLayout'
import useDragAndDrop from '@/utils/useDnD'
import DropEffect from '@/components/DropEffect.vue'
import { ControlButton, Controls } from '@vue-flow/controls'

const nodes = ref(initialNodes)
const edges = ref(initialEdges)
const cancelOnError = ref(true)
const dark = ref(true)
const { graph, layout } = useLayout()
const { run, stop, reset, isRunning } = useRunProcess({ graph, cancelOnError })
const { fitView } = useVueFlow()
const { onDragOver, onDrop, onDragLeave, isDragOver } = useDragAndDrop()

async function layoutGraph(direction) {
  await stop()
  reset(nodes.value)
  nodes.value = layout(nodes.value, edges.value, direction)
  nextTick(() => {
    fitView()
  })
}
/**
 * To update a node or multiple nodes, you can
 * 1. Mutate the node objects *if* you're using `v-model`
 * 2. Use the `updateNode` method (from `useVueFlow`) to update the node(s)
 * 3. Create a new array of nodes and pass it to the `nodes` ref
 */
 function updatePos() {
  // nodes.value = nodes.value.map((node) => {
  //   return {
  //     ...node,
  //     position: {
  //       x: Math.random() * 400,
  //       y: Math.random() * 400,
  //     },
  //   }
  // })
}

/**
 * toObject transforms your current graph data to an easily persist-able object
 */
function logToObject() {
  console.log(toObject())
}

/**
 * Resets the current viewport transformation (zoom & pan)
 */
function resetTransform() {
  setViewport({ x: 0, y: 0, zoom: 1 })
}

function toggleDarkMode() {
  dark.value = !dark.value
}
</script>

<style scoped>
.layout-flow {
  background-color: #1a192b;
  height: 100%;
  width: 100%;
  position: relative;
}

.process-panel,
.layout-panel {
  display: flex;
  gap: 10px;
}

.process-panel {
  background-color: #2d3748;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
}

.process-panel button {
  border: none;
  cursor: pointer;
  background-color: #4a5568;
  border-radius: 8px;
  color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.process-panel button {
  font-size: 16px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkbox-panel {
  display: flex;
  align-items: center;
  gap: 10px;
}

.process-panel button:hover,
.layout-panel button:hover {
  background-color: #2563eb;
  transition: background-color 0.2s;
}

.process-panel label {
  color: white;
  font-size: 12px;
}

.stop-btn svg {
  display: none;
}

.stop-btn:hover svg {
  display: block;
}

.stop-btn:hover .spinner {
  display: none;
}

.spinner {
  border: 3px solid #f3f3f3;
  border-top: 3px solid #2563eb;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>