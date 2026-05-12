import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { buildServiceSchema, buildBreadcrumbListSchema } from "@/lib/schema";
import { services } from "@/data/services";

const ENTRY = services.find((s) => s.slug === "classic-car-glass")!;

export const Route = createFileRoute("/services/classic-car-glass")({
  component: ServicePage,
  head: () =>
    buildSeo({
      title: "Classic Car Glass Dallas, TX | Vintage Auto Glass",
      description:
        "Classic and vintage car glass replacement in Dallas. Specialty sourcing for restored vehicles, rubber gaskets, original-style glass. Free quotes.",
      canonical: "/services/classic-car-glass",
      noindex: ENTRY.placeholder ?? false,
      schema: [
        buildServiceSchema({
          serviceName: "Classic Car Glass",
          serviceDescription: "Classic and vintage car glass replacement in Dallas. Specialty sourcing for restored vehicles, rubber gaskets, original-style glass. Free quotes.",
          areaServed: siteConfig.cities.map((c) => `${c.name}, TX`),
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Services", url: "/services", position: 2 },
            { name: "Classic Car Glass", url: "/services/classic-car-glass", position: 3 },
          ],
        }),
      ],
    }),
});

function ServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Dallas Classic & Vintage Car Glass</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Restoring a classic? We source vintage glass and trim specialists usually outsource.
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
