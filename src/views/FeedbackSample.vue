<template>
  <div class="bg-gray-100 min-h-screen p-6">
    <h1 class="text-2xl font-bold mb-6">Element Plus 反馈类组件示例</h1>

    <!-- Alert 组件 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Alert 组件</h2>
      <el-alert title="成功提示" type="success" show-icon />
      <el-alert title="警告提示" type="warning" show-icon class="mt-2" />
      <el-alert title="错误提示" type="error" show-icon class="mt-2" />
      <el-alert title="信息提示" type="info" show-icon class="mt-2" />
    </div>

    <!-- Dialog 组件 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Dialog 组件</h2>
      <el-button @click="dialogVisible = true">打开对话框</el-button>
      <el-dialog v-model="dialogVisible" title="对话框标题">
        <span>这是对话框内容。</span>
        <template #footer>
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确定</el-button>
        </template>
      </el-dialog>
    </div>

    <!-- Drawer 抽屉 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Drawer 抽屉</h2>
      <el-button @click="drawerVisible = true">打开抽屉</el-button>
      <el-drawer v-model="drawerVisible" title="抽屉标题" direction="rtl">
        <span>这是抽屉内容。</span>
      </el-drawer>
    </div>

    <!-- Loading 加载 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Loading 加载</h2>
      <el-button @click="openLoading">显示加载</el-button>
    </div>

    <!-- Message 消息提示 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Message 消息提示</h2>
      <el-button @click="openMsg('success')">成功</el-button>
      <el-button @click="openMsg('warning')">警告</el-button>
      <el-button @click="openMsg('error')">错误</el-button>
      <el-button @click="openMsg('info')">信息</el-button>
    </div>

    <!-- Message Box 消息弹框 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Message Box 消息弹框</h2>
      <el-button @click="openMsgBox">打开消息弹框</el-button>
    </div>

    <!-- Notification 通知 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Notification 通知</h2>
      <el-button @click="openNotification">打开通知</el-button>
    </div>

    <!-- Popconfirm 气泡确认框 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Popconfirm 气泡确认框</h2>
      <el-popconfirm title="确定要删除吗？" @confirm="onPopConfirm">
        <template #reference>
          <el-button>删除</el-button>
        </template>
      </el-popconfirm>
    </div>

    <!-- Popover 弹出框 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Popover 弹出框</h2>
      <el-popover placement="top" title="标题" :width="200" trigger="click" content="这是一段内容。">
        <template #reference>
          <el-button>点击弹出</el-button>
        </template>
      </el-popover>
    </div>

    <!-- Tooltip 文字提示 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Tooltip 文字提示</h2>
      <el-tooltip content="这里是提示内容" placement="top">
        <el-button>悬停显示提示</el-button>
      </el-tooltip>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessageBox, ElNotification, ElLoading, ElMessage } from 'element-plus'

const dialogVisible = ref(false)
const drawerVisible = ref(false)

const openLoading = () => {
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  setTimeout(() => loading.close(), 1500)
}

const openMsg = (type) => {
  if (type === 'success') ElMessage.success('操作成功')
  else if (type === 'warning') ElMessage.warning('警告信息')
  else if (type === 'error') ElMessage.error('错误信息')
  else ElMessage.info('普通信息')
}

const openMsgBox = () => {
  ElMessageBox.alert('这是一段内容', '消息弹框', {
    confirmButtonText: '确定',
    callback: () => {
      ElMessage.success('已关闭')
    }
  })
}

const openNotification = () => {
  ElNotification({
    title: '通知',
    message: '这是一条通知内容',
    type: 'info',
  })
}

const onPopConfirm = () => {
  ElMessage.success('已确认删除')
}
</script>
