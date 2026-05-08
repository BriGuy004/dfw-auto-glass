import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-windshield.jpg";
import mobileImg from "@/assets/mobile-service.jpg";
import mirrorImg from "@/assets/side-mirror.jpg";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  component: Index,
  head: () =>
    buildSeo({
      description:
        "Cracked windshield in Dallas? Same-day mobile windshield replacement and repair across DFW. ADAS calibration, no insurance required. Free quotes — call or text photos.",
      canonical: "/",
    }),
});

const PHONE = "(214) 555-0123";
const TEL = "tel:2145550123";

const cities = [
  "Dallas", "Fort Worth", "Plano", "Arlington", "Irving", "Frisco",
  "Garland", "McKinney", "Mesquite", "Richardson", "Denton", "Grand Prairie",
  "Carrollton", "Lewisville", "Allen", "Grapevine", "Euless", "Coppell",
];

const services = [
  {
    title: "Auto Glass Repair in the DFW Metroplex",
    body:
      "Small chips and stress cracks don't have to mean a full windshield. Our technicians repair most damage in under 30 minutes, restoring strength and visibility without the price tag of a replacement.",
    img: heroImg,
  },
  {
    title: "Windshield Replacement",
    body:
      "When damage is too large or in the driver's line of sight, we install OEM-quality glass calibrated to your vehicle. Same-day appointments are available across the DFW Metroplex.",
    img: mirrorImg,
    reverse: true,
  },
  {
    title: "Side & Rear Window Replacement",
    body:
      "Broken side window from a break-in? We clean up the glass, vacuum the interior, and install new tempered glass that matches the original — usually the same day you call.",
    img: mirrorImg,
  },
  {
    title: "Side Mirror Repair & Replacement",
    body:
      "From cracked mirror glass to a fully knocked-off housing, we source the right part for your make and model and have you back on the road quickly.",
    img: mirrorImg,
    reverse: true,
  },
  {
    title: "Sunroof & Moonroof Glass",
    body:
      "Sunroofs are tricky — and most shops won't touch them. We replace and reseal sunroof glass on a wide range of vehicles, with workmanship you can trust.",
    img: heroImg,
  },
  {
    title: "Mobile Service — We Come To You",
    body:
      "Home, office, or roadside in the DFW Metroplex, our fully-stocked vans bring the shop to your driveway. No tow trucks, no waiting rooms, no wasted day off.",
    img: mobileImg,
    reverse: true,
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="border-b border-border bg-background/80 backdrop-blur sticky top-0 z-30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="flex items-baseline gap-2">
            <span className="text-xl font-extrabold tracking-tight">DFW Auto Glass Pros</span>
          </a>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#areas" className="hover:text-brand">Service Area</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
            <a href="#contact" className="hover:text-brand">Contact</a>
          </nav>
          <a
            href={TEL}
            className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground shadow hover:opacity-90"
          >
            {PHONE}
          </a>
        </div>
      </header>

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
          <div className="mt-12 space-y-12">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`grid items-center gap-8 md:grid-cols-2 ${s.reverse ? "md:[&>div:first-child]:order-2" : ""}`}
              >
                <div>
                  <img
                    src={s.img}
                    alt={s.title}
                    width={1280}
                    height={896}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-xl object-cover shadow"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground">{s.body}</p>
                  <a href={TEL} className="mt-4 inline-block font-semibold text-brand hover:underline">
                    Call {PHONE} →
                  </a>
                </div>
              </div>
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
              <li
                key={c}
                className="rounded-md border border-border bg-card px-4 py-3 font-medium hover:border-brand"
              >
                {c}, TX
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

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} DFW Auto Glass Pros · Serving the entire DFW Metroplex
      </footer>
    </div>
  );
}
