import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { CategoriesSection } from '@/components/categories-section'
import { FeaturedBouquets } from '@/components/featured-bouquets'
import { AboutSection } from '@/components/about-section'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <CategoriesSection />
        <FeaturedBouquets />
        <AboutSection />
      </main>
    </div>
  )
}

export default App
