import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { buildBreadcrumbListSchema } from "@/lib/schema";
import { cities } from "@/data/cities";

const ENTRY = cities.find((c) => c.slug === "plano")!;

export const Route = createFileRoute("/locations/plano")({
  component: LocationPage,
  head: () =>
    buildSeo({
      title: "Auto Glass Plano, TX | Windshield Replacement",
      description:
        "Mobile auto glass service in Plano, TX — Legacy West, Willow Bend, West Plano, Russwood Acres. Windshield replacement and repair at your home or office. Call or text (214) 555-0100.",
      canonical: "/locations/plano",
      noindex: ENTRY.placeholder ?? false,
      schema: [
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Locations", url: "/locations", position: 2 },
            { name: "Plano", url: "/locations/plano", position: 3 },
          ],
        }),
      ],
    }),
});

function LocationPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">
          Auto Glass Plano, TX & Windshield Specialists
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Mobile windshield replacement and repair in Plano — we come to your home, office, or driveway. Same-day service available.
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
