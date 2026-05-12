import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { buildArticleSchema, buildBreadcrumbListSchema } from "@/lib/schema";

export const Route = createFileRoute("/learn/windshield-repair-vs-replacement")({
  component: LearnPage,
  head: () =>
    buildSeo({
      title: "Windshield Repair vs Replacement | Dallas Guide",
      description:
        "Repair small chips and cracks; replace longer cracks and damage in the driver line of sight. Here is how to know which your windshield needs.",
      canonical: "/learn/windshield-repair-vs-replacement",
      schema: [
        buildArticleSchema({
          headline: "Windshield Repair vs Replacement: When to Choose Each",
          description: "Repair small chips and cracks; replace longer cracks and damage in the driver line of sight. Here is how to know which your windshield needs.",
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Learn", url: "/learn", position: 2 },
            { name: "Windshield Repair vs Replacement: When to Choose Each", url: "/learn/windshield-repair-vs-replacement", position: 3 },
          ],
        }),
      ],
    }),
});

function LearnPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Windshield Repair vs Replacement: When to Choose Each</h1>
        <p className="mt-4 text-lg text-muted-foreground">Repair or replace? Three rules tell you which.</p>
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
