import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr()
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/app/components'),
      '@pages': path.resolve(__dirname, './src/app/pages'),
      '@widgets': path.resolve(__dirname, './src/app/widgets'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@store': path.resolve(__dirname, './src/store'),
      '@assets': path.resolve(__dirname, './src/common/assets'),
      '@ui': path.resolve(__dirname, './src/common/ui'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
})
