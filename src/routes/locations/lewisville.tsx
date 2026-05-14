import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { QuoteForm } from "@/components/QuoteForm";
import {
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
} from "@/lib/schema";
import { cities } from "@/data/cities";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ENTRY = cities.find((c) => c.slug === "lewisville")!;
const PHONE = siteConfig.phone.display;
const TEL = `tel:${siteConfig.phone.tel}`;
const SMS = `sms:${siteConfig.phone.tel}`;

const NEIGHBORHOODS = [
  "Old Town Lewisville",
  "Lakeside",
  "Vista Ridge",
  "Castle Hills",
  "Highland Village (south edge)",
  "Hebron 121 Station",
];

const HIGHWAYS = [
  "I-35E (Stemmons Freeway)",
  "Sam Rayburn Tollway (SH-121)",
  "FM 1171 (Main Street)",
  "FM 3040 (Round Grove Road)",
];

const ZIPS = [
  "75056",
  "75057",
  "75067",
  "75077",
];

const SERVICES_IN_CITY = [
  {
    slug: "windshield-replacement",
    name: "Windshield Replacement",
    body: "Full windshield replacement for cars, trucks, SUVs, and specialty vehicles. Most installations take 60 to 90 minutes plus safe drive-away time.",
  },
  {
    slug: "windshield-repair",
    name: "Windshield Repair",
    body: "Chip and short-crack repair, often completed in about 30 minutes on-site. Stops the damage from spreading in Texas heat.",
  },
  {
    slug: "mobile-auto-glass",
    name: "Mobile Auto Glass",
    body: "Service at your home, office, apartment lot, or job site. Mobile is the default for most Lewisville jobs, not a premium add-on.",
  },
  {
    slug: "side-window-replacement",
    name: "Side Window Replacement",
    body: "Tempered door glass and quarter glass replacement after break-ins or accidents, with full vacuum cleanup of the door cavity.",
  },
  {
    slug: "back-window-replacement",
    name: "Back Window Replacement",
    body: "Rear glass replacement with proper defroster grid reconnection and embedded antenna handling.",
  },
  {
    slug: "sunroof-glass-repair",
    name: "Sunroof Glass Repair",
    body: "Sunroof and moonroof glass work, including drainage and seal diagnosis that many general shops skip.",
  },
  {
    slug: "adas-calibration",
    name: "ADAS Calibration",
    body: "Static and dynamic recalibration for lane assist, automatic braking, and adaptive cruise — when your vehicle requires it.",
  },
  {
    slug: "same-day-service",
    name: "Same-Day Service",
    body: "Emergency dispatch for common vehicles when you call early in the day. Specialty glass may need to be ordered.",
  },
  {
    slug: "commercial-fleet-glass",
    name: "Commercial Fleet Glass",
    body: "Scheduled and emergency glass work for delivery, service, contractor, and corporate fleets. Billing accounts available.",
  },
  {
    slug: "classic-car-glass",
    name: "Classic Car Glass",
    body: "Vintage glass sourcing, gasket installation, and pinch-weld procedures for pre-1980 vehicles.",
  },
];

