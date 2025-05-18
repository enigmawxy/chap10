<template>
  <div class="p-6 bg-white rounded-lg shadow">
    <h1 class="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Element Plus 基础组件示例</h1>
    
    <!-- 按钮组件 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Pointer /></el-icon>Button 按钮
      </h2>
      <div class="space-y-4">
        <div class="flex flex-wrap gap-4">
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
        </div>
        
        <div class="flex flex-wrap gap-4">
          <el-button plain>朴素按钮</el-button>
          <el-button type="primary" plain>主要按钮</el-button>
          <el-button type="success" plain>成功按钮</el-button>
          <el-button type="info" plain>信息按钮</el-button>
          <el-button type="warning" plain>警告按钮</el-button>
          <el-button type="danger" plain>危险按钮</el-button>
        </div>
        
        <div class="flex flex-wrap gap-4">
          <el-button round>圆角按钮</el-button>
          <el-button type="primary" round>主要按钮</el-button>
          <el-button type="success" round>成功按钮</el-button>
          <el-button type="info" round>信息按钮</el-button>
          <el-button type="warning" round>警告按钮</el-button>
          <el-button type="danger" round>危险按钮</el-button>
        </div>
        
        <div class="flex flex-wrap gap-4">
          <el-button :icon="Search" circle />
          <el-button type="primary" :icon="Edit" circle />
          <el-button type="success" :icon="Check" circle />
          <el-button type="info" :icon="Message" circle />
          <el-button type="warning" :icon="Star" circle />
          <el-button type="danger" :icon="Delete" circle />
        </div>
      </div>
    </section>
    
    <!-- 边框 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><CopyDocument /></el-icon>Border 边框
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="border border-gray-300 p-4 rounded text-center">默认边框</div>
        <div class="border-t-2 border-blue-500 p-4 rounded text-center">上边框</div>
        <div class="border-r-2 border-green-500 p-4 rounded text-center">右边框</div>
        <div class="border-b-2 border-red-500 p-4 rounded text-center">下边框</div>
        <div class="border-l-2 border-yellow-500 p-4 rounded text-center">左边框</div>
        <div class="border-2 border-dashed border-gray-400 p-4 rounded text-center">虚线边框</div>
        <div class="border-2 border-dotted border-gray-400 p-4 rounded text-center">点状边框</div>
        <div class="shadow-md p-4 rounded text-center">阴影</div>
      </div>
    </section>
    
    <!-- 颜色 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Brush /></el-icon>Color 色彩
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="h-16 bg-[#409EFF] rounded flex items-center justify-center text-white">Primary</div>
        <div class="h-16 bg-[#67C23A] rounded flex items-center justify-center text-white">Success</div>
        <div class="h-16 bg-[#E6A23C] rounded flex items-center justify-center text-white">Warning</div>
        <div class="h-16 bg-[#F56C6C] rounded flex items-center justify-center text-white">Danger</div>
        <div class="h-16 bg-[#909399] rounded flex items-center justify-center text-white">Info</div>
        <div class="h-16 bg-[#303133] rounded flex items-center justify-center text-white">主要文字</div>
        <div class="h-16 bg-[#606266] rounded flex items-center justify-center text-white">常规文字</div>
        <div class="h-16 bg-[#C0C4CC] rounded flex items-center justify-center text-white">占位文字</div>
      </div>
    </section>
    
    <!-- 容器 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Box /></el-icon>Container 布局容器
      </h2>
      <div class="border border-gray-300 rounded overflow-hidden">
        <div class="bg-gray-200 p-3 text-center">Header</div>
        <div class="flex">
          <div class="bg-gray-300 p-3 w-48 text-center">Aside</div>
          <div class="bg-gray-100 p-3 flex-1 text-center min-h-[100px] flex items-center justify-center">Main</div>
        </div>
        <div class="bg-gray-200 p-3 text-center">Footer</div>
      </div>
    </section>
    
    <!-- 图标 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><PictureFilled /></el-icon>Icon 图标
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
        <div class="flex flex-col items-center">
          <el-icon size="24"><Edit /></el-icon>
          <span class="text-xs mt-1">Edit</span>
        </div>
        <div class="flex flex-col items-center">
          <el-icon size="24"><Share /></el-icon>
          <span class="text-xs mt-1">Share</span>
        </div>
        <div class="flex flex-col items-center">
          <el-icon size="24"><Delete /></el-icon>
          <span class="text-xs mt-1">Delete</span>
        </div>
        <div class="flex flex-col items-center">
          <el-icon size="24"><Search /></el-icon>
          <span class="text-xs mt-1">Search</span>
        </div>
        <div class="flex flex-col items-center">
          <el-icon size="24"><Upload /></el-icon>
          <span class="text-xs mt-1">Upload</span>
        </div>
        <div class="flex flex-col items-center">
          <el-icon size="24"><Download /></el-icon>
          <span class="text-xs mt-1">Download</span>
        </div>
      </div>
    </section>
    
    <!-- 布局 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Grid /></el-icon>Layout 布局
      </h2>
      <el-row :gutter="20" class="mb-4">
        <el-col :span="24"><div class="bg-[#99a9bf] h-10 flex items-center justify-center text-white">24</div></el-col>
      </el-row>
      <el-row :gutter="20" class="mb-4">
        <el-col :span="12"><div class="bg-[#99a9bf] h-10 flex items-center justify-center text-white">12</div></el-col>
        <el-col :span="12"><div class="bg-[#d3dce6] h-10 flex items-center justify-center text-white">12</div></el-col>
      </el-row>
      <el-row :gutter="20" class="mb-4">
        <el-col :span="8"><div class="bg-[#99a9bf] h-10 flex items-center justify-center text-white">8</div></el-col>
        <el-col :span="8"><div class="bg-[#d3dce6] h-10 flex items-center justify-center text-white">8</div></el-col>
        <el-col :span="8"><div class="bg-[#99a9bf] h-10 flex items-center justify-center text-white">8</div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6"><div class="bg-[#99a9bf] h-10 flex items-center justify-center text-white">6</div></el-col>
        <el-col :span="6"><div class="bg-[#d3dce6] h-10 flex items-center justify-center text-white">6</div></el-col>
        <el-col :span="6"><div class="bg-[#99a9bf] h-10 flex items-center justify-center text-white">6</div></el-col>
        <el-col :span="6"><div class="bg-[#d3dce6] h-10 flex items-center justify-center text-white">6</div></el-col>
      </el-row>
    </section>
    
    <!-- 链接 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Link /></el-icon>Link 链接
      </h2>
      <div class="flex flex-wrap gap-6">
        <el-link>默认链接</el-link>
        <el-link type="primary">主要链接</el-link>
        <el-link type="success">成功链接</el-link>
        <el-link type="warning">警告链接</el-link>
        <el-link type="danger">危险链接</el-link>
        <el-link type="info">信息链接</el-link>
      </div>
      <div class="flex flex-wrap gap-6 mt-4">
        <el-link :underline="false">无下划线链接</el-link>
        <el-link :icon="View">带图标链接</el-link>
        <el-link disabled>禁用链接</el-link>
      </div>
    </section>
    
    <!-- 文本 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Document /></el-icon>Text 文本
      </h2>
      <div class="space-y-4">
        <div>
          <el-text>默认文本</el-text>
        </div>
        <div>
          <el-text type="primary">主要文本</el-text>
        </div>
        <div>
          <el-text type="success">成功文本</el-text>
        </div>
        <div>
          <el-text type="warning">警告文本</el-text>
        </div>
        <div>
          <el-text type="danger">危险文本</el-text>
        </div>
        <div>
          <el-text type="info">信息文本</el-text>
        </div>
        <div>
          <el-text truncated>这是一段很长的文本，将会被截断。这是一段很长的文本，将会被截断。这是一段很长的文本，将会被截断。</el-text>
        </div>
      </div>
    </section>
    
    <!-- 滚动条 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><DCaret /></el-icon>Scrollbar 滚动条
      </h2>
      <el-scrollbar height="200px">
        <div class="p-4">
          <p v-for="item in 20" :key="item" class="mb-2">滚动条示例项 {{ item }}</p>
        </div>
      </el-scrollbar>
    </section>
    
    <!-- 间距 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Aim /></el-icon>Space 间距
      </h2>
      <el-space wrap>
        <el-card v-for="i in 3" :key="i" class="w-32 h-32 flex items-center justify-center">
          {{ i }}
        </el-card>
      </el-space>
      
      <div class="mt-4">
        <el-space direction="vertical">
          <el-button type="primary">垂直间距示例</el-button>
          <el-button type="primary">垂直间距示例</el-button>
          <el-button type="primary">垂直间距示例</el-button>
        </el-space>
      </div>
    </section>
    
    <!-- 排版 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Reading /></el-icon>Typography 排版
      </h2>
      <div class="space-y-4">
        <div>
          <h1 class="text-3xl font-bold">标题 1</h1>
          <h2 class="text-2xl font-bold">标题 2</h2>
          <h3 class="text-xl font-bold">标题 3</h3>
          <h4 class="text-lg font-bold">标题 4</h4>
          <h5 class="text-base font-bold">标题 5</h5>
        </div>
        <div>
          <p class="text-base">正文文本示例。这是一段示例文本，用于展示排版效果。</p>
          <p class="text-sm">小号文本示例。这是一段示例文本，用于展示排版效果。</p>
          <p class="text-xs">超小号文本示例。这是一段示例文本，用于展示排版效果。</p>
        </div>
        <div>
          <p><strong>粗体文本</strong> 和 <em>斜体文本</em> 示例。</p>
          <p><code>代码文本</code> 示例。</p>
          <p><mark>高亮文本</mark> 示例。</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  Edit,
  Search,
  Check,
  Message,
  Star,
  Delete,
  Share,
  Upload,
  Download,
  View,
  Pointer,
  CopyDocument,
  Brush,
  Box,
  PictureFilled,
  Grid,
  Link,
  Document,
  DCaret,
  Aim,
  Reading
} from '@element-plus/icons-vue'
</script>
