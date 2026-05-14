import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { buildBreadcrumbListSchema } from "@/lib/schema";
import { QuoteForm } from "@/components/QuoteForm";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () =>
    buildSeo({
      title: "Contact Dallas Windshield and Auto Glass Pros",
      description:
        "Contact Dallas Windshield and Auto Glass Pros for a free auto glass quote — same-day mobile windshield replacement and repair across the DFW Metroplex.",
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
      <section className="container mx-auto max-w-5xl px-4 py-12 md:py-16">
        <div className="grid items-start gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
          <div className="flex flex-col">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand md:text-sm">
              Contact Us
            </p>
            <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">
              Contact Dallas Windshield and Auto Glass Pros
            </h1>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              Fastest way to reach us is by phone. Tell us the year, make, and
              model of your vehicle plus a photo of the damage, and a vetted
              local Dallas auto glass operator will text you a free quote.
            </p>

            <a
              href={`tel:${siteConfig.phone.tel}`}
              className="mt-7 inline-flex items-center justify-center gap-3 rounded-lg bg-primary px-6 text-primary-foreground shadow-lg hover:bg-primary/90"
              style={{ minHeight: "64px" }}
              aria-label={`Call ${siteConfig.phone.display}`}
            >
              <Phone className="h-5 w-5" />
              <span className="text-xl font-extrabold tracking-tight">
                Call {siteConfig.phone.display}
              </span>
            </a>

            <p className="mt-6 text-sm text-muted-foreground">
              Mobile service across the DFW Metroplex — Dallas, Plano, Garland,
              Mesquite, Richardson, Carrollton, Irving, Lewisville, Frisco, and
              McKinney.
            </p>
          </div>

          <div id="quote" className="scroll-mt-20">
            <QuoteForm source="contact" />
          </div>
        </div>
      </section>
    </main>
  );
}
