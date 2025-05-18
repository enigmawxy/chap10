<template>
  <div class="p-6 bg-white rounded-lg shadow">
    <h1 class="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Element Plus 反馈组件示例</h1>
    
    <!-- Alert 组件 -->
    <section class="mb-10" id="alert-section">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><WarningFilled /></el-icon>Alert 组件
      </h2>
      <div class="space-y-4">
        <el-alert title="成功提示的文案" type="success" />
        <el-alert title="消息提示的文案" type="info" />
        <el-alert title="警告提示的文案" type="warning" />
        <el-alert title="错误提示的文案" type="error" />
        
        <el-divider content-position="left">带有描述信息</el-divider>
        
        <el-alert
          title="带辅助性文字介绍"
          type="success"
          description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
        />
        
        <el-divider content-position="left">带有图标</el-divider>
        
        <el-alert title="成功提示的文案" type="success" show-icon />
        <el-alert title="消息提示的文案" type="info" show-icon />
        <el-alert title="警告提示的文案" type="warning" show-icon />
        <el-alert title="错误提示的文案" type="error" show-icon />
      </div>
    </section>
    
    <!-- Dialog 组件 -->
    <section class="mb-10" id="dialog-section">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><ChatDotRound /></el-icon>Dialog 组件
      </h2>
      <div class="space-y-4">
        <el-button type="primary" @click="dialogVisible = true">点击打开 Dialog</el-button>
        
        <el-dialog
          v-model="dialogVisible"
          title="提示"
          width="30%"
          :before-close="handleClose"
        >
          <span>这是一段信息</span>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="dialogVisible = false">取消</el-button>
              <el-button type="primary" @click="dialogVisible = false">
                确认
              </el-button>
            </span>
          </template>
        </el-dialog>
        
        <el-divider content-position="left">自定义内容</el-divider>
        
        <el-button type="primary" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>
        <el-dialog v-model="dialogTableVisible" title="收货地址" width="50%">
          <el-table :data="gridData">
            <el-table-column property="date" label="日期" width="150" />
            <el-table-column property="name" label="姓名" width="200" />
            <el-table-column property="address" label="地址" />
          </el-table>
        </el-dialog>
      </div>
    </section>
    
    <!-- Drawer 抽屉 -->
    <section class="mb-10" id="drawer-section">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Operation /></el-icon>Drawer 抽屉
      </h2>
      <div class="space-y-4">
        <el-button type="primary" @click="drawer = true">点击打开抽屉</el-button>
        
        <el-drawer
          v-model="drawer"
          title="我是标题"
          :with-header="true"
          direction="rtl"
          size="30%"
        >
          <span>我来啦!</span>
        </el-drawer>
        
        <el-divider content-position="left">多层嵌套</el-divider>
        
        <el-button type="primary" @click="drawer1 = true">点击打开嵌套抽屉</el-button>
        
        <el-drawer
          v-model="drawer1"
          title="我是外面的抽屉"
          size="50%"
        >
          <div class="p-4">
            <el-button @click="drawer2 = true">点击打开内层抽屉</el-button>
          </div>
          <el-drawer
            v-model="drawer2"
            title="我是里面的抽屉"
            :append-to-body="true"
          >
            <p>_(:зゝ∠)_</p>
          </el-drawer>
        </el-drawer>
      </div>
    </section>
    
    <!-- Loading 加载 -->
    <section class="mb-10" id="loading-section">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Loading /></el-icon>Loading 加载
      </h2>
      <div class="space-y-4">
        <el-button
          type="primary"
          @click="openFullScreen1"
        >
          服务方式 - 指令方式
        </el-button>
        
        <el-button
          type="primary"
          @click="openFullScreen2"
        >
          服务方式 - 服务方式
        </el-button>
        
        <el-divider content-position="left">区域加载示例</el-divider>
        
        <div v-loading="loading" class="p-4 border rounded-md h-40 flex items-center justify-center">
          <p v-if="!loading">这里是内容区域</p>
        </div>
        
        <el-button type="primary" @click="toggleLoading">切换加载状态</el-button>
      </div>
    </section>
    
    <!-- Message 消息提示 -->
    <section class="mb-10" id="message-section">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><ChatLineRound /></el-icon>Message 消息提示
      </h2>
      <div class="space-y-4">
        <el-button :plain="true" @click="open1">消息</el-button>
        <el-button :plain="true" @click="open2">成功</el-button>
        <el-button :plain="true" @click="open3">警告</el-button>
        <el-button :plain="true" @click="open4">错误</el-button>
        
        <el-divider content-position="left">可关闭的消息提示</el-divider>
        
        <el-button :plain="true" @click="openVn">VNode</el-button>
        <el-button :plain="true" @click="openHTML">HTML 片段</el-button>
      </div>
    </section>
    
    <!-- Message Box 消息弹框 -->
    <section class="mb-10" id="message-box-section">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><ChatSquare /></el-icon>Message Box 消息弹框
      </h2>
      <div class="space-y-4">
        <el-button type="text" @click="open">点击打开 Message Box</el-button>
        
        <el-divider content-position="left">确认消息</el-divider>
        
        <el-button type="text" @click="confirmMessageBox">确认消息</el-button>
        
        <el-divider content-position="left">自定义</el-divider>
        
        <el-button type="text" @click="customMessageBox">自定义</el-button>
      </div>
    </section>
    
    <!-- Notification 通知 -->
    <section class="mb-10" id="notification-section">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Bell /></el-icon>Notification 通知
      </h2>
      <div class="space-y-4">
        <el-button plain @click="openNotification('right')">右上角</el-button>
        <el-button plain @click="openNotification('left')">左上角</el-button>
        
        <el-divider content-position="left">不同类型</el-divider>
        
        <el-button plain @click="openNotificationWithType('success')">成功</el-button>
        <el-button plain @click="openNotificationWithType('warning')">警告</el-button>
        <el-button plain @click="openNotificationWithType('info')">消息</el-button>
        <el-button plain @click="openNotificationWithType('error')">错误</el-button>
      </div>
    </section>
    
    <!-- Popconfirm 气泡确认框 -->
    <section class="mb-10" id="popconfirm-section">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><QuestionFilled /></el-icon>Popconfirm 气泡确认框
      </h2>
      <div class="space-y-4">
        <el-popconfirm
          title="确定删除这条数据吗？"
          @confirm="confirmEvent"
          @cancel="cancelEvent"
        >
          <template #reference>
            <el-button>删除</el-button>
          </template>
        </el-popconfirm>
        
        <el-divider content-position="left">自定义内容</el-divider>
        
        <el-popconfirm
          confirm-button-text="好的"
          cancel-button-text="不用了"
          icon="InfoFilled"
          icon-color="#626AEF"
          title="这是一段内容确定删除吗？"
        >
          <template #reference>
            <el-button>自定义内容</el-button>
          </template>
        </el-popconfirm>
      </div>
    </section>
    
    <!-- Popover 弹出框 -->
    <section class="mb-10" id="popover-section">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><InfoFilled /></el-icon>Popover 弹出框
      </h2>
      <div class="space-y-4">
        <el-popover
          placement="top-start"
          title="标题"
          :width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        >
          <template #reference>
            <el-button>hover 激活</el-button>
          </template>
        </el-popover>
        
        <el-popover
          placement="bottom"
          title="标题"
          :width="200"
          trigger="click"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        >
          <template #reference>
            <el-button>click 激活</el-button>
          </template>
        </el-popover>
        
        <el-divider content-position="left">嵌套信息</el-divider>
        
        <el-popover
          placement="right"
          :width="400"
          trigger="click"
        >
          <template #reference>
            <el-button>复杂内容</el-button>
          </template>
          <template #default>
            <div class="p-2">
              <el-table :data="gridData">
                <el-table-column width="150" property="date" label="日期"></el-table-column>
                <el-table-column width="100" property="name" label="姓名"></el-table-column>
                <el-table-column width="300" property="address" label="地址"></el-table-column>
              </el-table>
            </div>
          </template>
        </el-popover>
      </div>
    </section>
    
    <!-- Tooltip 文字提示 -->
    <section class="mb-10" id="tooltip-section">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><InfoFilled /></el-icon>Tooltip 文字提示
      </h2>
      <div class="space-y-4">
        <div class="flex space-x-4">
          <el-tooltip
            class="box-item"
            effect="dark"
            content="Top 提示文字"
            placement="top"
          >
            <el-button>上</el-button>
          </el-tooltip>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="Bottom 提示文字"
            placement="bottom"
          >
            <el-button>下</el-button>
          </el-tooltip>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="Left 提示文字"
            placement="left"
          >
            <el-button>左</el-button>
          </el-tooltip>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="Right 提示文字"
            placement="right"
          >
            <el-button>右</el-button>
          </el-tooltip>
        </div>
        
        <el-divider content-position="left">主题</el-divider>
        
        <div class="flex space-x-4">
          <el-tooltip
            class="box-item"
            effect="dark"
            content="Dark"
            placement="top"
          >
            <el-button>Dark</el-button>
          </el-tooltip>
          <el-tooltip
            class="box-item"
            effect="light"
            content="Light"
            placement="top"
          >
            <el-button>Light</el-button>
          </el-tooltip>
        </div>
        
        <el-divider content-position="left">更多内容</el-divider>
        
        <el-tooltip
          placement="top"
          :hide-after="0"
        >
          <template #content>
            <div>多行信息<br/>第二行信息</div>
          </template>
          <el-button>复杂 Tooltip</el-button>
        </el-tooltip>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElLoading, ElMessage, ElMessageBox, ElNotification } from 'element-plus'
