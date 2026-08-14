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

  // icon: {
  //   clientBundle: {
  //     // Default globInclude omits .ts, so icon names living in content modules
  //     // (app/utils/services.ts) are missed and fetched from api.iconify.design
  //     // at runtime instead.
  //     scan: {
  //       globInclude: ['**/*.{vue,jsx,tsx,md,mdc,mdx,yml,yaml,ts}']
  //     }
  //   }
  // },

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
