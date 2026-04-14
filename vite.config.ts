import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      rollupOptions: {
        input: {
          index: path.resolve(__dirname, 'index.html'),
          about: path.resolve(__dirname, 'about.html'),
          blog: path.resolve(__dirname, 'blog.html'),
          blog5xCapacity: path.resolve(__dirname, 'blog-5x-capacity.html'),
          blogIfrsSmes: path.resolve(__dirname, 'blog-ifrs-smes.html'),
          blogSmeMarket: path.resolve(__dirname, 'blog-sme-market.html'),
          blogTaxReforms: path.resolve(__dirname, 'blog-tax-reforms.html'),
          cookiePolicy: path.resolve(__dirname, 'cookie-policy.html'),
          howItWorks: path.resolve(__dirname, 'how-it-works.html'),
          opportunity: path.resolve(__dirname, 'opportunity.html'),
          outputs: path.resolve(__dirname, 'outputs.html'),
          pricing: path.resolve(__dirname, 'pricing.html'),
          privacyPolicy: path.resolve(__dirname, 'privacy-policy.html'),
          security: path.resolve(__dirname, 'security.html'),
          termsOfService: path.resolve(__dirname, 'terms-of-service.html'),
        },
      },
    },
  };
});
