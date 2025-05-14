<template>
  <div class="min-h-screen bg-gray-50">
    <el-container class="h-screen">
      <!-- Sidebar -->
      <el-aside width="auto" class="p-0 border-r">
        <SideBar />
      </el-aside>

      <!-- Main Content -->
      <el-container>
        <el-header v-if="!isSearchRoute" class="bg-white shadow-sm p-0">
          <nav class="h-16">
            <div class="max-w-6xl mx-auto px-4">
              <div class="flex justify-between items-center h-16">
                <div class="flex space-x-8">
                  <a href="#" class="text-gray-700 hover:text-blue-500">首页</a>
                  <a href="#" class="text-gray-700 hover:text-blue-500">产品</a>
                </div>
                <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  登录
                </button>
              </div>
            </div>
          </nav>
        </el-header>

        <el-main class="p-0">
          <!-- Use router-view to display the current route component -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import SideBar from './components/SideBar.vue';

const route = useRoute();

// Check if the current route is the search route
const isSearchRoute = computed(() => {
  return route.path === '/search';
});
</script>