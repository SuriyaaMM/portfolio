import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: null,
      precompress: false,
      strict: false  // <- allows dynamic route fallback
    }),
    paths: {
      base: '/portfolio'  // <- REQUIRED for GitHub Pages under a repo
    }
  },
  preprocess: vitePreprocess()
};
