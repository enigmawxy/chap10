<template>
  <div class="p-6 bg-white rounded-lg shadow">
    <h1 class="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Element Plus 导航组件示例</h1>
    
    <!-- Affix 固钉 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Position /></el-icon>Affix 固钉
      </h2>
      <div class="bg-gray-100 p-4 rounded-lg">
        <p class="mb-4">滚动页面查看效果（固定在顶部）：</p>
        <el-affix :offset="80">
          <el-button type="primary">固定在距离顶部 80px 的位置</el-button>
        </el-affix>
      </div>
    </section>
    
    <!-- Anchor 锚点 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Link /></el-icon>Anchor 锚点
      </h2>
      <div class="flex">
        <div class="w-64 pr-4">
          <el-anchor>
            <el-anchor-link href="#affix-section" title="Affix 固钉" />
            <el-anchor-link href="#anchor-section" title="Anchor 锚点" />
            <el-anchor-link href="#backtop-section" title="Backtop 回到顶部" />
            <el-anchor-link href="#breadcrumb-section" title="Breadcrumb 面包屑" />
            <el-anchor-link href="#dropdown-section" title="Dropdown 下拉菜单" />
            <el-anchor-link href="#menu-section" title="Menu 菜单" />
            <el-anchor-link href="#page-header-section" title="Page Header 页头" />
            <el-anchor-link href="#steps-section" title="Steps 步骤条" />
            <el-anchor-link href="#tabs-section" title="Tabs 标签页" />
          </el-anchor>
        </div>
        <div class="flex-1">
          <p>点击左侧锚点可以快速导航到对应的组件示例。</p>
        </div>
      </div>
    </section>
    
    <!-- Backtop 回到顶部 -->
    <section class="mb-10" id="backtop-section">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Top /></el-icon>Backtop 回到顶部
      </h2>
      <div class="bg-gray-100 p-4 rounded-lg">
        <p>滚动页面查看右下角的回到顶部按钮。</p>
        <el-backtop :right="100" :bottom="100" />
      </div>
    </section>
    
    <!-- Breadcrumb 面包屑 -->
    <section class="mb-10" id="breadcrumb-section">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Menu /></el-icon>Breadcrumb 面包屑
      </h2>
      <div class="space-y-4">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        
        <el-divider />
        
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </section>
    
    <!-- Dropdown 下拉菜单 -->
    <section class="mb-10" id="dropdown-section">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><ArrowDown /></el-icon>Dropdown 下拉菜单
      </h2>
      <div class="space-x-4">
        <el-dropdown>
          <el-button type="primary">
            下拉菜单
            <el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>选项1</el-dropdown-item>
              <el-dropdown-item>选项2</el-dropdown-item>
              <el-dropdown-item>选项3</el-dropdown-item>
              <el-dropdown-item disabled>选项4</el-dropdown-item>
              <el-dropdown-item divided>选项5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        
        <el-dropdown split-button type="success" @click="handleClick">
          分裂按钮
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>选项1</el-dropdown-item>
              <el-dropdown-item>选项2</el-dropdown-item>
              <el-dropdown-item>选项3</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </section>
    
    <!-- Menu 菜单 -->
    <section class="mb-10" id="menu-section">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Menu /></el-icon>Menu 菜单
      </h2>
      <div class="space-y-8">
        <!-- 水平菜单 -->
        <div>
          <h3 class="text-lg font-medium mb-2">水平菜单</h3>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-sub-menu index="2">
              <template #title>工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-sub-menu index="2-4">
                <template #title>选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4">订单管理</el-menu-item>
          </el-menu>
        </div>
        
        <!-- 垂直菜单 -->
        <div>
          <h3 class="text-lg font-medium mb-2">垂直菜单</h3>
          <div class="w-64">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <el-sub-menu index="1">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>导航一</span>
                </template>
                <el-menu-item-group title="分组一">
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组二">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                  <template #title>选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
              <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <span>导航二</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <el-icon><document /></el-icon>
                <span>导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <el-icon><setting /></el-icon>
                <span>导航四</span>
              </el-menu-item>
            </el-menu>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Page Header 页头 -->
    <section class="mb-10" id="page-header-section">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Document /></el-icon>Page Header 页头
      </h2>
      <div>
        <el-page-header @back="goBack" title="返回" content="页面内容">
          <template #extra>
            <div class="flex items-center">
              <el-button>取消</el-button>
              <el-button type="primary" class="ml-2">确认</el-button>
            </div>
          </template>
        </el-page-header>
      </div>
    </section>
    
    <!-- Steps 步骤条 -->
    <section class="mb-10" id="steps-section">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Guide /></el-icon>Steps 步骤条
      </h2>
      <div class="space-y-8">
        <!-- 基础步骤条 -->
        <div>
          <el-steps :active="active" finish-status="success">
            <el-step title="步骤 1" description="这是一段很长的描述性文字"></el-step>
            <el-step title="步骤 2" description="这是一段很长的描述性文字"></el-step>
            <el-step title="步骤 3" description="这是一段很长的描述性文字"></el-step>
          </el-steps>
          <div class="mt-4 flex justify-center">
            <el-button type="primary" @click="nextStep">下一步</el-button>
          </div>
        </div>
        
        <!-- 简洁风格的步骤条 -->
        <div>
          <el-steps :active="2" simple>
            <el-step title="步骤 1" icon="Edit" />
            <el-step title="步骤 2" icon="Upload" />
            <el-step title="步骤 3" icon="Picture" />
          </el-steps>
        </div>
        
        <!-- 垂直步骤条 -->
        <div>
          <el-steps direction="vertical" :active="1">
            <el-step title="步骤 1" description="这是一段很长的描述性文字"></el-step>
            <el-step title="步骤 2" description="这是一段很长的描述性文字"></el-step>
            <el-step title="步骤 3" description="这是一段很长的描述性文字"></el-step>
          </el-steps>
        </div>
      </div>
    </section>
    
    <!-- Tabs 标签页 -->
    <section class="mb-10" id="tabs-section">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Menu /></el-icon>Tabs 标签页
      </h2>
      <div class="space-y-8">
        <!-- 基础标签页 -->
        <div>
          <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleTabClick">
            <el-tab-pane label="用户管理" name="first">用户管理内容</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理内容</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理内容</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿内容</el-tab-pane>
          </el-tabs>
        </div>
        
        <!-- 卡片风格的标签页 -->
        <div>
          <el-tabs type="card" v-model="activeCardName">
            <el-tab-pane label="用户管理" name="first">用户管理内容</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理内容</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理内容</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿内容</el-tab-pane>
          </el-tabs>
        </div>
        
        <!-- 带有图标的标签页 -->
        <div>
          <el-tabs v-model="activeIconName">
            <el-tab-pane>
              <template #label>
                <span class="flex items-center">
                  <el-icon><Message /></el-icon>
                  <span class="ml-1">消息</span>
                </span>
              </template>
              消息内容
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理内容</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理内容</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿内容</el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Position,
  Link,
  Top,
  Menu,
  ArrowDown,
  ArrowRight,
  Document,
  Guide,
  Location,
  Setting,
  Message,
  Edit,
  Upload,
  Picture
} from '@element-plus/icons-vue'

// Dropdown
const handleClick = () => {
  console.log('button click')
}

// Menu
const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}

// Page Header
const goBack = () => {
  console.log('go back')
}

// Steps
const active = ref(0)
const nextStep = () => {
  if (active.value++ > 2) active.value = 0
}

// Tabs
const activeName = ref('first')
const activeCardName = ref('first')
const activeIconName = ref('first')
const handleTabClick = (tab, event) => {
  console.log(tab, event)
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
