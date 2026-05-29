// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://resourcepack.wiki',
  integrations: [mdx()],
  vite: {
    resolve: {
      alias: {
        '@': '/src/components'
      }
    }
  }
});