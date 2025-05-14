<template>
  <div class="bg-white h-screen p-4 text-center">
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

