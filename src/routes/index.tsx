import { createFileRoute } from "@tanstack/react-router";

import heroInterior from "../assets/hero-interior.jpg";
import pastaRagu from "../assets/pasta-ragu.jpg";
import pizzaMargherita from "../assets/pizza-margherita.jpg";
import antipastoSalad from "../assets/antipasto-salad.jpg";
import familyKitchen from "../assets/family-kitchen.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mario's Italian Restaurant | North Beach, San Francisco" },
      { name: "description", content: "Family-owned Italian restaurant in San Francisco's North Beach since 1962. Handmade pastas, wood-fired pizzas, and Sunday gravy served with soul." },
      { property: "og:title", content: "Mario's Italian Restaurant | North Beach, San Francisco" },
      { property: "og:description", content: "Family-owned Italian restaurant since 1962. Handmade pastas, wood-fired pizzas, and Sunday gravy served with soul." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-winedeep font-body text-frost">
      {/* Layered frost background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 18% 8%, rgba(246,236,216,0.18), rgba(246,236,216,0) 42%), radial-gradient(90% 70% at 88% 16%, rgba(181,138,76,0.16), rgba(181,138,76,0) 46%), radial-gradient(120% 120% at 50% 118%, rgba(110,34,51,0.55), rgba(74,22,34,0) 55%), linear-gradient(165deg, #5A1B2A 0%, #4A1622 45%, #3A111C 100%)",
          }}
        />
        <div className="absolute -left-40 top-16 h-[520px] w-[520px] rounded-full bg-frost/10 blur-3xl" />
        <div className="absolute right-[-140px] top-1/3 h-[460px] w-[460px] rounded-full bg-brass/15 blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/3 h-[420px] w-[420px] rounded-full bg-wine/40 blur-3xl" />
      </div>

      {/* Navigation */}
      <header className="relative z-20 border-b border-frost/15">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="flex items-baseline gap-3">
            <span className="font-display text-2xl font-semibold tracking-tight text-frost">
              Mario's
            </span>
            <span className="hidden text-[11px] font-medium uppercase tracking-[0.28em] text-brass sm:inline">
              Italian · Est. 1962
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-frost/80 md:flex">
            <a href="#menu" className="transition-colors hover:text-frost">
              Menu
            </a>
            <a href="#story" className="transition-colors hover:text-frost">
              Our Story
            </a>
            <a href="#visit" className="transition-colors hover:text-frost">
              Visit
            </a>
          </nav>
          <a
            href="#reserve"
            className="inline-flex items-center gap-2 rounded-full bg-brass px-5 py-2 text-sm font-semibold text-winedeep ring-1 ring-brass/40 transition-transform hover:-translate-y-0.5"
          >
            Reserve a Table
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-14">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="animate-fade-up delay-150 mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-brass">
                <span className="h-px w-8 bg-brass/60" />
                North Beach, San Francisco
              </p>
              <h1 className="animate-fade-up delay-150 font-display text-5xl font-semibold leading-[1.02] text-frost text-balance sm:text-6xl lg:text-7xl" style={{ maxWidth: "14ch" }}>
                Sunday dinner, <span className="italic text-brass">the way it's always been.</span>
              </h1>
              <p className="animate-fade-up delay-350 mt-6 max-w-md text-lg leading-relaxed text-frost/80 text-pretty">
                Three generations of hand-rolled pasta, wood-fired pizza, and wine that pairs with a long conversation. Pull up a chair — the table's been set for you.
              </p>
              <div className="animate-fade-up delay-550 mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#reserve"
                  className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-semibold text-winedeep ring-1 ring-brass/40 transition-transform hover:-translate-y-0.5"
                >
                  Reserve a Table
                </a>
                <a
                  href="#menu"
                  className="inline-flex items-center gap-2 rounded-full border border-frost/25 px-6 py-3 text-sm font-medium text-frost transition-colors hover:bg-frost/5"
                >
                  See the Menu
                </a>
              </div>
            </div>

            {/* Ken Burns hero image */}
            <div className="animate-fade-up delay-350 relative lg:col-span-6">
              <div className="rounded-[28px] bg-frost/10 p-3 ring-1 ring-frost/20 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-[20px] outline-1 -outline-offset-1 outline-black/5">
                  <img
                    src={heroInterior}
                    alt="A warm candlelit interior of Mario's Italian Restaurant with red-checkered tablecloths and a family gathered around a long wooden table"
                    width={1440}
                    height={1440}
                    className="animate-kenburns aspect-square w-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-frost/15 px-5 py-4 ring-1 ring-frost/20 backdrop-blur-md">
                <p className="font-display text-3xl font-semibold leading-none text-frost">1962</p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-brass">
                  Three generations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu highlights */}
      <section id="menu" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-brass">
                <span className="h-px w-8 bg-brass/60" />
                From the kitchen
              </p>
              <h2 className="font-display text-4xl font-semibold leading-tight text-frost text-balance sm:text-5xl">
                Made the slow way
              </h2>
            </div>
            <p className="max-w-xs text-base leading-relaxed text-frost/70 text-pretty">
              Recipes written down in nonna's own hand, unchanged since before you were born.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="group rounded-3xl bg-frost/10 p-4 ring-1 ring-frost/20 backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1.5">
              <div className="overflow-hidden rounded-2xl outline-1 -outline-offset-1 outline-black/5">
                <img
                  src={pastaRagu}
                  alt="Hand-rolled fresh pasta with rich ragù in a rustic ceramic bowl"
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="px-2 pb-2 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-brass">
                    Pastas
                  </span>
                  <span className="font-display text-lg text-frost/90">$22</span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-semibold text-frost">
                  Tortellini in Brodo
                </h3>
                <p className="mt-2 text-base leading-relaxed text-frost/70 text-pretty">
                  Small stuffed pasta in a slow-simmered chicken and porcini broth, finished with a whisper of aged Parmigiano.
                </p>
              </div>
            </article>

            <article className="group rounded-3xl bg-frost/10 p-4 ring-1 ring-frost/20 backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1.5">
              <div className="overflow-hidden rounded-2xl outline-1 -outline-offset-1 outline-black/5">
                <img
                  src={pizzaMargherita}
                  alt="Wood-fired margherita pizza with blistered crust and fresh basil"
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="px-2 pb-2 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-brass">
                    Pizzas
                  </span>
                  <span className="font-display text-lg text-frost/90">$18</span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-semibold text-frost">
                  Nonna's Margherita
                </h3>
                <p className="mt-2 text-base leading-relaxed text-frost/70 text-pretty">
                  Blistered in the wood oven, San Marzano tomato, fior di latte, and basil picked from the window box out front.
                </p>
              </div>
            </article>

            <article className="group rounded-3xl bg-frost/10 p-4 ring-1 ring-frost/20 backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1.5">
              <div className="overflow-hidden rounded-2xl outline-1 -outline-offset-1 outline-black/5">
                <img
                  src={antipastoSalad}
                  alt="Classic Italian antipasto salad plate with cured meats, olives, and greens"
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="px-2 pb-2 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-brass">
                    Salads
                  </span>
                  <span className="font-display text-lg text-frost/90">$16</span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-semibold text-frost">
                  Antipasto della Casa
                </h3>
                <p className="mt-2 text-base leading-relaxed text-frost/70 text-pretty">
                  House-cured salumi, marinated olives, and charred vegetables over a bed of bitter greens and aged balsamic.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Family story */}
      <section id="story" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid items-center gap-10 rounded-[28px] bg-frost/10 p-6 ring-1 ring-frost/20 backdrop-blur-sm sm:p-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl outline-1 -outline-offset-1 outline-black/5">
                <img
                  src={familyKitchen}
                  alt="Vintage photograph of two chefs cooking together in Mario's kitchen in the 1960s"
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-brass">
                <span className="h-px w-8 bg-brass/60" />
                Our story
              </p>
              <h2 className="font-display text-4xl font-semibold leading-tight text-frost text-balance sm:text-5xl">
                A family kitchen, not a restaurant
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-frost/80 text-pretty">
                When Mario opened these doors in 1962, it was just a long table, a wood oven, and recipes carried across the ocean. His daughter Rosa kept the flame going through the '90s, and now his grandchildren stir the same pots every single day.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-6">
                <div>
                  <p className="font-display text-3xl font-semibold leading-none text-brass">60+</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-frost/60">
                    Years on the corner
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl font-semibold leading-none text-brass">3</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-frost/60">
                    Generations cooking
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl font-semibold leading-none text-brass">1962</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-frost/60">
                    The original recipes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours + Location + Reservation */}
      <section id="visit" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-5 lg:grid-cols-12">
            {/* Hours */}
            <div className="rounded-3xl bg-frost/10 p-7 ring-1 ring-frost/20 backdrop-blur-sm lg:col-span-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-brass">Hours</p>
              <ul className="mt-5 space-y-3 text-base text-frost/85">
                <li className="flex items-baseline justify-between gap-4">
                  <span className="text-frost/60">Mon – Wed</span>
                  <span className="font-display">5 – 10 pm</span>
                </li>
                <li className="flex items-baseline justify-between gap-4">
                  <span className="text-frost/60">Thu – Fri</span>
                  <span className="font-display">5 – 11 pm</span>
                </li>
                <li className="flex items-baseline justify-between gap-4">
                  <span className="text-frost/60">Saturday</span>
                  <span className="font-display">12 – 11 pm</span>
                </li>
                <li className="flex items-baseline justify-between gap-4">
                  <span className="text-brass">Sunday</span>
                  <span className="font-display text-frost">Family Lunch · 11 – 4 pm</span>
                </li>
              </ul>
            </div>

            {/* Location */}
            <div className="rounded-3xl bg-frost/10 p-7 ring-1 ring-frost/20 backdrop-blur-sm lg:col-span-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-brass">Find us</p>
              <p className="mt-5 font-display text-2xl font-semibold text-frost">100 Via Nostalgia</p>
              <p className="mt-1 text-base leading-relaxed text-frost/75">
                North Beach, San Francisco, CA (a fictional address)
              </p>
              <p className="mt-5 text-base text-frost/70">
                Two blocks from the cable car, look for the red awning and the smell of the oven.
              </p>
            </div>

            {/* Reservation CTA */}
            <div id="reserve" className="rounded-3xl bg-brass/90 p-7 ring-1 ring-brass/40 lg:col-span-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-winedeep/70">
                Reservations
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-winedeep">
                Save your seat
              </h3>
              <p className="mt-3 text-base leading-relaxed text-winedeep/80 text-pretty">
                Large family parties and Sunday lunch fill up fast. Call ahead and we'll hold the long table.
              </p>
              <a
                href="tel:+14155550162"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-winedeep px-6 py-3 text-sm font-semibold text-cream ring-1 ring-winedeep/40 transition-transform hover:-translate-y-0.5"
              >
                Call (415) 555-0162
              </a>
              <p className="mt-3 text-center text-sm text-winedeep/70">
                Walk-ins always welcome at the bar
              </p>
            </div>
          </div>

          <footer className="mt-12 flex flex-col gap-2 border-t border-frost/15 pt-8 text-sm text-frost/55 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-display text-lg text-frost/80">Mario's Italian Restaurant</span>
            <span>Family owned since 1962 · San Francisco, CA</span>
            <span>A fictional restaurant · sample project</span>
            <span>(415) 555-0162</span>
          </footer>
        </div>
      </section>
    </main>
  );
}
