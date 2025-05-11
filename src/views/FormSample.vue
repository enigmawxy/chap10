<template>
  <div class="bg-gray-100 h-screen">
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
  </div>
</template>

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
