import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Project is served from https://rishitha0108.github.io/My-Portfolio/
  base: '/My-Portfolio/',
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 8123,
  },
});
