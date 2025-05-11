## Tailwind CSS 速成教程（v3.x）

### 一、Tailwind CSS 核心特点

- 实用优先：通过组合原子类快速构建界面
- 响应式设计：内置移动优先的响应式断点系统
- 暗黑模式：原生支持暗黑主题切换
- 高度可定制：轻松修改默认配置
- 状态变体：支持 hover/focus/active 等交互状态

### 二、核心概念速记

实用类命名规则：

属性缩写-值（数值通常为4的倍数）

示例：mt-4 → margin-top: 1rem(16px)

响应式设计：

```html
<div class="text-sm md:text-base lg:text-lg">
  响应式文字
</div>
```

暗黑模式：

```html
<div class="bg-white dark:bg-gray-800">
  自动切换背景色
</div>
```

状态变体：

```html
<button class="bg-blue-500 hover:bg-blue-700 focus:ring-2">
  交互按钮
</button>
```

### 三、常用工具类速查

布局：

```html
flex / grid / block / inline-block
justify-center / items-center
gap-4 / space-x-4
```

间距：

```html
p-4 / px-4 / py-4

m-auto / mt-8

w-full / w-1/2 / max-w-2xl
```

颜色：

```html
bg-red-500 / bg-opacity-50

text-white / text-gray-700

border-2 border-blue-400
```

字体：

```html
text-xl / text-2xl

font-bold / font-medium

uppercase / italic
```

特效：

```html
rounded-lg / shadow-xl

transition duration-300

transform rotate-45
```

### 四、自定义配置

修改 tailwind.config.js：

```javascript
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
      },
      screens: {
        '3xl': '1600px',
      }
    },
  },
  plugins: [],
}
```

### 五、实战示例

导航栏组件：

```html
<nav class="bg-white shadow-lg">
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
```

卡片组件：

```html
<div class="max-w-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
  <img class="w-full h-48 object-cover" src="image.jpg">
  <div class="px-6 py-4">
    <h3 class="text-xl font-bold mb-2">卡片标题</h3>
    <p class="text-gray-600 text-base">
      这是一个使用 Tailwind 构建的卡片组件示例...
    </p>
  </div>
</div>
```

### 六、推荐资源

官方文档：`https://www.tailwindcss.cn`

官方插件：@tailwindcss/forms, @tailwindcss/typography

可视化工具：Tailwind Play (官方在线编辑器)

图标库：Heroicons (官方图标集)

UI 库：Headless UI (官方无样式组件库)

## 总结

Tailwind 的核心在于通过组合实用类快速构建界面，建议：

多使用官方文档搜索功能

优先使用默认设计系统

逐步扩展自定义配置

结合开发者工具实时调试

掌握常用类组合模式（卡片、按钮、表单等）
