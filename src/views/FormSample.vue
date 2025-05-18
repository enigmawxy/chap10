<template>
  <div class="p-6 bg-white rounded-lg shadow">
    <h1 class="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Element Plus 表单组件示例</h1>
    
    <!-- 基本表单 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Tickets /></el-icon>Form 表单
      </h2>
      <el-form :model="formData" label-width="120px" class="max-w-lg">
        <el-form-item label="用户名">
          <el-input v-model="formData.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="formData.email" placeholder="请输入邮箱" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formData.password" type="password" placeholder="请输入密码" show-password />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">提交</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </section>
    
    <!-- 输入框 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><EditPen /></el-icon>Input 输入框
      </h2>
      <div class="space-y-4 max-w-lg">
        <el-input v-model="inputValue" placeholder="请输入内容" />
        <el-input v-model="inputValue" placeholder="禁用状态" disabled />
        <el-input v-model="inputValue" placeholder="可清空" clearable />
        <el-input v-model="inputValue" placeholder="带图标" prefix-icon="Search" />
        <el-input v-model="inputValue" type="password" placeholder="密码框" show-password />
        <el-input v-model="textareaValue" type="textarea" placeholder="文本域" :rows="3" />
      </div>
    </section>
    
    <!-- 数字输入框 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Odometer /></el-icon>Input Number 数字输入框
      </h2>
      <div class="space-y-4 max-w-lg">
        <el-input-number v-model="numberValue" :min="1" :max="10" />
        <el-input-number v-model="numberValue" :step="2" step-strictly />
        <el-input-number v-model="numberValue" :precision="2" :step="0.1" />
        <el-input-number v-model="numberValue" controls-position="right" />
      </div>
    </section>
    
    <!-- 单选框 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><CircleCheck /></el-icon>Radio 单选框
      </h2>
      <div class="space-y-4">
        <div>
          <el-radio v-model="radioValue" label="1">选项1</el-radio>
          <el-radio v-model="radioValue" label="2">选项2</el-radio>
        </div>
        <el-radio-group v-model="radioGroupValue">
          <el-radio-button label="上海" />
          <el-radio-button label="北京" />
          <el-radio-button label="广州" />
          <el-radio-button label="深圳" />
        </el-radio-group>
      </div>
    </section>
    
    <!-- 复选框 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Select /></el-icon>Checkbox 多选框
      </h2>
      <div class="space-y-4">
        <div>
          <el-checkbox v-model="checkboxValue">选项1</el-checkbox>
          <el-checkbox v-model="checkboxValue2">选项2</el-checkbox>
        </div>
        <el-checkbox-group v-model="checkboxGroupValue">
          <el-checkbox label="选项A" />
          <el-checkbox label="选项B" />
          <el-checkbox label="选项C" />
          <el-checkbox label="选项D" />
        </el-checkbox-group>
        <el-checkbox-group v-model="checkboxGroupValue2">
          <el-checkbox-button label="选项A" />
          <el-checkbox-button label="选项B" />
          <el-checkbox-button label="选项C" />
          <el-checkbox-button label="选项D" />
        </el-checkbox-group>
      </div>
    </section>
    
    <!-- 选择器 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><ArrowDown /></el-icon>Select 选择器
      </h2>
      <div class="space-y-4 max-w-lg">
        <el-select v-model="selectValue" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select v-model="selectMultipleValue" multiple placeholder="多选">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </section>
    
    <!-- 级联选择器 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Operation /></el-icon>Cascader 级联选择器
      </h2>
      <div class="max-w-lg">
        <el-cascader
          v-model="cascaderValue"
          :options="cascaderOptions"
          placeholder="请选择"
          clearable
        />
      </div>
    </section>
    
    <!-- 开关 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Switch /></el-icon>Switch 开关
      </h2>
      <div class="space-y-4">
        <div>
          <el-switch v-model="switchValue" />
          <el-switch v-model="switchValue" class="ml-4" active-color="#13ce66" inactive-color="#ff4949" />
        </div>
        <div>
          <el-switch v-model="switchValue" active-text="开启" inactive-text="关闭" />
        </div>
      </div>
    </section>
    
    <!-- 滑块 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><DArrowRight /></el-icon>Slider 滑块
      </h2>
      <div class="space-y-6 max-w-lg">
        <el-slider v-model="sliderValue" />
        <el-slider v-model="sliderRangeValue" range show-stops :max="10" />
      </div>
    </section>
    
    <!-- 时间选择器 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Clock /></el-icon>Time Picker 时间选择器
      </h2>
      <div class="space-y-4 max-w-lg">
        <el-time-picker v-model="timeValue" placeholder="选择时间" />
        <el-time-select v-model="timeSelectValue" start="08:30" step="00:15" end="18:30" placeholder="选择时间" />
      </div>
    </section>
    
    <!-- 日期选择器 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Calendar /></el-icon>Date Picker 日期选择器
      </h2>
      <div class="space-y-4 max-w-lg">
        <el-date-picker v-model="dateValue" type="date" placeholder="选择日期" />
        <el-date-picker v-model="dateRangeValue" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
      </div>
    </section>
    
    <!-- 日期时间选择器 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Timer /></el-icon>DateTime Picker 日期时间选择器
      </h2>
      <div class="max-w-lg">
        <el-date-picker v-model="dateTimeValue" type="datetime" placeholder="选择日期时间" />
      </div>
    </section>
    
    <!-- 评分 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Star /></el-icon>Rate 评分
      </h2>
      <div class="space-y-4">
        <el-rate v-model="rateValue" />
        <el-rate v-model="rateValue" show-text :texts="rateTexts" />
        <el-rate v-model="rateValue" :colors="rateColors" />
      </div>
    </section>
    
    <!-- 颜色选择器 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Brush /></el-icon>Color Picker 颜色选择器
      </h2>
      <div>
        <el-color-picker v-model="colorValue" />
        <el-color-picker v-model="colorValue" show-alpha />
      </div>
    </section>
    
    <!-- 穿梭框 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Right /></el-icon>Transfer 穿梭框
      </h2>
      <el-transfer v-model="transferValue" :data="transferData" />
    </section>
    
    <!-- 自动完成 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Finished /></el-icon>Autocomplete 自动完成
      </h2>
      <div class="max-w-lg">
        <el-autocomplete
          v-model="autocompleteValue"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          clearable
        />
      </div>
    </section>
    
    <!-- 上传 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><Upload /></el-icon>Upload 上传
      </h2>
      <el-upload
        action="#"
        list-type="picture-card"
        :auto-upload="false"
      >
        <el-icon><Plus /></el-icon>
      </el-upload>
    </section>
    
    <!-- 标签输入 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><PriceTag /></el-icon>Input Tag 标签输入框
      </h2>
      <div class="max-w-lg">
        <el-input
          v-model="tagInputValue"
          class="input-new-tag"
          placeholder="请输入标签"
          @keyup.enter="handleInputConfirm"
        />
        <div class="mt-2">
          <el-tag
            v-for="tag in tags"
            :key="tag"
            class="mx-1"
            closable
            @close="handleClose(tag)"
          >
            {{ tag }}
          </el-tag>
        </div>
      </div>
    </section>
    
    <!-- Mention 提及 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><ChatDotRound /></el-icon>Mention 提及
      </h2>
      <div class="max-w-lg">
        <el-input
          v-model="mentionValue"
          type="textarea"
          :rows="3"
          placeholder="使用 @ 提及用户，如 @张三"
        />
      </div>
    </section>
    
    <!-- 虚拟化选择器 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
        <el-icon class="mr-2"><List /></el-icon>虚拟化选择器
      </h2>
      <div class="max-w-lg">
        <el-select v-model="virtualizedValue" placeholder="虚拟化选择器">
          <el-option
            v-for="item in virtualizedOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import {
  Tickets,
  EditPen,
  Odometer,
  CircleCheck,
  Select,
  ArrowDown,
  Operation,
  Switch,
  DArrowRight,
  Clock,
  Calendar,
  Timer,
  Star,
  Brush,
  Right,
  Finished,
  Upload,
  Plus,
  PriceTag,
  ChatDotRound,
  List
} from '@element-plus/icons-vue'

