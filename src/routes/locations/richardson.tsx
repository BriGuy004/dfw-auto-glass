import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { buildBreadcrumbListSchema } from "@/lib/schema";

export const Route = createFileRoute("/locations/richardson")({
  component: LocationPage,
  head: () =>
    buildSeo({
      title: "Auto Glass Richardson, TX | Windshield Replacement",
      description:
        "Auto glass in Richardson, TX. Windshield replacement, repair, mobile service. Same-day quotes. No insurance required.",
      canonical: "/locations/richardson",
      schema: [
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Locations", url: "/locations", position: 2 },
            { name: "Richardson", url: "/locations/richardson", position: 3 },
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
          Auto Glass Richardson, TX & Windshield Specialists
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Mobile windshield replacement and repair in Richardson — we come to your home, office, or driveway. Same-day service available.
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
