// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import netliify from '@astrojs/netlify';


// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [
            tailwindcss(),
        ]
    },
    site: 'https://blogpageastro.netlify.app',
    base: '/',
    adapter: netliify(),
});
