// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react()],
  output: 'static',
  site: 'https://your-domain.com', // 替换为你的域名
  build: {
    assets: 'assets'
  }
});