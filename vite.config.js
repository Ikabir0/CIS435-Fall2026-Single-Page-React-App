import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base './' lets the built site work at https://<user>.github.io/<repo>/
export default defineConfig({
  plugins: [react()],
  base: './',
})
