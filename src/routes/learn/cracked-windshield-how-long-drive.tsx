import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { buildArticleSchema, buildBreadcrumbListSchema } from "@/lib/schema";
import { learnArticles } from "@/data/learn";

const ENTRY = learnArticles.find((a) => a.slug === "cracked-windshield-how-long-drive")!;

export const Route = createFileRoute("/learn/cracked-windshield-how-long-drive")({
  component: LearnPage,
  head: () =>
    buildSeo({
      title: "How Long Can I Drive with a Cracked Windshield in Texas?",
      description:
        "Texas allows driving with minor cracks but illegal for cracks obstructing the driver view. Cracks spread fast in Texas heat. Repair early to avoid full replacement.",
      canonical: "/learn/cracked-windshield-how-long-drive",
      noindex: ENTRY.placeholder ?? false,
      schema: [
        buildArticleSchema({
          headline: "How Long Can You Drive with a Cracked Windshield in Texas?",
          description: "Texas allows driving with minor cracks but illegal for cracks obstructing the driver view. Cracks spread fast in Texas heat. Repair early to avoid full replacement.",
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Learn", url: "/learn", position: 2 },
            { name: "How Long Can You Drive with a Cracked Windshield in Texas?", url: "/learn/cracked-windshield-how-long-drive", position: 3 },
          ],
        }),
      ],
    }),
});

function LearnPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">How Long Can You Drive with a Cracked Windshield in Texas?</h1>
        <p className="mt-4 text-lg text-muted-foreground">Legally? Depends on the crack location. Practically? Cracks spread fast in Texas heat.</p>
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
