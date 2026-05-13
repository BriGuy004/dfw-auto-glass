import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
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

const ENTRY = services.find((s) => s.slug === "adas-calibration")!;
const PHONE = siteConfig.phone.display;
const TEL = `tel:${siteConfig.phone.tel}`;
const SMS = `sms:${siteConfig.phone.tel}`;

const SERVICE_DESCRIPTION =
  "ADAS recalibration after windshield replacement across DFW — Dallas, Plano, Frisco, Garland, Irving. Lane assist, automatic braking, adaptive cruise. Call or text (214) 555-0100.";

const FAQS = [
  {
    question: "What is ADAS calibration?",
    answer:
      "ADAS — Advanced Driver Assistance Systems — covers features like lane keep assist, automatic emergency braking, adaptive cruise control, and lane departure warning. These features rely on cameras and sensors aligned with the windshield. When the windshield is replaced, those cameras often need to be recalibrated so the safety systems point at the right reference.",
  },
  {
    question: "Does every vehicle need ADAS calibration after a windshield replacement?",
    answer:
      "No. Older vehicles without these systems do not need calibration at all. Many newer vehicles do — but how, where, and how long it takes depends on the year, make, model, and specific features. When your vehicle requires it, calibration is handled as part of the job.",
  },
  {
    question: "What is the difference between static and dynamic calibration?",
    answer:
      "Static calibration uses targets set up at specific distances in a controlled space — usually a shop setting. Dynamic calibration uses a scan tool while driving the vehicle on a road that meets the manufacturer's requirements. Some vehicles need both. The vehicle's procedure determines which applies.",
  },
  {
    question: "What happens if I skip ADAS calibration?",
    answer:
      "Skipping required calibration can mean lane assist drifts, automatic braking triggers at the wrong distance, or adaptive cruise misreads traffic — the safety systems still operate, but not against the reference they were designed for. When your vehicle calls for calibration, it is not optional in the sense of safe to skip.",
  },
  {
    question: "Does insurance cover ADAS calibration?",
    answer:
      "Most comprehensive policies that cover windshield replacement also cover calibration as part of the same claim. Coverage depends on your policy and carrier — it is smart to confirm before assuming.",
  },
];

const RELATED_SERVICES = [
  { slug: "windshield-replacement", name: "Windshield Replacement" },
  { slug: "windshield-repair", name: "Windshield Repair" },
  { slug: "mobile-auto-glass", name: "Mobile Auto Glass" },
  { slug: "same-day-service", name: "Same-Day Service" },
];

