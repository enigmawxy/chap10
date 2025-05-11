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
import DataTable from '@/views/DataTable.vue'
import FeedSample from '@/views/FeedSample.vue'
import UserPanel from '@/views/UserPanel.vue'
import PicUpload from '@/views/PicUpload.vue'
const tabList = [
  { name: 'QuickStart', label: '快速使用' },
  { name: 'FormSample', label: '表单系统' },
  { name: 'DataTable', label: '表格系统' },
  { name: 'FeedSample', label: '消息系统' },
  { name: 'UserPanel', label: '用户系统' },
  { name: 'PicUpload', label: '图片上传' },
]

const tabMap = {
  QuickStart,
  FormSample,
  DataTable,
  FeedSample,
  UserPanel,
  PicUpload,
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
