<template>
  <div class="h-[50px] bg-[#2e3b4e] text-white flex justify-between items-center px-5 fixed top-0 left-0 right-0 z-[1000] border-b-2 border-[#4a5568]">
    <div class="text-sm font-medium" v-html="title"></div>
    <div class="flex gap-2.5">
      <button class="bg-transparent border border-white text-white py-0.5 px-2.5 rounded text-xs cursor-pointer hover:bg-white/10">登录</button>
      <button class="bg-transparent border border-white text-white py-0.5 px-2.5 rounded text-xs cursor-pointer hover:bg-white/10">注册</button>
    </div>
  </div>
</template>

<script setup>
const title = '前端开发框架技术与应用例子 - Element Plus + Tailwind CSS + Vue3 + Vite'
</script>

<style>
.highlight {
  color: #42b983;
  font-weight: bold;
}
</style>
