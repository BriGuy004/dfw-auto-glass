import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/learn/mobile-auto-glass-service-explained")({
  component: LearnPage,
  head: () =>
    buildSeo({
      title: "Mobile Auto Glass Service | How It Works",
      description:
        "Mobile auto glass service comes to your home, office, or driveway. We bring the tools, the glass, and the calibration equipment. Here is what to expect.",
      canonical: "/learn/mobile-auto-glass-service-explained",
    }),
});

function LearnPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Mobile Auto Glass Service: How It Works in Dallas</h1>
        <p className="mt-4 text-lg text-muted-foreground">Mobile service: we come to you. Here is how it actually works and what to prep.</p>
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
