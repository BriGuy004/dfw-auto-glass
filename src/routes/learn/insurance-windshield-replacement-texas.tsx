import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { buildArticleSchema, buildBreadcrumbListSchema } from "@/lib/schema";

export const Route = createFileRoute("/learn/insurance-windshield-replacement-texas")({
  component: LearnPage,
  head: () =>
    buildSeo({
      title: "Insurance & Windshield Replacement in Texas",
      description:
        "Texas law prohibits insurers from raising premiums for glass-only claims. Chip repair has $0 deductible. Full replacement requires meeting your deductible.",
      canonical: "/learn/insurance-windshield-replacement-texas",
      schema: [
        buildArticleSchema({
          headline: "Will Insurance Raise My Premiums for a Windshield Claim in Texas?",
          description: "Texas law prohibits insurers from raising premiums for glass-only claims. Chip repair has $0 deductible. Full replacement requires meeting your deductible.",
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Learn", url: "/learn", position: 2 },
            { name: "Will Insurance Raise My Premiums for a Windshield Claim in Texas?", url: "/learn/insurance-windshield-replacement-texas", position: 3 },
          ],
        }),
      ],
    }),
});

function LearnPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Will Insurance Raise My Premiums for a Windshield Claim in Texas?</h1>
        <p className="mt-4 text-lg text-muted-foreground">No, your premium will not go up. Here is exactly how Texas glass claims work.</p>
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
