import { Cake, Heart, Gift, Sparkles } from 'lucide-react'

const categories = [
  {
    label: 'Birthdays',
    description: 'Bright, joyful blooms',
    Icon: Cake,
  },
  {
    label: 'Anniversaries',
    description: 'Romantic classics',
    Icon: Heart,
  },
  {
    label: 'Special Occasions',
    description: 'Holiday & seasonal themes',
    Icon: Gift,
  },
  {
    label: 'Just Because',
    description: 'Little moments of joy',
    Icon: Sparkles,
  },
]

export function CategoriesSection() {
  return (
    <section className="bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-rose">
            Find the perfect gift
          </p>
          <h2 className="mt-3 text-balance font-serif text-4xl text-foreground md:text-5xl">
            Flowers for every occasion
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            From milestone celebrations to spontaneous {'\u201C'}thinking of you{'\u201D'} moments,
            we have an arrangement to match.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-4">
          {categories.map(({ label, description, Icon }) => (
            <a
              key={label}
              href="#bouquets"
              className="group flex flex-col items-center text-center"
            >
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blush transition-all duration-300 group-hover:bg-rose group-hover:shadow-lg sm:h-32 sm:w-32">
                <Icon
                  className="h-10 w-10 text-rose transition-colors duration-300 group-hover:text-primary-foreground"
                  strokeWidth={1.4}
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-5 font-serif text-lg text-foreground transition-colors group-hover:text-rose">
                {label}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
