import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { services } from "@/data/services";

export const Route = createFileRoute("/services/")({
  component: ServicesHub,
  head: () =>
    buildSeo({
      title: "Auto Glass Services Dallas, TX",
      description:
        "Full-service auto glass in Dallas-Fort Worth: windshield replacement & repair, side and rear glass, sunroof, ADAS calibration, mobile and same-day service.",
      canonical: "/services",
    }),
});

function ServicesHub() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Auto Glass Services in Dallas-Fort Worth</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Everything we do — from chip repair to full replacement, ADAS calibration to fleet accounts.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <a
                href={`/services/${s.slug}`}
                className="block h-full rounded-xl border border-border bg-card p-6 shadow-sm transition hover:border-primary hover:shadow"
              >
                <h2 className="text-xl font-semibold">{s.shortName}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.excerpt}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-primary">Learn more →</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
