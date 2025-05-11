<template>
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
  </template>