// 表单数据
const formData = reactive({
  username: '',
  email: '',
  password: ''
})

// 输入框
const inputValue = ref('')
const textareaValue = ref('')

// 数字输入框
const numberValue = ref(5)

// 单选框
const radioValue = ref('1')
const radioGroupValue = ref('上海')

// 复选框
const checkboxValue = ref(true)
const checkboxValue2 = ref(false)
const checkboxGroupValue = ref(['选项A', '选项B'])
const checkboxGroupValue2 = ref(['选项A'])

// 选择器
const selectValue = ref('')
const selectMultipleValue = ref([])
const options = [
  { value: '选项1', label: '黄金糕' },
  { value: '选项2', label: '双皮奶' },
  { value: '选项3', label: '蚵仔煎' },
  { value: '选项4', label: '龙须面' },
  { value: '选项5', label: '北京烤鸭' }
]

// 级联选择器
const cascaderValue = ref([])
const cascaderOptions = [
  {
    value: 'zhinan',
    label: '指南',
    children: [
      {
        value: 'shejiyuanze',
        label: '设计原则',
        children: [
          { value: 'yizhi', label: '一致' },
          { value: 'fankui', label: '反馈' },
          { value: 'xiaolv', label: '效率' },
          { value: 'kekong', label: '可控' }
        ]
      }
    ]
  },
  {
    value: 'daohang',
    label: '导航',
    children: [
      { value: 'cexiangdaohang', label: '侧向导航' },
      { value: 'dingbudaohang', label: '顶部导航' }
    ]
  }
]

