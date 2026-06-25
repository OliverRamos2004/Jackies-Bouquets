import { Leaf, Hand, Sparkles } from 'lucide-react'

const points = [
  { Icon: Hand, label: 'Hand-crafted', text: 'Every stem placed by hand.' },
  { Icon: Leaf, label: 'Locally sourced', text: 'Fresh blooms from Texas growers.' },
  { Icon: Sparkles, label: 'Personalized', text: 'Premium bouquets styled to suit your story.' },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl">
            <img
              src="/images/hero-img.jpeg"
              alt="photo of Jacky"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Keep the absolute positioning on the container div */}
          <div className="absolute -bottom-6 -right-2 rounded-2xl bg-rose text-primary-foreground shadow-lg md:-right-6 transition-transform duration-300 hover:scale-105">
            <a 
              href="https://www.instagram.com/jackybouquetss" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-6 py-5 focus:outline-none focus:ring-2 focus:ring-rose focus:ring-offset-2 rounded-2xl"
            >
              <p className="font-serif text-3xl leading-none">@jackybouquetss</p>
              <p className="mt-1 text-xs uppercase tracking-wider opacity-90">
                follow us on instagram
              </p>
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-rose">
            Our story
          </p>
          <h2 className="mt-3 text-balance font-serif text-4xl leading-tight text-foreground md:text-5xl">
            Hand-crafted with a love for blooms
          </h2>
          <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              {
                "Jacky's Bouquets began as a simple belief: flowers should feel personal. What started with a single bucket of garden roses has grown into a beloved community."
              }
            </p>
            <p>
              {
                'We still design every arrangement by hand, choosing seasonal stems for their color, scent, and story. No two bouquets are exactly alike, because no two moments are either.'
              }
            </p>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-3">
            {points.map(({ Icon, label, text }) => (
              <div key={label} className="rounded-2xl bg-secondary/50 p-5">
                <Icon className="h-6 w-6 text-rose" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-3 font-serif text-base text-foreground">{label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
