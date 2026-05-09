import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { learnArticles } from "@/data/learn";

export const Route = createFileRoute("/learn/")({
  component: LearnHub,
  head: () =>
    buildSeo({
      title: "Auto Glass Guide | Dallas Driver Resources",
      description:
        "Plain-English guides for Dallas drivers: windshield repair vs replacement, Texas glass laws, insurance claims, ADAS calibration, OEM vs aftermarket, and more.",
      canonical: "/learn",
    }),
});

function LearnHub() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Auto Glass Guides for Dallas Drivers</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Plain-English answers to the questions we get most — pricing, laws, insurance, calibration, and more.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {learnArticles.map((a) => (
            <li key={a.slug}>
              <a
                href={`/learn/${a.slug}`}
                className="block h-full rounded-xl border border-border bg-card p-6 shadow-sm transition hover:border-primary hover:shadow"
              >
                <h2 className="text-xl font-semibold">{a.h1}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{a.excerpt}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-primary">Read more →</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
