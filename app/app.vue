<script setup lang="ts">
const { site } = useAppConfig()

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en-AU'
  }
})

useSeoMeta({
  ogSiteName: site.name,
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

const navItems = computed(() => [
  { label: 'Home', to: '/' },
  {
    label: 'Services',
    to: '/services',
    children: services.map(service => ({
      label: service.navLabel,
      description: service.summary,
      icon: service.icon,
      to: `/services/${service.slug}`
    }))
  },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' }
])

const footerLinks = computed(() => [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  ...services.map(service => ({ label: service.navLabel, to: `/services/${service.slug}` })),
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy policy', to: '/privacy-policy' }
])
</script>

<template>
  <UApp>
    <UHeader :to="'/'">
      <template #left>
        <NuxtLink
          to="/"
          :aria-label="`${site.name}, home`"
        >
          <AppLogo
            class="w-auto h-6 shrink-0"
            aria-hidden="true"
          />
        </NuxtLink>
      </template>

      <UNavigationMenu :items="navItems" />

      <template #right>
        <UColorModeButton />

        <UButton
          :label="site.phone.display"
          :to="site.phone.href"
          icon="i-lucide-phone"
          color="neutral"
          variant="ghost"
          class="hidden sm:inline-flex"
        />

        <UButton
          label="Get a quote"
          to="/contact"
          color="primary"
        />
      </template>

      <template #content>
        <UNavigationMenu
          :items="navItems"
          orientation="vertical"
          class="-mx-2.5"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <UFooter>
      <template #top>
        <UContainer class="py-8">
          <nav aria-label="Footer">
            <ul class="flex flex-wrap gap-x-6 gap-y-3">
              <li
                v-for="link in footerLinks"
                :key="link.to"
              >
                <ULink
                  :to="link.to"
                  class="text-sm text-muted hover:text-default"
                >
                  {{ link.label }}
                </ULink>
              </li>
            </ul>
          </nav>
        </UContainer>
      </template>

      <template #left>
        <p class="text-sm text-muted">
          © {{ new Date().getFullYear() }} {{ site.name }}. Demonstration site — not a real business.
        </p>
      </template>

      <template #right>
        <UButton
          :label="site.phone.display"
          :to="site.phone.href"
          icon="i-lucide-phone"
          color="neutral"
          variant="ghost"
          size="sm"
        />
      </template>
    </UFooter>
  </UApp>
</template>
