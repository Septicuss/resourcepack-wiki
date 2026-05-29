// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// Custom plugin to remove dashes (-) caused by leading spaces in headings
function rehypeCleanHeadings() {
  // @ts-ignore
  return (tree) => {
    for (const node of tree.children) {
      if (node.tagName && /^h[1-6]$/.test(node.tagName) && node.properties?.id) {
        node.properties.id = node.properties.id
            .trim()
            .replace(/^-+|-+$/g, '')
            .replace(/-+/g, '-');
      }
    }
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://resourcepack.wiki',
  integrations: [mdx()],
  markdown: {
    rehypePlugins: [
        rehypeSlug,
        [rehypeCleanHeadings, {behavior:'prepend'}],
        [
            rehypeAutolinkHeadings,
            {
              behavior: 'append',
              properties: {
                className: ['anchor-link'],
                ariaHidden: true,
                tabIndex: -1,
              },
              content: {
                type: 'element',
                tagName: 'span',
                properties: { className: ['icon', 'icon-link'] },
                children: [],
              },
            }
        ]
    ]
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src/components'
      }
    }
  }
});