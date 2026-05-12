import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { buildArticleSchema, buildBreadcrumbListSchema } from "@/lib/schema";

export const Route = createFileRoute("/learn/quality-auto-glass-installer-signs")({
  component: LearnPage,
  head: () =>
    buildSeo({
      title: "How to Spot Quality Auto Glass Installer",
      description:
        "A quality installer uses urethane primers, OEM-spec adhesive, proper safe drive-away timing, and certified ADAS calibration. Cheap shops cut corners on all four.",
      canonical: "/learn/quality-auto-glass-installer-signs",
      schema: [
        buildArticleSchema({
          headline: "How to Spot a Quality Auto Glass Installer",
          description: "A quality installer uses urethane primers, OEM-spec adhesive, proper safe drive-away timing, and certified ADAS calibration. Cheap shops cut corners on all four.",
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Learn", url: "/learn", position: 2 },
            { name: "How to Spot a Quality Auto Glass Installer", url: "/learn/quality-auto-glass-installer-signs", position: 3 },
          ],
        }),
      ],
    }),
});

function LearnPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">How to Spot a Quality Auto Glass Installer</h1>
        <p className="mt-4 text-lg text-muted-foreground">Cheap shops skip primer, use generic adhesive, rush calibration. Here is what to ask.</p>
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
