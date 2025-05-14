/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      // 自定义颜色系统
      colors: {
        primary: {
          light: '#93c5fd', // blue-300
          DEFAULT: '#3b82f6', // blue-500
          dark: '#1d4ed8', // blue-700
        },
        secondary: {
          light: '#a5b4fc', // indigo-300
          DEFAULT: '#6366f1', // indigo-500
          dark: '#4338ca', // indigo-700
        },
        success: '#10b981', // emerald-500
        warning: '#f59e0b', // amber-500
        danger: '#ef4444', // red-500
        info: '#3b82f6', // blue-500
      },

      // 自定义断点
      screens: {
        'xs': '480px',
        '3xl': '1600px',
      },

      // 自定义字体大小
      fontSize: {
        'xxs': ['0.625rem', { lineHeight: '1rem' }],
        'mega': ['3.5rem', { lineHeight: '1' }],
      },

      // 自定义间距
      spacing: {
        '18': '4.5rem',
        '68': '17rem',
        '128': '32rem',
      },

      // 自定义边框圆角
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '4xl': '2rem',
      },

      // 自定义阴影
      boxShadow: {
        'soft': '0 4px 20px 0 rgba(0, 0, 0, 0.05)',
        'hard': '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
      },

      // 自定义动画
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },

      // 自定义渐变
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
    },
  },
  // 自定义变体
  variants: {
    extend: {
      backgroundColor: ['active', 'disabled'],
      opacity: ['disabled'],
    }
  },
  plugins: [],
}
