import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/services/back-window-replacement")({
  component: ServicePage,
  head: () =>
    buildSeo({
      title: "Back Window Replacement Dallas, TX | Rear Glass",
      description:
        "Rear window replacement in Dallas-Fort Worth. Mobile service, defroster reconnection included. Free quotes.",
      canonical: "/services/back-window-replacement",
    }),
});

function ServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Dallas Rear Window Replacement</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Rear window shattered? We replace it with proper defroster grid reconnection.
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
