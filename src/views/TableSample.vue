<template>
  <div class="bg-gray-100 min-h-screen p-6">
    <h1 class="text-2xl font-bold mb-6">Element Plus 表格及相关数据展示组件示例</h1>

    <!-- Skeleton 骨架屏 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Skeleton 骨架屏</h2>
      <el-skeleton :rows="3" animated />
    </div>

    <!-- Table 表格 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Table 表格</h2>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180" />
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="address" label="地址" />
      </el-table>
    </div>

    <!-- Virtualized Table 虚拟化表格 (需依赖element-plus/experimental) -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Virtualized Table 虚拟化表格</h2>
      <el-auto-resizer style="height: 200px">
        <template #default="{ height, width }">
          <el-table-v2 :columns="vColumns" :data="vData" :width="width" :height="height" />
        </template>
      </el-auto-resizer>
    </div>

    <!-- Tag 标签 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Tag 标签</h2>
      <el-tag>标签一</el-tag>
      <el-tag type="success">标签二</el-tag>
      <el-tag type="info">标签三</el-tag>
      <el-tag type="warning">标签四</el-tag>
      <el-tag type="danger">标签五</el-tag>
    </div>

    <!-- Timeline 时间线 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Timeline 时间线</h2>
      <el-timeline>
        <el-timeline-item timestamp="2023/4/1" placement="top">创建服务</el-timeline-item>
        <el-timeline-item timestamp="2023/4/2" placement="top">部署服务</el-timeline-item>
        <el-timeline-item timestamp="2023/4/3" placement="top">服务上线</el-timeline-item>
      </el-timeline>
    </div>

    <!-- Tour 漫游式引导 (需依赖element-plus/experimental) -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Tour 漫游式引导</h2>
      <el-tour v-model="tourVisible" :steps="tourSteps" />
      <el-button @click="tourVisible = true">开始引导</el-button>
    </div>

    <!-- Tree 树形控件 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Tree 树形控件</h2>
      <el-tree :data="treeData" :props="treeProps" />
    </div>

    <!-- Virtualized Tree 虚拟化树形控件 (需依赖element-plus/experimental) -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Virtualized Tree 虚拟化树形控件</h2>
      <el-tree-v2 :data="treeData" :props="treeProps" style="height: 200px; width: 300px" />
    </div>

    <!-- Statistic 统计组件 (需依赖element-plus/experimental) -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Statistic 统计组件</h2>
      <el-statistic title="访问量" :value="1024" />
    </div>

    <!-- Segmented 分段控制器 (需依赖element-plus/experimental) -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Segmented 分段控制器</h2>
      <el-segmented v-model="segValue" :options="['日', '周', '月']" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// Table
const tableData = [
  { date: '2023-04-01', name: '张三', address: '上海市普陀区金沙江路 1518 弄' },
  { date: '2023-04-02', name: '李四', address: '北京市海淀区中关村大街 1 号' },
  { date: '2023-04-03', name: '王五', address: '广州市天河区体育西路 123 号' },
]
// Virtualized Table
const vColumns = [
  { key: 'date', title: '日期', dataKey: 'date', width: 120 },
  { key: 'name', title: '姓名', dataKey: 'name', width: 100 },
  { key: 'address', title: '地址', dataKey: 'address', width: 200 },
]
const vData = Array.from({ length: 1000 }).map((_, i) => ({
  date: `2023-04-${(i % 30) + 1}`,
  name: `用户${i}`,
  address: `地址${i}`,
}))
// Tour
const tourVisible = ref(false)
const tourSteps = [
  { title: '第一步', description: '这是第一步' },
  { title: '第二步', description: '这是第二步' },
]
// Tree
const treeData = [
  {
    label: '一级 1',
    children: [
      { label: '二级 1-1', children: [{ label: '三级 1-1-1' }] },
    ],
  },
  {
    label: '一级 2',
    children: [
      { label: '二级 2-1', children: [{ label: '三级 2-1-1' }] },
      { label: '二级 2-2', children: [{ label: '三级 2-2-1' }] },
    ],
  },
]
const treeProps = { children: 'children', label: 'label' }
// Segmented
const segValue = ref('日')
</script>

