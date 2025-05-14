<template>
  <div class="bg-gray-100 min-h-screen p-6">
    <h1 class="text-2xl font-bold mb-6">Element Plus 导航类组件示例</h1>

    <!-- Affix 固钉 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Affix 固钉</h2>
      <el-affix :offset="80">
        <el-button type="primary">固定在80px</el-button>
      </el-affix>
    </div>

    <!-- Anchor 锚点 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Anchor 锚点</h2>
      <el-anchor>
        <el-anchor-link href="#anchor-1" title="锚点一" />
        <el-anchor-link href="#anchor-2" title="锚点二" />
      </el-anchor>
      <div id="anchor-1" style="margin-top: 100px;">锚点一内容</div>
      <div id="anchor-2" style="margin-top: 100px;">锚点二内容</div>
    </div>

    <!-- Backtop 回到顶部 -->
    <div class="mb-8" style="height: 300px; overflow: auto;">
      <h2 class="text-xl font-semibold mb-4">Backtop 回到顶部</h2>
      <div style="height: 600px; background: linear-gradient(#e66465, #9198e5);"></div>
      <el-backtop :right="50" :bottom="50" />
    </div>

    <!-- Breadcrumb 面包屑 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Breadcrumb 面包屑</h2>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- Dropdown 下拉菜单 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Dropdown 下拉菜单</h2>
      <el-dropdown>
        <el-button type="primary">
          下拉菜单<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>选项一</el-dropdown-item>
            <el-dropdown-item>选项二</el-dropdown-item>
            <el-dropdown-item>选项三</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

    <!-- Menu 菜单 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Menu 菜单</h2>
      <el-menu :default-active="'1'" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="2">我的工作台</el-menu-item>
        <el-sub-menu index="3">
          <template #title>订单管理</template>
          <el-menu-item index="3-1">订单列表</el-menu-item>
          <el-menu-item index="3-2">订单详情</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>

    <!-- Page Header 页头 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Page Header 页头</h2>
      <el-page-header @back="() => window.history.back()" content="详情页面" />
    </div>

    <!-- Steps 步骤条 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Steps 步骤条</h2>
      <el-steps :active="1" finish-status="success">
        <el-step title="步骤 1" description="描述信息" />
        <el-step title="步骤 2" description="描述信息" />
        <el-step title="步骤 3" description="描述信息" />
      </el-steps>
    </div>

    <!-- Tabs 标签页 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Tabs 标签页</h2>
      <el-tabs v-model="activeTab">
        <el-tab-pane label="Tab 1" name="first">内容一</el-tab-pane>
        <el-tab-pane label="Tab 2" name="second">内容二</el-tab-pane>
        <el-tab-pane label="Tab 3" name="third">内容三</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'

const activeTab = ref('first')
</script>

<style scoped>
.el-menu-demo {
  background: #fff;
  margin-bottom: 20px;
}
</style>