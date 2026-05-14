import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { buildFAQPageSchema } from "@/lib/schema";
import { QuoteForm } from "@/components/QuoteForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PHONE = siteConfig.phone.display;
const TEL = `tel:${siteConfig.phone.tel}`;

const SERVICE_TAGLINES: Record<string, string> = {
  "windshield-replacement":
    "Cracked or shattered? We replace your windshield with OEM-spec glass and proper recalibration when your vehicle requires it — often the same day you call.",
  "windshield-repair":
    "Chip or short crack? We repair many windshields in about 30 minutes, and insurance often helps reduce out-of-pocket cost.",
  "side-window-replacement":
    "Broken side window from a break-in or accident? We vacuum the glass and install new tempered glass, often the same day.",
  "back-window-replacement":
    "Rear glass shattered? We replace it and properly reconnect the defroster grid so it works the way it should.",
  "sunroof-glass-repair":
    "Cracked or leaking sunroof? We handle the specialty glass work many general shops avoid.",
  "adas-calibration":
    "Many modern vehicles need camera recalibration after windshield replacement. We handle it properly when your vehicle calls for it.",
  "mobile-auto-glass":
    "We come to you — home, office, driveway, parking lot, or job site. Most DFW locations covered same day.",
  "same-day-service":
    "Damage this morning? We can often have you taken care of by this afternoon, depending on vehicle and glass availability.",
  "commercial-fleet-glass":
    "Running a fleet? We support billing accounts, scheduled work, and fast turnaround for vehicles that cannot sit.",
  "classic-car-glass":
    "Restoring a vintage car? We help source specialty glass and trim for older vehicles and harder-to-find installations.",
};

const CITY_DESCRIPTIONS: Record<string, string> = {
  dallas: "Uptown, Lakewood, Oak Cliff, North Dallas",
  plano: "Willow Bend, Legacy, all major subdivisions",
  garland: "Mobile windshield repair and replacement across Garland and Rowlett",
  mesquite: "Same-day windshield service across Mesquite neighborhoods",
  richardson: "Telecom Corridor, UTD area",
  carrollton: "Including Farmers Branch and Addison",
  irving: "Las Colinas, DFW Airport area",
  lewisville: "Flower Mound, Castle Hills, The Colony",
};

const WHY_CARDS = [
  {
    title: "Mobile Service — We Come To You",
    body: "You should not have to lose half a day to fix a windshield. Our mobile setup lets us meet you at home, at work, or wherever your vehicle is parked safely. No waiting room, no second trip, no unnecessary disruption.",
  },
  {
    title: "Straightforward Pricing",
    body: "Some drivers prefer to use insurance. Others would rather pay cash and keep the process simple. We quote both clearly when possible, explain what usually affects price, and help you choose the route that makes the most sense for your situation.",
  },
  {
    title: "Recalibration When Needed",
    body: "If your vehicle uses windshield-mounted cameras for lane assist, braking support, or other safety features, replacement may require recalibration. We account for that when needed so the systems tied to the glass are set back up correctly.",
  },
  {
    title: "Same-Day Service Across DFW",
    body: "A cracked windshield can turn into a bigger problem quickly, especially in Texas heat. When scheduling allows, we offer same-day mobile appointments across DFW and keep room open for urgent calls.",
  },
];

const STEPS = [
  {
    title: "Call or Send a Photo",
    body: `Call ${PHONE}, or text us a photo of the damage and your vehicle's year, make, and model. We usually respond within 15 minutes during business hours.`,
  },
  {
    title: "Get an Instant Quote",
    body: `We quote most jobs by phone after seeing the damage and your vehicle details. No "we'll get back to you" runaround — just straightforward cash and insurance pricing.`,
  },
  {
    title: "We Come To You",
    body: "Our mobile tech meets you at your home, office, or wherever your vehicle is parked safely. Most replacements take 60–90 minutes; many chip repairs take about 30 minutes.",
  },
  {
    title: "Drive Away the Same Day",
    body: "Most replacements are ready for safe drive-away about 60 minutes after installation. We'll walk you through cure time, aftercare, and what to avoid for the rest of the day.",
  },
];

const VEHICLES = [
  "Ford F-150",
  "Chevy Silverado",
  "RAM 1500",
  "Toyota Camry",
  "Honda Civic",
  "Honda Accord",
  "Toyota RAV4",
  "Chevy Tahoe",
  "Ford Explorer",
  "Tesla Model 3",
  "Tesla Model Y",
  "BMW",
  "Mercedes",
  "Lexus",
  "Audi",
  "Subaru",
  "Mazda",
  "Jeep",
  "Hyundai",
  "Kia",
];

const PROOF_POINTS = [
  "Same-day mobile service available for many DFW addresses",
  "Quotes by phone or photo for most common jobs",
  "OEM-spec materials and quality installation practices",
  "Recalibration support for vehicles that require it",
  "Service for windshield, side glass, rear glass, sunroof, fleet, and specialty jobs",
  "Cash-pay and insurance-assisted options available",
  "Coverage across Dallas, Plano, Garland, Mesquite, Richardson, Carrollton, Irving, and Lewisville",
  "Clear aftercare guidance before you drive away",
];

