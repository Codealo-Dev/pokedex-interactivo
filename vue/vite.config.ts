import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path';
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
  plugins: [
    vue(),
    Components({ 
      dirs: ['src/components', 'src/layouts'],
      extensions: ['vue'],
      deep: true,
    }),
  ]
})
