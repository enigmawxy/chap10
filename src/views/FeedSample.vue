<template>
  <div class="bg-gray-100 h-screen">
    <el-dialog v-model="dialogVisible" title="提示" width="30%">
      <span>确认删除？</span>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmDelete">确认</el-button>
      </template>
    </el-dialog>

    <!-- 通知消息 -->
    <el-button @click="showNotify">显示通知</el-button>
  </div>
</template>

<script setup>
const dialogVisible = ref(false)

// 消息提示
const showNotify = () => {
  ElNotification({
    title: '新消息',
    message: '您有3条未读通知',
    type: 'info'
  })
}
</script>
