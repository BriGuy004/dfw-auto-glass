import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { buildArticleSchema, buildBreadcrumbListSchema } from "@/lib/schema";
import { learnArticles } from "@/data/learn";

const ENTRY = learnArticles.find((a) => a.slug === "how-long-windshield-replacement-takes")!;

export const Route = createFileRoute("/learn/how-long-windshield-replacement-takes")({
  component: LearnPage,
  head: () =>
    buildSeo({
      title: "How Long Does Windshield Replacement Take?",
      description:
        "Windshield replacement typically takes 60-90 minutes plus 1 hour Safe Drive-Away Time. ADAS-equipped vehicles add 30-60 minutes for calibration.",
      canonical: "/learn/how-long-windshield-replacement-takes",
      noindex: ENTRY.placeholder ?? false,
      schema: [
        buildArticleSchema({
          headline: "How Long Does a Windshield Replacement Take?",
          description: "Windshield replacement typically takes 60-90 minutes plus 1 hour Safe Drive-Away Time. ADAS-equipped vehicles add 30-60 minutes for calibration.",
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Learn", url: "/learn", position: 2 },
            { name: "How Long Does a Windshield Replacement Take?", url: "/learn/how-long-windshield-replacement-takes", position: 3 },
          ],
        }),
      ],
    }),
});

function LearnPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">How Long Does a Windshield Replacement Take?</h1>
        <p className="mt-4 text-lg text-muted-foreground">Most replacements: 60-90 min install plus 1 hour cure time. Here is the full breakdown.</p>
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
