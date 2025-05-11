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