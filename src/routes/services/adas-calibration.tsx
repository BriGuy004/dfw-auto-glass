import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { buildServiceSchema, buildBreadcrumbListSchema } from "@/lib/schema";

export const Route = createFileRoute("/services/adas-calibration")({
  component: ServicePage,
  head: () =>
    buildSeo({
      title: "ADAS Calibration Dallas, TX | Auto Glass Calibration",
      description:
        "ADAS calibration after windshield replacement in Dallas. Required for lane assist, automatic braking, adaptive cruise. Done right or your safety systems fail.",
      canonical: "/services/adas-calibration",
      schema: [
        buildServiceSchema({
          serviceName: "ADAS Calibration",
          serviceDescription: "ADAS calibration after windshield replacement in Dallas. Required for lane assist, automatic braking, adaptive cruise. Done right or your safety systems fail.",
          areaServed: siteConfig.cities.map((c) => `${c.name}, TX`),
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Services", url: "/services", position: 2 },
            { name: "ADAS Calibration", url: "/services/adas-calibration", position: 3 },
          ],
        }),
      ],
    }),
});

function ServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Dallas ADAS Calibration Specialists</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Lane assist, auto braking, adaptive cruise — these need recalibration after windshield replacement on most 2018+ vehicles.
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
