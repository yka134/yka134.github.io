// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@styles': '/src/styles', // Add an alias for the styles folder
    },
  },
});
