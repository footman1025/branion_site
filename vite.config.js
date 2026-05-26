import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui': ['framer-motion', 'react-icons'],
        }
      }
    },
    // Use esbuild for minification (built-in, no extra dependency)
    minify: 'esbuild',
    // Optimize CSS
    cssCodeSplit: true,
    // Source maps only in dev
    sourcemap: false,
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Optimize assets - inline small assets
    assetsInlineLimit: 4096,
    // Report compressed size
    reportCompressedSize: true,
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      }
    },
    headers: {
      'Content-Security-Policy': "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob: ws: wss: http: https:"
    }
  }
});
