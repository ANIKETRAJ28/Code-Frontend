import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      Components: '/src/Components',
      Assets: '/src/Assets',
      Pages: '/src/Pages',
      Helpers: '/src/Helpers',
      Config: '/src/Config',
      Hooks: '/src/Hooks',
      Redux: '/src/Redux',
      Routes: '/src/Routes',
      Layout: '/src/Layout'
    }
  }
});
