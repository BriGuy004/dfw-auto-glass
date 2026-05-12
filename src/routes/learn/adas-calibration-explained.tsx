import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { buildArticleSchema, buildBreadcrumbListSchema } from "@/lib/schema";
import { learnArticles } from "@/data/learn";

const ENTRY = learnArticles.find((a) => a.slug === "adas-calibration-explained")!;

export const Route = createFileRoute("/learn/adas-calibration-explained")({
  component: LearnPage,
  head: () =>
    buildSeo({
      title: "ADAS Calibration Explained | Dallas Auto Glass Guide",
      description:
        "Most 2018+ vehicles require ADAS calibration after windshield replacement. Lane assist, auto braking, adaptive cruise depend on cameras mounted to the glass. Skipping calibration is unsafe.",
      canonical: "/learn/adas-calibration-explained",
      noindex: ENTRY.placeholder ?? false,
      schema: [
        buildArticleSchema({
          headline: "ADAS Calibration: Why It Matters After Windshield Replacement",
          description: "Most 2018+ vehicles require ADAS calibration after windshield replacement. Lane assist, auto braking, adaptive cruise depend on cameras mounted to the glass. Skipping calibration is unsafe.",
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Learn", url: "/learn", position: 2 },
            { name: "ADAS Calibration: Why It Matters After Windshield Replacement", url: "/learn/adas-calibration-explained", position: 3 },
          ],
        }),
      ],
    }),
});

function LearnPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">ADAS Calibration: Why It Matters After Windshield Replacement</h1>
        <p className="mt-4 text-lg text-muted-foreground">Skipping calibration on a modern windshield is the #1 mistake cheap shops make.</p>
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
