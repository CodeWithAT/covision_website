import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor-react'
          }
          if (id.includes('node_modules/framer-motion/')) {
            return 'vendor-framer'
          }
          if (id.includes('node_modules/lucide-react/')) {
            return 'vendor-lucide'
          }
          if (id.includes('node_modules/d3/') || id.includes('node_modules/topojson-client/')) {
            return 'vendor-d3-geo'
          }
          if (id.includes('node_modules/canvas-confetti/') || id.includes('node_modules/lenis/')) {
            return 'vendor-utils'
          }
        },
      },
    },
  },
})
