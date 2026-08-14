<script setup lang="ts">
const { site } = useAppConfig()

useSeoMeta({
  title: `${site.name} — ${site.tagline}`,
  description: 'Lawn mowing, garden maintenance and weed control across the inner suburbs. Fixed prices quoted up front, no lock-in contract, and the person who quotes the job is the person who does it.',
  ogTitle: `${site.name} — ${site.tagline}`,
  ogDescription: 'Lawn mowing, garden maintenance and weed control across the inner suburbs. Fixed prices, no lock-in contract.'
})

const reasons = [
  {
    icon: 'i-lucide-receipt',
    title: 'The quote is the price',
    description: 'You approve a fixed number before we start. If the scope changes we ask first — there is no variation that appears on the invoice unannounced.'
  },
  {
    icon: 'i-lucide-calendar-check',
    title: 'No lock-in contract',
    description: 'A regular visit is a schedule, not a subscription. Pause it over winter, change the frequency, or stop entirely with a week of notice.'
  },
  {
    icon: 'i-lucide-user-check',
    title: 'The same two people',
    description: 'Not a rotating roster of subcontractors. You get the people who quoted the job, who know where the irrigation heads are.'
  },
  {
    icon: 'i-lucide-shield-check',
    title: 'Insured and accredited',
    description: 'Public liability cover on every job and current chemical handling accreditation for the weed work. Certificates on request.'
  },
  {
    icon: 'i-lucide-camera',
    title: 'Photos after every visit',
    description: 'Most clients are at work when we come. A photo after each visit means you can see the result without having to be there.'
  },
  {
    icon: 'i-lucide-message-circle',
    title: 'Someone answers the phone',
    description: 'Calls go to the person holding the mower. If we cannot pick up on the day, we call back that evening.'
  }
]

const steps = [
  { title: 'Tell us the address', description: 'Call, or send the form with a photo. Enough detail to understand the size of the job.' },
  { title: 'Get a fixed price', description: 'Usually the same day. For anything unusual we come and look first, at no charge.' },
  { title: 'Pick a schedule', description: 'Fortnightly through the growing season suits most properties. You choose the cadence.' },
  { title: 'We turn up', description: 'On the agreed day. If weather moves us, you hear about it that morning.' }
]

const testimonials = [
  {
    quote: 'Third mowing service in four years and the first one where I have not had to chase anyone. The invoice has matched the quote every single time.',
    name: 'Helena R.',
    detail: 'Marrickville — fortnightly mowing'
  },
  {
    quote: 'They told me the lawn did not need the treatment I had asked for and that it needed watering differently instead. That cost them a sale and won them a customer.',
    name: 'Tom A.',
    detail: 'Ashfield — lawn care and weed control'
  },
  {
    quote: 'The garden had been neglected for two years. Priya sequenced the work over three visits so I could spread the cost, which nobody else offered to do.',
    name: 'Wei L.',
    detail: 'Leichhardt — garden restoration'
  }
]

const faqs = [
  { label: 'How quickly can you start?', content: 'Usually within two days for mowing, and within a week for garden maintenance where we need to look at the site first. Spring is the exception — from September the run fills up and it can stretch to two weeks.' },
  { label: 'Do you require a contract?', content: 'No. Regular clients are on a schedule that either of us can change with a week of notice. We have never seen the point of locking someone into a service they have stopped wanting.' },
  { label: 'What if I am not happy with a visit?', content: 'Call us within 48 hours and we come back and fix it at no charge. This happens a handful of times a year and it has never turned into an argument.' },
  { label: 'How do you charge?', content: 'A fixed price per visit, agreed before the first one. Invoiced monthly by email for regular clients, or on the day for one-off jobs. Bank transfer or card.' },
  { label: 'Do you cover my suburb?', content: `We work a tight run across ${site.areas.slice(0, -1).join(', ')} and ${site.areas.at(-1)}. If you are just outside it, call and ask — sometimes it works if you are close to an existing client.` }
]
</script>

<template>
  <div>
    <UPageHero
      :headline="site.tagline"
      title="A garden that looks maintained, not just survived"
      description="Fixed-price lawn mowing, garden maintenance and weed control across the inner suburbs. The person who quotes the job is the person who does it, and the number you are given is the number you pay."
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
      headline="Services"
      title="What we do"
      description="Three services that cover what most properties actually need. Combined on the same visit, they cost less than booking each separately."
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
      id="why-us"
      headline="Why us"
      title="The boring things, done reliably"
      description="Nobody switches garden services because the grass was cut 3mm too long. They switch because the van did not show up and the invoice did not match the quote."
      :features="reasons"
      :ui="{ root: 'bg-elevated/40' }"
    />

    <UPageSection
      headline="How it works"
      title="Four steps from call to cut"
      description="No site inspection fee, no sales visit, no three-year agreement to sign."
    >
      <UPageGrid>
        <UPageCard
          v-for="(step, index) in steps"
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
      id="reviews"
      headline="Reviews"
      title="What clients say"
      description="Collected from clients on a regular schedule, lightly trimmed for length."
      :ui="{ root: 'bg-elevated/40' }"
    >
      <UPageGrid>
        <UPageCard
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          variant="subtle"
        >
          <template #body>
            <div class="flex gap-0.5 text-primary mb-4">
              <UIcon
                v-for="star in 5"
                :key="star"
                name="i-lucide-star"
                class="size-4"
              />
            </div>
            <blockquote class="text-sm leading-relaxed">
              “{{ testimonial.quote }}”
            </blockquote>
            <div class="mt-4">
              <div class="text-sm font-medium">
                {{ testimonial.name }}
              </div>
              <div class="text-xs text-muted">
                {{ testimonial.detail }}
              </div>
            </div>
          </template>
        </UPageCard>
      </UPageGrid>
    </UPageSection>

    <UPageSection
      id="faq"
      headline="Questions"
      title="Before you call"
      description="The five things people ask most. Anything else, just ring and ask."
    >
      <UAccordion
        :items="faqs"
        class="max-w-3xl mx-auto w-full"
      />
    </UPageSection>

    <UPageSection>
      <UPageCTA
        title="Get a fixed price this week"
        :description="`Tell us the address and roughly what the site needs. Most quotes come back the same day. ${site.hours}.`"
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
