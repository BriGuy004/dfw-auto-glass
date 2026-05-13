import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import {
  buildServiceSchema,
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
} from "@/lib/schema";
import { services } from "@/data/services";

const ENTRY = services.find((s) => s.slug === "same-day-service")!;

const SERVICE_DESCRIPTION =
  "Same-day windshield replacement and repair in Dallas. Emergency auto glass service when you need it now. Mobile dispatch across DFW.";

const FAQS = [
  {
    question: "Can I really get same-day windshield service in Dallas?",
    answer:
      "In many cases, yes — for common vehicles, common glass, and a reasonable booking time. Specialty vehicles, ADAS-heavy newer cars, and less common glass sometimes require ordering parts, which adds a day or two. Call or text and we will tell you whether your specific vehicle is a same-day candidate.",
  },
  {
    question: "What time do I need to call to get same-day service?",
    answer:
      "Earlier in the day gives the most flexibility. Calls before mid-morning usually get same-day. By mid-afternoon, same-day depends on the part, the location, and how the schedule is sitting. After-hours requests get routed for the next morning.",
  },
  {
    question: "Does same-day cost more?",
    answer:
      "For common jobs, no — same-day mobile service is the standard, not an upcharge. Specialty vehicles and after-hours emergency work can have different pricing. The quote is given up front by phone so there is no surprise.",
  },
  {
    question: "Do I need to be there the entire time?",
    answer:
      "Not necessarily. Once the vehicle is set up and the technician confirms the spot is right, many jobs continue while you are inside. You will need to be available at the end for hand-off, payment, and aftercare guidance.",
  },
  {
    question: "What counts as an emergency?",
    answer:
      "A windshield cracked all the way across the driver's view, a side window broken in a break-in, or rear glass shattered — anything that affects visibility, security, or the ability to drive safely. Jobs with safety or weather urgency are prioritized over routine scheduling.",
  },
];

export const Route = createFileRoute("/services/same-day-service")({
  component: ServicePage,
  head: () =>
    buildSeo({
      title: "Same-Day Auto Glass Dallas, TX | Emergency Service",
      description: SERVICE_DESCRIPTION,
      canonical: "/services/same-day-service",
      noindex: ENTRY.placeholder ?? false,
      schema: [
        buildServiceSchema({
          serviceName: "Same-Day Service",
          serviceDescription: SERVICE_DESCRIPTION,
          areaServed: siteConfig.cities.map((c) => `${c.name}, TX`),
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Services", url: "/services", position: 2 },
            { name: "Same-Day Service", url: "/services/same-day-service", position: 3 },
          ],
        }),
        buildFAQPageSchema({ faqs: FAQS }),
      ],
    }),
});

function ServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Dallas Same-Day Auto Glass Service</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Cracked windshield this morning? We can have it replaced this afternoon.
        </p>
        <div className="mt-8">
          <a
            href={`tel:${siteConfig.phone.tel}`}
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow hover:bg-primary/90"
          >
            Call {siteConfig.phone.display}
          </a>
        </div>
        <p className="mt-12 text-sm text-muted-foreground">
          Full content for this page coming soon. Call now for an immediate free quote.
        </p>
      </section>
    </main>
  );
}
