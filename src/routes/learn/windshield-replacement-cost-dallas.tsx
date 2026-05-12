import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { buildArticleSchema, buildBreadcrumbListSchema } from "@/lib/schema";

export const Route = createFileRoute("/learn/windshield-replacement-cost-dallas")({
  component: LearnPage,
  head: () =>
    buildSeo({
      title: "Windshield Replacement Cost Dallas | Pricing Guide",
      description:
        "Windshield replacement cost in Dallas typically runs $300-$700 for sedans, $400-$900 for SUVs/trucks, more for ADAS-equipped vehicles. OEM vs aftermarket affects pricing.",
      canonical: "/learn/windshield-replacement-cost-dallas",
      schema: [
        buildArticleSchema({
          headline: "How Much Does Windshield Replacement Cost in Dallas?",
          description: "Windshield replacement cost in Dallas typically runs $300-$700 for sedans, $400-$900 for SUVs/trucks, more for ADAS-equipped vehicles. OEM vs aftermarket affects pricing.",
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Learn", url: "/learn", position: 2 },
            { name: "How Much Does Windshield Replacement Cost in Dallas?", url: "/learn/windshield-replacement-cost-dallas", position: 3 },
          ],
        }),
      ],
    }),
});

function LearnPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">How Much Does Windshield Replacement Cost in Dallas?</h1>
        <p className="mt-4 text-lg text-muted-foreground">Dallas windshield replacement runs $300-$900 depending on your vehicle. Here is what drives the price.</p>
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
