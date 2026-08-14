// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui'
  ],

  $production: {
    nitro: {
      preset: 'cloudflare_module',
      cloudflare: {
        deployConfig: true,
        wrangler: { name: 'website-seo' },
      },
    },
  },

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  features: {
    inlineStyles: true
  },

  icon: {
    clientBundle: { scan: true }
  },

  experimental: {
    payloadExtraction: false
  },

  hooks: {
    'build:manifest': (manifest) => {
      for (const entry of Object.values(manifest)) {
        entry.preload = false
        entry.prefetch = false
        entry.dynamicImports = []
      }
    }
  },

  compatibilityDate: '2026-06-30',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
