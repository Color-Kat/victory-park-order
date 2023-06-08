import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/index.ts',
            ],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/'),
            '@sass': path.resolve(__dirname, './resources/sass/'),
            '@assets': path.resolve(__dirname, './resources/assets/'),
            '@pages': path.resolve(__dirname, './resources/pages/'),
            '@modules': path.resolve(__dirname, './resources/modules/'),
            '@components': path.resolve(__dirname, './resources/components/'),
            '@UI': path.resolve(__dirname, './resources/UI/'),
            '@hooks': path.resolve(__dirname, './resources/hooks/'),
            '@utils': path.resolve(__dirname, './resources/utils/')
        },
        extensions: ['.js', '.ts', '.tsx', '.jsx'],
    },

});
