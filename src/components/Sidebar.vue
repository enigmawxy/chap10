<script setup>
import { onMounted } from 'vue'
import useDragAndDrop from '@/utils/useDnD'

const { onDragStart } = useDragAndDrop()

// 确保组件正确初始化
onMounted(() => {
  console.log('Sidebar component mounted')
})
</script>

<template>
  <aside class="fixed left-0 top-14 bottom-0 w-52 bg-gray-50 border-r border-gray-200 p-4 z-10">
    <div class="text-sm text-gray-600 mb-5">您可以将这些节点拖到右侧面板。</div>

    <div class="flex flex-col gap-3">
      <div
        class="vue-flow__node-input p-3 rounded bg-white border border-gray-200 cursor-grab text-center text-sm hover:bg-gray-50"
        :draggable="true"
        @dragstart="onDragStart($event, 'input')"
      >
        输入节点
      </div>

      <div
        class="vue-flow__node-default p-3 rounded bg-white border border-gray-200 cursor-grab text-center text-sm hover:bg-gray-50"
        :draggable="true"
        @dragstart="onDragStart($event, 'default')"
      >
        默认节点
      </div>

      <div
        class="vue-flow__node-output p-3 rounded bg-white border border-gray-200 cursor-grab text-center text-sm hover:bg-gray-50"
        :draggable="true"
        @dragstart="onDragStart($event, 'output')"
      >
        输出节点
      </div>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 200px;
  background-color: #f8f8f8;
  border-right: 1px solid #eee;
  padding: 15px;
  z-index: 5;
  font-family: "Microsoft YaHei", "微软雅黑", sans-serif;
}

.description {
  margin-bottom: 20px;
  font-size: 14px;
  color: #666;
  font-family: "Microsoft YaHei", "微软雅黑", sans-serif;
}

.nodes {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nodes > div {
  padding: 10px;
  border-radius: 4px;
  cursor: grab;
  text-align: center;
  font-size: 14px;
  font-family: "Microsoft YaHei", "微软雅黑", sans-serif;
}

.vue-flow__node-input {
  background-color: #fff;
  border: 1px solid #ddd;
}

.vue-flow__node-default {
  background-color: #fff;
  border: 1px solid #ddd;
}

.vue-flow__node-output {
  background-color: #fff;
  border: 1px solid #ddd;
}
</style>
