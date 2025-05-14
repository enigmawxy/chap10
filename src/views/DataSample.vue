<template>
  <div class="bg-gray-100 min-h-screen p-6">
    <h1 class="text-2xl font-bold mb-6">Element Plus 数据展示组件示例</h1>
    
    <!-- Avatar 示例 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Avatar 头像</h2>
      <div class="flex gap-4">
        <el-avatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <el-avatar :size="50" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
        <el-avatar :size="50">User</el-avatar>
      </div>
    </div>

    <!-- Badge 示例 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Badge 徽章</h2>
      <div class="flex gap-4">
        <el-badge :value="12" class="item">
          <el-button>评论</el-button>
        </el-badge>
        <el-badge :value="3" class="item" type="primary">
          <el-button>回复</el-button>
        </el-badge>
        <el-badge :value="1" class="item" type="warning">
          <el-button>消息</el-button>
        </el-badge>
      </div>
    </div>

    <!-- Calendar 示例 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Calendar 日历</h2>
      <el-calendar v-model="currentDate" />
    </div>

    <!-- Card 示例 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Card 卡片</h2>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>卡片名称</span>
                <el-button class="button" text>操作按钮</el-button>
              </div>
            </template>
            <div v-for="i in 4" :key="i" class="text item">
              {{ '列表内容 ' + i }}
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!-- Carousel 示例 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Carousel 走马灯</h2>
      <el-carousel height="200px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="flex items-center justify-center h-full text-white text-2xl" :style="{ background: `#${Math.floor(Math.random()*16777215).toString(16)}` }">
            {{ item }}
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- Empty 示例 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Empty 空状态</h2>
      <el-empty description="暂无数据" />
    </div>

    <!-- Image 示例 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Image 图片</h2>
      <div class="flex gap-4">
        <el-image
          style="width: 100px; height: 100px"
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          fit="cover"
        />
        <el-image
          style="width: 100px; height: 100px"
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          :preview-src-list="['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg']"
          fit="cover"
        />
      </div>
    </div>

    <!-- Progress 示例 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Progress 进度条</h2>
      <div class="space-y-4">
        <el-progress :percentage="50" />
        <el-progress :percentage="100" :format="format" />
        <el-progress :percentage="100" status="success" />
        <el-progress :percentage="100" status="warning" />
        <el-progress :percentage="50" status="exception" />
      </div>
    </div>

    <!-- Pagination 示例 -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Pagination 分页</h2>
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30, 40]"
        :small="false"
        :background="true"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentDate = ref(new Date())
const currentPage = ref(1)
const pageSize = ref(10)

const format = (percentage) => {
  return percentage === 100 ? '完成' : `${percentage}%`
}

const handleSizeChange = (val) => {
  console.log(`每页 ${val} 条`)
}

const handleCurrentChange = (val) => {
  console.log(`当前页: ${val}`)
}
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 100%;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}
</style>
