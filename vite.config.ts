import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.tsx'],
      ssr: 'resources/js/ssr.tsx',
      refresh: !isProd,
    }),
    react({
      jsxRuntime: 'automatic',
    }),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
      '@': resolve(__dirname, 'resources/js'),
      css: resolve(__dirname, 'resources/css'),
    },
  },

  esbuild: isProd
    ? { jsx: 'automatic', drop: ['console', 'debugger'], legalComments: 'none' }
    : { jsx: 'automatic' },

  build: {
    target: 'es2020',
    minify: 'esbuild',
    cssMinify: true,
    cssCodeSplit: true,
    assetsInlineLimit: 0,
    modulePreload: { polyfill: false },
    sourcemap: false,
    chunkSizeWarningLimit: 900,

    rollupOptions: {
      treeshake: true,
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('@tanstack')) return 'vendor-query';
            if (id.includes('lucide-react')) return 'vendor-icons';
            if (id.includes('motion')) return 'vendor-motion';
          }
          if (id.includes('/components/ui/')) return 'ui-kit';
        },
      },
    },
  },

  optimizeDeps: {
    include: ['@tanstack/react-query', '@inertiajs/react', 'lucide-react'],
    exclude: ['ziggy-js'],
  },
});
