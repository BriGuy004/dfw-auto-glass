import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/services/windshield-repair")({
  component: ServicePage,
  head: () =>
    buildSeo({
      title: "Windshield Repair Dallas, TX | Chip & Crack Repair",
      description:
        "Fast windshield chip and crack repair across Dallas-Fort Worth. Mobile service, often $0 with insurance, prevents full replacement.",
      canonical: "/services/windshield-repair",
    }),
});

function ServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Dallas Windshield Chip & Crack Repair</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Small chips and cracks repaired in 30 minutes. Often free with insurance — Texas waives the deductible on chip repair.
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
