import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import {
  buildServiceSchema,
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
} from "@/lib/schema";
import { services } from "@/data/services";

const ENTRY = services.find((s) => s.slug === "sunroof-glass-repair")!;

const SERVICE_DESCRIPTION =
  "Sunroof or moonroof glass repair in Dallas. Specialty service for cracked, leaking, or shattered sunroofs. Free quotes.";

const FAQS = [
  {
    question: "Is sunroof repair the same as windshield repair?",
    answer:
      "No. Sunroof glass, the drainage system, the seal track, and the motor mechanism are all separate from a windshield. Many general auto glass shops skip sunroof work because the parts and procedures are vehicle-specific. We handle the specialty work as a routed service for vehicles where it makes sense.",
  },
  {
    question: "My sunroof leaks but the glass is not cracked. Is that a glass problem?",
    answer:
      "Often it is the drain tubes or the seal, not the glass itself. The four drainage tubes that run from the sunroof tray down through the pillars to the ground frequently get clogged with debris. We will diagnose the source before recommending a glass replacement that may not be necessary.",
  },
  {
    question: "Can a cracked sunroof be repaired or does it need replacement?",
    answer:
      "It depends on the type of damage and the vehicle. Small chips can sometimes be stabilized; larger cracks, shattered glass, or damage to the frame usually require replacement. Send a photo and we will tell you which path is realistic for your sunroof.",
  },
  {
    question: "How long does sunroof glass replacement take?",
    answer:
      "Sunroof replacement usually takes longer than a windshield because the assembly involves the track, motor, drainage, and seal — typically two to four hours depending on the vehicle. Specialty parts may need to be ordered for less common vehicles.",
  },
  {
    question: "Are aftermarket sunroof installations covered?",
    answer:
      "Aftermarket sunroofs — installed after the vehicle left the factory — can be more complex because the part is usually proprietary to the installer. We can sometimes route those jobs, but the answer depends on the original installer and the parts available. Call with the vehicle details and we will tell you what we find.",
  },
];

export const Route = createFileRoute("/services/sunroof-glass-repair")({
  component: ServicePage,
  head: () =>
    buildSeo({
      title: "Sunroof Glass Repair Dallas, TX | Moonroof Replacement",
      description: SERVICE_DESCRIPTION,
      canonical: "/services/sunroof-glass-repair",
      noindex: ENTRY.placeholder ?? false,
      schema: [
        buildServiceSchema({
          serviceName: "Sunroof Glass Repair",
          serviceDescription: SERVICE_DESCRIPTION,
          areaServed: siteConfig.cities.map((c) => `${c.name}, TX`),
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Services", url: "/services", position: 2 },
            { name: "Sunroof Glass Repair", url: "/services/sunroof-glass-repair", position: 3 },
          ],
        }),
        buildFAQPageSchema({ faqs: FAQS }),
      ],
    }),
});

function ServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Dallas Sunroof Glass Repair & Replacement</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Cracked or leaking sunroof? We handle the specialty work most shops skip.
        </p>
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
