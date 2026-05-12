import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () =>
    buildSeo({
      title: "Privacy Policy",
      description: "Privacy policy for Auto Glass Pros Dallas.",
      canonical: "/privacy",
      noindex: true,
    }),
});

function PrivacyPage() {
  return (
    <main className="bg-background">
      <section className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Full text coming soon — contact us for details.
        </p>
      </section>
    </main>
  );
}
