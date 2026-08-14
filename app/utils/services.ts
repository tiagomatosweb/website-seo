export interface ServiceFaq {
  label: string
  content: string
}

export interface Service {
  slug: string
  title: string
  navLabel: string
  icon: string
  summary: string
  description: string
  price: string
  includes: string[]
  process: { title: string, description: string }[]
  faqs: ServiceFaq[]
}

export const services: Service[] = [
  {
    slug: 'lawn-care-mowing',
    title: 'Lawn Care & Mowing',
    navLabel: 'Lawn care & mowing',
    icon: 'i-lucide-scissors',
    summary: 'Fortnightly mowing, edging and clean-up that keeps a lawn looking cut rather than merely shortened.',
    description: 'A regular cut is the difference between a lawn that looks maintained and one that looks survived. We mow to the height your grass variety actually wants, edge every border, and leave the site cleaner than we found it.',
    price: 'From $65 per visit',
    includes: [
      'Mowing at the correct height for your grass variety',
      'Hand-edging along paths, beds and driveways',
      'Blower clean-up of hard surfaces before we leave',
      'Clippings removed, or mulched back in on request',
      'Seasonal height adjustment as growth rates change',
      'Photo update after each visit if you are not home'
    ],
    process: [
      { title: 'Walk the site', description: 'We measure the lawn, identify the grass variety and note anything that needs care — irrigation heads, shallow roots, pet areas.' },
      { title: 'Agree a schedule', description: 'Fortnightly suits most lawns through spring and summer, stretching to monthly over winter. You approve the cadence before we start.' },
      { title: 'Cut and finish', description: 'Mow, edge, blow down. Every visit ends with the hard surfaces clear and the bins closed.' },
      { title: 'Adjust through the season', description: 'Growth is not constant. We raise the cut height in heat and drop it in the shoulder seasons without you having to ask.' }
    ],
    faqs: [
      { label: 'How often should my lawn be mowed?', content: 'Through spring and summer, fortnightly keeps most Sydney lawns in good condition. Couch and kikuyu grow fast enough that weekly can be worthwhile in peak season. Over winter, monthly is usually plenty. We set the cadence to your lawn rather than to a fixed package.' },
      { label: 'Do I need to be home?', content: 'No. Provided we have side access, most clients are at work when we visit. We send a photo after each visit so you can see the result without being there.' },
      { label: 'What happens to the clippings?', content: 'By default we take them away. If your lawn would benefit from the nitrogen — most do through the growing season — we can mulch them back in instead at no extra cost.' },
      { label: 'Will you mow in the rain?', content: 'We avoid it. Cutting saturated turf tears the leaf and compacts the soil, and the finish is poor. If the weather turns we reschedule, usually within two days.' }
    ]
  },
  {
    slug: 'garden-maintenance',
    title: 'Garden Maintenance',
    navLabel: 'Garden maintenance',
    icon: 'i-lucide-leaf',
    summary: 'Pruning, mulching, bed care and green-waste removal on a schedule that matches how your garden actually grows.',
    description: 'Gardens fail slowly. A hedge that misses two prunes takes a season to recover; a bed that goes unmulched through summer loses moisture and gains weeds. Regular maintenance is cheaper than restoration, and this is the work that keeps you out of it.',
    price: 'From $95 per visit',
    includes: [
      'Hedge and shrub pruning to shape',
      'Weeding of garden beds by hand, not blanket spray',
      'Mulch top-up to retain moisture and suppress weeds',
      'Deadheading and cut-back of spent perennials',
      'Green waste removed and responsibly disposed of',
      'Seasonal advice on what needs doing next'
    ],
    process: [
      { title: 'Assess the garden', description: 'We look at what is planted, what is thriving and what is being crowded out, then tell you plainly what needs attention first.' },
      { title: 'Prioritise the work', description: 'Not everything needs doing at once. We sequence the jobs so the highest-impact work happens first and the budget goes where it matters.' },
      { title: 'Maintain on schedule', description: 'Most gardens want a visit every three to four weeks. Established, low-planting gardens can stretch further.' },
      { title: 'Adjust for the season', description: 'Pruning windows matter. We time hard cut-backs to the plant rather than to the calendar slot.' }
    ],
    faqs: [
      { label: 'Can you maintain a garden you did not design?', content: 'Almost all of our maintenance work is on gardens someone else planted. The first visit takes a little longer because we are learning the site, but that is included.' },
      { label: 'Do you spray weeds in garden beds?', content: 'Rarely. In a planted bed, hand-weeding and a good mulch layer outperform spray and carry no drift risk to the plants you want. We reserve herbicide for hard surfaces and heavy infestations.' },
      { label: 'What do you do with the green waste?', content: 'It leaves with us and goes to a licensed green-waste facility for composting. Your bins stay empty.' },
      { label: 'Can you do a one-off tidy-up?', content: 'Yes. A lot of clients start with a single restoration visit to get the garden back to a baseline, then decide whether to move to a regular schedule.' }
    ]
  },
  {
    slug: 'weed-control',
    title: 'Weed Control',
    navLabel: 'Weed control',
    icon: 'i-lucide-sprout',
    summary: 'Targeted treatment for lawns, paths and paved areas, aimed at the root system rather than the visible leaf.',
    description: 'Pulling the top off a weed buys you three weeks. Treating the root system buys you a season. We identify what is actually growing before choosing a treatment, because the approach for bindii is not the approach for nutgrass.',
    price: 'From $120 per treatment',
    includes: [
      'Identification of the specific weed species present',
      'Selective treatment that spares the surrounding lawn',
      'Pre-emergent application to stop the next germination',
      'Crack and joint treatment for paths, driveways and paving',
      'Follow-up inspection six weeks after treatment',
      'Written record of what was applied and when'
    ],
    process: [
      { title: 'Identify the species', description: 'Broadleaf, grassy and sedge weeds all need different chemistry. Guessing wastes a treatment and can damage the lawn.' },
      { title: 'Treat selectively', description: 'We use a selective herbicide that targets the weed and leaves your turf intact, applied at the right temperature and wind speed.' },
      { title: 'Apply pre-emergent', description: 'The treatment that matters most is the one that stops next season germinating. Timing this correctly is most of the job.' },
      { title: 'Inspect and top up', description: 'We come back at six weeks. Anything that survived gets a second, spot-level treatment at no charge.' }
    ],
    faqs: [
      { label: 'Is the treatment safe around pets and children?', content: 'Once the application has dried — typically two to four hours — the treated area is safe to use. We tell you the specific re-entry window on the day, and it is on the written record we leave.' },
      { label: 'Why did the weeds come back?', content: 'Usually because only the visible plant was killed and the seed bank in the soil was untouched. Pre-emergent treatment is what breaks that cycle, and it needs to go down before germination rather than after.' },
      { label: 'Can you treat weeds in paving without staining?', content: 'Yes. Crack and joint treatment uses a non-staining formulation. We keep it off adjacent turf and beds, which is why we work in low wind.' },
      { label: 'How long until I see results?', content: 'Broadleaf weeds visibly yellow within five to seven days and break down over two to three weeks. Sedges are slower and sometimes need a second pass.' }
    ]
  }
]

export function serviceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug)
}
