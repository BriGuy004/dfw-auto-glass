import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/services/same-day-service")({
  component: ServicePage,
  head: () =>
    buildSeo({
      title: "Same-Day Auto Glass Dallas, TX | Emergency Service",
      description:
        "Same-day windshield replacement and repair in Dallas. Emergency auto glass service when you need it now. Mobile dispatch across DFW.",
      canonical: "/services/same-day-service",
    }),
});

function ServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Dallas Same-Day Auto Glass Service</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Cracked windshield this morning? We can have it replaced this afternoon.
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
