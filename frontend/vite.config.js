import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        host: '0.0.0.0', // Listen on all network interfaces
        port: 5173,
        proxy: {
            '/api': {
                target: 'http://backend:5000',  // Use "backend" as the service name
                changeOrigin: true,
            },
        },
    },
});
