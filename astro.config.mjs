import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  site: 'https://rominarivadeneira.com',
  integrations: [sitemap()],
  vite: {
    css: {
      postcss: {
        plugins: [
          tailwindcss({
            content: ['./src/**/*.{astro,html,js,ts}'],
            theme: {
              extend: {
                fontFamily: {
                  display: ['Space Grotesk', 'sans-serif'],
                  body: ['Inter', 'sans-serif'],
                },
              },
            },
            plugins: [],
          }),
          autoprefixer(),
        ],
      },
    },
  },
});
