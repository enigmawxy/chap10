<template>
  <header class="header-bar">
    <div class="header-left">
      <img src="@/assets/vue.svg" class="logo" alt="logo" />
      <span class="title">GraphVis开发演示</span>
    </div>
    <nav class="header-menu">
      <router-link v-for="item in menus" :key="item.path" :to="item.path" class="menu-item" active-class="active">
        <Icon :name="item.icon" />
        <span>{{ item.label }}</span>
      </router-link>
    </nav>
  </header>
</template>

<script setup>
import Icon from './Icon.vue'

const menus = [
  { path: '/graph', label: '图谱构建', icon: 'desktop' },
  { path: '/network', label: '网络拓扑编辑', icon: 'desktop' },
  { path: '/topo', label: '拓扑图编辑器', icon: 'desktop' },
  { path: '/relation', label: '关系图谱', icon: 'globe' },
  { path: '/mind', label: '思维脑图', icon: 'share' },
  { path: '/org', label: '组织架构图', icon: 'archive' },
]
</script>

<style scoped>
.header-bar {
  display: flex;
  align-items: center;
  height: 48px;
  background: #fff;
  border-bottom: 1px solid #eee;
  padding: 0 24px;
  box-sizing: border-box;
}
.header-left {
  display: flex;
  align-items: center;
  flex: none;
}
.logo {
  width: 32px;
  height: 32px;
  margin-right: 8px;
}
.title {
  font-size: 20px;
  font-weight: bold;
  color: #222;
}
.header-menu {
  display: flex;
  align-items: center;
  margin-left: 32px;
  gap: 8px;
}
.menu-item {
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 40px;
  color: #444;
  border-radius: 6px;
  text-decoration: none;
  font-size: 15px;
  transition: background 0.2s, color 0.2s;
}
.menu-item span {
  margin-left: 4px;
}
.menu-item.active, .menu-item.router-link-exact-active {
  background: #e6f0ff;
  color: #2563eb;
}
.menu-item:hover {
  background: #f5f7fa;
  color: #2563eb;
}
</style> 