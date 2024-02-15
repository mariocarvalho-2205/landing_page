// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-router-dom': 'react-router-dom',
    },
  },
  server: {
    // Define a pasta raiz de onde os arquivos estáticos serão servidos
    root: './src',
  },
});
