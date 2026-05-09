import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/learn/side-window-replacement-process")({
  component: LearnPage,
  head: () =>
    buildSeo({
      title: "Side Window vs Windshield Damage",
      description:
        "Side windows are tempered glass that shatters into pebbles when broken. Different process from windshield replacement: vacuum debris, install new glass in track, recalibrate window switch.",
      canonical: "/learn/side-window-replacement-process",
    }),
});

function LearnPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Side Window Replacement: Process & Differences from Windshield</h1>
        <p className="mt-4 text-lg text-muted-foreground">Side glass shatters into pebbles. The replacement process is totally different from windshield work.</p>
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
