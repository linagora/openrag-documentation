// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: '🚧 OpenRAG Docs 🚧',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/linagora/openrag' }],
            sidebar: [
                {
                    label: 'Home',
                    slug: 'index'
                },
                {
                    label: 'Starter Blocks',
                    autogenerate: { directory: 'starter_blocks' }
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
});