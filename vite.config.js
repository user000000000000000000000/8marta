import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/8marta/', // ВАЖНО: ТОЧНОЕ НАЗВАНИЕ ТВОЕГО РЕПОЗИТОРИЯ!
  build: {
    outDir: 'docs' // Будем собирать в папку docs (GitHub Pages любит её)
  }
})