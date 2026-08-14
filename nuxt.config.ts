// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/scripts',
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
    clientBundle: {
      scan: true,
      // The scanner only sees statically-written icon names. These three come from
      // `:icon="service.icon"`, so without listing them they get fetched from
      // api.iconify.design at runtime.
      icons: ['lucide:leaf', 'lucide:scissors', 'lucide:sprout']
    }
  },

  scripts: {
    registry: {
      // Placeholder measurement ID — googletagmanager still serves the real ~420KB
      // gtag.js for any id, which is what we want to measure.
      // Registry config alone is "infrastructure only" in @nuxt/scripts 1.3 — it
      // registers the script but never loads it. `trigger` is what makes it fire.
      googleAnalytics: {
        id: 'G-XXXXXXXXXX',
        trigger: 'onNuxtReady'
      }
    }
  }
})
