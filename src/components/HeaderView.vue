<template>
  <div class="header">
    <div class="title" v-html="title"></div>
    <div class="auth-buttons">
      <button class="auth-btn">登录</button>
      <button class="auth-btn">注册</button>
    </div>
  </div>
</template>

<script setup>
const title = '前端开发框架技术与应用例子-当前主要采用了 <span class="highlight">动态组件</span> 技术实现组件的切换，后续会使用 <span class="highlight">Vue Router</span> 技术实现路由的切换'
</script>

<style>
.header {
  height: 50px;
  background-color: #2e3b4e;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 2px solid #4a5568;
}

.title {
  font-size: 14px;
  font-weight: 500;
}

.auth-buttons {
  display: flex;
  gap: 10px;
}

.auth-btn {
  background: none;
  border: 1px solid white;
  color: white;
  padding: 2px 10px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 12px;
}

.auth-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.highlight {
  color: #42b983;
  font-weight: bold;
}
</style>
