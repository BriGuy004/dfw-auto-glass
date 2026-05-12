import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { cities } from "@/data/cities";
import { buildBreadcrumbListSchema } from "@/lib/schema";

export const Route = createFileRoute("/locations/")({
  component: LocationsHub,
  head: () =>
    buildSeo({
      title: "Auto Glass Service Areas | Dallas-Fort Worth Metroplex",
      description:
        "Mobile auto glass coverage across the DFW Metroplex — Dallas, Plano, Garland, Mesquite, Richardson, Carrollton, Irving, Lewisville, and surrounding suburbs.",
      canonical: "/locations",
      schema: [
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Locations", url: "/locations", position: 2 },
          ],
        }),
      ],
    }),
});

function LocationsHub() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Service Areas Across the DFW Metroplex</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          We dispatch mobile techs across the entire Dallas-Fort Worth metroplex. Pick your city for local details.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c) => (
            <li key={c.slug}>
              <a
                href={`/locations/${c.slug}`}
                className="block h-full rounded-xl border border-border bg-card p-6 shadow-sm transition hover:border-primary hover:shadow"
              >
                <h2 className="text-xl font-semibold">{c.fullName}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{c.excerpt}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-primary">See details →</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
