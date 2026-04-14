import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
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
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          about: path.resolve(__dirname, 'about.html'),
          blog: path.resolve(__dirname, 'blog.html'),
          'how-it-works': path.resolve(__dirname, 'how-it-works.html'),
          'blog-5x-capacity': path.resolve(__dirname, 'blog-5x-capacity.html'),
          'blog-ifrs-smes': path.resolve(__dirname, 'blog-ifrs-smes.html'),
          'blog-sme-market': path.resolve(__dirname, 'blog-sme-market.html'),
          'blog-tax-reforms': path.resolve(__dirname, 'blog-tax-reforms.html'),
          'cookie-policy': path.resolve(__dirname, 'cookie-policy.html'),
          opportunity: path.resolve(__dirname, 'opportunity.html'),
          outputs: path.resolve(__dirname, 'outputs.html'),
          pricing: path.resolve(__dirname, 'pricing.html'),
          'privacy-policy': path.resolve(__dirname, 'privacy-policy.html'),
          security: path.resolve(__dirname, 'security.html'),
          'terms-of-service': path.resolve(__dirname, 'terms-of-service.html'),
        },
      },
    },
  };
});
