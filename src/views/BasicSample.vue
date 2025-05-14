<template>
  <div class="bg-gray-100 min-h-screen p-6">
    <h1 class="text-2xl font-bold mb-6">Element Plus 基础类组件示例</h1>

    <!-- Button 按钮 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Button 按钮</h2>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </div>

    <!-- Border 边框 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Border 边框</h2>
      <div class="el-border-box" style="padding: 16px; border: 1px solid var(--el-border-color);">带边框的容器</div>
    </div>

    <!-- Color 色彩 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Color 色彩</h2>
      <div class="flex gap-4">
        <div style="width: 40px; height: 40px; background: var(--el-color-primary);"></div>
        <div style="width: 40px; height: 40px; background: var(--el-color-success);"></div>
        <div style="width: 40px; height: 40px; background: var(--el-color-warning);"></div>
        <div style="width: 40px; height: 40px; background: var(--el-color-danger);"></div>
        <div style="width: 40px; height: 40px; background: var(--el-color-info);"></div>
      </div>
    </div>

    <!-- Container 布局容器 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Container 布局容器</h2>
      <el-container style="height: 100px; border: 1px solid #ebeef5;">
        <el-aside width="100px" style="background: #d3dce6;">Aside</el-aside>
        <el-container>
          <el-header style="background: #b3c0d1;">Header</el-header>
          <el-main style="background: #e9eef3;">Main</el-main>
        </el-container>
      </el-container>
    </div>

    <!-- Icon 图标 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Icon 图标</h2>
      <el-icon><Search /></el-icon>
      <el-icon><Edit /></el-icon>
      <el-icon><Check /></el-icon>
      <el-icon><Message /></el-icon>
      <el-icon><Star /></el-icon>
    </div>

    <!-- Layout 布局 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Layout 布局</h2>
      <el-row :gutter="20">
        <el-col :span="8"><div class="el-bg-box">列1</div></el-col>
        <el-col :span="8"><div class="el-bg-box">列2</div></el-col>
        <el-col :span="8"><div class="el-bg-box">列3</div></el-col>
      </el-row>
    </div>

    <!-- Link 链接 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Link 链接</h2>
      <el-link href="https://element-plus.org" target="_blank">Element Plus 官网</el-link>
      <el-link type="primary">主要链接</el-link>
      <el-link type="success">成功链接</el-link>
      <el-link type="warning">警告链接</el-link>
      <el-link type="danger">危险链接</el-link>
      <el-link type="info">信息链接</el-link>
    </div>

    <!-- Text 文本 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Text 文本</h2>
      <el-text>默认文本</el-text>
      <el-text type="primary">主要文本</el-text>
      <el-text type="success">成功文本</el-text>
      <el-text type="info">信息文本</el-text>
      <el-text type="warning">警告文本</el-text>
      <el-text type="danger">危险文本</el-text>
    </div>

    <!-- Scrollbar 滚动条 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Scrollbar 滚动条</h2>
      <el-scrollbar style="height: 80px; width: 200px; border: 1px solid #ebeef5;">
        <p v-for="i in 10" :key="i">内容 {{ i }}</p>
      </el-scrollbar>
    </div>

    <!-- Space 间距 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Space 间距</h2>
      <el-space>
        <el-button>按钮1</el-button>
        <el-button>按钮2</el-button>
        <el-button>按钮3</el-button>
      </el-space>
    </div>

    <!-- Typography 排版 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Typography 排版</h2>
      <el-text tag="h1">h1 标题</el-text>
      <el-text tag="h2">h2 标题</el-text>
      <el-text tag="p">段落文本</el-text>
      <el-text tag="b">加粗文本</el-text>
      <el-text tag="i">斜体文本</el-text>
    </div>

    <!-- 你原有的内容 -->
    <div class="dashboard">
      <!-- 搜索栏 -->
      <el-input 
        v-model="searchKey" 
        placeholder="搜索用户" 
        style="width: 300px"
        clearable
      >
        <template #prefix>
          <el-icon><Search /></el-icon>
        </template>
      </el-input>
  
      <!-- 数据表格 -->
      <el-table :data="filteredUsers">
        <!-- 列配置 -->
      </el-table>
  
      <!-- 分页 -->
      <el-pagination
        v-model:current-page="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="totalUsers"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Search, Edit, Check, Message, Star } from '@element-plus/icons-vue'

// 以下为你原有的内容示例数据
const searchKey = ref('')
const currentPage = ref(1)
const pageSize = 10
const users = [
  { name: '张三', age: 20 },
  { name: '李四', age: 22 },
  { name: '王五', age: 25 },
]
const filteredUsers = computed(() => {
  if (!searchKey.value) return users
  return users.filter(u => u.name.includes(searchKey.value))
})
const totalUsers = computed(() => filteredUsers.value.length)
</script>

<style scoped>
.el-bg-box {
  background: #d3dce6;
  text-align: center;
  padding: 16px 0;
  border-radius: 4px;
}
</style>