export const Route = createFileRoute("/services/adas-calibration")({
  component: ServicePage,
  head: () =>
    buildSeo({
      title: "ADAS Calibration Dallas, TX | Auto Glass Calibration",
      description: SERVICE_DESCRIPTION,
      canonical: "/services/adas-calibration",
      noindex: ENTRY.placeholder ?? false,
      schema: [
        buildServiceSchema({
          serviceName: "ADAS Calibration",
          serviceDescription: SERVICE_DESCRIPTION,
          areaServed: siteConfig.cities.map((c) => `${c.name}, TX`),
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Services", url: "/services", position: 2 },
            { name: "ADAS Calibration", url: "/services/adas-calibration", position: 3 },
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
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
            DFW ADAS Recalibration
          </p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            ADAS Calibration Dallas, TX — After Windshield Replacement
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Most 2018-or-newer vehicles with lane assist, automatic emergency braking, or adaptive cruise need camera recalibration after the windshield is replaced. Call {PHONE} and we will tell you whether your specific vehicle requires it — and handle it as part of the job when it does.
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
              Text Vehicle Year &amp; Model
            </a>
          </div>
        </div>
      </section>

      {/* H2 #1: What is ADAS calibration and when do I need it? */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="text-3xl font-bold">What is ADAS calibration, and when do I need it?</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>
              ADAS — Advanced Driver Assistance Systems — is the umbrella for the safety features that depend on cameras and sensors aimed through the windshield: lane keep assist, lane departure warning, automatic emergency braking, adaptive cruise control, and forward collision warning. The cameras are physically aligned to a reference point on the windshield. When the windshield is replaced, that reference moves, and the cameras need to be recalibrated to the new glass.
            </p>
            <p>
              You generally need calibration if your vehicle has any of those features and the windshield has been replaced. Tesla Model 3 and Model Y, Lexus RX and ES, Honda Civic and Accord, Toyota RAV4 and Camry, Subaru Outback, and most premium European vehicles all fall into the bucket of vehicles that require recalibration. The specific procedure — static, dynamic, or both — depends on the year, make, model, and trim. Older vehicles without ADAS features do not need calibration at all.
            </p>
            <p>
              If you are not sure where your vehicle falls, call {PHONE} with the year, make, model, and trim, and we can tell you whether calibration is part of the job.
            </p>
          </div>
        </div>
      </section>

      {/* H2 #2: Process */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="text-3xl font-bold">How does the ADAS calibration process work?</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>
              There are two calibration procedures, and a vehicle may need one or both:
            </p>
            <ol className="ml-5 list-decimal space-y-2">
              <li>
                <span className="font-semibold text-foreground">Static calibration.</span> Performed in a controlled space — typically a shop with level floor, controlled lighting, and enough room to set targets at the distances the vehicle's procedure calls for. The targets are positioned in front of the vehicle, a scan tool initiates the calibration, and the camera aligns itself to the reference targets.
              </li>
              <li>
                <span className="font-semibold text-foreground">Dynamic calibration.</span> Performed by driving the vehicle on a road that meets the manufacturer's requirements — clear lane markings, specific speed range, and a minimum distance. The scan tool runs the procedure while the vehicle is moving.
              </li>
              <li>
                <span className="font-semibold text-foreground">Verification.</span> After calibration completes, diagnostic codes are cleared and the system is verified. The technician confirms the safety systems are reading correctly before the vehicle is returned to you.
              </li>
            </ol>
            <p>
              Calibration adds time to the windshield replacement appointment — often 30 to 90 minutes depending on the vehicle and procedure. Call {PHONE} to confirm what your specific vehicle needs.
            </p>
          </div>
        </div>
      </section>

      {/* H2 #3: Insurance */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="text-3xl font-bold">Will my Texas insurance cover ADAS calibration?</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>
              In most cases, yes — when a Texas comprehensive policy covers the windshield replacement, calibration is typically part of the same claim. Carriers generally treat calibration as a required completion step of the replacement work rather than a separate service. Coverage and how it is invoiced depends on your policy and carrier, so it is smart to confirm specifics with your insurer.
            </p>
            <p>
              The DFW operators we route to regularly bill State Farm, GEICO, Progressive, Allstate, USAA, Liberty Mutual, Farmers, and Nationwide for both replacement and calibration. Cash-pay options are also available — both are quoted up front when you call {PHONE}.
            </p>
            <p>
              One thing worth knowing: when an insurer covers calibration, requesting OEM glass is a particularly reasonable conversation to have. ADAS cameras are designed against the original glass spec, and aftermarket variation can affect how cleanly the calibration completes. We will walk through the trade-offs for your vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* H2 #4: Where in DFW */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <h2 className="text-3xl font-bold">Where in DFW do operators provide ADAS calibration?</h2>
          <p className="mt-4 text-muted-foreground">
            ADAS calibration is available as part of windshield replacement work across all ten DFW cities we serve. Static calibration sometimes needs a controlled space rather than your driveway — we will tell you which applies when you call {PHONE}.
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
                  ADAS Calibration {c.name}
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
          <h2 className="text-3xl font-bold">ADAS Calibration FAQ</h2>
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
            Replacing a Windshield on an ADAS Vehicle? Call {PHONE}.
          </h2>
          <p className="mt-3 opacity-80">
            We will tell you whether your vehicle needs calibration and handle it as part of the job when it does.
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
              Text Year &amp; Model
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