const FAQS = [
  {
    question: "How much does windshield replacement cost in Dallas?",
    answer:
      "For many cars, cash pricing falls in the $300-$700 range. SUVs, trucks, and specialty vehicles can run higher, and vehicles with windshield-mounted safety systems may add recalibration cost depending on the make and model. We quote most jobs over the phone after you describe the vehicle and damage, so you have a clear idea before scheduling.",
  },
  {
    question: "Do I need to use insurance?",
    answer:
      "No. Many Dallas drivers prefer to pay cash because it keeps the process simple, especially when the deductible is close to the repair cost. If you want to use insurance, we can help you understand how glass coverage usually works and what your deductible may be. Coverage depends on your policy, so it's smart to confirm details with your carrier first.",
  },
  {
    question: "How long does it take?",
    answer:
      "Many chip repairs take about 30 minutes. Windshield replacement usually takes 60–90 minutes, followed by safe drive-away time once the adhesive has set enough for normal use. If your vehicle requires recalibration, that can add time. Most jobs are completed within about 2 hours, depending on the vehicle and the work involved.",
  },
  {
    question: "What's ADAS calibration and why does it matter?",
    answer:
      "ADAS stands for Advanced Driver Assistance Systems — features like lane assist, automatic emergency braking, adaptive cruise control, and lane departure warning. Many of these systems rely on cameras mounted to or aligned with the windshield. After replacement, some vehicles require recalibration so those systems continue working properly. When your vehicle needs it, we handle it as part of the job.",
  },
  {
    question: "Can I drive with a cracked windshield in Texas?",
    answer:
      "It depends on the crack. Damage that interferes with the driver's view can create inspection and safety issues, especially if it spreads. Smaller chips or short cracks may be less urgent legally, but they usually get worse in Texas heat. Either way, it's smart to get it looked at before a simple repair turns into a full replacement.",
  },
  {
    question: "Do you really come to me?",
    answer:
      "Yes. We're mobile-first, and many jobs can be done at your home, office, parking lot, or another safe location. Some specialty jobs — like certain sunroof repairs or classic-car installations — may require a more controlled setting.",
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () =>
    buildSeo({
      description:
        "Mobile auto glass service across DFW: Dallas, Plano, Frisco, Garland, Irving. Windshield replacement, repair, ADAS recalibration. Call or text (214) 555-0100 for a free phone consultation.",
      canonical: "/",
      schema: [buildFAQPageSchema({ faqs: FAQS })],
    }),
});

