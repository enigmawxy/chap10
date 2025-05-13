
# 继续安装配置ElementPlus

## Element Plus 项目搭建

### 1. 安装 Element Plus 和图标库

依次运行以下命令安装 Element Plus 和图标库；然后安装支持自动导入的插件

```bash
npm install element-plus @element-plus/icons-vue
npm install -D unplugin-vue-components unplugin-auto-import unplugin-icons
```

### 2. 配置 Element Plus和图标 自动导入

这里我们配置了 Element Plus 和图标库的自动导入，这样在使用组件和图标时就不需要手动导入了。

用以下内容更新 `vite.config.js` 文件：

```js
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    AutoImport({
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],

      // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        ElementPlusResolver(),
        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon',
        }),
      ],

      dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
    }),

    Components({
      resolvers: [
        // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep'],
        }),
        // Auto register Element Plus components
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
      ],

      dts: path.resolve(pathSrc, 'components.d.ts'),
    }),

    Icons({
      autoInstall: true,
    }),
  ],
})

```

### 3. 修改 main.js导入图标

为了支持自动导入，我们需要在 `main.js` 中导入所有的 Element Plus 图标。

```js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// main.ts

// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
```

### 4. 修改 App.vue

在上一节的基础上，增加Element Plus组件的使用，来测试一下是否配置成功。

```vue
<template>
  <div>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <!-- Element Plus 组件示例 -->
    <el-button type="primary">按钮</el-button>
    <el-icon><Search /></el-icon>
  </div>
</template>

<script setup>
// 无需手动导入组件和图标，已通过自动导入配置
</script>
```

### 5. 启动开发服务器

```bash
npm run dev
```

## 特性

- Vue 3 组合式 API 和 `<script setup>` 语法
- Vite 用于快速开发和构建
- Tailwind CSS 用于实用优先的样式设计
- Element Plus 组件库和图标
- 自动导入 Vue 和 Vue Router API
- TypeScript 类型支持
- ESLint 集成
- 路径别名 (@/ 指向 src 目录)
- 热模块替换 (HMR)

## IDE 支持

为了获得最佳开发体验，我们推荐使用 [VSCode](https://code.visualstudio.com/) 并安装以下扩展：

- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 IDE 支持
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Tailwind CSS 自动完成和语法高亮
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - ESLint 支持

## 了解更多

- [Vue 3 文档](https://vuejs.org/)
- [Vite 文档](https://vitejs.dev/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Element Plus 文档](https://element-plus.org/zh-CN/)
- [Vue 3 Script Setup 文档](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)
- [Element Plus 最佳实践](https://github.com/sxzz/element-plus-best-practices)
