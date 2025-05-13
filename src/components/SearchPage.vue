<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Search Bar -->
    <div class="relative mb-10 max-w-md mx-auto">
      <div class="flex items-center border rounded-full bg-white shadow-sm px-4 py-2">
        <el-icon class="text-gray-400 mr-2">
          <Search />
        </el-icon>
        <input
          type="text"
          placeholder="输入关键词搜索想要的内容..."
          class="w-full outline-none text-sm text-gray-700"
        />
      </div>
    </div>

    <!-- Search Functions Title -->
    <div class="text-center mb-10">
      <h2 class="text-xl font-bold">搜索功能</h2>
      <div class="w-12 h-1 bg-gray-800 mx-auto mt-2"></div>
    </div>

    <!-- Category Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(category, index) in categories" :key="index" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div class="flex items-start">
          <div :class="['w-10 h-10 rounded-lg flex items-center justify-center', category.bgColor]">
            <el-icon class="text-white text-xl">
              <component :is="category.icon" />
            </el-icon>
          </div>
          <div class="ml-4 flex-1">
            <h3 class="font-bold text-lg mb-1">{{ category.title }}</h3>
            <p class="text-gray-600 text-xs mb-4">{{ category.description }}</p>
            <div class="border-t pt-2">
              <a href="#" class="text-gray-500 text-xs">查看</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import {
//   Search,
//   School,
//   Document,
//   Notebook,
//   DataAnalysis,
//   Beaker,
//   ChatLineRound,
//   Histogram,
//   Collection
// } from '@element-plus/icons-vue';

const categories = [
  {
    title: '精准搜索',
    description: '支持标题搜索、全文搜索内容、同时搜索标题和内容',
    icon: 'Search',
    bgColor: 'bg-orange-500'
  },
  {
    title: '代码搜索',
    description: '可搜索各种编程语言的代码片段',
    icon: 'Document',
    bgColor: 'bg-green-500'
  },
  {
    title: '学习辅助',
    description: '帮助学习者查找学习资源',
    icon: 'School',
    bgColor: 'bg-indigo-500'
  },
  {
    title: '数学搜索',
    description: '从数学公式到数学解答，多方位搜索',
    icon: 'Notebook',
    bgColor: 'bg-yellow-500'
  },
  {
    title: '物理解答器',
    description: '解答物理问题，从基础力学到高级物理学',
    icon: 'DataAnalysis',
    bgColor: 'bg-orange-500'
  },
  {
    title: '化学助手',
    description: '搜索化学元素、反应和相关知识',
    icon: 'Beaker',
    bgColor: 'bg-blue-500'
  },
  {
    title: '生物学家',
    description: '探索生物科学，从基础到高级生物学内容',
    icon: 'Collection',
    bgColor: 'bg-green-500'
  },
  {
    title: '心理咨询师',
    description: '提供心理健康知识与心理咨询建议',
    icon: 'ChatLineRound',
    bgColor: 'bg-red-500'
  },
  {
    title: '健身教练',
    description: '提供各种运动健身方案和健康建议',
    icon: 'Histogram',
    bgColor: 'bg-yellow-500'
  }
]
</script>
