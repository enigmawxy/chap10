<template>
  <div class="bg-gray-100 min-h-screen p-6">
    <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 class="text-2xl font-bold mb-6 text-gray-800">Element Plus 表单组件示例</h1>

      <el-form
        ref="formRef"
        :model="formData"
        :rules="rules"
        label-position="top"
        label-width="120px"
        status-icon
        require-asterisk-position="right"
        scroll-to-error
      >
        <!-- 基础输入框 -->
        <h2 class="text-xl font-semibold mb-4 mt-6 text-gray-700 border-b pb-2">基础输入组件</h2>

        <!-- 文本输入框 -->
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="formData.username"
            placeholder="请输入用户名"
            clearable
            :prefix-icon="User"
          />
        </el-form-item>

        <!-- 密码输入框 -->
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="formData.password"
            type="password"
            placeholder="请输入密码"
            show-password
            :prefix-icon="Lock"
          />
        </el-form-item>

        <!-- 文本域 -->
        <el-form-item label="个人简介" prop="description">
          <el-input
            v-model="formData.description"
            type="textarea"
            :rows="3"
            placeholder="请输入个人简介"
            maxlength="200"
            show-word-limit
          />
        </el-form-item>

        <!-- 数字输入框 -->
        <el-form-item label="年龄" prop="age">
          <el-input-number
            v-model="formData.age"
            :min="1"
            :max="120"
            controls-position="right"
          />
        </el-form-item>

        <!-- 选择器组件 -->
        <h2 class="text-xl font-semibold mb-4 mt-6 text-gray-700 border-b pb-2">选择器组件</h2>

        <!-- 单选框 -->
        <el-form-item label="性别" prop="gender">
          <el-radio-group v-model="formData.gender">
            <el-radio label="male">男</el-radio>
            <el-radio label="female">女</el-radio>
            <el-radio label="other">其他</el-radio>
          </el-radio-group>
        </el-form-item>

        <!-- 复选框 -->
        <el-form-item label="兴趣爱好" prop="hobbies">
          <el-checkbox-group v-model="formData.hobbies">
            <el-checkbox label="reading">阅读</el-checkbox>
            <el-checkbox label="sports">运动</el-checkbox>
            <el-checkbox label="music">音乐</el-checkbox>
            <el-checkbox label="travel">旅行</el-checkbox>
            <el-checkbox label="coding">编程</el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <!-- 下拉选择器 -->
        <el-form-item label="职业" prop="occupation">
          <el-select
            v-model="formData.occupation"
            placeholder="请选择职业"
            clearable
            style="width: 100%"
          >
            <el-option
              v-for="item in occupationOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

        <!-- 级联选择器 -->
        <el-form-item label="所在地区" prop="location">
          <el-cascader
            v-model="formData.location"
            :options="locationOptions"
            placeholder="请选择所在地区"
            clearable
            style="width: 100%"
          />
        </el-form-item>

        <!-- 开关 -->
        <el-form-item label="接收通知" prop="notifications">
          <el-switch
            v-model="formData.notifications"
            active-text="开启"
            inactive-text="关闭"
          />
        </el-form-item>

        <!-- 滑块 -->
        <el-form-item label="满意度" prop="satisfaction">
          <el-slider
            v-model="formData.satisfaction"
            :min="0"
            :max="10"
            :step="1"
            show-stops
            show-input
          />
        </el-form-item>

        <!-- 时间日期组件 -->
        <h2 class="text-xl font-semibold mb-4 mt-6 text-gray-700 border-b pb-2">时间日期组件</h2>

        <!-- 日期选择器 -->
        <el-form-item label="出生日期" prop="birthdate">
          <el-date-picker
            v-model="formData.birthdate"
            type="date"
            placeholder="选择日期"
            style="width: 100%"
            value-format="YYYY-MM-DD"
          />
        </el-form-item>

        <!-- 时间选择器 -->
        <el-form-item label="预约时间" prop="appointmentTime">
          <el-time-picker
            v-model="formData.appointmentTime"
            placeholder="选择时间"
            style="width: 100%"
          />
        </el-form-item>

        <!-- 日期时间范围 -->
        <el-form-item label="休假时间" prop="vacationPeriod">
          <el-date-picker
            v-model="formData.vacationPeriod"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            style="width: 100%"
          />
        </el-form-item>

        <!-- 上传组件 -->
        <h2 class="text-xl font-semibold mb-4 mt-6 text-gray-700 border-b pb-2">上传组件</h2>

        <!-- 文件上传 -->
        <el-form-item label="简历上传" prop="resume">
          <el-upload
            action="#"
            :auto-upload="false"
            :on-change="handleFileChange"
            :limit="1"
          >
            <template #trigger>
              <el-button type="primary">选择文件</el-button>
            </template>
            <template #tip>
              <div class="text-xs text-gray-500 mt-1">支持 PDF、Word 格式，不超过 5MB</div>
            </template>
          </el-upload>
        </el-form-item>

        <!-- 头像上传 -->
        <el-form-item label="头像上传" prop="avatar">
          <el-upload
            class="avatar-uploader"
            action="#"
            :auto-upload="false"
            :show-file-list="false"
            :on-change="handleAvatarChange"
          >
            <img v-if="avatarUrl" :src="avatarUrl" class="w-24 h-24 rounded-full object-cover" />
            <el-icon v-else class="avatar-uploader-icon">
              <Plus />
            </el-icon>
          </el-upload>
        </el-form-item>

        <!-- 颜色选择器 -->
        <el-form-item label="喜欢的颜色" prop="favoriteColor">
          <el-color-picker v-model="formData.favoriteColor" show-alpha />
        </el-form-item>

        <!-- 评分组件 -->
        <el-form-item label="评分" prop="rating">
          <el-rate
            v-model="formData.rating"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
            show-text
            :texts="['很差', '较差', '一般', '较好', '很好']"
          />
        </el-form-item>

        <!-- 表单操作按钮 -->
        <el-form-item class="mt-8">
          <el-button type="primary" @click="submitForm(formRef)">提交</el-button>
          <el-button @click="resetForm(formRef)">重置</el-button>
        </el-form-item>
      </el-form>

      <!-- 表单数据预览 -->
      <div v-if="showPreview" class="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">表单数据预览</h3>
        <pre class="text-sm">{{ JSON.stringify(formData, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { User, Lock, Plus } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';

const formRef = ref(null);
const avatarUrl = ref('');
const showPreview = ref(false);

// 表单数据
const formData = reactive({
  username: '',
  password: '',
  description: '',
  age: 18,
  gender: '',
  hobbies: [],
  occupation: '',
  location: [],
  notifications: true,
  satisfaction: 5,
  birthdate: '',
  appointmentTime: '',
  vacationPeriod: [],
  resume: null,
  avatar: null,
  favoriteColor: '',
  rating: 3
});

// 表单验证规则
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能少于 6 个字符', trigger: 'blur' }
  ],
  gender: [
    { required: true, message: '请选择性别', trigger: 'change' }
  ],
  occupation: [
    { required: true, message: '请选择职业', trigger: 'change' }
  ],
  birthdate: [
    { required: true, message: '请选择出生日期', trigger: 'change' }
  ]
};

// 职业选项
const occupationOptions = [
  { value: 'developer', label: '开发工程师' },
  { value: 'designer', label: '设计师' },
  { value: 'product', label: '产品经理' },
  { value: 'manager', label: '项目经理' },
  { value: 'marketing', label: '市场营销' },
  { value: 'other', label: '其他' }
];

// 地区选项
const locationOptions = [
  {
    value: 'beijing',
    label: '北京',
    children: [
      { value: 'haidian', label: '海淀区' },
      { value: 'chaoyang', label: '朝阳区' },
      { value: 'dongcheng', label: '东城区' }
    ]
  },
  {
    value: 'shanghai',
    label: '上海',
    children: [
      { value: 'pudong', label: '浦东新区' },
      { value: 'huangpu', label: '黄浦区' },
      { value: 'xuhui', label: '徐汇区' }
    ]
  },
  {
    value: 'guangzhou',
    label: '广州',
    children: [
      { value: 'tianhe', label: '天河区' },
      { value: 'yuexiu', label: '越秀区' },
      { value: 'haizhu', label: '海珠区' }
    ]
  }
];

// 处理文件上传
const handleFileChange = (file) => {
  formData.resume = file.raw;
};

// 处理头像上传
const handleAvatarChange = (file) => {
  formData.avatar = file.raw;
  avatarUrl.value = URL.createObjectURL(file.raw);
};

// 提交表单
const submitForm = async (formEl) => {
  if (!formEl) return;

  await formEl.validate((valid, fields) => {
    if (valid) {
      ElMessage.success('表单验证通过');
      showPreview.value = true;
      // 在实际应用中，这里会发送数据到服务器
      console.log('表单数据:', formData);
    } else {
      ElMessage.error('表单验证失败，请检查输入');
      console.log('验证失败字段:', fields);
    }
  });
};

// 重置表单
const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
  avatarUrl.value = '';
  showPreview.value = false;
  ElMessage.info('表单已重置');
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 96px;
  height: 96px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #f5f7fa;
}
</style>
