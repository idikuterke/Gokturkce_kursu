import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const vendorChunks = {
  'react-vendor': ['react', 'react-dom'],
  'charts': ['recharts'],
  'pdf': ['pdf-lib'],
  'ots': ['opentype.js']
};

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          const mod = id.split('node_modules/')[1] ?? id;
          for (const [chunk, libs] of Object.entries(vendorChunks)) {
            if (libs.some(lib => mod.startsWith(lib + '/') || mod.startsWith(lib))) return chunk;
          }
          return undefined;
        }
      }
    },
    chunkSizeWarningLimit: 500
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true
  }
});
