<template>
  <div class="sidebar bg-white border-r h-screen flex flex-col items-center py-4">
    <!-- Logo/Avatar at top -->
    <div class="mb-8">
      <div class="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-white font-bold">
        T
      </div>
    </div>

    <!-- Navigation Icons -->
    <div class="flex flex-col space-y-6 items-center">
      <router-link
        v-for="(item, index) in navItems"
        :key="index"
        :to="item.route"
        custom
        v-slot="{ isActive, navigate }"
      >
        <el-tooltip
          :content="item.name"
          placement="right"
          effect="light"
          :offset="12"
        >
          <div
            class="w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer transition-colors"
            :class="{ 'text-orange-500': isActive, 'text-gray-400 hover:text-gray-600': !isActive }"
            @click="navigate"
          >
            <el-icon class="text-xl">
              <component :is="item.iconComponent" />
            </el-icon>
          </div>
        </el-tooltip>
      </router-link>
    </div>

    <!-- Settings at bottom -->
    <div class="mt-auto">
      <router-link to="/settings" custom v-slot="{ isActive, navigate }">
        <el-tooltip
          content="设置"
          placement="right"
          effect="light"
          :offset="12"
        >
          <div
            class="w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer transition-colors"
            :class="{ 'text-orange-500': isActive, 'text-gray-400 hover:text-gray-600': !isActive }"
            @click="navigate"
          >
            <el-icon class="text-xl">
              <Setting />
            </el-icon>
          </div>
        </el-tooltip>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import {
  ChatDotRound,
  Document,
  Search,
  Connection,
  Monitor,
  User,
  Setting
} from '@element-plus/icons-vue';

const navItems = [
  { iconComponent: ChatDotRound, name: '聊天', route: '/chat' },
  { iconComponent: Document, name: '文档', route: '/documents' },
  { iconComponent: Search, name: '搜索', route: '/search' },
  { iconComponent: Connection, name: '连接', route: '/connect' },
  { iconComponent: Monitor, name: '监控', route: '/monitor' },
  { iconComponent: User, name: '个人', route: '/profile' }
];
</script>
