import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () =>
    buildSeo({
      title: "About",
      description:
        "About Auto Glass Pros Dallas — local DFW auto glass team focused on same-day mobile service, ADAS calibration, and transparent pricing.",
      canonical: "/about",
    }),
});

function AboutPage() {
  return (
    <main className="bg-background">
      <section className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">About {siteConfig.brandName}</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We're a Dallas-Fort Worth auto glass team focused on same-day mobile service, proper ADAS calibration, and pricing you can trust.
        </p>
        <p className="mt-12 text-sm text-muted-foreground">
          Full About page coming soon. In the meantime, call{" "}
          <a className="font-semibold text-primary" href={`tel:${siteConfig.phone.tel}`}>
            {siteConfig.phone.display}
          </a>{" "}
          for a free quote.
        </p>
      </section>
    </main>
  );
}
