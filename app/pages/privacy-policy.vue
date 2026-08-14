<script setup lang="ts">
const { site } = useAppConfig()

useSeoMeta({
  title: `Privacy Policy — ${site.name}`,
  description: 'How we collect, use and store the personal information you give us when you request a quote.',
  robots: 'noindex, follow'
})

const sections = [
  {
    title: 'What we collect',
    paragraphs: [
      'When you request a quote we collect your name, email address, suburb and — if you choose to give it — a phone number, along with whatever you tell us about the job. That is the whole set. We do not ask for date of birth, identity documents or payment details through this website.',
      'If you become a client we also keep a service history: the dates we attended, what was done and what was charged. For weed control we keep a record of the product applied and the date, because that is a requirement of holding the accreditation rather than a marketing decision.'
    ]
  },
  {
    title: 'Why we collect it',
    paragraphs: [
      'To prepare a quote, to schedule and perform the work, to invoice you, and to contact you about the job. That is the extent of it.',
      'We do not sell your information, and we do not share it with third parties for their own marketing. The only parties who see it are the people doing the work and, where relevant, our accountant and our insurer.'
    ]
  },
  {
    title: 'How long we keep it',
    paragraphs: [
      'Quote requests that do not become jobs are deleted after twelve months. Client records are kept for seven years after the last invoice, which is the retention period Australian tax law requires of us.',
      'Chemical application records are kept for the period required by the relevant state regulations, currently three years, and may be produced to a regulator on request.'
    ]
  },
  {
    title: 'Cookies and analytics',
    paragraphs: [
      'This site sets no advertising cookies and runs no third-party tracking scripts. If we add analytics in future, it will be a privacy-preserving tool that does not build cross-site profiles, and this page will say so before it goes live.',
      'Your browser may store a preference for light or dark mode. That preference stays on your device and is never sent to us.'
    ]
  },
  {
    title: 'Your rights',
    paragraphs: [
      'You can ask us what we hold about you, ask us to correct it, or ask us to delete it, subject to the retention obligations described above. Email the address below and we will respond within thirty days, usually much sooner.',
      'If you are unhappy with how we have handled your information you can escalate to the Office of the Australian Information Commissioner. We would rather you raised it with us first so we have the chance to fix it.'
    ]
  },
  {
    title: 'Changes to this policy',
    paragraphs: [
      'If this policy changes materially we will update the date below and, for anyone on a regular schedule, mention it in the next service email. We will not make a change retrospective without telling you.'
    ]
  }
]
</script>

<template>
  <div>
    <UPageHero
      headline="Legal"
      title="Privacy Policy"
      description="Plain-language version: we collect what we need to quote and do the job, we keep it as long as the tax office requires, and we do not sell it."
      :ui="{ container: 'py-16 sm:py-20' }"
    />

    <UPageSection :ui="{ container: 'max-w-3xl' }">
      <div class="space-y-12">
        <section
          v-for="section in sections"
          :key="section.title"
        >
          <h2 class="text-2xl font-semibold">
            {{ section.title }}
          </h2>
          <div class="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p
              v-for="(paragraph, index) in section.paragraphs"
              :key="index"
            >
              {{ paragraph }}
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold">
            Contact
          </h2>
          <div class="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Questions about this policy, or a request to access or delete your information, go to
              <ULink
                :to="`mailto:${site.email}`"
                class="font-medium"
              >
                {{ site.email }}
              </ULink>
              or call
              <ULink
                :to="site.phone.href"
                class="font-medium"
              >
                {{ site.phone.display }}
              </ULink>.
            </p>
            <p class="text-sm text-muted">
              This is placeholder content on a demonstration site and is not legal advice.
            </p>
          </div>
        </section>
      </div>
    </UPageSection>
  </div>
</template>
