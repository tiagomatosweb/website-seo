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
        wrangler: { name: 'website-seo' }
      }
    }
  },

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  features: {
    inlineStyles: true
  },

  experimental: {
    payloadExtraction: false
  },

  compatibilityDate: '2026-06-30',

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
      failOnError: true,
      // Cloudflare's default asset handling 307s /services -> /services/ when the
      // file is services/index.html. Emitting services.html serves the extensionless
      // URL directly, so internal links cost no redirect hop.
      autoSubfolderIndex: false
    }
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

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    clientBundle: { scan: true }
  }
})
