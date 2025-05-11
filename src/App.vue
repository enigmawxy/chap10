<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <div class="flex space-x-8">
          <a href="#" class="text-gray-700 hover:text-blue-500">首页</a>
          <a href="#" class="text-gray-700 hover:text-blue-500">产品</a>
        </div>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          登录
        </button>
      </div>
    </div>
  </nav>
  <div class="max-w-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    <img class="w-full h-48 object-cover" src="./images/image.jpg">
    <div class="px-6 py-4">
      <h3 class="text-xl font-bold mb-2">卡片标题</h3>
      <p class="text-gray-600 text-base">
        这是一个使用 Tailwind 构建的卡片组件示例...
      </p>
    </div>
  </div>
  <div>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <!-- Element Plus 组件示例 -->
    <el-button type="primary">按钮</el-button>
    <el-icon>
      <Search />
    </el-icon>
  </div>

</template>

<script setup>
// 无需手动导入组件和图标，已通过自动导入配置
</script>