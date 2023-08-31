import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import { env } from 'node:process';

const isDev = env.NODE_ENV === 'development';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/UberTaxi/", 
  // base: env.PUBLIC_URL, 
  css: {
    devSourcemap: true,
    modules: {
      generateScopedName: isDev ? '[name]_[local]__[hash:base64:5]' : '[hash:base64:4]'
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
