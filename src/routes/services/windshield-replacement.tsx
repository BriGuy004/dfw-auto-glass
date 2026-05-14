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

const ENTRY = services.find((s) => s.slug === "windshield-replacement")!;
const PHONE = siteConfig.phone.display;
const TEL = `tel:${siteConfig.phone.tel}`;
const SMS = `sms:${siteConfig.phone.tel}`;

const SERVICE_DESCRIPTION =
  "Windshield replacement across DFW — Dallas, Plano, Frisco, Garland, Irving. Mobile service, ADAS recalibration when your vehicle requires it. Call or text (214) 555-0100.";

const FAQS = [
  {
    question: "Do I need to use insurance for windshield replacement?",
    answer:
      "No. Many DFW drivers prefer to pay cash because the comprehensive deductible often comes close to the replacement cost. If you would rather use insurance, we can walk through how glass coverage usually works in Texas. Coverage depends on your policy, so it is smart to confirm details with your carrier before assuming.",
  },
  {
    question: "How long does windshield replacement take?",
    answer:
      "Most replacements take 60 to 90 minutes on-site, followed by safe drive-away time once the adhesive sets enough for normal use. If your vehicle requires ADAS recalibration, expect additional time. Most jobs wrap within about two hours, depending on the vehicle and the work involved.",
  },
  {
    question: "Will my vehicle need ADAS recalibration?",
    answer:
      "Many vehicles with windshield-mounted cameras for lane assist, automatic braking, or adaptive cruise need recalibration after a windshield is replaced. Whether yours does depends on the year, make, model, and how the systems are configured. When your vehicle requires it, recalibration is handled as part of the job.",
  },
  {
    question: "Do you use OEM glass or aftermarket glass?",
    answer:
      "Both OEM and OEM-equivalent glass are options on many vehicles. The right choice depends on the vehicle, the ADAS features involved, and what you prefer. We will walk through the differences when you call so you can choose what fits the vehicle and the situation.",
  },
  {
    question: "Can the windshield be replaced at my home or office?",
    answer:
      "Yes. Mobile windshield replacement is the default for most jobs. A technician meets you at your home, your office, or another safe place to park, sets up around the vehicle, and completes the work there. A small number of jobs work better in a more controlled setting — we will tell you up front if yours is one of them.",
  },
  {
    question: "What if my windshield is cracked all the way across?",
    answer:
      "A full-length crack usually means replacement rather than repair. The longer the crack, the more it spreads in Texas heat — particularly through summer — so it is worth handling sooner rather than later. Send a photo of the damage by text and we can usually tell you whether repair is still on the table.",
  },
];

const RELATED_SERVICES = [
  { slug: "windshield-repair", name: "Windshield Repair" },
  { slug: "mobile-auto-glass", name: "Mobile Auto Glass" },
  { slug: "adas-calibration", name: "ADAS Calibration" },
  { slug: "same-day-service", name: "Same-Day Service" },
];

