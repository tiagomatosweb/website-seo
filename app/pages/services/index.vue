<script setup lang="ts">
const { site } = useAppConfig()

useSeoMeta({
  title: `Services — ${site.name}`,
  description: 'Lawn mowing, garden maintenance and weed control on a regular schedule. Fixed prices, no lock-in contract, across the inner suburbs.',
  ogTitle: `Services — ${site.name}`,
  ogDescription: 'Lawn mowing, garden maintenance and weed control on a regular schedule. Fixed prices, no lock-in contract.'
})

const standards = [
  {
    icon: 'i-lucide-badge-check',
    title: 'Fixed price, quoted up front',
    description: 'You approve a number before we start. It does not move unless the scope does, and we ask first.'
  },
  {
    icon: 'i-lucide-calendar-check',
    title: 'No lock-in contract',
    description: 'Regular visits are a schedule, not a commitment. Pause over winter or stop entirely with a week of notice.'
  },
  {
    icon: 'i-lucide-shield-check',
    title: 'Fully insured',
    description: 'Public liability cover on every job. Certificate available on request, and we are happy to send it before the first visit.'
  },
  {
    icon: 'i-lucide-message-square',
    title: 'A real person answers',
    description: 'Calls go to the person who does the work, not a call centre. If we cannot pick up, we call back the same day.'
  }
]
</script>

<template>
  <div>
    <UPageHero
      headline="Services"
      title="Three services, done properly"
      description="Most gardens need some combination of mowing, bed maintenance and weed control. We do all three, on a schedule that matches how your site actually grows, at a price agreed before we start."
      :links="[{
        label: 'Get a quote',
        to: '/contact',
        trailingIcon: 'i-lucide-arrow-right',
        size: 'xl'
      }, {
        label: site.phone.display,
        to: site.phone.href,
        icon: 'i-lucide-phone',
        size: 'xl',
        color: 'neutral',
        variant: 'subtle'
      }]"
    />

    <UPageSection
      title="What we do"
      description="Each service stands on its own. Combined on the same visit, they cost less than booking them separately."
    >
      <UPageGrid>
        <UPageCard
          v-for="service in services"
          :key="service.slug"
          :icon="service.icon"
          :title="service.title"
          :description="service.summary"
          :to="`/services/${service.slug}`"
          variant="subtle"
        >
          <template #footer>
            <p class="text-sm font-medium text-primary">
              {{ service.price }}
            </p>
          </template>
        </UPageCard>
      </UPageGrid>
    </UPageSection>

    <UPageSection
      headline="How we work"
      title="The same standards on every job"
      description="Small operations live or die on whether they turn up and whether the price holds. These are the commitments we make in writing."
      :features="standards"
      :ui="{ root: 'bg-elevated/40' }"
    />

    <UPageSection
      title="Where we work"
      :description="`We cover the inner suburbs and keep the run tight, which is how we hold the price down. If you are just outside the list, call and ask — ${site.hours}.`"
    >
      <div class="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
        <UBadge
          v-for="area in site.areas"
          :key="area"
          :label="area"
          color="neutral"
          variant="subtle"
          size="lg"
        />
      </div>
    </UPageSection>

    <UPageSection>
      <UPageCTA
        title="Not sure which service you need?"
        description="Send a photo and the address. We will tell you what the site actually needs, even when that is less than you expected."
        variant="subtle"
        :links="[{
          label: 'Request a quote',
          to: '/contact',
          trailingIcon: 'i-lucide-arrow-right',
          color: 'primary'
        }, {
          label: site.phone.display,
          to: site.phone.href,
          icon: 'i-lucide-phone',
          color: 'neutral',
          variant: 'outline'
        }]"
      />
    </UPageSection>
  </div>
</template>
