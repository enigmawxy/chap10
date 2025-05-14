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
        <div
          class="w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer transition-colors"
          :class="{ 'text-orange-500': isActive, 'text-gray-400 hover:text-gray-600': !isActive }"
          @click="navigate"
        >
          <el-icon class="text-xl">
            <component :is="item.iconComponent" />
          </el-icon>
        </div>
      </router-link>
    </div>

    <!-- Settings at bottom -->
    <div class="mt-auto">
      <router-link to="/settings" custom v-slot="{ isActive, navigate }">
        <div
          class="w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer transition-colors"
          :class="{ 'text-orange-500': isActive, 'text-gray-400 hover:text-gray-600': !isActive }"
          @click="navigate"
        >
          <el-icon class="text-xl">
            <Setting />
          </el-icon>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import {
  ChatDotRound,
  Document,
  CirclePlus,
  Connection,
  Monitor,
  User,
  Setting
} from '@element-plus/icons-vue';

const navItems = [
  { iconComponent: ChatDotRound, name: 'Chat', route: '/chat' },
  { iconComponent: Document, name: 'Documents', route: '/documents' },
  { iconComponent: CirclePlus, name: 'Search', route: '/search' },
  { iconComponent: Connection, name: 'Connect', route: '/connect' },
  { iconComponent: Monitor, name: 'Monitor', route: '/monitor' },
  { iconComponent: User, name: 'Profile', route: '/profile' }
];
</script>