export const Route = createFileRoute("/services/windshield-replacement")({
  component: ServicePage,
  head: () =>
    buildSeo({
      title: "Windshield Replacement Dallas, TX | Same-Day Mobile Service",
      description: SERVICE_DESCRIPTION,
      canonical: "/services/windshield-replacement",
      noindex: ENTRY.placeholder ?? false,
      schema: [
        buildServiceSchema({
          serviceName: "Windshield Replacement",
          serviceDescription: SERVICE_DESCRIPTION,
          areaServed: siteConfig.cities.map((c) => `${c.name}, TX`),
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Services", url: "/services", position: 2 },
            { name: "Windshield Replacement", url: "/services/windshield-replacement", position: 3 },
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
            DFW Windshield Replacement
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            Windshield Replacement Dallas, TX — Same-Day Mobile Service
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Cracked or shattered windshield? Call {PHONE} and we will connect you with a vetted DFW auto glass operator. Mobile installation at your home, office, or driveway across all ten cities we serve — most replacements handled the same day, cash or insurance.
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
            <QuoteForm source="service:windshield-replacement" />
          </div>
        </div>
      </section>

      {/* H2 #1: What is windshield replacement and when do I need it? */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="text-3xl font-bold">What is windshield replacement, and when do I need it?</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>
              Windshield replacement is exactly what it sounds like: the existing laminated front glass is removed from the vehicle, the pinch weld (the metal frame the glass bonds to) is cleaned and prepped, and a new piece of laminated glass is installed with automotive-grade urethane adhesive. It is different from chip or short-crack repair, which fills the damaged area with resin and keeps the original glass in place.
            </p>
            <p>
              You generally need replacement rather than repair when the damage is more than a small chip or short crack. The common signals: a crack longer than about six inches, damage in the driver's direct line of sight, multiple chips clustered together, damage that has reached the edge of the glass, or chips where the inside layer is compromised. Texas heat aggravates all of these — a small chip in March often becomes a full-length crack by July. If you are not sure which category your damage falls into, send a photo by text and we will tell you whether replacement is the call.
            </p>
            <p>
              Call {PHONE} for a phone consultation, or text a photo of the damage with the vehicle year, make, and model.
            </p>
          </div>
        </div>
      </section>

      {/* H2 #2: Process */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="text-3xl font-bold">How does the windshield replacement process work?</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>
              Most replacements run 60 to 90 minutes of actual installation work, followed by safe drive-away time once the adhesive has cured enough for normal use. If your vehicle has ADAS features that require recalibration after the glass is replaced, expect additional time on top. The full sequence usually looks like this:
            </p>
            <ol className="ml-5 list-decimal space-y-2">
              <li>
                <span className="font-semibold text-foreground">Confirm the right glass.</span> Vehicle year, make, model, trim level, and any ADAS sensors are verified before ordering so the correct piece of glass and the correct frit pattern are matched to your vehicle.
              </li>
              <li>
                <span className="font-semibold text-foreground">Protective prep.</span> The hood, dash, and surrounding paint are masked. Wiper arms, cowl covers, and any trim that sits over the glass are removed to expose the bonded edge.
              </li>
              <li>
                <span className="font-semibold text-foreground">Remove the old glass.</span> The urethane bond around the perimeter is cut and the glass is lifted out. The pinch weld is then inspected for rust or damage that needs treatment before the new glass goes in.
              </li>
              <li>
                <span className="font-semibold text-foreground">Bond the new glass.</span> A fresh bead of automotive urethane is applied, the new windshield is set in place to the correct alignment, and trim and wipers are reinstalled.
              </li>
              <li>
                <span className="font-semibold text-foreground">Safe drive-away and (if needed) ADAS recalibration.</span> The adhesive needs time to cure to the point of safe drive-away — typically about an hour for most modern urethanes used in DFW. If your vehicle requires ADAS recalibration, that is handled before you leave or scheduled for the same day.
              </li>
            </ol>
            <p>
              Call {PHONE} and we can walk through how the job looks for your specific vehicle before booking.
            </p>
          </div>
        </div>
      </section>

      {/* H2 #3: Insurance */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="text-3xl font-bold">Will my Texas insurance cover windshield replacement?</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>
              In many cases, yes. Texas comprehensive auto coverage often pays for windshield replacement after a deductible, and some carriers offer a separate Auto Glass Endorsement that lowers or eliminates the deductible specifically for glass. Coverage and deductible amounts vary by policy and carrier, so it is smart to confirm specifics with your insurer rather than assuming.
            </p>
            <p>
              The DFW operators we route to regularly bill State Farm, GEICO, Progressive, Allstate, USAA, Liberty Mutual, Farmers, and Nationwide. If your deductible is close to the replacement cost — which is common on liability-plus-comprehensive policies in Texas — paying cash and skipping the claim is often the cleaner option, both for speed and for keeping the claim off your record. When you call {PHONE}, we will quote both options so you can compare.
            </p>
            <p>
              Texas drivers also generally have the option to request OEM glass on most vehicles when an insurer is paying for the work. Carriers sometimes default to aftermarket glass for cost reasons, but the choice is usually yours — a particular consideration for ADAS-equipped vehicles, where camera calibration and original glass specifications are tightly linked.
            </p>
          </div>
        </div>
      </section>

      {/* H2 #4: Where in DFW */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <h2 className="text-3xl font-bold">Where in DFW do operators provide windshield replacement?</h2>
          <p className="mt-4 text-muted-foreground">
            Mobile windshield replacement is available across the ten DFW cities we serve. Most addresses fall within standard mobile coverage — call {PHONE} to confirm your specific location and timing.
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
                  Windshield Replacement {c.name}
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
          <h2 className="text-3xl font-bold">Windshield Replacement FAQ</h2>
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
            Cracked Windshield? Call {PHONE} Now.
          </h2>
          <p className="mt-3 opacity-80">
            Same-day mobile windshield replacement across the DFW metroplex. Cash or insurance options quoted up front.
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
