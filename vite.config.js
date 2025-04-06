import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  server: {
    port: 3000,
    open: true,
    host: true, // This enables listening on all network interfaces
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  // Handle environment variables properly
  define: {
    'process.env': process.env
  },
  // Configure esbuild to handle JSX in .js files
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});