const FAQS = [
  {
    question: "How fast can someone come out in Lewisville?",
    answer:
      "Same-day mobile service is available for many Lewisville addresses, depending on the vehicle, glass availability, and what time you call. Calls before mid-morning have the most flexibility for same-day scheduling. Call (214) 555-0100 and we will tell you what your specific job looks like.",
  },
  {
    question: "Do you service Old Town Lewisville and the Lake Lewisville area?",
    answer:
      "Yes. Old Town Lewisville (75057), Lakeside (75067), Vista Ridge (75067), Castle Hills (75056), and the Hebron 121 Station area (75067) are all served. Mobile setup works around Old Town Lewisville, residential subdivisions near Lake Lewisville, the Vista Ridge Mall area, and neighborhoods on both sides of I-35E. Most Lewisville addresses fall within standard mobile coverage.",
  },
  {
    question: "Will my insurance cover this?",
    answer:
      "In many cases, yes. Texas comprehensive auto policies often cover windshield repair or replacement, and many carriers offer a separate Auto Glass Endorsement that waives the deductible on chip repair. Coverage depends on your policy and carrier, so it is smart to confirm before assuming. The operators we route to regularly bill State Farm, GEICO, Progressive, Allstate, USAA, Liberty Mutual, Farmers, and Nationwide.",
  },
  {
    question: "How long does mobile windshield replacement take?",
    answer:
      "Most replacements take 60 to 90 minutes on-site, followed by safe drive-away time once the adhesive sets. If your vehicle requires ADAS recalibration, expect additional time. Most jobs wrap within about two hours, depending on the vehicle and the work involved.",
  },
  {
    question: "Do you do same-day service in Lewisville?",
    answer:
      "For common vehicles and common glass, yes — same-day mobile service is the default rather than an upcharge. Specialty vehicles, older cars, and ADAS-heavy newer models sometimes need parts ordered, which can add a day. Call (214) 555-0100 and we will tell you whether your vehicle is a same-day candidate.",
  },
  {
    question: "Are auto glass operators in Lewisville licensed and insured?",
    answer:
      "The Lewisville auto glass operators we connect drivers with carry the standard insurance and credentials expected for auto glass work in Texas. Dallas Windshield and Auto Glass Pros is a lead-routing service; the installation itself is performed by the local operator we connect you with. Operator details are confirmed before dispatch.",
  },
  {
    question: "What if I drive a Tesla, Lexus, or other vehicle with ADAS?",
    answer:
      "Most 2018-or-newer vehicles with windshield-mounted cameras for lane assist, automatic emergency braking, or adaptive cruise need recalibration after a windshield replacement. Tesla Model 3 and Model Y, Lexus RX and ES, Honda Civic and Accord, Toyota RAV4 and Camry, and most premium European vehicles fall into this category. When your vehicle requires it, calibration is handled as part of the job.",
  },
];

const DESCRIPTION =
  "Mobile auto glass service in Lewisville, TX — Old Town Lewisville, Lakeside, Vista Ridge, Castle Hills. Windshield replacement and repair at your home or office. Call or text (214) 555-0100.";

export const Route = createFileRoute("/locations/lewisville")({
  component: LocationPage,
  head: () =>
    buildSeo({
      title: "Auto Glass Lewisville, TX | Same-Day Windshield Repair & Replacement",
      description: DESCRIPTION,
      canonical: "/locations/lewisville",
      noindex: ENTRY.placeholder ?? false,
      schema: [
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Locations", url: "/locations", position: 2 },
            { name: "Lewisville", url: "/locations/lewisville", position: 3 },
          ],
        }),
        buildFAQPageSchema({ faqs: FAQS }),
      ],
    }),
});

function LocationPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero — phone-first conversion */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:py-14">
          <div className="flex flex-col">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand md:text-sm">
            Serving Lewisville, TX & DFW
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            Auto Glass Lewisville, TX — Same-Day Windshield Repair & Replacement
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Cracked or shattered windshield in Lewisville? Call {PHONE} and we will connect you with a vetted local Lewisville auto glass operator. Mobile service across Old Town Lewisville, the Lake Lewisville area, and the rest of Lewisville — most jobs handled the same day, cash or insurance.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={TEL}
              className="rounded-md bg-brand px-6 py-3 text-lg font-bold text-brand-foreground shadow hover:opacity-90"
            >
              Call {PHONE}
            </a>
            <a
              href={SMS}
              className="rounded-md border border-border bg-background px-6 py-3 text-lg font-semibold hover:bg-accent"
            >
              Text a Photo of the Damage
            </a>
          </div>
        </div>
          <div id="quote" className="scroll-mt-20">
            <QuoteForm source="city:lewisville" />
          </div>
        </div>
      </section>

      {/* H2 #1: Where we serve */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <h2 className="text-3xl font-bold">Where in Lewisville do we serve?</h2>
          <p className="mt-4 text-muted-foreground">
            Lewisville sits at the intersection of I-35E (Stemmons Freeway) and the Sam Rayburn Tollway (SH-121), with FM 1171 (Main Street) running east-west across the older core and FM 3040 (Round Grove Road) carrying traffic between Old Town and Castle Hills. The combination of heavy north-south truck traffic on I-35E, lake-bound recreational traffic on weekends, and the constant SH-121 commuter flow between Lewisville and Plano produces some of the steadiest road-debris exposure anywhere on the north metroplex perimeter.
          </p>
          <p className="mt-4 text-muted-foreground">
            Hail season runs from March through June in North Texas, and Lewisville sits in an active hail corridor that catches storms tracking east off Denton County — a single supercell can damage windshields across Vista Ridge and the Lake Lewisville neighborhoods in one afternoon. Summer heat from June through September pushes pavement temperatures past 150°F, which is enough to turn a small chip into a full-length crack in hours. The combination keeps demand steady for both mobile chip repair and full windshield replacement, with insurance-assisted and cash-pay options both common across the Lewisville market. Call {PHONE} to confirm coverage for your address.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold">Lewisville neighborhoods</h3>
              <ul className="mt-3 space-y-1 text-muted-foreground">
                {NEIGHBORHOODS.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Highways &amp; corridors</h3>
              <ul className="mt-3 space-y-1 text-muted-foreground">
                {HIGHWAYS.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Lewisville ZIP codes</h3>
              <ul className="mt-3 space-y-1 text-muted-foreground">
                {ZIPS.map((z) => (
                  <li key={z}>{z}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* H2 #2: Services */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <h2 className="text-3xl font-bold">
            What auto glass services do operators provide in Lewisville?
          </h2>
          <p className="mt-4 text-muted-foreground">
            From a rock chip picked up on I-35E heading toward Denton to a windshield shattered after a North Texas hailstorm rolling in off Lake Lewisville, the Lewisville operators we connect drivers with handle the full range of auto glass work. Call {PHONE} for a phone consultation, or text a photo of the damage and the vehicle year, make, and model.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {SERVICES_IN_CITY.map((s) => (
              <li
                key={s.slug}
                className="rounded-xl border border-border bg-card p-5"
              >
                <h3 className="text-lg font-bold">
                  <a
                    className="hover:text-brand hover:underline"
                    href={`/services/${s.slug}`}
                  >
                    {s.name}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* H2 #3: Insurance */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="text-3xl font-bold">
            Will Texas insurance cover windshield damage?
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>
              In many cases, yes. Lewisville drivers carrying Texas comprehensive auto coverage often have windshield repair or replacement included, and many carriers offer a separate Auto Glass Endorsement that waives the deductible on chip repair. Coverage and deductible amounts depend on your specific policy, so it is smart to confirm with your insurer before assuming.
            </p>
            <p>
              The Lewisville operators we route to regularly bill State Farm, GEICO, Progressive, Allstate, USAA, Liberty Mutual, Farmers, and Nationwide. If you would rather pay cash and skip the claim process entirely — which some Lewisville drivers prefer when the deductible is close to the replacement cost — both options are quoted up front. Call {PHONE} and we will walk through what likely makes more sense for your situation.
            </p>
            <p>
              Texas drivers also generally have the option to request OEM glass on most vehicles when an insurer is paying for the work. Carriers sometimes default to aftermarket glass for cost reasons, but the choice is usually yours — a particular consideration for ADAS-equipped vehicles, where camera calibration and original glass specifications are tightly linked. When you call, the trade-offs between OEM and OEM-equivalent glass for your specific vehicle are part of the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* H2 #4: FAQ */}
      <section id="faq" className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="text-3xl font-bold">Lewisville Auto Glass FAQ</h2>
          <Accordion type="single" collapsible className="mt-8">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.question} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {f.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-14 text-brand-foreground"
        style={{ backgroundColor: "var(--ink)" }}
      >
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Cracked Windshield in Lewisville? Call Now.
          </h2>
          <p className="mt-3 opacity-80">
            Same-day mobile service across Lewisville neighborhoods. Cash or insurance options quoted up front.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={TEL}
              className="rounded-md bg-brand px-8 py-4 text-lg font-bold text-brand-foreground shadow hover:opacity-90"
            >
              Call {PHONE}
            </a>
            <a
              href={SMS}
              className="rounded-md border border-brand-foreground/40 bg-transparent px-8 py-4 text-lg font-bold text-brand-foreground hover:bg-brand-foreground/10"
            >
              Text a Photo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
