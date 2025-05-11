<template>
  <div class="bg-gray-100 h-screen">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="日期" width="180" sortable />
      <el-table-column prop="name" label="姓名">
        <template #default="{ row }">
          <el-tag>{{ row.name }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
const tableData = ref([
  { date: '2023-01-01', name: '张三' },
  { date: '2023-01-02', name: '李四' }
])

const handleEdit = (index) => {
  console.log('编辑行:', index)
}
</script>
