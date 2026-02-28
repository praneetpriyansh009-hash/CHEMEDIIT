import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    open: '/chemediit_complete.html'
  },
  build: {
    rollupOptions: {
      input: {
        main: './chemediit_complete.html'
      }
    }
  }
})
