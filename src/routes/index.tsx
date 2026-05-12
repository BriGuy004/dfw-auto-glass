import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-windshield.jpg";
import mobileImg from "@/assets/mobile-service.jpg";
import mirrorImg from "@/assets/side-mirror.jpg";
import { buildSeo } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { cities } from "@/data/cities";

export const Route = createFileRoute("/")({
  component: Index,
  head: () =>
    buildSeo({
      description:
        "Cracked windshield in Dallas? Same-day mobile windshield replacement and repair across DFW. ADAS calibration, no insurance required. Free quotes — call or text photos.",
      canonical: "/",
    }),
});

const PHONE = siteConfig.phone.display;
const TEL = `tel:${siteConfig.phone.tel}`;

const SERVICE_IMAGES = [heroImg, mirrorImg, mobileImg];

function Index() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
              Serving the DFW Metroplex
            </p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              DFW Metroplex Auto Glass Repair & Windshield Replacement
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Fast, affordable, mobile auto glass service across Dallas, Fort Worth and the
              surrounding DFW Metroplex. Cracked windshield? Broken window? We'll come to you.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={TEL}
                className="rounded-md bg-brand px-6 py-3 font-semibold text-brand-foreground shadow hover:opacity-90"
              >
                Call Now {PHONE}
              </a>
              <a
                href="#quote"
                className="rounded-md border border-border bg-background px-6 py-3 font-semibold hover:bg-accent"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Auto glass technician repairing a cracked windshield in the DFW Metroplex"
              width={1280}
              height={896}
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="quote" className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Free Instant Quote</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us about your vehicle and we'll text or email you a price. No obligation.
            </p>
            <form className="mt-6 grid gap-4 md:grid-cols-2">
              <input className="rounded-md border border-input bg-background px-3 py-2" placeholder="First name" />
              <input className="rounded-md border border-input bg-background px-3 py-2" placeholder="Last name" />
              <input className="rounded-md border border-input bg-background px-3 py-2" placeholder="Phone number" />
              <input className="rounded-md border border-input bg-background px-3 py-2" placeholder="Email" />
              <input className="md:col-span-2 rounded-md border border-input bg-background px-3 py-2" placeholder="Vehicle (year, make, model)" />
              <textarea className="md:col-span-2 rounded-md border border-input bg-background px-3 py-2" rows={4} placeholder="Describe the damage" />
              <button
                type="button"
                className="md:col-span-2 rounded-md bg-brand px-6 py-3 font-semibold text-brand-foreground hover:opacity-90"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h2 className="text-3xl font-bold">Your Local DFW Auto Glass Team</h2>
        <p className="mt-4 text-muted-foreground">
          We're a DFW-based crew of certified auto glass technicians focused on one thing: getting
          you safely back on the road. From a small rock chip on the Dallas North Tollway to a full
          windshield replacement in Fort Worth, we handle it with care, the right tools, and
          transparent pricing.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold">Our Services</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Everything you need to keep your auto glass safe and clear — done right the first time.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <a
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:border-brand hover:shadow-md"
              >
                <img
                  src={SERVICE_IMAGES[i % SERVICE_IMAGES.length]}
                  alt=""
                  width={1280}
                  height={896}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.excerpt}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-brand group-hover:underline">
                    Learn more →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold">Auto Glass FAQ</h2>
        <div className="mt-8 space-y-4">
          {[
            {
              q: "What should I do the moment my windshield cracks?",
              a: "Cover the chip with clear tape to keep dirt out, avoid temperature shocks (no blasting AC or heat), and call us as soon as possible. The sooner we see it, the more likely a quick repair beats a full replacement.",
            },
            {
              q: "Will my insurance cover the repair?",
              a: "In Texas, comprehensive coverage typically pays for windshield repair and replacement, often with no deductible. We'll help you file the claim — most customers pay nothing out of pocket.",
            },
            {
              q: "How long does a repair or replacement take?",
              a: "Most chip repairs take 20–30 minutes. A full windshield replacement is usually 60–90 minutes, plus a short safe-drive-away time before you can hit the road.",
            },
            {
              q: "Do you really come to me?",
              a: "Yes. Our mobile vans are stocked to handle most jobs at your home, office, or worksite anywhere in the DFW Metroplex.",
            },
          ].map((f) => (
            <details key={f.q} className="group rounded-lg border border-border bg-card p-5">
              <summary className="cursor-pointer list-none font-semibold">
                {f.q}
                <span className="float-right text-brand transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Service area */}
      <section id="areas" className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold">DFW Mobile Auto Glass Service Area</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            We dispatch mobile techs across the entire DFW Metroplex — and most surrounding suburbs.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-3 text-center sm:grid-cols-3 md:grid-cols-4">
            {cities.map((c) => (
              <li key={c.slug}>
                <a
                  href={`/locations/${c.slug}`}
                  className="block rounded-md border border-border bg-card px-4 py-3 font-medium transition hover:border-brand hover:text-brand"
                >
                  {c.name}, TX
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold">What DFW Drivers Say</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              q: "Caught a rock on I-635 and they had me fixed in my office parking lot the next morning. Painless.",
              n: "— Marcus R., Dallas",
            },
            {
              q: "Insurance handled it, the tech was friendly, and the new windshield looks factory. Highly recommend.",
              n: "— Priya S., Plano",
            },
            {
              q: "Great price on a side window after someone broke into my truck. Cleaned up every shard. Lifesavers.",
              n: "— Jake M., Fort Worth",
            },
          ].map((t) => (
            <figure key={t.n} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <blockquote className="italic text-muted-foreground">"{t.q}"</blockquote>
              <figcaption className="mt-4 text-sm font-semibold">{t.n}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-ink py-16 text-brand-foreground" style={{ backgroundColor: "var(--ink)" }}>
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold">Ready When You Are</h2>
          <p className="mt-3 opacity-80">
            Call now for a free quote or to book a same-day mobile appointment anywhere in the DFW
            Metroplex.
          </p>
          <a
            href={TEL}
            className="mt-6 inline-block rounded-md bg-brand px-8 py-4 text-lg font-bold text-brand-foreground shadow hover:opacity-90"
          >
            Call {PHONE}
          </a>
        </div>
      </section>
    </div>
  );
}