// 开关
const switchValue = ref(true)

// 滑块
const sliderValue = ref(50)
const sliderRangeValue = ref([3, 7])

// 时间选择器
const timeValue = ref('')
const timeSelectValue = ref('')

// 日期选择器
const dateValue = ref('')
const dateRangeValue = ref('')

// 日期时间选择器
const dateTimeValue = ref('')

// 评分
const rateValue = ref(3)
const rateTexts = ['极差', '失望', '一般', '满意', '惊喜']
const rateColors = ['#99A9BF', '#F7BA2A', '#FF9900']

// 颜色选择器
const colorValue = ref('#409EFF')

// 穿梭框
const transferValue = ref([])
const transferData = Array.from({ length: 15 }).map((_, index) => ({
  key: index,
  label: `备选项 ${index + 1}`,
  disabled: index % 4 === 0
}))

// 自动完成
const autocompleteValue = ref('')
const restaurants = [
  { value: '三全鲜食（北新泾店）', address: '长宁区新渔路144号' },
  { value: 'Hot honey 首尔炸鸡（仙霞路）', address: '上海市长宁区淞虹路661号' },
  { value: '新旺角茶餐厅', address: '上海市普陀区真北路988号创邑金沙谷6号楼113' },
  { value: '泷千家(天山西路店)', address: '天山西路438号' }
]
const querySearch = (queryString, cb) => {
  const results = queryString
    ? restaurants.filter(createFilter(queryString))
    : restaurants
  cb(results)
}
const createFilter = (queryString) => {
  return (restaurant) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}

// 标签输入
const tagInputValue = ref('')
const tags = ref(['标签1', '标签2', '标签3'])
const handleInputConfirm = () => {
  if (tagInputValue.value) {
    tags.value.push(tagInputValue.value)
  }
  tagInputValue.value = ''
}
const handleClose = (tag) => {
  tags.value.splice(tags.value.indexOf(tag), 1)
}

// 提及
const mentionValue = ref('')

// 虚拟化选择器
const virtualizedValue = ref('')
const virtualizedOptions = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `选项${idx + 1}`,
  label: `选项${idx + 1}`
}))
</script>
