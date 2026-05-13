import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import {
  buildServiceSchema,
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
} from "@/lib/schema";
import { services } from "@/data/services";

const ENTRY = services.find((s) => s.slug === "mobile-auto-glass")!;

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
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Dallas Mobile Auto Glass Service</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Don't drive on a damaged windshield. We come to you — home, office, parking lot, anywhere.
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