function Index() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:py-14">
          <div className="flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand md:text-sm">
              Serving Dallas, TX & DFW
            </p>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
              Windshield Repair &amp; Replacement in Dallas, TX
            </h1>
            <p className="mt-4 text-base text-muted-foreground md:mt-5 md:text-lg">
              Same-day mobile service across Dallas-Fort Worth. We connect you
              with vetted local Dallas auto glass operators who come to your
              home, office, or driveway. Free phone consultation — no obligation.
            </p>

            {/* MOBILE: massive phone CTA (80px) above form */}
            <a
              href={TEL}
              className="mt-6 inline-flex items-center justify-center gap-3 rounded-lg bg-primary px-6 text-primary-foreground shadow-lg hover:bg-primary/90 md:hidden"
              style={{ minHeight: "80px" }}
              aria-label={`Call ${PHONE}`}
            >
              <Phone className="h-6 w-6" />
              <span className="text-xl font-extrabold tracking-tight">
                Call {PHONE}
              </span>
            </a>

            {/* DESKTOP: huge phone CTA (~64px) + secondary text-photo button */}
            <div className="mt-7 hidden flex-wrap items-center gap-3 md:flex">
              <a
                href={TEL}
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-primary px-7 text-primary-foreground shadow-lg transition hover:bg-primary/90"
                style={{ minHeight: "64px" }}
                aria-label={`Call ${PHONE}`}
              >
                <Phone className="h-5 w-5" />
                <span className="text-xl font-extrabold tracking-tight">
                  Call {PHONE}
                </span>
              </a>
              <a
                href={`sms:${siteConfig.phone.tel}`}
                className="rounded-lg border border-border bg-background px-5 py-3 text-base font-semibold hover:bg-accent"
              >
                Text a Photo of the Damage
              </a>
            </div>

            {/* MOBILE: text-photo button stacked below phone */}
            <a
              href={`sms:${siteConfig.phone.tel}`}
              className="mt-3 inline-flex items-center justify-center rounded-lg border border-border bg-background px-5 py-3 text-base font-semibold hover:bg-accent md:hidden"
            >
              Text a Photo of the Damage
            </a>
          </div>

          {/* RIGHT: Quote form (desktop right column / mobile below) */}
          <div id="quote" className="mt-2 scroll-mt-20 md:mt-0">
            <QuoteForm source="homepage" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold">Auto Glass Services Across Dallas-Fort Worth</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground">
            From a small rock chip on I-635 to a shattered windshield after a North Texas hailstorm, we handle the auto glass problems Dallas drivers deal with most. Our mobile service covers Dallas, Plano, Garland, Mesquite, Richardson, Carrollton, Irving, and Lewisville — often the same day. Call or text for a free quote.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.slug}
                className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition hover:border-brand hover:shadow-md"
              >
                <h3 className="text-xl font-bold">{s.shortName}</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">
                  {SERVICE_TAGLINES[s.slug] ?? s.excerpt}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold">
                  <a href={TEL} className="text-brand hover:underline">
                    Call {PHONE}
                  </a>
                  <a href={`/services/${s.slug}`} className="text-brand hover:underline">
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Dallas Drivers Choose Us */}
      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold">Why Dallas Drivers Choose Us</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Four things separate us from chain shops and shop-only providers:
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {WHY_CARDS.map((c) => (
              <div key={c.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold">{c.title}</h3>
                <p className="mt-3 text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold">How It Works</h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li
                key={s.title}
                className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand font-bold text-brand-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Insurance */}
      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold">How Auto Glass Insurance Usually Works in Texas</h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              This is one of the first questions Dallas drivers ask — and one of the areas where clear answers matter most.
            </p>
            <p>
              In many cases, comprehensive coverage helps pay for auto glass repair or replacement in Texas. Coverage depends on your policy, your deductible, and the type of damage, so it's always smart to confirm the details with your insurer before assuming what is covered.
            </p>
            <p>
              For small chip repairs, many drivers pay little or nothing out of pocket when insurance applies. For full windshield replacement, your comprehensive deductible often matters most. If your deductible is close to or higher than the replacement cost, paying cash can sometimes make more sense.
            </p>
            <p>
              That's why we offer both options clearly. We can help you understand whether it makes more sense to use insurance or take straightforward cash pricing and skip the claims process entirely.
            </p>
            <p>
              We regularly work with major carriers including State Farm, Allstate, Geico, USAA, Progressive, Liberty Mutual, and Nationwide. If you want to go through insurance, we can help you understand the next step. If you would rather pay cash, we can quote that too — no pressure either way.
            </p>
          </div>
          <p className="mt-6 text-sm font-semibold">
            Learn more:{" "}
            <a
              href="/learn/insurance-windshield-replacement-texas"
              className="text-brand hover:underline"
            >
              How Texas Windshield Insurance Works →
            </a>{" "}
            ·{" "}
            <a href="/learn/texas-windshield-laws" className="text-brand hover:underline">
              Texas Windshield Laws →
            </a>
          </p>
        </div>
      </section>

      {/* Serving Drivers Across DFW */}
      <section id="areas" className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold">Serving Drivers Across DFW</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            We serve Dallas and the major surrounding suburbs across the DFW Metroplex, with same-day service available for many addresses.
          </p>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((c) => (
              <li key={c.slug}>
                <a
                  href={`/locations/${c.slug}`}
                  className="block h-full rounded-xl border border-border bg-card p-5 transition hover:border-brand hover:shadow-md"
                >
                  <p className="font-semibold">{c.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {CITY_DESCRIPTIONS[c.slug] ?? c.excerpt}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* All Makes & Models */}
      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold">All Makes & Models</h2>
          <p className="mt-4 text-muted-foreground">
            We service the vehicles Dallas drivers actually own — from F-150s and Silverados to Hondas, Toyotas, Teslas, and other ADAS-equipped vehicles that may require careful recalibration. Truck, SUV, sedan, classic car, or commercial vehicle — call with your year, make, and model and we'll tell you what the job likely involves and how pricing usually works.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {VEHICLES.map((v) => (
              <li
                key={v}
                className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground"
              >
                {v}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Drivers Call Us First */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-bold">Why Drivers Call Us First</h2>
          <p className="mt-4 text-muted-foreground">
            Before you even decide whether to use insurance or pay cash, here's what most customers are looking for — and what we're built around:
          </p>
          <ul className="mt-8 space-y-3">
            {PROOF_POINTS.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-brand" />
                <span className="text-muted-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-3xl font-bold">Auto Glass FAQ</h2>
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
        id="contact"
        className="py-16 text-brand-foreground"
        style={{ backgroundColor: "var(--ink)" }}
      >
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold">Ready for a Free Quote?</h2>
          <p className="mt-3 opacity-80">
            Call now for same-day mobile service across DFW, or text us a photo of the damage for a fast quote during business hours.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={TEL}
              className="rounded-md bg-brand px-8 py-4 text-lg font-bold text-brand-foreground shadow hover:opacity-90"
            >
              Call {PHONE}
            </a>
            <a
              href="#quote"
              className="rounded-md border border-brand-foreground/40 bg-transparent px-8 py-4 text-lg font-bold text-brand-foreground hover:bg-brand-foreground/10"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
