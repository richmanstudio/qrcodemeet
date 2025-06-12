// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Замените <repo-name> на фактическое имя вашего репозитория
const repoName = 'qrcodemeet';

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
});