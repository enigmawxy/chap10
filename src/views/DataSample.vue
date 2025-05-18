<template>
  <div class="p-6 bg-white rounded-lg shadow">
    <h1 class="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Element Plus 数据展示组件示例</h1>
    
    <!-- Avatar 头像 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><UserFilled /></el-icon>Avatar 头像
      </h2>
      <div class="flex items-center space-x-4">
        <el-avatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <el-avatar :size="50" icon="UserFilled" />
        <el-avatar :size="50">用户</el-avatar>
        <div>
          <el-avatar shape="square" :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        </div>
      </div>
    </section>
    
    <!-- Badge 徽章 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Bell /></el-icon>Badge 徽章
      </h2>
      <div class="flex items-center space-x-8">
        <el-badge :value="12" class="item">
          <el-button>评论</el-button>
        </el-badge>
        <el-badge :value="3" class="item" type="primary">
          <el-button>回复</el-button>
        </el-badge>
        <el-badge :value="1" class="item" type="warning">
          <el-button>消息</el-button>
        </el-badge>
        <el-badge value="new" class="item">
          <el-button>通知</el-button>
        </el-badge>
        <el-badge is-dot class="item">
          <el-icon><ChatDotRound /></el-icon>
        </el-badge>
      </div>
    </section>
    
    <!-- Calendar 日历 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Calendar /></el-icon>Calendar 日历
      </h2>
      <div class="max-w-3xl">
        <el-calendar v-model="calendarValue" />
      </div>
    </section>
    
    <!-- Card 卡片 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Document /></el-icon>Card 卡片
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <el-card class="box-card">
          <template #header>
            <div class="flex justify-between items-center">
              <span>卡片标题</span>
              <el-button class="button" text>操作按钮</el-button>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text-item">
            {{ '列表内容 ' + o }}
          </div>
        </el-card>
        
        <el-card class="box-card">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" />
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom">
              <el-button text class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </div>
    </section>
    
    <!-- Carousel 走马灯 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Picture /></el-icon>Carousel 走马灯
      </h2>
      <div class="max-w-3xl">
        <el-carousel height="200px">
          <el-carousel-item v-for="item in 4" :key="item">
            <div class="h-full bg-gray-200 flex justify-center items-center text-xl">
              {{ item }}
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </section>
    
    <!-- Collapse 折叠面板 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><ArrowDown /></el-icon>Collapse 折叠面板
      </h2>
      <div class="max-w-3xl">
        <el-collapse v-model="collapseActiveNames">
          <el-collapse-item title="一致性 Consistency" name="1">
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
          <el-collapse-item title="反馈 Feedback" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
          <el-collapse-item title="效率 Efficiency" name="3">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </el-collapse-item>
          <el-collapse-item title="可控 Controllability" name="4">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </section>
    
    <!-- Descriptions 描述列表 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Document /></el-icon>Descriptions 描述列表
      </h2>
      <div class="max-w-3xl">
        <el-descriptions title="用户信息" :column="3" border>
          <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
          <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
          <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
          <el-descriptions-item label="备注">
            <el-tag size="small">学校</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
        </el-descriptions>
      </div>
    </section>
    
    <!-- Empty 空状态 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Delete /></el-icon>Empty 空状态
      </h2>
      <div class="max-w-3xl">
        <el-empty description="暂无数据" />
        <el-empty description="自定义图片" image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
      </div>
    </section>
    
    <!-- Image 图片 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Picture /></el-icon>Image 图片
      </h2>
      <div class="flex flex-wrap gap-4">
        <el-image
          style="width: 100px; height: 100px"
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          :preview-src-list="['https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png']"
          fit="cover"
        />
        <el-image
          style="width: 100px; height: 100px"
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          fit="contain"
        />
        <el-image
          style="width: 100px; height: 100px"
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          fit="fill"
        />
      </div>
    </section>
    
    <!-- Infinite Scroll 无限滚动 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><DCaret /></el-icon>Infinite Scroll 无限滚动
      </h2>
      <div class="max-w-3xl">
        <ul
          v-infinite-scroll="load"
          class="overflow-auto h-48 border border-gray-200 p-2"
          :infinite-scroll-disabled="disabled"
        >
          <li v-for="i in infiniteCount" :key="i" class="py-2 border-b border-gray-100">{{ i }}</li>
        </ul>
        <p class="text-gray-500 mt-2" v-if="loading">加载中...</p>
        <p class="text-gray-500 mt-2" v-if="noMore">没有更多了</p>
      </div>
    </section>
    
    <!-- Pagination 分页 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><More /></el-icon>Pagination 分页
      </h2>
      <div class="max-w-3xl">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 30, 40]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        />
      </div>
    </section>
    
    <!-- Progress 进度条 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Loading /></el-icon>Progress 进度条
      </h2>
      <div class="max-w-3xl space-y-4">
        <el-progress :percentage="50" />
        <el-progress :percentage="100" status="success" />
        <el-progress :percentage="80" status="warning" />
        <el-progress :percentage="50" status="exception" />
        <div class="flex space-x-4">
          <el-progress type="circle" :percentage="25" />
          <el-progress type="circle" :percentage="80" status="warning" />
          <el-progress type="circle" :percentage="100" status="success" />
        </div>
      </div>
    </section>
    
    <!-- Result 结果 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><SuccessFilled /></el-icon>Result 结果
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <el-result
          icon="success"
          title="操作成功"
          sub-title="请根据提示进行操作"
        >
          <template #extra>
            <el-button type="primary">返回</el-button>
          </template>
        </el-result>
        
        <el-result
          icon="error"
          title="操作失败"
          sub-title="请检查输入内容后重试"
        >
          <template #extra>
            <el-button type="primary">返回</el-button>
          </template>
        </el-result>
      </div>
    </section>
    
    <!-- Skeleton 骨架屏 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><View /></el-icon>Skeleton 骨架屏
      </h2>
      <div class="max-w-3xl">
        <el-skeleton :rows="5" animated />
        
        <el-divider />
        
        <el-skeleton style="width: 240px" animated>
          <template #template>
            <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
            <div style="padding: 14px;">
              <el-skeleton-item variant="h3" style="width: 50%" />
              <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 16px; height: 16px;">
                <el-skeleton-item variant="text" style="margin-right: 16px;" />
                <el-skeleton-item variant="text" style="width: 30%;" />
              </div>
            </div>
          </template>
        </el-skeleton>
      </div>
    </section>
    
    <!-- Table 表格 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Grid /></el-icon>Table 表格
      </h2>
      <div class="max-w-4xl">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180" />
          <el-table-column prop="name" label="姓名" width="180" />
          <el-table-column prop="address" label="地址" />
        </el-table>
      </div>
    </section>
    
    <!-- Tag 标签 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><PriceTag /></el-icon>Tag 标签
      </h2>
      <div class="space-y-4">
        <div>
          <el-tag>标签一</el-tag>
          <el-tag class="ml-2" type="success">标签二</el-tag>
          <el-tag class="ml-2" type="info">标签三</el-tag>
          <el-tag class="ml-2" type="warning">标签四</el-tag>
          <el-tag class="ml-2" type="danger">标签五</el-tag>
        </div>
        <div>
          <el-tag effect="dark">标签一</el-tag>
          <el-tag class="ml-2" effect="dark" type="success">标签二</el-tag>
          <el-tag class="ml-2" effect="dark" type="info">标签三</el-tag>
          <el-tag class="ml-2" effect="dark" type="warning">标签四</el-tag>
          <el-tag class="ml-2" effect="dark" type="danger">标签五</el-tag>
        </div>
        <div>
          <el-tag closable>标签一</el-tag>
          <el-tag class="ml-2" closable type="success">标签二</el-tag>
        </div>
      </div>
    </section>
    
    <!-- Timeline 时间线 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Timer /></el-icon>Timeline 时间线
      </h2>
      <div class="max-w-3xl">
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp"
            :type="activity.type"
          >
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
      </div>
    </section>
    
    <!-- Tree 树形控件 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><FolderOpened /></el-icon>Tree 树形控件
      </h2>
      <div class="max-w-3xl">
        <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick" />
      </div>
    </section>
    
    <!-- Statistic 统计组件 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><DataAnalysis /></el-icon>Statistic 统计组件
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <el-card>
          <el-statistic title="活跃用户" :value="112893" />
        </el-card>
        <el-card>
          <el-statistic title="新增用户" :value="1893">
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-statistic>
        </el-card>
        <el-card>
          <el-statistic title="增长率" :value="50" :precision="2" suffix="%">
            <template #prefix>
              <el-icon><TrendCharts /></el-icon>
            </template>
          </el-statistic>
        </el-card>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import {
  UserFilled,
  Bell,
  Calendar,
  Document,
  Picture,
  ArrowDown,
  Delete,
  DCaret,
  More,
  Loading,
  SuccessFilled,
  View,
  Grid,
  PriceTag,
  Timer,
  FolderOpened,
  DataAnalysis,
  User,
  TrendCharts,
  ChatDotRound
} from '@element-plus/icons-vue'

