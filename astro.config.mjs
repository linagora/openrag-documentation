// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'Docs',
          customCss:[
            './src/styles/global.css',
            './src/styles/custom.css',
            '@fontsource-variable/space-grotesk',
          ],
          logo: {
              src: './src/assets/OpenRAG-title.svg',  
          },
          editLink:{
              baseUrl: 'https://github.com/linagora/openrag-documentation/edit/main',
          },
          tableOfContents:{
            minHeadingLevel:2,
            maxHeadingLevel:4,
          },
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/linagora/openrag' }],
          sidebar: [
              {
                  label: 'Home',
                  slug: 'index'
              },
              {
                  label: 'Getting Started',
                  autogenerate: { directory: 'getting_started' }
              },
              {
                  label: 'Installation',
                  autogenerate: { directory: 'installation' }
              },
              {
                  label: 'Docs',
                  autogenerate: { directory: 'documentation' }
              },
              {
                  label: 'Support and Contribute',
                  slug: 'support-and-contribute'
              },
              {
                  label: 'License',
                  slug: 'license'
              }
          ],
      }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});