import {
  WarningFilled,
  ChatDotRound,
  Operation,
  Loading,
  ChatLineRound,
  ChatSquare,
  Bell,
  QuestionFilled,
  InfoFilled
} from '@element-plus/icons-vue'

// Dialog 组件
const dialogVisible = ref(false)
const dialogTableVisible = ref(false)
const gridData = [
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
  {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
  {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }
]

const handleClose = (done) => {
  ElMessageBox.confirm('确认关闭？')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}

// Drawer 抽屉
const drawer = ref(false)
const drawer1 = ref(false)
const drawer2 = ref(false)

// Loading 加载
const loading = ref(false)

const toggleLoading = () => {
  loading.value = !loading.value
}

const openFullScreen1 = () => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  setTimeout(() => {
    loading.close()
  }, 2000)
}

const openFullScreen2 = () => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  setTimeout(() => {
    loading.close()
  }, 2000)
}

// Message 消息提示
const open1 = () => {
  ElMessage('这是一条消息提示')
}
const open2 = () => {
  ElMessage({
    message: '恭喜你，这是一条成功消息',
    type: 'success'
  })
}
const open3 = () => {
  ElMessage({
    message: '警告哦，这是一条警告消息',
    type: 'warning'
  })
}
const open4 = () => {
  ElMessage.error('错了哦，这是一条错误消息')
}

