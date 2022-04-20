import {defineConfig} from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    include: [/\.md$/, /\.vue$/],
  }), Markdown()],
  build: {
    lib: {
      entry: './packages/index.js',
      name: 'lii-baseui'
    },
    rollupOptions:{
      external:['vue'],
      output:{
        globals:{
          vue:'Vue'
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${path.resolve(__dirname, 'src/assets/styles/base.less')}";`
      }
    }
  }
})