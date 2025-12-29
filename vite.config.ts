import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), legacy()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // 代码压缩和混淆
    minify: 'terser',
    terserOptions: {},
    // 按文件类型分类打包
    rollupOptions: {
      output: {
        // 静态资源分类
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        // 代码块分类
        chunkFileNames: 'js/[name]-[hash].js',
        // 入口文件
        entryFileNames: 'js/[name]-[hash].js',
      },
    },
  },
})
