<script setup lang="ts">
const { site } = useAppConfig()

useSeoMeta({
  title: `About — ${site.name}`,
  description: 'A small, owner-operated lawn and garden business working across the inner suburbs. Who we are, how we price, and what we will tell you not to spend money on.',
  ogTitle: `About — ${site.name}`,
  ogDescription: 'A small, owner-operated lawn and garden business working across the inner suburbs.'
})

const values = [
  {
    icon: 'i-lucide-scale',
    title: 'We quote the job, not the customer',
    description: 'The price comes from the square metreage, the access and the state of the site. It does not go up because of the postcode or the car in the driveway.'
  },
  {
    icon: 'i-lucide-hand',
    title: 'We will talk you out of work',
    description: 'If a lawn needs water rather than fertiliser, we say so. Selling a treatment that will not fix the problem costs us the next five years of the relationship.'
  },
  {
    icon: 'i-lucide-clock',
    title: 'We turn up when we said',
    description: 'If weather or a breakdown moves us, you hear about it that morning rather than wondering at 4pm. This is most of what people actually want from a trade.'
  },
  {
    icon: 'i-lucide-recycle',
    title: 'Green waste goes to compost',
    description: 'Everything we remove goes to a licensed facility rather than landfill. It costs marginally more and it is the right end for the material.'
  }
]

const numbers = [
  { value: '11 years', label: 'Working the same suburbs' },
  { value: '480+', label: 'Properties on regular schedule' },
  { value: '2 days', label: 'Typical wait for a first visit' },
  { value: '96%', label: 'Clients still with us after a year' }
]
</script>

<template>
  <div>
    <UPageHero
      headline="About us"
      title="A small business that stayed small on purpose"
      :description="`${site.name} is two people and two vans. We have deliberately not grown into a franchise, because the thing clients keep telling us they value is that the person who quoted the job is the person standing in the garden.`"
      :links="[{
        label: 'Get a quote',
        to: '/contact',
        trailingIcon: 'i-lucide-arrow-right',
        size: 'xl'
      }]"
    />

    <UPageSection
      title="How we got here"
      :ui="{ container: 'max-w-3xl' }"
    >
      <div class="space-y-6 text-base leading-relaxed text-muted">
        <p>
          The business started in 2015 with one mower and a trailer, doing lawns for neighbours who had asked
          often enough that it seemed worth charging for. The first year was almost entirely mowing. The garden
          maintenance and weed control came later, largely because clients kept asking who they should call for
          the rest of it and we ran out of people to recommend.
        </p>
        <p>
          What we learned early is that most of the complaints people have about garden services are not about
          the quality of the cut. They are about the van that did not show up, the invoice that arrived larger
          than the quote, and the fact that nobody answered the phone to explain either. Those are all solvable
          problems, and solving them turned out to matter more than being the cheapest option in the area.
        </p>
        <p>
          So the shape of the business is deliberate. We work a tight geographic run so travel time does not end
          up in your invoice. We cap the number of properties on regular schedule so the calendar has slack in it
          for the weeks when it rains for four days straight. And we quote fixed prices, which means the risk of
          a job taking longer than expected sits with us rather than with you.
        </p>
        <p>
          The trade-off is that we are sometimes booked out, and we occasionally say no to work outside the run.
          We think that is the correct trade. A business that says yes to everything is a business that is about
          to start missing appointments.
        </p>
      </div>
    </UPageSection>

    <UPageSection :ui="{ root: 'bg-elevated/40' }">
      <UPageGrid>
        <div
          v-for="item in numbers"
          :key="item.label"
          class="text-center"
        >
          <div class="text-4xl font-semibold text-primary">
            {{ item.value }}
          </div>
          <div class="mt-2 text-sm text-muted">
            {{ item.label }}
          </div>
        </div>
      </UPageGrid>
    </UPageSection>

    <UPageSection
      headline="What we stand for"
      title="Four things we will not trade away"
      description="Every business claims to be reliable and honest. These are the specific, checkable versions of that claim."
      :features="values"
    />

    <UPageSection
      title="Who you will actually deal with"
      description="Two people, both on the tools. Neither of us is a salesperson."
    >
      <UPageGrid class="max-w-4xl mx-auto">
        <UPageCard
          icon="i-lucide-user"
          title="Dan — owner, lawns and weed control"
          description="Handles quoting, the mowing run and all herbicide application. Holds the chemical handling accreditation. Answers the phone most of the time."
          variant="subtle"
        />
        <UPageCard
          icon="i-lucide-user"
          title="Priya — gardens and scheduling"
          description="Runs the maintenance side, the pruning calendar and the schedule. Trained in horticulture and the reason the plant advice is any good."
          variant="subtle"
        />
      </UPageGrid>
    </UPageSection>

    <UPageSection>
      <UPageCTA
        title="Want to see if we are a fit?"
        :description="`Call and describe the property. If we are not the right people for the job, we will tell you that and suggest who is. ${site.hours}.`"
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
