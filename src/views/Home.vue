<script setup>
import { ref } from 'vue'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import DropzoneBackground from '@/components/DropzoneBackground.vue'
import Sidebar from '@/components/Sidebar.vue'
import useDragAndDrop from '@/utils/useDnD.js'

const { onConnect, addEdges } = useVueFlow()

const { onDragOver, onDrop, onDragLeave, isDragOver } = useDragAndDrop()

const nodes = ref([])

onConnect(addEdges)
</script>

<template>
    <div class="dnd-flow h-full" @drop="onDrop">
        <!-- 内容区域，左边距与Sidebar宽度匹配 -->
        <div class="vue-flow-wrapper ml-52 pt-0">
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

        <!-- Sidebar组件 -->
        <Sidebar />
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
</style>