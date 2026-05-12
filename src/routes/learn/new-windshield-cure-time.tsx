import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { buildArticleSchema, buildBreadcrumbListSchema } from "@/lib/schema";

export const Route = createFileRoute("/learn/new-windshield-cure-time")({
  component: LearnPage,
  head: () =>
    buildSeo({
      title: "New Windshield Cure Time | Safe Drive-Away",
      description:
        "Most adhesives reach Safe Drive-Away Time in 30-60 minutes. Full cure takes 24 hours. Avoid car washes for 48 hours and slamming doors for 24 hours.",
      canonical: "/learn/new-windshield-cure-time",
      schema: [
        buildArticleSchema({
          headline: "How Long Should a New Windshield Cure Before Driving?",
          description: "Most adhesives reach Safe Drive-Away Time in 30-60 minutes. Full cure takes 24 hours. Avoid car washes for 48 hours and slamming doors for 24 hours.",
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Learn", url: "/learn", position: 2 },
            { name: "How Long Should a New Windshield Cure Before Driving?", url: "/learn/new-windshield-cure-time", position: 3 },
          ],
        }),
      ],
    }),
});

function LearnPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">How Long Should a New Windshield Cure Before Driving?</h1>
        <p className="mt-4 text-lg text-muted-foreground">Safe to drive in about 1 hour. Here is what to avoid for the next day.</p>
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
