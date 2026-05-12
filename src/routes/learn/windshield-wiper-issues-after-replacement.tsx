import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { buildArticleSchema, buildBreadcrumbListSchema } from "@/lib/schema";
import { learnArticles } from "@/data/learn";

const ENTRY = learnArticles.find((a) => a.slug === "windshield-wiper-issues-after-replacement")!;

export const Route = createFileRoute("/learn/windshield-wiper-issues-after-replacement")({
  component: LearnPage,
  head: () =>
    buildSeo({
      title: "Wiper Issues After Windshield Replacement",
      description:
        "New windshield streaking? Usually wiper blades adapted to old glass curvature. Replace blades at the same time as windshield. Cleaning the new glass also helps.",
      canonical: "/learn/windshield-wiper-issues-after-replacement",
      noindex: ENTRY.placeholder ?? false,
      schema: [
        buildArticleSchema({
          headline: "Windshield Wiper Streaks After Replacement: Causes & Fixes",
          description: "New windshield streaking? Usually wiper blades adapted to old glass curvature. Replace blades at the same time as windshield. Cleaning the new glass also helps.",
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Learn", url: "/learn", position: 2 },
            { name: "Windshield Wiper Streaks After Replacement: Causes & Fixes", url: "/learn/windshield-wiper-issues-after-replacement", position: 3 },
          ],
        }),
      ],
    }),
});

function LearnPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Windshield Wiper Streaks After Replacement: Causes & Fixes</h1>
        <p className="mt-4 text-lg text-muted-foreground">New windshield, streaky wipers? Usually a wiper blade fix, not a glass problem.</p>
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