const openVn = () => {
  ElMessage({
    message: h('p', null, [
      h('span', null, '内容可以是 '),
      h('i', { style: 'color: teal' }, 'VNode')
    ])
  })
}

const openHTML = () => {
  ElMessage({
    dangerouslyUseHTMLString: true,
    message: '<strong>这是 <i>HTML</i> 片段</strong>'
  })
}

// Message Box 消息弹框
const open = () => {
  ElMessageBox.alert('这是一段内容', '标题名称', {
    confirmButtonText: '确定',
    callback: (action) => {
      ElMessage({
        type: 'info',
        message: `action: ${action}`
      })
    }
  })
}

const confirmMessageBox = () => {
  ElMessageBox.confirm(
    '此操作将永久删除该文件, 是否继续?',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: '删除成功!'
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消删除'
      })
    })
}

const customMessageBox = () => {
  ElMessageBox({
    title: '消息',
    message: h('p', null, [
      h('span', null, '内容可以是 '),
      h('i', { style: 'color: teal' }, 'VNode')
    ])
  })
}

// Notification 通知
const openNotification = (position) => {
  ElNotification({
    title: '成功',
    message: '这是一条成功的提示消息',
    position
  })
}

const openNotificationWithType = (type) => {
  ElNotification({
    title: '标题名称',
    message: '这是一条消息提示',
    type
  })
}

// Popconfirm 气泡确认框
const confirmEvent = () => {
  ElMessage({
    message: '删除成功',
    type: 'success'
  })
}
const cancelEvent = () => {
  ElMessage({
    message: '已取消删除',
    type: 'info'
  })
}

// 用于 h 函数
const h = (tag, props, children) => {
  return {
    tag,
    props,
    children
  }
}
</script>

<style scoped>
.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
</style>
