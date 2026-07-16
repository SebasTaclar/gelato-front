import { fileURLToPath, URL } from 'node:url'

import { defineConfig, type PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const plugins: PluginOption[] = [vue()]

  // Importante: no incluir devtools en producción.
  if (mode === 'development') {
    plugins.push(vueDevTools())
  }

  return {
    plugins,
    server: {
      port: 5173,
      strictPort: true,
      host: true,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.prod.js',
      },
    },
  }
})