// Calendar 日历
const calendarValue = ref(new Date())

// Collapse 折叠面板
const collapseActiveNames = ref(['1'])

// Infinite Scroll 无限滚动
const infiniteCount = ref(10)
const loading = ref(false)
const noMore = ref(false)
const disabled = ref(false)

const load = () => {
  loading.value = true
  setTimeout(() => {
    infiniteCount.value += 2
    loading.value = false
    if (infiniteCount.value >= 20) {
      noMore.value = true
      disabled.value = true
    }
  }, 1000)
}

// Pagination 分页
const currentPage = ref(1)
const pageSize = ref(10)

// Table 表格
const tableData = [
  {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
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
  }
]

// Timeline 时间线
const activities = [
  {
    content: '活动按期开始',
    timestamp: '2018-04-15',
    type: 'primary'
  },
  {
    content: '通过审核',
    timestamp: '2018-04-13',
    type: 'success'
  },
  {
    content: '创建成功',
    timestamp: '2018-04-11'
  },
  {
    content: '初始化项目',
    timestamp: '2018-04-10',
    type: 'info'
  }
]

// Tree 树形控件
const treeData = [
  {
    label: '一级 1',
    children: [
      {
        label: '二级 1-1',
        children: [
          {
            label: '三级 1-1-1'
          }
        ]
      }
    ]
  },
  {
    label: '一级 2',
    children: [
      {
        label: '二级 2-1',
        children: [
          {
            label: '三级 2-1-1'
          }
        ]
      },
      {
        label: '二级 2-2',
        children: [
          {
            label: '三级 2-2-1'
          }
        ]
      }
    ]
  },
  {
    label: '一级 3',
    children: [
      {
        label: '二级 3-1',
        children: [
          {
            label: '三级 3-1-1'
          }
        ]
      },
      {
        label: '二级 3-2',
        children: [
          {
            label: '三级 3-2-1'
          }
        ]
      }
    ]
  }
]

const defaultProps = {
  children: 'children',
  label: 'label'
}

const handleNodeClick = (data) => {
  console.log(data)
}
</script>

<style scoped>
.text-item {
  margin-bottom: 10px;
}
.image {
  width: 100%;
  display: block;
}
</style>
