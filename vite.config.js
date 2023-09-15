import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        future: resolve(__dirname, 'future/index.html'),
        past: resolve(__dirname, 'past/index.html'),
        present: resolve(__dirname, 'present/index.html'),
        quiz: resolve(__dirname, 'quiz/index.html'),
      },
    },
  },
})