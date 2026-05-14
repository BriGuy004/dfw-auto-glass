# Product Marketing Context — Dallas Windshield and Auto Glass Pros

## Business model
Lead-generation site for auto glass services in DFW metro. Routes inbound leads (phone calls, form fills) to local auto glass operators. Operator licenses at $1,200-$2,000/month recurring.

## Brand
- Name: Dallas Windshield and Auto Glass Pros
- Domain (target): AutoGlassProsDallas.com
- Working preview: https://dfw-glass-love.lovable.app/
- Tone: professional, warm, locally-rooted (NOT chain or franchise voice)

## Target audience
- Primary: DFW drivers with cracked or damaged windshields, mostly self-pay or insurance claim
- Secondary: Spanish-speaking drivers (~30% of metro, mostly underserved by current local sites)
- NOT targeting: B2B fleet sales (different sales cycle entirely)

## Voice constraints
- Path C positioning: don't fight "auto glass dallas" head term (Safelite dominates), win on suburb × service long-tail
- Neutral "we" phrasing — never "we install at our shop" (lead-gen, not operator)
- Softer claims: "in many cases", "depends on policy", never absolutes
- ADAS: "when your vehicle requires it", never assume

## FTC compliance (CRITICAL)
- NEVER fake testimonials with named customers
- NEVER fake Review schema or AggregateRating
- Use "Proof Points" pattern instead of testimonials
- All operator referrals disclosed in footer

## Services (10)
windshield-replacement, windshield-repair, mobile-auto-glass, side-window-replacement, back-window-replacement, sunroof-replacement, rv-glass, fleet-glass, adas-calibration, classic-vehicle-glass

## Cities served (10)
Dallas, Plano, Garland, Mesquite, Richardson, Carrollton, Irving, Lewisville, Frisco, McKinney

## Local context for content
- Dallas: Dallas North Tollway, Klyde Warren Park, AT&T Stadium, downtown, Uptown
- Plano: Legacy West, Toyota HQ, Shops at Willow Bend, Sam Rayburn Tollway
- Garland: Firewheel Town Center, Lake Ray Hubbard, I-30 corridor
- Mesquite: Rodeo Center, Town East Mall, I-635
- Richardson: Telecom Corridor, UTD, Cottonwood Park, US-75
- Carrollton: Old Downtown Carrollton, Mary Heads Carter Park
- Irving: Las Colinas, DFW Airport, ATT Stadium proximity
- Lewisville: Lake Lewisville, Old Town Lewisville, I-35E
- Frisco: Star District (Cowboys HQ), Toyota Stadium, Stonebriar Centre, Dallas North Tollway
- McKinney: Historic Downtown Square, Adriatica Village, US-75

## Tech stack
TanStack Start, React 19, Cloudflare Workers, Tailwind, Lovable editor sync, GitHub at BriGuy004/dfw-auto-glass

## Current status (May 2026)
- 38 routes scaffolded (10 services + 10 cities + 15 learn + 3 hubs)
- Schema markup site-wide (AutoBodyShop + Service + FAQPage on home + BreadcrumbList everywhere + Article on learn)
- Sitemap.xml + robots.txt + favicon shipped
- Homepage V2 copy live (reviewed for liability-safe language)
- Geo coordinates + 50km service-area radius on schema
- Frisco + McKinney added (10 cities total)

## Pending work (priority order)
1. Quick technical wins: FAQPage on all service+city pages, H2s as questions, phone in meta, llms.txt
2. Real copy for 10 city pages (1,000-1,200 words each, with highways/ZIPs/neighborhoods/local FAQ)
3. Real copy for top 5 service pages
4. ONE city × service combo page as proof of concept
5. Domain DNS + CallRail tracking number + Retell + GHL
6. Operator outreach Day 30+

## Reference competitors audited
- autoglassnola.com (Kyle, 40/100, our scale comp — operator)
- myautoglassrehab.com (91/100, franchise — patterns OK, scale NOT applicable)
- austinwindshields.net (currently auditing — operator scale, page 1 organic Austin)

## What NOT to write
- "We install" / "we replace" (we're lead-gen, not operator)
- "We guarantee" / absolute claims about insurance coverage
- Named customer testimonials (FTC risk)
- "Industry-leading" / generic chain-style language
- "Schedule your free consultation" (B2B SaaS voice — wrong audience)
