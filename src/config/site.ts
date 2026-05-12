export const siteConfig = {
  domain: 'https://www.autoglassprosdallas.com',
  brandName: 'Auto Glass Pros Dallas',
  shortName: 'AutoGlassProsDallas',
  tagline: 'Same-day windshield replacement & repair across Dallas-Fort Worth',
  description: 'Cracked windshield in Dallas? Get same-day windshield replacement and repair across DFW. Mobile service, ADAS calibration, no insurance required. Free quotes.',

  // Phone (placeholder until CallRail number is provisioned)
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
  ],

  // Schema.org defaults
  business: {
    type: 'AutoBodyShop',
    priceRange: '$$',
    openingHours: 'Mo-Sa 07:00-21:00, Su 09:00-19:00',
  },

  // Default OG image (we'll add real images later)
  ogImage: '/og-default.png',

  // Locale
  locale: 'en_US',
} as const;

export type SiteConfig = typeof siteConfig;
