import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import {
  buildServiceSchema,
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
} from "@/lib/schema";
import { services } from "@/data/services";

const ENTRY = services.find((s) => s.slug === "windshield-replacement")!;

const SERVICE_DESCRIPTION =
  "Windshield replacement across DFW — Dallas, Plano, Frisco, Garland, Irving. Mobile service, ADAS recalibration when your vehicle requires it. Call or text (214) 555-0100.";

const FAQS = [
  {
    question: "Do I need to use insurance for windshield replacement?",
    answer:
      "No. Many DFW drivers prefer to pay cash because the comprehensive deductible often comes close to the replacement cost. If you would rather use insurance, we can walk through how glass coverage usually works in Texas. Coverage depends on your policy, so it is smart to confirm details with your carrier before assuming.",
  },
  {
    question: "How long does windshield replacement take?",
    answer:
      "Most replacements take 60 to 90 minutes on-site, followed by safe drive-away time once the adhesive sets enough for normal use. If your vehicle requires ADAS recalibration, expect additional time. Most jobs wrap within about two hours, depending on the vehicle and the work involved.",
  },
  {
    question: "Will my vehicle need ADAS recalibration?",
    answer:
      "Many vehicles with windshield-mounted cameras for lane assist, automatic braking, or adaptive cruise need recalibration after a windshield is replaced. Whether yours does depends on the year, make, model, and how the systems are configured. When your vehicle requires it, recalibration is handled as part of the job.",
  },
  {
    question: "Do you use OEM glass or aftermarket glass?",
    answer:
      "Both OEM and OEM-equivalent glass are options on many vehicles. The right choice depends on the vehicle, the ADAS features involved, and what you prefer. We will walk through the differences when you call so you can choose what fits the vehicle and the situation.",
  },
  {
    question: "Can the windshield be replaced at my home or office?",
    answer:
      "Yes. Mobile windshield replacement is the default for most jobs. A technician meets you at your home, your office, or another safe place to park, sets up around the vehicle, and completes the work there. A small number of jobs work better in a more controlled setting — we will tell you up front if yours is one of them.",
  },
  {
    question: "What if my windshield is cracked all the way across?",
    answer:
      "A full-length crack usually means replacement rather than repair. The longer the crack, the more it spreads in Texas heat — particularly through summer — so it is worth handling sooner rather than later. Send a photo of the damage by text and we can usually tell you whether repair is still on the table.",
  },
];

export const Route = createFileRoute("/services/windshield-replacement")({
  component: ServicePage,
  head: () =>
    buildSeo({
      title: "Windshield Replacement Dallas, TX | Same-Day Mobile Service",
      description: SERVICE_DESCRIPTION,
      canonical: "/services/windshield-replacement",
      noindex: ENTRY.placeholder ?? false,
      schema: [
        buildServiceSchema({
          serviceName: "Windshield Replacement",
          serviceDescription: SERVICE_DESCRIPTION,
          areaServed: siteConfig.cities.map((c) => `${c.name}, TX`),
        }),
        buildBreadcrumbListSchema({
          items: [
            { name: "Home", url: "/", position: 1 },
            { name: "Services", url: "/services", position: 2 },
            { name: "Windshield Replacement", url: "/services/windshield-replacement", position: 3 },
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
        <h1 className="text-4xl font-bold tracking-tight">Dallas Windshield Replacement Specialists</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Cracked or broken windshield? We replace it same-day with mobile service across DFW.
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
