import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () =>
    buildSeo({
      title: "Terms of Service",
      description: "Terms of service for Auto Glass Pros Dallas.",
      canonical: "/terms",
      noindex: true,
    }),
});

function TermsPage() {
  return (
    <main className="bg-background">
      <section className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Full text coming soon — contact us for details.
        </p>
      </section>
    </main>
  );
}
