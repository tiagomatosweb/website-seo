<script setup lang="ts">
const props = defineProps<{ service: Service }>()

const { site } = useAppConfig()

useSeoMeta({
  title: `${props.service.title} — ${site.name}`,
  description: props.service.summary,
  ogTitle: `${props.service.title} — ${site.name}`,
  ogDescription: props.service.summary
})

const breadcrumb = computed(() => [
  { label: 'Home', to: '/', icon: 'i-lucide-house' },
  { label: 'Services', to: '/services' },
  { label: props.service.title, to: `/services/${props.service.slug}` }
])

const others = computed(() => services.filter(item => item.slug !== props.service.slug))
</script>

<template>
  <div>
    <UPageHero
      :headline="service.price"
      :title="service.title"
      :description="service.description"
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
    >
      <template #top>
        <UBreadcrumb
          :items="breadcrumb"
          class="mb-8"
        />
      </template>
    </UPageHero>

    <UPageSection
      title="What every visit includes"
      :description="`No line-item surprises. This is the standard scope for ${service.title.toLowerCase()}, and it is what you are quoted on.`"
    >
      <UPageGrid>
        <UPageCard
          v-for="item in service.includes"
          :key="item"
          icon="i-lucide-check"
          :title="item"
          variant="subtle"
        />
      </UPageGrid>
    </UPageSection>

    <UPageSection
      headline="How it works"
      title="Four steps, no guesswork"
      description="The same sequence on every job, so you always know what happens next and what it costs."
      :ui="{ root: 'bg-elevated/40' }"
    >
      <UPageGrid>
        <UPageCard
          v-for="(step, index) in service.process"
          :key="step.title"
          :title="step.title"
          :description="step.description"
          variant="outline"
        >
          <template #leading>
            <div class="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
              {{ index + 1 }}
            </div>
          </template>
        </UPageCard>
      </UPageGrid>
    </UPageSection>

    <UPageSection
      headline="Questions"
      title="Common questions about this service"
      description="The things people ask before booking. If yours is not here, call and ask."
    >
      <UAccordion
        :items="service.faqs"
        class="max-w-3xl mx-auto w-full"
      />
    </UPageSection>

    <UPageSection
      title="Other services"
      description="Most clients combine two or more. Bundled visits cost less than booking each separately."
    >
      <UPageGrid>
        <UPageCard
          v-for="item in others"
          :key="item.slug"
          :icon="item.icon"
          :title="item.title"
          :description="item.summary"
          :to="`/services/${item.slug}`"
          variant="subtle"
        />
      </UPageGrid>
    </UPageSection>

    <UPageSection>
      <UPageCTA
        :title="`Get a quote for ${service.title.toLowerCase()}`"
        :description="`Tell us the address and roughly what you are after. We will come back with a fixed price, usually the same day. ${site.hours}.`"
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
