import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          const path = id.replace(/\\/g, '/');
          if (!path.includes('/node_modules/')) return;

          // Keep React + router together. Do NOT split react-easy-crop into its
          // own chunk — that created a vendor↔cropper circular import and made
          // React undefined at runtime (Cannot read properties of undefined (reading 'Component')).
          if (
            path.includes('/node_modules/react/') ||
            path.includes('/node_modules/react-dom/') ||
            path.includes('/node_modules/react-router') ||
            path.includes('/node_modules/scheduler/')
          ) {
            return 'vendor';
          }
          if (path.includes('/node_modules/ethers/')) return 'ethers';
          if (path.includes('/node_modules/axios/')) return 'axios';
        },
      },
    },
    minify: 'esbuild',
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 2048,
    reportCompressedSize: true,
    target: 'es2020',
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
