<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '@nuxt/ui'

const { site } = useAppConfig()

useSeoMeta({
  title: `Contact — ${site.name}`,
  description: 'Request a fixed-price quote for lawn mowing, garden maintenance or weed control. Most quotes come back the same day.',
  ogTitle: `Contact — ${site.name}`,
  ogDescription: 'Request a fixed-price quote for lawn mowing, garden maintenance or weed control.'
})

interface QuoteState {
  name: string
  email: string
  phone: string
  suburb: string
  service: string | undefined
  message: string
}

const state = reactive<QuoteState>({
  name: '',
  email: '',
  phone: '',
  suburb: '',
  service: undefined,
  message: ''
})

const serviceOptions = services.map(service => service.title).concat('Not sure yet')

const submitted = ref(false)

function validate(state: QuoteState): FormError[] {
  const errors: FormError[] = []

  if (!state.name.trim()) {
    errors.push({ name: 'name', message: 'Please tell us your name' })
  }

  if (!state.email.trim()) {
    errors.push({ name: 'email', message: 'We need an email to send the quote to' })
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
    errors.push({ name: 'email', message: 'That does not look like a valid email address' })
  }

  if (state.phone && !/^[\d\s+()-]{8,}$/.test(state.phone)) {
    errors.push({ name: 'phone', message: 'Enter a contact number we can actually reach' })
  }

  if (!state.suburb.trim()) {
    errors.push({ name: 'suburb', message: 'The suburb decides whether we cover you' })
  }

  if (!state.message.trim()) {
    errors.push({ name: 'message', message: 'A sentence about the job is enough' })
  }

  return errors
}

function onSubmit(_event: FormSubmitEvent<QuoteState>) {
  submitted.value = true
}

const details = [
  { icon: 'i-lucide-phone', label: 'Phone', value: site.phone.display, to: site.phone.href },
  { icon: 'i-lucide-mail', label: 'Email', value: site.email, to: `mailto:${site.email}` },
  { icon: 'i-lucide-clock', label: 'Hours', value: site.hours },
  { icon: 'i-lucide-map-pin', label: 'Service area', value: site.areas.join(', ') }
]
</script>

<template>
  <div>
    <UPageHero
      headline="Contact"
      title="Get a fixed-price quote"
      description="Tell us the address and roughly what the site needs. Most quotes come back the same day, and the number you are given is the number you pay."
    />

    <UPageSection>
      <div class="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        <div class="lg:col-span-3">
          <UAlert
            v-if="submitted"
            icon="i-lucide-check"
            color="primary"
            variant="subtle"
            title="Request received"
            description="This demo form does not send anywhere — it is here to exercise client-side validation and hydration. On a live site this would hit an API route."
            class="mb-8"
          />

          <UForm
            :state="state"
            :validate="validate"
            class="space-y-6"
            @submit="onSubmit"
          >
            <div class="grid sm:grid-cols-2 gap-6">
              <UFormField
                label="Your name"
                name="name"
                required
              >
                <UInput
                  v-model="state.name"
                  autocomplete="name"
                  placeholder="Jordan Fraser"
                  class="w-full"
                />
              </UFormField>

              <UFormField
                label="Email"
                name="email"
                required
              >
                <UInput
                  v-model="state.email"
                  type="email"
                  autocomplete="email"
                  placeholder="jordan@example.com"
                  class="w-full"
                />
              </UFormField>

              <UFormField
                label="Phone"
                name="phone"
                hint="Optional"
              >
                <UInput
                  v-model="state.phone"
                  type="tel"
                  autocomplete="tel"
                  placeholder="0400 000 000"
                  class="w-full"
                />
              </UFormField>

              <UFormField
                label="Suburb"
                name="suburb"
                required
              >
                <UInput
                  v-model="state.suburb"
                  autocomplete="address-level2"
                  placeholder="Marrickville"
                  class="w-full"
                />
              </UFormField>
            </div>

            <UFormField
              label="What do you need?"
              name="service"
            >
              <USelect
                v-model="state.service"
                :items="serviceOptions"
                placeholder="Choose a service"
                class="w-full"
              />
            </UFormField>

            <UFormField
              label="About the job"
              name="message"
              required
              description="Size of the lawn, how long since the last cut, anything awkward about access."
            >
              <UTextarea
                v-model="state.message"
                :rows="5"
                placeholder="Roughly 120sqm of couch out the back, hasn't been cut in about six weeks. Side gate is narrow."
                class="w-full"
              />
            </UFormField>

            <UButton
              type="submit"
              label="Request quote"
              trailing-icon="i-lucide-arrow-right"
              size="lg"
            />
          </UForm>
        </div>

        <div class="lg:col-span-2">
          <UCard variant="subtle">
            <h2 class="text-lg font-semibold">
              Or just call
            </h2>
            <p class="mt-2 text-sm text-muted">
              Faster than the form if the job is straightforward. You will get the person who does the work.
            </p>

            <dl class="mt-6">
              <template
                v-for="detail in details"
                :key="detail.label"
              >
                <dt class="flex items-center gap-2 mt-5 first:mt-0 text-xs uppercase tracking-wide text-muted">
                  <UIcon
                    :name="detail.icon"
                    class="size-4 text-primary"
                    aria-hidden="true"
                  />
                  {{ detail.label }}
                </dt>
                <dd class="mt-1 ml-6 text-sm">
                  <ULink
                    v-if="detail.to"
                    :to="detail.to"
                    class="font-medium"
                  >
                    {{ detail.value }}
                  </ULink>
                  <span v-else>{{ detail.value }}</span>
                </dd>
              </template>
            </dl>
          </UCard>
        </div>
      </div>
    </UPageSection>
  </div>
</template>
