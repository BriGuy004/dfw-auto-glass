import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { buildServiceSchema, buildBreadcrumbListSchema } from "@/lib/schema";

export const Route = createFileRoute("/services/commercial-fleet-glass")({
  component: ServicePage,
  head: () =>
    buildSeo({
      title: "Commercial Fleet Auto Glass Dallas, TX | Volume Pricing",
      description:
        "Commercial fleet auto glass service in Dallas. Volume pricing, scheduled maintenance, billing accounts for delivery, contractor, and service fleets.",
      canonical: "/services/commercial-fleet-glass",
      schema: [
        buildServiceSchema({
          serviceName: "Commercial Fleet Glass",
          serviceDescription: "Commercial fleet auto glass service in Dallas. Volume pricing, scheduled maintenance, billing accounts for delivery, contractor, and service fleets.",
          areaServed: siteConfig.cities.map((c) => `${c.name}, TX`),
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Services", url: "/services", position: 2 },
            { name: "Commercial Fleet Glass", url: "/services/commercial-fleet-glass", position: 3 },
          ],
        }),
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
