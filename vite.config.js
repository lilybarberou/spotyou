import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            manifest: {
                name: 'SpotYou',
                short_name: 'SpotYou',
                start_url: '/',
                display: 'standalone',
                background_color: '#E85656',
                lang: 'fr',
                scope: '/',
                icons: [
                    {
                        src: 'favicon-16x16.png',
                        sizes: '16x16',
                        type: 'image/png',
                    },
                    {
                        src: 'favicon-32x32.png',
                        sizes: '32x32 24x24',
                        type: 'image/png',
                    },
                    {
                        src: 'favicon.ico',
                        sizes: '64x64',
                        type: 'image/x-icon',
                    },
                    {
                        src: 'android-chrome-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                    {
                        src: 'android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                ],
                theme_color: '#E85656',
            },
        }),
    ],
    define: {
        APP_VERSION: JSON.stringify(process.env.npm_package_version),
    },
});
