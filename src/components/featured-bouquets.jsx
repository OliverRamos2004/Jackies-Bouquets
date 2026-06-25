import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const bouquets = [
  {
    name: '"MY FOREVER LOVE"',
    category: 'Special Occasions',
    image: '/images/white-pink-roses.jpeg',
  },
  {
    name: '"RED AND GOLD"',
    category: 'Hand-Crafted',
    image: '/images/red-gold.jpeg',
  },
  {
    name: '"TE AMO BONITA"',
    category: 'Just-Because',
    image: '/images/pink-white-roses.jpeg',
  },
  {
    name: '"ROSE PERFECTION"',
    category: 'Elegant Roses',
    image: '/images/white-roses.jpeg',
  },
  {
    name: '"BIRTHDAY ROSES"',
    category: 'Birthdays',
    image: '/images/rose-bday.jpeg',
  },
  {
    name: '"PINK AND WHITE"',
    category: 'For That Special Someone',
    image: '/images/pink-white.jpeg',
  },
]

export function FeaturedBouquets() {
  const trackRef = useRef(null)

  const scrollByCard = (dir) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('[data-card]')
    const amount = card ? card.offsetWidth + 24 : track.clientWidth * 0.8
    track.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section id="bouquets" className="bg-secondary/40 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-rose">
              Best sellers
            </p>
            <h2 className="mt-3 text-balance font-serif text-4xl text-foreground md:text-5xl">
              Featured bouquets
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Our most-loved arrangements, ready to brighten any occasion.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-rose/30 bg-background text-rose transition-all duration-300 hover:bg-rose hover:text-primary-foreground"
              aria-label="Previous bouquets"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-rose/30 bg-background text-rose transition-all duration-300 hover:bg-rose hover:text-primary-foreground"
              aria-label="Next bouquets"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {bouquets.map((b) => (
            <article
              key={b.name}
              data-card
              className="group w-[78%] flex-none snap-start sm:w-[46%] lg:w-[31%]"
            >
              <div className="relative overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border/60 transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-square overflow-hidden bg-blush/40">
                  <img
                    src={b.image || '/placeholder.svg'}
                    alt={`${b.name} bouquet`}
                    className="h-full w-full object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-xs font-medium text-rose backdrop-blur-sm">
                    {b.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl text-foreground">{b.name}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
