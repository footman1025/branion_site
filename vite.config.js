import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (id.includes('react-dom') || id.includes('/react/') || id.includes('react-router')) {
            return 'vendor';
          }
          if (id.includes('ethers')) return 'ethers';
          if (id.includes('axios')) return 'axios';
          if (id.includes('react-easy-crop')) return 'cropper';
          if (id.includes('framer-motion') || id.includes('react-icons')) return 'ui';
        },
      },
    },
    minify: 'esbuild',
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    // Prefer separate requests over large base64 in JS for images
    assetsInlineLimit: 2048,
    reportCompressedSize: true,
    target: 'es2020',
    modulePreload: { polyfill: false },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
    headers: {
      'Content-Security-Policy': "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob: ws: wss: http: https:",
    },
  },
});
