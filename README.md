# Vue 3 + Vite + Tailwind CSS

本项目使用 Vue 3、Vite 和 Tailwind CSS 构建。它采用 Vue 3 的 `<script setup>` 单文件组件语法，使组件代码更加简洁。

## 项目设置

### 1. 创建 Vue 项目

```bash
npm create vite@latest my-project -- --template vue
cd my-project
```

### 2. 安装依赖

```bash
npm install
```

### 3. 安装 Tailwind CSS 及其依赖

注意：使用以下命令先查看 Tailwind版本

```bash
npm view tailwind versions
```

请使用3.1.0版本以下的tailwindcss版本，否则npx可能会出现问题。

```bash
npm install -D tailwindcss@3.1.0 postcss autoprefixer
npx tailwindcss init -p
```

### 4. 配置 Tailwind CSS

更新 `tailwind.config.js` 文件：

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 5. 添加 Tailwind 指令

在 `./src/style.css` 中添加以下内容：

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 6. 安装 Element Plus 和图标库

```bash
npm install element-plus @element-plus/icons-vue
npm install -D unplugin-vue-components unplugin-auto-import unplugin-icons
```

### 7. 配置 Element Plus和图标 自动导入

更新 `vite.config.js` 文件：

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

### 8. 配置 ESLint（可选）

如果你使用 ESLint，需要安装以下依赖：

```bash
npm install -D eslint eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### 9. 修改 main.js导入图标

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

### 10. 修改 App.vue

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

### 10. 启动开发服务器

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
