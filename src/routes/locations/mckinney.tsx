import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { buildBreadcrumbListSchema } from "@/lib/schema";
import { cities } from "@/data/cities";

const ENTRY = cities.find((c) => c.slug === "mckinney")!;

export const Route = createFileRoute("/locations/mckinney")({
  component: LocationPage,
  head: () =>
    buildSeo({
      title: "Auto Glass McKinney, TX | Windshield Replacement",
      description:
        "Auto glass in McKinney, TX. Windshield replacement, repair, mobile service. Same-day quotes. No insurance required.",
      canonical: "/locations/mckinney",
      noindex: ENTRY.placeholder ?? false,
      schema: [
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Locations", url: "/locations", position: 2 },
            { name: "McKinney", url: "/locations/mckinney", position: 3 },
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
          Auto Glass McKinney, TX & Windshield Specialists
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Mobile windshield replacement and repair in McKinney — we come to your home, office, or driveway. Same-day service available.
        </p>
        <div className="mt-8">
          <a
            href={`tel:${siteConfig.phone.tel}`}
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow hover:bg-primary/90"
          >
            Call {siteConfig.phone.display}
          </a>
        </div>
        <p className="mt-10 text-sm text-muted-foreground">
          Serving ZIP codes: {ENTRY.zipCodes.join(", ")}
        </p>
        <p className="mt-12 text-sm text-muted-foreground">
          Full content for this page coming soon. Call now for an immediate free quote.
        </p>
      </section>
    </main>
  );
}
