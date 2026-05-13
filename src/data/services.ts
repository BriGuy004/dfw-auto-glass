export interface ServiceData {
  slug: string;
  name: string;
  shortName: string;
  h1: string;
  title: string;
  description: string;
  excerpt: string;
  placeholder?: boolean;
}

export const services: ServiceData[] = [
  {
    slug: "windshield-replacement",
    name: "Windshield Replacement",
    shortName: "Windshield Replacement",
    h1: "Dallas Windshield Replacement Specialists",
    title: "Windshield Replacement Dallas, TX | Same-Day Mobile Service",
    description:
      "Windshield replacement in Dallas-Fort Worth. Same-day mobile service, ADAS calibration included, no insurance required. Free quotes with photo.",
    excerpt: "Cracked or broken windshield? We replace it same-day with mobile service across DFW.",
    placeholder: false,
  },
  {
    slug: "windshield-repair",
    name: "Windshield Repair",
    shortName: "Chip & Crack Repair",
    h1: "Dallas Windshield Chip & Crack Repair",
    title: "Windshield Repair Dallas, TX | Chip & Crack Repair",
    description:
      "Fast windshield chip and crack repair across Dallas-Fort Worth. Mobile service, often $0 with insurance, prevents full replacement.",
    excerpt:
      "Small chips and cracks repaired in 30 minutes. Often free with insurance — Texas waives the deductible on chip repair.",
    placeholder: false,
  },
  {
    slug: "side-window-replacement",
    name: "Side Window Replacement",
    shortName: "Side Window Replacement",
    h1: "Dallas Car Side Window Replacement",
    title: "Side Window Replacement Dallas, TX | Door Glass Replacement",
    description:
      "Broken side window or door glass in Dallas? Same-day mobile replacement service across DFW. Free quotes.",
    excerpt: "Broken door glass or quarter window? We replace side glass same-day at your location.",
    placeholder: true,
  },
  {
    slug: "back-window-replacement",
    name: "Back Window Replacement",
    shortName: "Rear Window Replacement",
    h1: "Dallas Rear Window Replacement",
    title: "Back Window Replacement Dallas, TX | Rear Glass",
    description:
      "Rear window replacement in Dallas-Fort Worth. Mobile service, defroster reconnection included. Free quotes.",
    excerpt: "Rear window shattered? We replace it with proper defroster grid reconnection.",
    placeholder: true,
  },
  {
    slug: "sunroof-glass-repair",
    name: "Sunroof Glass Repair",
    shortName: "Sunroof Glass Repair",
    h1: "Dallas Sunroof Glass Repair & Replacement",
    title: "Sunroof Glass Repair Dallas, TX | Moonroof Replacement",
    description:
      "Sunroof or moonroof glass repair in Dallas. Specialty service for cracked, leaking, or shattered sunroofs. Free quotes.",
    excerpt: "Cracked or leaking sunroof? We handle the specialty work most shops skip.",
    placeholder: true,
  },
  {
    slug: "adas-calibration",
    name: "ADAS Calibration",
    shortName: "ADAS Calibration",
    h1: "Dallas ADAS Calibration Specialists",
    title: "ADAS Calibration Dallas, TX | Auto Glass Calibration",
    description:
      "ADAS calibration after windshield replacement in Dallas. Required for lane assist, automatic braking, adaptive cruise. Done right or your safety systems fail.",
    excerpt:
      "Lane assist, auto braking, adaptive cruise — these need recalibration after windshield replacement on most 2018+ vehicles.",
    placeholder: true,
  },
  {
    slug: "mobile-auto-glass",
    name: "Mobile Auto Glass",
    shortName: "Mobile Service",
    h1: "Dallas Mobile Auto Glass Service",
    title: "Mobile Auto Glass Dallas, TX | At-Home Service",
    description:
      "Mobile auto glass service across Dallas-Fort Worth. We come to your home, office, or anywhere safe to park. Same-day available.",
    excerpt: "Don't drive on a damaged windshield. We come to you — home, office, parking lot, anywhere.",
    placeholder: true,
  },
  {
    slug: "same-day-service",
    name: "Same-Day Service",
    shortName: "Same-Day Service",
    h1: "Dallas Same-Day Auto Glass Service",
    title: "Same-Day Auto Glass Dallas, TX | Emergency Service",
    description:
      "Same-day windshield replacement and repair in Dallas. Emergency auto glass service when you need it now. Mobile dispatch across DFW.",
    excerpt: "Cracked windshield this morning? We can have it replaced this afternoon.",
    placeholder: true,
  },
  {
    slug: "commercial-fleet-glass",
    name: "Commercial Fleet Glass",
    shortName: "Commercial Fleet",
    h1: "Dallas Commercial Fleet Auto Glass",
    title: "Commercial Fleet Auto Glass Dallas, TX | Volume Pricing",
    description:
      "Commercial fleet auto glass service in Dallas. Volume pricing, scheduled maintenance, billing accounts for delivery, contractor, and service fleets.",
    excerpt: "Running a fleet? We handle scheduled and emergency glass work with volume pricing and billing accounts.",
    placeholder: true,
  },
  {
    slug: "classic-car-glass",
    name: "Classic Car Glass",
    shortName: "Classic & Vintage Glass",
    h1: "Dallas Classic & Vintage Car Glass",
    title: "Classic Car Glass Dallas, TX | Vintage Auto Glass",
    description:
      "Classic and vintage car glass replacement in Dallas. Specialty sourcing for restored vehicles, rubber gaskets, original-style glass. Free quotes.",
    excerpt: "Restoring a classic? We source vintage glass and trim specialists usually outsource.",
    placeholder: true,
  },
];
