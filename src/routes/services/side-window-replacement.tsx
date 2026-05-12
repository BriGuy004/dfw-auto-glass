import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { buildServiceSchema, buildBreadcrumbListSchema } from "@/lib/schema";
import { services } from "@/data/services";

const ENTRY = services.find((s) => s.slug === "side-window-replacement")!;

export const Route = createFileRoute("/services/side-window-replacement")({
  component: ServicePage,
  head: () =>
    buildSeo({
      title: "Side Window Replacement Dallas, TX | Door Glass Replacement",
      description:
        "Broken side window or door glass in Dallas? Same-day mobile replacement service across DFW. Free quotes.",
      canonical: "/services/side-window-replacement",
      noindex: ENTRY.placeholder ?? false,
      schema: [
        buildServiceSchema({
          serviceName: "Side Window Replacement",
          serviceDescription: "Broken side window or door glass in Dallas? Same-day mobile replacement service across DFW. Free quotes.",
          areaServed: siteConfig.cities.map((c) => `${c.name}, TX`),
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Services", url: "/services", position: 2 },
            { name: "Side Window Replacement", url: "/services/side-window-replacement", position: 3 },
          ],
        }),
      ],
    }),
});

function ServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Dallas Car Side Window Replacement</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Broken door glass or quarter window? We replace side glass same-day at your location.
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
