export const siteConfig = {
  domain: 'https://www.windshieldprosdallas.com',
  brandName: 'Dallas Windshield and Auto Glass Pros',
  shortName: 'Dallas Windshield and Auto Glass Pros',
  brandAbbr: 'DWAG Pros',
  tagline: 'Same-day windshield replacement & repair across Dallas-Fort Worth',
  description: 'Cracked windshield in Dallas? Get same-day windshield replacement and repair across DFW. Mobile service, ADAS calibration, no insurance required. Free quotes.',

  // Formspree
  formspree: {
    formId: 'xvzlnjpd',
  },

  // Phone (placeholder until Quo verification completes)
  phone: {
    display: '(214) 555-0100',
    tel: '+12145550100',
  },

  // Service area
  cities: [
    { slug: 'dallas', name: 'Dallas' },
    { slug: 'plano', name: 'Plano' },
    { slug: 'garland', name: 'Garland' },
    { slug: 'mesquite', name: 'Mesquite' },
    { slug: 'richardson', name: 'Richardson' },
    { slug: 'carrollton', name: 'Carrollton' },
    { slug: 'irving', name: 'Irving' },
    { slug: 'lewisville', name: 'Lewisville' },
    { slug: 'frisco', name: 'Frisco' },
    { slug: 'mckinney', name: 'McKinney' },
  ],

  // Schema.org defaults
  business: {
    type: 'AutoRepair',
    priceRange: '$$',
    openingHours: 'Mo-Sa 07:00-21:00, Su 09:00-19:00',
  },

  // Default OG image (we'll add real images later)
  ogImage: '/og-default.png',

  // Locale
  locale: 'en_US',
} as const;

export type SiteConfig = typeof siteConfig;
