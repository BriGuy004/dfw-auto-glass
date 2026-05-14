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

const ENTRY = services.find((s) => s.slug === "classic-car-glass")!;

const SERVICE_DESCRIPTION =
  "Classic and vintage car glass replacement in Dallas. Specialty sourcing for restored vehicles, rubber gaskets, original-style glass. Free quotes.";

const FAQS = [
  {
    question: "Can you source glass for older or vintage vehicles?",
    answer:
      "For many classic vehicles, yes — though sourcing time depends on the year, make, and model. Some glass is reproduction, some is NOS (new old stock), and some needs to come from a specialty supplier. Expect a longer timeline than a modern windshield, and a different price profile.",
  },
  {
    question: "Will the original gaskets and trim be reused?",
    answer:
      "Sometimes yes, often no. Many older vehicles use a rubber gasket installation rather than urethane bonding, and that gasket can be deteriorated by the time the glass is replaced. Replacement gaskets are part of the conversation when you call.",
  },
  {
    question: "Do classic vehicles use the same installation method as modern cars?",
    answer:
      "No. Modern windshields are bonded to the body with urethane. Many pre-1980 vehicles use a rubber gasket pinch-weld installation. The technique, the tools, and the time required are different — which is why most general auto glass shops do not take this work.",
  },
  {
    question: "What if my classic car's glass is curved or rare?",
    answer:
      "Curved windshields, split-window rear glass, wraparound rear windows, and other specialty shapes are common in classics. Sourcing for these takes longer and the price reflects the rarity. Call with the year, make, and model and we will tell you what is realistic.",
  },
  {
    question: "Will mobile service work for a classic car?",
    answer:
      "For many classic-car installations, a more controlled setting is the right call — gaskets, original-style sealants, and careful body protection all benefit from working space. We will be honest about whether mobile or shop-style works best for your specific vehicle.",
  },
];

export const Route = createFileRoute("/services/classic-car-glass")({
  component: ServicePage,
  head: () =>
    buildSeo({
      title: "Classic Car Glass Dallas, TX | Vintage Auto Glass",
      description: SERVICE_DESCRIPTION,
      canonical: "/services/classic-car-glass",
      noindex: ENTRY.placeholder ?? false,
      schema: [
        buildServiceSchema({
          serviceName: "Classic Car Glass",
          serviceDescription: SERVICE_DESCRIPTION,
          areaServed: siteConfig.cities.map((c) => `${c.name}, TX`),
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Services", url: "/services", position: 2 },
            { name: "Classic Car Glass", url: "/services/classic-car-glass", position: 3 },
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
              DFW Classic & Vintage Car Glass
            </p>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
              Classic & Vintage Car Glass in Dallas, TX
            </h1>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              Restoring a classic? Call {siteConfig.phone.display} and we will connect you with a vetted DFW auto glass operator who sources vintage glass and trim and handles gasket installation and pinch-weld procedures for older vehicles.
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
            <QuoteForm source="service:classic-car-glass" />
          </div>
        </div>
      </section>
    </main>
  );
}
