import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL ?? 'http://localhost:4321';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/blog/chernovik-znakomstvo-so-stihiyami/') &&
        !page.includes('/privacy/') &&
        !page.includes('/consent/') &&
        !page.includes('/offer/') &&
        !page.includes('/cart/'),
    }),
  ],
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
