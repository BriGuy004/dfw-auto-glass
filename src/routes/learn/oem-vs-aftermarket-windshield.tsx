import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { buildArticleSchema, buildBreadcrumbListSchema } from "@/lib/schema";
import { learnArticles } from "@/data/learn";

const ENTRY = learnArticles.find((a) => a.slug === "oem-vs-aftermarket-windshield")!;

export const Route = createFileRoute("/learn/oem-vs-aftermarket-windshield")({
  component: LearnPage,
  head: () =>
    buildSeo({
      title: "OEM vs Aftermarket Windshield | Dallas Guide",
      description:
        "OEM windshields are made by the original manufacturer; aftermarket are made by third parties to spec. Both meet safety standards. ADAS vehicles often need OEM for calibration accuracy.",
      canonical: "/learn/oem-vs-aftermarket-windshield",
      noindex: ENTRY.placeholder ?? false,
      schema: [
        buildArticleSchema({
          headline: "OEM vs Aftermarket Windshield: Which Is Right for You?",
          description: "OEM windshields are made by the original manufacturer; aftermarket are made by third parties to spec. Both meet safety standards. ADAS vehicles often need OEM for calibration accuracy.",
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Learn", url: "/learn", position: 2 },
            { name: "OEM vs Aftermarket Windshield: Which Is Right for You?", url: "/learn/oem-vs-aftermarket-windshield", position: 3 },
          ],
        }),
      ],
    }),
});

function LearnPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">OEM vs Aftermarket Windshield: Which Is Right for You?</h1>
        <p className="mt-4 text-lg text-muted-foreground">OEM costs more. Aftermarket is fine for most cars. ADAS vehicles often need OEM. Here is why.</p>
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
