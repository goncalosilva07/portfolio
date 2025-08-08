import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    {
      name: 'create-404',
      closeBundle() {
        const distDir = resolve(__dirname, 'dist')
        copyFileSync(
          resolve(distDir, 'index.html'),
          resolve(distDir, '404.html')
        )
        console.log('📄 404.html criado com sucesso!')
      }
    }
  ],
  base: '/portfolio/',
})
