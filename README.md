# Element Plus 极简教程（Vue3 版）

> 适用对象：已掌握 Vue3 基础的大学生 | [官方文档](https://element-plus.org/zh-CN/)

## 🌟 核心特点

- **组件丰富**：60+ 企业级组件
- **组合式API**：完美支持 Vue3 新特性
- **主题定制**：Sass 变量轻松修改样式
- **交互规范**：符合企业级产品设计标准
- **TypeScript**：提供完整类型定义

## 🚀 快速使用

```vue
<template>
  <!-- 按钮组件 -->
  <el-button type="danger" @click="showMessage">
    <el-icon><Warning /></el-icon>
    危险操作
  </el-button>
</template>

<script setup>
import { ElButton, ElMessage } from 'element-plus'
import { Warning } from '@element-plus/icons-vue'

const showMessage = () => {
  ElMessage.error('危险操作警告！')
}
</script>
```

## 📦 核心组件速览

### 1. 表单系统（Form）

```vue
<el-form :model="formData" :rules="rules" label-width="80px">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="formData.username" clearable />
  </el-form-item>
  
  <el-form-item label="性别" prop="gender">
    <el-radio-group v-model="formData.gender">
      <el-radio label="male">男</el-radio>
      <el-radio label="female">女</el-radio>
    </el-radio-group>
  </el-form-item>
  
  <el-button type="primary" @click="submitForm">提交</el-button>
</el-form>

<script setup>
const formData = reactive({
  username: '',
  gender: ''
})

const rules = {
  username: [
    { required: true, message: '必填项', trigger: 'blur' },
    { min: 3, max: 12, message: '长度3-12字符' }
  ]
}

const submitForm = () => {
  // 表单验证逻辑
}
</script>
```

### 2. 数据表格（Table）

```vue
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

<script setup>
const tableData = ref([
  { date: '2023-01-01', name: '张三' },
  { date: '2023-01-02', name: '李四' }
])

const handleEdit = (index) => {
  console.log('编辑行:', index)
}
</script>
```

### 3.反馈组件

```vue
<!-- 对话框 -->
<el-dialog v-model="dialogVisible" title="提示" width="30%">
  <span>确认删除？</span>
  <template #footer>
    <el-button @click="dialogVisible = false">取消</el-button>
    <el-button type="primary" @click="confirmDelete">确认</el-button>
  </template>
</el-dialog>

<!-- 通知消息 -->
<el-button @click="showNotify">显示通知</el-button>

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
```

## 🛠️ 实用案例库

### 案例1：用户管理面板

```vue
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
```

### 案例2：图片上传组件

```vue
<template>
  <el-upload
    action="https://your-upload-api.com"
    list-type="picture-card"
    :on-preview="handlePreview"
    :before-upload="beforeUpload"
  >
    <el-icon><Plus /></el-icon>
  </el-upload>
</template>

<script setup>
const beforeUpload = (file) => {
  const isJPG = file.type === 'image/jpeg'
  if (!isJPG) {
    ElMessage.error('仅支持 JPG 格式！')
    return false
  }
  return true
}
</script>
```

## 🔧 进阶技巧

### 1. 全局配置

```javascript
// main.js
import ElementPlus from 'element-plus'

app.use(ElementPlus, {
  // 全局尺寸（small/default/large）
  size: 'default',
  // 国际化
  locale: zhCn,
  // 弹窗初始 z-index
  zIndex: 2000  
})
```

### 2. 主题定制

```scss
// styles/element.scss
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    'primary': (
      'base': #1890ff,
    ),
  ),
  $button-padding-horizontal: 32px
);
```

// 在 main.js 导入

```js
import './styles/element.scss'
```

## 📚 学习资源

- 官方组件文档

Element Plus Icons

- Vue3 官方文档

Element Plus 示例项目

## 💡 学习建议

- 组件优先：从最常用的 10 个组件开始（Button, Form, Table, Dialog 等）
- 文档检索：遇到问题首先查阅对应组件的 API 文档
- 样式覆盖：优先使用组件提供的 props 修改样式，其次用 CSS 覆盖
- 组合使用：学习组件之间的配合使用（如表单+对话框+消息提示）
- 项目驱动：通过实际小项目（如后台管理系统）巩固知识
