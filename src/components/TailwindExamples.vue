<template>
  <div class="p-8 bg-gray-50">
    <h1 class="text-3xl font-bold mb-8">Tailwind CSS 自定义配置示例</h1>
    
    <!-- 自定义颜色系统 -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">自定义颜色系统</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- 主色 -->
        <div class="p-4 rounded-lg shadow">
          <h3 class="font-medium mb-3">主色 (Primary)</h3>
          <div class="flex flex-col space-y-2">
            <div class="p-4 bg-primary-light text-white rounded">bg-primary-light</div>
            <div class="p-4 bg-primary text-white rounded">bg-primary (DEFAULT)</div>
            <div class="p-4 bg-primary-dark text-white rounded">bg-primary-dark</div>
          </div>
        </div>
        
        <!-- 次要色 -->
        <div class="p-4 rounded-lg shadow">
          <h3 class="font-medium mb-3">次要色 (Secondary)</h3>
          <div class="flex flex-col space-y-2">
            <div class="p-4 bg-secondary-light text-white rounded">bg-secondary-light</div>
            <div class="p-4 bg-secondary text-white rounded">bg-secondary (DEFAULT)</div>
            <div class="p-4 bg-secondary-dark text-white rounded">bg-secondary-dark</div>
          </div>
        </div>
        
        <!-- 状态色 -->
        <div class="p-4 rounded-lg shadow">
          <h3 class="font-medium mb-3">状态色 (State)</h3>
          <div class="flex flex-col space-y-2">
            <div class="p-4 bg-success text-white rounded">bg-success</div>
            <div class="p-4 bg-warning text-white rounded">bg-warning</div>
            <div class="p-4 bg-danger text-white rounded">bg-danger</div>
            <div class="p-4 bg-info text-white rounded">bg-info</div>
          </div>
        </div>
      </div>
      
      <!-- 文本颜色示例 -->
      <div class="mt-4 p-4 bg-white rounded-lg shadow">
        <h3 class="font-medium mb-3">文本颜色</h3>
        <p class="text-primary">这是主色文本 (text-primary)</p>
        <p class="text-secondary">这是次要色文本 (text-secondary)</p>
        <p class="text-success">这是成功色文本 (text-success)</p>
        <p class="text-warning">这是警告色文本 (text-warning)</p>
        <p class="text-danger">这是危险色文本 (text-danger)</p>
      </div>
    </section>
    
    <!-- 自定义字体大小 -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">自定义字体大小</h2>
      <div class="p-4 bg-white rounded-lg shadow">
        <p class="text-xxs mb-2">这是超小号文本 (text-xxs)</p>
        <p class="text-xs mb-2">这是小号文本 (text-xs)</p>
        <p class="text-sm mb-2">这是较小文本 (text-sm)</p>
        <p class="text-base mb-2">这是基础文本 (text-base)</p>
        <p class="text-lg mb-2">这是较大文本 (text-lg)</p>
        <p class="text-xl mb-2">这是大号文本 (text-xl)</p>
        <p class="text-2xl mb-2">这是2倍大号文本 (text-2xl)</p>
        <p class="text-mega">这是超大号文本 (text-mega)</p>
      </div>
    </section>
    
    <!-- 自定义间距 -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">自定义间距</h2>
      <div class="p-4 bg-white rounded-lg shadow">
        <div class="flex flex-col space-y-4">
          <div class="bg-primary-light p-2 text-white text-center">默认间距</div>
          <div class="bg-primary-light p-2 text-white text-center ml-18">ml-18 (4.5rem = 72px)</div>
          <div class="bg-primary-light p-2 text-white text-center ml-68">ml-68 (17rem = 272px)</div>
          <div class="bg-primary-light p-2 text-white text-center w-128">w-128 (32rem = 512px)</div>
        </div>
      </div>
    </section>
    
    <!-- 自定义边框圆角 -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">自定义边框圆角</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="bg-primary p-4 text-white text-center rounded">rounded (默认)</div>
        <div class="bg-primary p-4 text-white text-center rounded-xl">rounded-xl</div>
        <div class="bg-primary p-4 text-white text-center rounded-2xl">rounded-2xl</div>
        <div class="bg-primary p-4 text-white text-center rounded-4xl">rounded-4xl</div>
      </div>
    </section>
    
    <!-- 自定义阴影 -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">自定义阴影</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow">默认阴影 (shadow)</div>
        <div class="bg-white p-6 rounded-lg shadow-soft">柔和阴影 (shadow-soft)</div>
        <div class="bg-white p-6 rounded-lg shadow-hard">强烈阴影 (shadow-hard)</div>
      </div>
    </section>
    
    <!-- 自定义动画 -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">自定义动画</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-lg shadow text-center">
          <div class="inline-block bg-primary text-white p-4 rounded-lg animate-bounce-slow">
            慢速弹跳 (animate-bounce-slow)
          </div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow text-center">
          <div class="inline-block bg-secondary text-white p-4 rounded-lg animate-pulse-fast">
            快速脉冲 (animate-pulse-fast)
          </div>
        </div>
      </div>
    </section>
    
    <!-- 自定义渐变 -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">自定义渐变</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="h-32 rounded-lg bg-gradient-primary from-primary-light via-primary to-primary-dark flex items-center justify-center text-white">
          线性渐变 (bg-gradient-primary)
        </div>
        <div class="h-32 rounded-lg bg-gradient-radial from-secondary-light via-secondary to-secondary-dark flex items-center justify-center text-white">
          径向渐变 (bg-gradient-radial)
        </div>
      </div>
    </section>
    
    <!-- 响应式设计 -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">自定义响应式断点</h2>
      <div class="p-4 bg-white rounded-lg shadow">
        <div class="hidden xs:block xs:bg-primary-light xs:p-2 xs:text-white xs:mb-2 xs:rounded">
          这只在 xs (480px) 及以上显示
        </div>
        <div class="hidden sm:block sm:bg-primary sm:p-2 sm:text-white sm:mb-2 sm:rounded">
          这只在 sm (640px) 及以上显示
        </div>
        <div class="hidden md:block md:bg-primary-dark md:p-2 md:text-white md:mb-2 md:rounded">
          这只在 md (768px) 及以上显示
        </div>
        <div class="hidden lg:block lg:bg-secondary-light lg:p-2 lg:text-white lg:mb-2 lg:rounded">
          这只在 lg (1024px) 及以上显示
        </div>
        <div class="hidden xl:block xl:bg-secondary xl:p-2 xl:text-white xl:mb-2 xl:rounded">
          这只在 xl (1280px) 及以上显示
        </div>
        <div class="hidden 2xl:block 2xl:bg-secondary-dark 2xl:p-2 2xl:text-white 2xl:mb-2 2xl:rounded">
          这只在 2xl (1536px) 及以上显示
        </div>
        <div class="hidden 3xl:block 3xl:bg-success 3xl:p-2 3xl:text-white 3xl:rounded">
          这只在 3xl (1600px) 及以上显示
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No additional logic needed
</script>
