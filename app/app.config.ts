export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    },
    // The default `text-dimmed` placeholder is ~3.7:1 on the dark surface and fails
    // WCAG AA. `text-muted` is the same role one step brighter.
    select: {
      slots: {
        placeholder: 'truncate text-muted'
      }
    }
  },

  site: {
    name: 'Acme Home Services',
    tagline: 'Lawn, garden and weed care across the inner suburbs',
    phone: {
      display: '(02) 5550 0142',
      href: 'tel:+61255500142'
    },
    email: 'hello@acme-home-services.example',
    hours: 'Mon–Sat, 7am–5pm',
    areas: ['Northbridge', 'Ashfield', 'Marrickville', 'Leichhardt', 'Balmain', 'Newtown']
  }
})
