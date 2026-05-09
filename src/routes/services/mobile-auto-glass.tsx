import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/services/mobile-auto-glass")({
  component: ServicePage,
  head: () =>
    buildSeo({
      title: "Mobile Auto Glass Dallas, TX | At-Home Service",
      description:
        "Mobile auto glass service across Dallas-Fort Worth. We come to your home, office, or anywhere safe to park. Same-day available.",
      canonical: "/services/mobile-auto-glass",
    }),
});

function ServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Dallas Mobile Auto Glass Service</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Don't drive on a damaged windshield. We come to you — home, office, parking lot, anywhere.
        </p>
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
