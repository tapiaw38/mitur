import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/_shared.scss";
          @import "@/assets/scss/_global.scss";
        `,
      }
    }
  },
})
