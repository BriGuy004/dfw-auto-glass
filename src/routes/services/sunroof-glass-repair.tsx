import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { buildServiceSchema, buildBreadcrumbListSchema } from "@/lib/schema";
import { services } from "@/data/services";

const ENTRY = services.find((s) => s.slug === "sunroof-glass-repair")!;

export const Route = createFileRoute("/services/sunroof-glass-repair")({
  component: ServicePage,
  head: () =>
    buildSeo({
      title: "Sunroof Glass Repair Dallas, TX | Moonroof Replacement",
      description:
        "Sunroof or moonroof glass repair in Dallas. Specialty service for cracked, leaking, or shattered sunroofs. Free quotes.",
      canonical: "/services/sunroof-glass-repair",
      noindex: ENTRY.placeholder ?? false,
      schema: [
        buildServiceSchema({
          serviceName: "Sunroof Glass Repair",
          serviceDescription: "Sunroof or moonroof glass repair in Dallas. Specialty service for cracked, leaking, or shattered sunroofs. Free quotes.",
          areaServed: siteConfig.cities.map((c) => `${c.name}, TX`),
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Services", url: "/services", position: 2 },
            { name: "Sunroof Glass Repair", url: "/services/sunroof-glass-repair", position: 3 },
          ],
        }),
      ],
    }),
});

function ServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Dallas Sunroof Glass Repair & Replacement</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Cracked or leaking sunroof? We handle the specialty work most shops skip.
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
