import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or your framework

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // listen on all network interfaces
    port: 5173, // optional
  },
})
