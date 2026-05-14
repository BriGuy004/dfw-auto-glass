import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { QuoteForm } from "@/components/QuoteForm";
import {
  buildServiceSchema,
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
} from "@/lib/schema";
import { services } from "@/data/services";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ENTRY = services.find((s) => s.slug === "windshield-repair")!;
const PHONE = siteConfig.phone.display;
const TEL = `tel:${siteConfig.phone.tel}`;
const SMS = `sms:${siteConfig.phone.tel}`;

const SERVICE_DESCRIPTION =
  "Windshield chip and crack repair across DFW — Dallas, Plano, Frisco, Garland, Irving. Mobile service, insurance often helps depending on policy. Call or text (214) 555-0100.";

const FAQS = [
  {
    question: "How long does a windshield chip repair take?",
    answer:
      "Most chip repairs take about 30 minutes on-site. The technician cleans the chip, injects resin, cures it under UV light, and inspects the result. You can usually drive the vehicle right away after the work is complete.",
  },
  {
    question: "When is a chip repairable versus needing full replacement?",
    answer:
      "Chips smaller than a quarter and short cracks — generally under about six inches — are often repairable. Damage that is larger, in the driver's direct line of sight, or has spread into multiple cracks usually needs full windshield replacement. Send a photo by text and we can usually tell you which situation you are in.",
  },
  {
    question: "Does insurance cover windshield chip repair?",
    answer:
      "In many cases yes. Texas comprehensive auto policies often cover chip repair with little or no out-of-pocket cost, because repair is much cheaper than full replacement. Coverage depends on your policy — confirm specifics with your insurer before assuming.",
  },
  {
    question: "Will I be able to see the chip after it is repaired?",
    answer:
      "A repaired chip is usually still faintly visible up close, but the structural damage is sealed and the spread is stopped. The goal of repair is to keep a small problem from becoming a full replacement, not to make the glass look brand new.",
  },
  {
    question: "Can a small chip really turn into a full crack?",
    answer:
      "Yes — Texas heat is hard on damaged glass. A chip can spread within hours after a temperature swing, a bump in the road, or a hot day sitting in the sun. The earlier the repair, the more likely the damage stops at repair and does not become a full replacement.",
  },
];

const RELATED_SERVICES = [
  { slug: "windshield-replacement", name: "Windshield Replacement" },
  { slug: "mobile-auto-glass", name: "Mobile Auto Glass" },
  { slug: "same-day-service", name: "Same-Day Service" },
  { slug: "adas-calibration", name: "ADAS Calibration" },
];

export const Route = createFileRoute("/services/windshield-repair")({
  component: ServicePage,
  head: () =>
    buildSeo({
      title: "Windshield Repair Dallas, TX | Chip & Crack Repair",
      description: SERVICE_DESCRIPTION,
      canonical: "/services/windshield-repair",
      noindex: ENTRY.placeholder ?? false,
      schema: [
        buildServiceSchema({
          serviceName: "Windshield Repair",
          serviceDescription: SERVICE_DESCRIPTION,
          areaServed: siteConfig.cities.map((c) => `${c.name}, TX`),
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Services", url: "/services", position: 2 },
            { name: "Windshield Repair", url: "/services/windshield-repair", position: 3 },
          ],
        }),
        buildFAQPageSchema({ faqs: FAQS }),
      ],
    }),
});

function ServicePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:py-14">
          <div className="flex flex-col">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand md:text-sm">
            DFW Windshield Chip &amp; Crack Repair
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            Windshield Repair Dallas, TX — Chip &amp; Short-Crack Repair
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Caught a rock on the Tollway? Most small chips and short cracks can be repaired in about 30 minutes on-site — no waiting, no new windshield. Call {PHONE} and we will connect you with a vetted DFW operator who can come to you the same day.
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
            <QuoteForm source="service:windshield-repair" />
          </div>
        </div>
      </section>

      {/* H2 #1: What is windshield repair and when do I need it? */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="text-3xl font-bold">What is windshield repair, and when do I need it?</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>
              Windshield repair is a resin injection that fills the damaged section of the glass and stops the chip or crack from spreading. The existing windshield stays in the vehicle. Repair is different from replacement — replacement removes the entire piece of glass and bonds in a new one.
            </p>
            <p>
              Repair is usually the right call when the damage is small and isolated: chips smaller than a quarter, short cracks under about six inches, and chips that have not yet reached the edge of the glass or spread into branching cracks. Damage in the driver's direct line of sight or anywhere with multiple impact points usually means replacement instead. In Texas heat, the window for choosing repair over replacement is narrower than people expect — a stable-looking chip in March can run all the way across the glass by July after a 100-degree afternoon in a parking lot.
            </p>
            <p>
              The fastest way to know which category you are in is to send a photo. Text the damage to {PHONE} along with the vehicle year, make, and model, and we will tell you whether repair is still on the table.
            </p>
          </div>
        </div>
      </section>

      {/* H2 #2: Process */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="text-3xl font-bold">How does the windshield repair process work?</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>
              A chip repair is one of the faster jobs in the auto glass trade — about 30 minutes on-site from setup to clean glass. The sequence is straightforward:
            </p>
            <ol className="ml-5 list-decimal space-y-2">
              <li>
                <span className="font-semibold text-foreground">Inspection and confirmation.</span> The technician confirms the damage is repairable — size, location, and whether the inner glass layer is compromised.
              </li>
              <li>
                <span className="font-semibold text-foreground">Clean and stabilize.</span> The chip area is cleaned, any loose glass is removed, and an injector bridge is mounted directly over the damage.
              </li>
              <li>
                <span className="font-semibold text-foreground">Resin injection.</span> A specialty resin is drawn into the chip under vacuum to displace air, then pressure is applied to push the resin into the fine fracture lines.
              </li>
              <li>
                <span className="font-semibold text-foreground">UV cure.</span> The resin is cured under UV light to harden it into the damaged area, bonding the fractured glass back together structurally.
              </li>
              <li>
                <span className="font-semibold text-foreground">Polish and inspection.</span> Excess resin is scraped off, the area is polished, and the result is inspected. You can typically drive the vehicle right after the work is complete.
              </li>
            </ol>
            <p>
              Call {PHONE} to confirm whether your specific damage is a good candidate before booking.
            </p>
          </div>
        </div>
      </section>

      {/* H2 #3: Insurance */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="text-3xl font-bold">Will my Texas insurance cover windshield repair?</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>
              In many cases, yes — and chip repair is often the cheapest part of a glass policy to use. Texas comprehensive auto coverage commonly pays for chip repair, and many carriers offer a separate Auto Glass Endorsement that specifically waives the deductible on repair (because repair is much cheaper than letting a chip turn into a full replacement). Coverage and endorsements vary by policy and carrier, so it is smart to confirm with your insurer rather than assuming.
            </p>
            <p>
              The DFW operators we route to regularly bill State Farm, GEICO, Progressive, Allstate, USAA, Liberty Mutual, Farmers, and Nationwide on glass repair. If your carrier waives the deductible on repair, your out-of-pocket may be zero. If your policy is liability-only or you do not want to involve insurance, repair is typically inexpensive enough on cash that most drivers in Plano, Frisco, and the rest of the DFW suburbs just pay out of pocket and move on. Call {PHONE} and we will quote both ways before you decide.
            </p>
          </div>
        </div>
      </section>

      {/* H2 #4: Where in DFW */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <h2 className="text-3xl font-bold">Where in DFW do operators provide windshield repair?</h2>
          <p className="mt-4 text-muted-foreground">
            Mobile chip and crack repair is available across all ten DFW cities we serve. Most addresses are within standard mobile coverage — call {PHONE} to confirm your location.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {siteConfig.cities.map((c) => (
              <li
                key={c.slug}
                className="rounded-lg border border-border bg-card p-4"
              >
                <a
                  className="font-semibold hover:text-brand hover:underline"
                  href={`/locations/${c.slug}`}
                >
                  Windshield Repair {c.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <h3 className="text-lg font-semibold">Related services</h3>
            <ul className="mt-3 flex flex-wrap gap-3">
              {RELATED_SERVICES.map((s) => (
                <li key={s.slug}>
                  <a
                    className="rounded-md border border-border bg-card px-4 py-2 text-sm font-medium hover:text-brand hover:underline"
                    href={`/services/${s.slug}`}
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* H2 #5: FAQ */}
      <section id="faq" className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="text-3xl font-bold">Windshield Repair FAQ</h2>
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
            Chip in Your Windshield? Call {PHONE} Now.
          </h2>
          <p className="mt-3 opacity-80">
            Mobile chip and short-crack repair across DFW. Texas heat does not wait — neither should you.
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
