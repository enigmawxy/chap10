<template>
  <div class="app-container">
    <Header />
    <div class="main-container">
      <Sidebar :tabList="tabList" :current="currentTab" @update:currentTab="currentTab = $event" />
      <MainView :currentTab="currentTab" :tabMap="tabMap" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '@/components/HeaderView.vue'
import Sidebar from '@/components/Sidebar.vue'
import MainView from '@/components/MainView.vue'

// 导入你的案例组件
import QuickStart from '@/views/QuickStart.vue'
import FormSample from '@/views/FormSample.vue'
import DataSample from '@/views/DataSample.vue'
import TableSample from '@/views/TableSample.vue'
import FeedbackSample from '@/views/FeedbackSample.vue'
import BasicSample from '@/views/BasicSample.vue'
import NavigationSample from '@/views/NavigationSample.vue'
const tabList = [
  { name: 'QuickStart', label: '快速使用' },
  { name: 'BasicSample', label: '基础组件' },
  { name: 'FormSample', label: '表单类组件' },
  { name: 'DataSample', label: '数据类组件' },
  { name: 'TableSample', label: '表格类组件' },
  { name: 'NavigationSample', label: '导航类组件' },
  { name: 'FeedbackSample', label: '反馈类组件' },
]

const tabMap = {
  QuickStart,
  BasicSample,
  FormSample,
  DataSample,
  TableSample,
  NavigationSample,
  FeedbackSample,
}

const currentTab = ref(tabList[0].name)
</script>

<style scoped>
.app-container {
  min-height: 100vh;
}

.main-container {
  display: flex;
  min-height: calc(100vh - 30px);
  margin-top: 30px;
}
</style>
