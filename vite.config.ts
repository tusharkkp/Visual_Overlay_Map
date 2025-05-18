import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base:'/Visual_Overlay_Map',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
