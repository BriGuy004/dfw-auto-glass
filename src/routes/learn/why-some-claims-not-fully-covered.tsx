import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { buildArticleSchema, buildBreadcrumbListSchema } from "@/lib/schema";
import { learnArticles } from "@/data/learn";

const ENTRY = learnArticles.find((a) => a.slug === "why-some-claims-not-fully-covered")!;

export const Route = createFileRoute("/learn/why-some-claims-not-fully-covered")({
  component: LearnPage,
  head: () =>
    buildSeo({
      title: "Why Insurance Won't Cover Full Replacement",
      description:
        "Some policies cover only the deductible amount, exclude OEM glass, or limit ADAS calibration. Read your policy or call your agent before scheduling.",
      canonical: "/learn/why-some-claims-not-fully-covered",
      noindex: ENTRY.placeholder ?? false,
      schema: [
        buildArticleSchema({
          headline: "Why Some Insurance Claims Don't Cover Full Replacement",
          description: "Some policies cover only the deductible amount, exclude OEM glass, or limit ADAS calibration. Read your policy or call your agent before scheduling.",
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Learn", url: "/learn", position: 2 },
            { name: "Why Some Insurance Claims Don't Cover Full Replacement", url: "/learn/why-some-claims-not-fully-covered", position: 3 },
          ],
        }),
      ],
    }),
});

function LearnPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Why Some Insurance Claims Don't Cover Full Replacement</h1>
        <p className="mt-4 text-lg text-muted-foreground">Your policy may not cover everything. Here are the common gaps.</p>
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
