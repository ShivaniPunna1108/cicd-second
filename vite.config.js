import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/cicd-second/',   // ✅ Must match repo name exactly
  plugins: [react()],
})
