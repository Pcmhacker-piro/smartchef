import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Dev: forwards /api/* to the Express backend so no CORS setup is needed locally.
export default defineConfig({
  plugins: [react()],
  server: { proxy: { '/api': process.env.VITE_PROXY_TARGET || 'http://localhost:5000' } },
});
