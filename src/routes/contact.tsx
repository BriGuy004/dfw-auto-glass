import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { buildBreadcrumbListSchema } from "@/lib/schema";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () =>
    buildSeo({
      title: "Contact",
      description:
        "Contact Auto Glass Pros Dallas for a free auto glass quote — same-day mobile windshield replacement and repair across the DFW Metroplex.",
      canonical: "/contact",
      schema: [
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Contact", url: "/contact", position: 2 },
          ],
        }),
      ],
    }),
});

function ContactPage() {
  return (
    <main className="bg-background">
      <section className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The fastest way to reach {siteConfig.brandName} is by phone. Tell us the year, make, and model of your vehicle plus a photo of the damage and we'll text you a free quote.
        </p>
        <div className="mt-8">
          <a
            href={`tel:${siteConfig.phone.tel}`}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow hover:bg-primary/90"
          >
            <Phone className="h-4 w-4" />
            Call {siteConfig.phone.display}
          </a>
        </div>
        <p className="mt-12 text-sm text-muted-foreground">
          Full contact form coming soon. Mobile service across the DFW Metroplex — Dallas, Plano, Garland, Mesquite, Richardson, Carrollton, Irving, Lewisville, and surrounding suburbs.
        </p>
      </section>
    </main>
  );
}
