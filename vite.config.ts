import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';
import webfontDownload from 'vite-plugin-webfont-dl';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    tsconfigPaths(),
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap',
      'https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap',
    ]),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-router-dom', 'react-dom'],
          redux: ['@reduxjs/toolkit', 'react-redux', 'redux-persist'],
          mantine: ['@emotion/react', '@mantine/core', '@mantine/form', '@mantine/hooks'],
        },
      },
    },
  },
  server: {
    open: true,
  },
});
