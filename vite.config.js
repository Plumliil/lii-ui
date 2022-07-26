import {defineConfig} from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'

export default defineConfig({
  plugins: [vue({
    include: [/\.md$/, /\.vue$/],
  }), Markdown()],
  build: {
    lib: {
      entry: './packages/index.js',
      name: 'lii-ui'
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