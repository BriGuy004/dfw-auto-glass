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

const ENTRY = services.find((s) => s.slug === "mobile-auto-glass")!;
const PHONE = siteConfig.phone.display;
const TEL = `tel:${siteConfig.phone.tel}`;
const SMS = `sms:${siteConfig.phone.tel}`;

const SERVICE_DESCRIPTION =
  "Mobile auto glass service to your home, office, or driveway across Dallas, Plano, Frisco, Garland, Irving. Same-day in many cases. Call or text (214) 555-0100.";

const FAQS = [
  {
    question: "Where can you perform mobile auto glass service?",
    answer:
      "Your home, office, apartment parking lot, job site, or another safe place to park the vehicle. The spot needs to be reasonably level with enough clearance to work around the affected glass. We confirm the location works when you book.",
  },
  {
    question: "Is mobile service more expensive than going to a shop?",
    answer:
      "Mobile service is the default for most of the work we route, not a premium add-on. Pricing is quoted up front by phone after we see the vehicle and damage. Specialty work — like certain sunroof repairs or classic-car installations — sometimes requires a more controlled setting.",
  },
  {
    question: "What if it rains on the day of my appointment?",
    answer:
      "Adhesives and resins do not cure well in heavy rain or extreme cold, so we may need to reschedule if the weather does not cooperate. We would rather reschedule than do the work poorly. If you have covered parking — a garage, a carport, an office deck — that often keeps the appointment.",
  },
  {
    question: "Do you need power or water at the location?",
    answer:
      "Not for most jobs. The mobile setup carries its own power and supplies. The main things we need are a safe parking spot, a few feet of working room around the affected glass, and reasonably level ground.",
  },
  {
    question: "How far in advance do I need to book?",
    answer:
      "Same-day mobile service is available for many DFW addresses, depending on the vehicle, glass availability, and schedule. Specialty glass — older vehicles, certain ADAS-equipped models — sometimes needs to be ordered, which can add a day or two. Call or text and we will tell you what your specific job looks like.",
  },
];

const RELATED_SERVICES = [
  { slug: "windshield-replacement", name: "Windshield Replacement" },
  { slug: "windshield-repair", name: "Windshield Repair" },
  { slug: "same-day-service", name: "Same-Day Service" },
  { slug: "side-window-replacement", name: "Side Window Replacement" },
];

export const Route = createFileRoute("/services/mobile-auto-glass")({
  component: ServicePage,
  head: () =>
    buildSeo({
      title: "Mobile Auto Glass Dallas, TX | At-Home Service",
      description: SERVICE_DESCRIPTION,
      canonical: "/services/mobile-auto-glass",
      noindex: ENTRY.placeholder ?? false,
      schema: [
        buildServiceSchema({
          serviceName: "Mobile Auto Glass",
          serviceDescription: SERVICE_DESCRIPTION,
          areaServed: siteConfig.cities.map((c) => `${c.name}, TX`),
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Services", url: "/services", position: 2 },
            { name: "Mobile Auto Glass", url: "/services/mobile-auto-glass", position: 3 },
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
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:py-16">
          <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
            DFW Mobile Auto Glass
          </p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Mobile Auto Glass Dallas, TX — At-Home & At-Office Service
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Cracked windshield and no time to sit in a shop? Mobile service is how most DFW auto glass work gets done now. Call {PHONE} and a vetted operator comes to your home, office, or wherever the vehicle is parked — most jobs handled the same day across the ten cities we serve.
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
            <QuoteForm source="service:mobile-auto-glass" />
          </div>
        </div>
      </section>

      {/* H2 #1: What is mobile auto glass and when do I need it? */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="text-3xl font-bold">What is mobile auto glass, and when do I need it?</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>
              Mobile auto glass means the technician brings the tools, the materials, and the new glass to your vehicle instead of you driving the vehicle to a shop. For DFW drivers, that usually means an appointment at your house, your office parking lot, a covered apartment garage, or anywhere the car is already sitting.
            </p>
            <p>
              You probably want mobile service when: the damage makes driving unsafe or uncomfortable, you cannot afford the hours it would take to drop a car off and pick it up, your only available time is during a work block, or you live in an apartment without a convenient way to leave a vehicle for half a day. Mobile is also the simpler option after a break-in or after weather damage, when the vehicle should not be driven across town with compromised glass.
            </p>
            <p>
              Call {PHONE} and we will tell you whether your specific job is a good fit for mobile or whether a controlled setting would do better.
            </p>
          </div>
        </div>
      </section>

      {/* H2 #2: Process */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="text-3xl font-bold">How does mobile auto glass service work?</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>
              The mobile workflow is built to be self-contained — the technician brings power, supplies, and the right glass for the job:
            </p>
            <ol className="ml-5 list-decimal space-y-2">
              <li>
                <span className="font-semibold text-foreground">Phone or text intake.</span> Vehicle year, make, model, the type of damage, and the address. A photo by text speeds the quote up considerably.
              </li>
              <li>
                <span className="font-semibold text-foreground">Glass and parts confirmed.</span> The correct glass — OEM or OEM-equivalent depending on the vehicle and your preference — is sourced before the appointment is locked in.
              </li>
              <li>
                <span className="font-semibold text-foreground">Mobile setup at your location.</span> The technician arrives, confirms the workspace is suitable, masks the vehicle, and sets up the tools needed for the job.
              </li>
              <li>
                <span className="font-semibold text-foreground">Installation on-site.</span> Repair or replacement is completed right there. For replacements, automotive urethane bonds the new glass to the pinch weld.
              </li>
              <li>
                <span className="font-semibold text-foreground">Safe drive-away and any required calibration.</span> Most modern urethanes reach safe drive-away in about an hour. If your vehicle requires ADAS recalibration, that is handled before you drive away.
              </li>
            </ol>
            <p>
              Call {PHONE} to confirm what the appointment looks like for your specific vehicle and location.
            </p>
          </div>
        </div>
      </section>

      {/* H2 #3: Insurance */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="text-3xl font-bold">Will my Texas insurance cover mobile auto glass?</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>
              Mobile service does not generally change what your insurance covers — the coverage attaches to the work itself, not to where the work happens. In many cases, Texas comprehensive auto policies cover windshield repair or replacement, and many carriers offer an Auto Glass Endorsement that waives the deductible on chip repair. Coverage and deductibles vary by policy and carrier, so it is worth confirming with your insurer before assuming.
            </p>
            <p>
              The DFW operators we route to regularly bill State Farm, GEICO, Progressive, Allstate, USAA, Liberty Mutual, Farmers, and Nationwide for mobile jobs. Cash-pay is also straightforward — both options are quoted up front when you call {PHONE} so you can compare without committing.
            </p>
          </div>
        </div>
      </section>

      {/* H2 #4: Where in DFW */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <h2 className="text-3xl font-bold">Where in DFW do operators provide mobile auto glass?</h2>
          <p className="mt-4 text-muted-foreground">
            Mobile auto glass service runs across all ten DFW cities we cover. Most addresses fall within standard mobile coverage — call {PHONE} to confirm yours.
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
                  Mobile Auto Glass {c.name}
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
          <h2 className="text-3xl font-bold">Mobile Auto Glass FAQ</h2>
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
            Want Mobile Service? Call {PHONE} Now.
          </h2>
          <p className="mt-3 opacity-80">
            Same-day mobile auto glass at your home, office, or driveway across DFW.
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
