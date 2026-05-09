import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/learn/texas-windshield-laws")({
  component: LearnPage,
  head: () =>
    buildSeo({
      title: "Texas Windshield Laws | Driving with Cracked Glass",
      description:
        "Texas Transportation Code requires windshields free of cracks that obstruct vision. Severely cracked windshields fail state inspection. Glass-only insurance claims do not raise premiums.",
      canonical: "/learn/texas-windshield-laws",
    }),
});

function LearnPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Texas Windshield Laws: What Drivers Need to Know</h1>
        <p className="mt-4 text-lg text-muted-foreground">Cracked windshield in Texas? Here is what the law actually says.</p>
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
