import { Phone } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import {
  buildServiceSchema,
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
} from "@/lib/schema";
import { services } from "@/data/services";
import { QuoteForm } from "@/components/QuoteForm";

const ENTRY = services.find((s) => s.slug === "back-window-replacement")!;

const SERVICE_DESCRIPTION =
  "Rear window replacement in Dallas-Fort Worth. Mobile service, defroster reconnection included. Free quotes.";

const FAQS = [
  {
    question: "Will the defroster grid still work after rear window replacement?",
    answer:
      "Yes — properly reconnecting the defroster grid is part of the replacement. The new rear glass comes with the defroster grid printed onto it, and the wiring connections from the vehicle are reconnected to the new glass during installation.",
  },
  {
    question: "What about an embedded antenna or radio reception?",
    answer:
      "Many rear windows have an embedded radio antenna. Replacement glass for vehicles that originally had one usually has the matching antenna built in. The connection is reattached during installation. If you notice a reception issue afterward, let us know — it usually traces back to a missed connection that is quick to fix.",
  },
  {
    question: "How long does back window replacement take?",
    answer:
      "Most rear window replacements take 60 to 90 minutes on-site, depending on the vehicle. Curing time for the adhesive is similar to a windshield. You will get clear guidance on when it is safe to drive away and what to avoid for the rest of the day.",
  },
  {
    question: "My rear window shattered into thousands of pieces — is that normal?",
    answer:
      "Yes. Rear glass is tempered, so it breaks into small pieces by design — safer than large shards. Cleanup includes a thorough vacuum of the cargo area, seat tracks, and trim before the new glass goes in.",
  },
  {
    question: "Can I drive with a broken rear window?",
    answer:
      "Short trips with a temporary plastic cover are sometimes possible, but it is not a good idea for long. Visibility is reduced, theft risk is up, and water gets into the interior in any rain. Most rear window replacements can be scheduled same-day or next-day across DFW.",
  },
];

export const Route = createFileRoute("/services/back-window-replacement")({
  component: ServicePage,
  head: () =>
    buildSeo({
      title: "Back Window Replacement Dallas, TX | Rear Glass",
      description: SERVICE_DESCRIPTION,
      canonical: "/services/back-window-replacement",
      noindex: ENTRY.placeholder ?? false,
      schema: [
        buildServiceSchema({
          serviceName: "Back Window Replacement",
          serviceDescription: SERVICE_DESCRIPTION,
          areaServed: siteConfig.cities.map((c) => `${c.name}, TX`),
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Services", url: "/services", position: 2 },
            { name: "Back Window Replacement", url: "/services/back-window-replacement", position: 3 },
          ],
        }),
        buildFAQPageSchema({ faqs: FAQS }),
      ],
    }),
});

function ServicePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:py-14">
          <div className="flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand md:text-sm">
              DFW Back Window Replacement
            </p>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
              Back Window Replacement Dallas, TX — Same-Day Mobile Service
            </h1>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              Rear window shattered? Call {siteConfig.phone.display} and we will connect you with a vetted DFW auto glass operator. Mobile installation with proper defroster grid reconnection — most jobs handled same day or next day, cash or insurance.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.phone.tel}`}
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-primary px-6 text-primary-foreground shadow-lg hover:bg-primary/90"
                style={{ minHeight: "64px" }}
                aria-label={`Call ${siteConfig.phone.display}`}
              >
                <Phone className="h-5 w-5" />
                <span className="text-xl font-extrabold tracking-tight">
                  Call {siteConfig.phone.display}
                </span>
              </a>
              <a
                href={`sms:${siteConfig.phone.tel}`}
                className="rounded-lg border border-border bg-background px-5 py-3 text-base font-semibold hover:bg-accent"
              >
                Text a Photo of the Damage
              </a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Full content for this page coming soon. Call now for an immediate free quote.
            </p>
          </div>

          <div id="quote" className="scroll-mt-20">
            <QuoteForm source="service:back-window-replacement" />
          </div>
        </div>
      </section>
    </main>
  );
}
