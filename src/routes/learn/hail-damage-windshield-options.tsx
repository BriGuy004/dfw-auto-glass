import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/learn/hail-damage-windshield-options")({
  component: LearnPage,
  head: () =>
    buildSeo({
      title: "Hail Damage Windshield Options | Dallas Guide",
      description:
        "Hail-damaged windshields can be repaired if chips are small and few; replaced if shattered or in driver line of sight. Texas comprehensive coverage typically pays.",
      canonical: "/learn/hail-damage-windshield-options",
    }),
});

function LearnPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Hail Damage to Windshields: Your Options in Dallas</h1>
        <p className="mt-4 text-lg text-muted-foreground">Hail damage in Dallas? Here is when to repair vs. replace and how insurance handles it.</p>
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
