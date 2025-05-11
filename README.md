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

### 6. 修改App.vue

```vue
<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</template>
```

### 7. 启动开发服务器

```bash
npm run dev
```

## 特性

- Vue 3 组合式 API 和 `<script setup>` 语法
- Vite 用于快速开发和构建
- Tailwind CSS 用于实用优先的样式设计
- 热模块替换 (HMR)
- TypeScript 支持（可选）

## IDE 支持

为了获得最佳开发体验，我们推荐使用 [VSCode](https://code.visualstudio.com/) 并安装以下扩展：

- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 IDE 支持
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Tailwind CSS 自动完成和语法高亮

## 了解更多

- [Vue 3 文档](https://vuejs.org/)
- [Vite 文档](https://vitejs.dev/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Vue 3 Script Setup 文档](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)
