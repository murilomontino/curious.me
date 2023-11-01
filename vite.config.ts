import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
require('dotenv').config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),],
  cacheDir: '.vite',
  build: {
    outDir: 'build',
  },
  root: process.cwd(),
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
        ".ts": "tsx",
      },
    },
  },
  envPrefix: 'REACT_',
})
