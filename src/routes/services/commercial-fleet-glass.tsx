import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import {
  buildServiceSchema,
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
} from "@/lib/schema";
import { services } from "@/data/services";

const ENTRY = services.find((s) => s.slug === "commercial-fleet-glass")!;

const SERVICE_DESCRIPTION =
  "Commercial fleet auto glass service in Dallas. Volume pricing, scheduled maintenance, billing accounts for delivery, contractor, and service fleets.";

const FAQS = [
  {
    question: "Do you set up billing accounts for fleets?",
    answer:
      "Yes. Fleet billing — including consolidated monthly invoicing, fleet manager portals, and approved-vendor onboarding — is part of how fleet work gets routed. The exact setup depends on the fleet size and how the receiving operator handles billing. We will walk through that on the first call.",
  },
  {
    question: "Can you schedule recurring or scheduled-maintenance glass work?",
    answer:
      "Yes. Many delivery, service, and contractor fleets prefer scheduled inspection and replacement windows that avoid pulling vehicles out of service unexpectedly. Cycles, locations, and timing are coordinated with the fleet manager.",
  },
  {
    question: "What kinds of fleets do you work with?",
    answer:
      "Delivery (last-mile, parcel, food), service (HVAC, plumbing, electrical), contractor, rideshare, and corporate fleets — anywhere a vehicle going down for a day is a real cost. We adjust to the kind of work the vehicle does.",
  },
  {
    question: "Can a technician come to our facility or job site?",
    answer:
      "Yes. Most fleet work is performed on-site at the customer's yard, depot, or job location to avoid moving vehicles. Access, working space, and timing are coordinated with the fleet contact.",
  },
  {
    question: "What about emergency fleet repairs?",
    answer:
      "Same-day response is available for many DFW addresses for emergency fleet glass — broken windshield, smashed side glass after a break-in, rear window damage. Pricing and turnaround depend on the vehicle and the part.",
  },
];

export const Route = createFileRoute("/services/commercial-fleet-glass")({
  component: ServicePage,
  head: () =>
    buildSeo({
      title: "Commercial Fleet Auto Glass Dallas, TX | Volume Pricing",
      description: SERVICE_DESCRIPTION,
      canonical: "/services/commercial-fleet-glass",
      noindex: ENTRY.placeholder ?? false,
      schema: [
        buildServiceSchema({
          serviceName: "Commercial Fleet Glass",
          serviceDescription: SERVICE_DESCRIPTION,
          areaServed: siteConfig.cities.map((c) => `${c.name}, TX`),
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Services", url: "/services", position: 2 },
            { name: "Commercial Fleet Glass", url: "/services/commercial-fleet-glass", position: 3 },
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
        <h1 className="text-4xl font-bold tracking-tight">Dallas Commercial Fleet Auto Glass</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Running a fleet? We handle scheduled and emergency glass work with volume pricing and billing accounts.
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
