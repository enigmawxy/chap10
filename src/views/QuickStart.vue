<template>
  <div class="bg-white h-screen">
    <!-- 按钮组件 -->
    <el-button type="danger" @click="showMessage">
      <el-icon>
        <Warning />
      </el-icon>
      危险操作
    </el-button>
  </div>
</template>

<script setup>
const showMessage = () => {
  ElMessage.error('危险操作警告！')
}
</script>