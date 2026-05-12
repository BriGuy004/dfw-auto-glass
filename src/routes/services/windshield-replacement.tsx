import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { buildServiceSchema, buildBreadcrumbListSchema } from "@/lib/schema";

export const Route = createFileRoute("/services/windshield-replacement")({
  component: ServicePage,
  head: () =>
    buildSeo({
      title: "Windshield Replacement Dallas, TX | Same-Day Mobile Service",
      description:
        "Windshield replacement in Dallas-Fort Worth. Same-day mobile service, ADAS calibration included, no insurance required. Free quotes with photo.",
      canonical: "/services/windshield-replacement",
      schema: [
        buildServiceSchema({
          serviceName: "Windshield Replacement",
          serviceDescription: "Windshield replacement in Dallas-Fort Worth. Same-day mobile service, ADAS calibration included, no insurance required. Free quotes with photo.",
          areaServed: siteConfig.cities.map((c) => `${c.name}, TX`),
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Services", url: "/services", position: 2 },
            { name: "Windshield Replacement", url: "/services/windshield-replacement", position: 3 },
          ],
        }),
      ],
    }),
});

function ServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Dallas Windshield Replacement Specialists</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Cracked or broken windshield? We replace it same-day with mobile service across DFW.
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
