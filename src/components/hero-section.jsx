import { ArrowRight, MapPin } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cream pt-28 md:pt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_85%_15%,var(--blush),transparent_60%)] opacity-70"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 md:grid-cols-2 md:gap-8 md:px-8 md:pb-24 lg:pb-28">
        <div className="order-2 md:order-1">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-rose">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Austin, Texas
          </span>
          <h1 className="mt-6 text-balance font-serif text-5xl leading-[1.05] tracking-tight text-rose sm:text-6xl lg:text-7xl">
            Blooms made <span className="italic text-foreground">with love</span>
          </h1>
          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {
              "Welcome to Jacky's Bouquetss. Every arrangement is hand-crafted with seasonal stems, gathered fresh and styled to make any moment unforgettable."
            }
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#bouquets"
              className="group inline-flex items-center gap-2 rounded-full bg-rose px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:shadow-md hover:brightness-110"
            >
              View Collections
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-rose/40 px-7 py-3.5 text-sm font-medium text-rose transition-all duration-300 hover:bg-secondary"
            >
              Our Story
            </a>
          </div>
        </div>

        <div className="relative order-1 md:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[48%_52%_47%_53%/55%_45%_55%_45%] bg-blush"
            />
            <div className="absolute inset-3 overflow-hidden rounded-[48%_52%_47%_53%/55%_45%_55%_45%] shadow-xl ring-1 ring-white/40">
              <img
                src="/images/hero-bouquet.png"
                alt="An elegant blush pink and cream floral arrangement"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
