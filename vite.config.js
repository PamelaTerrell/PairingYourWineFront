import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'http://vinopairings.com',
  plugins: [react()],
  build: {
    outDir: 'dist',   // Explicitly set the output directory to 'dist'
    assetsDir: 'assets', // Specify the assets directory inside 'dist'
    rollupOptions: {
      input: 'index.html', // Ensure the correct entry point is used
    },
  },
})

