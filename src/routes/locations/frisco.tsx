import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { buildBreadcrumbListSchema } from "@/lib/schema";
import { cities } from "@/data/cities";

const ENTRY = cities.find((c) => c.slug === "frisco")!;

export const Route = createFileRoute("/locations/frisco")({
  component: LocationPage,
  head: () =>
    buildSeo({
      title: "Auto Glass Frisco, TX | Windshield Replacement",
      description:
        "Mobile auto glass service in Frisco, TX — Star District, Stonebriar, Phillips Creek Ranch, Hollyhock. Windshield replacement and repair at your home or office. Call or text (214) 555-0100.",
      canonical: "/locations/frisco",
      noindex: ENTRY.placeholder ?? false,
      schema: [
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Locations", url: "/locations", position: 2 },
            { name: "Frisco", url: "/locations/frisco", position: 3 },
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
          Auto Glass Frisco, TX & Windshield Specialists
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Mobile windshield replacement and repair in Frisco — we come to your home, office, or driveway. Same-day service available.
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
