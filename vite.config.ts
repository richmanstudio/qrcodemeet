// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Для Project Page на GitHub Pages укажите здесь имя вашего репозитория —
  // подставьте точно то, что вы видите в URL:
  // https://<ваш-логин>.github.io/qrcodemeet/
  base: '/qrcodemeet/',

  plugins: [
    react(), // поддержка JSX/TSX и React Fast Refresh
  ],
});