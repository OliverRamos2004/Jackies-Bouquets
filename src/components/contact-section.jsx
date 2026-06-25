import { Mail, Phone, Clock } from 'lucide-react'

export function ContactPage() {
  return (
    <section id="contact" className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-4xl px-5 md:px-8 text-center">
        
        {/* Header Text */}
        <div className="max-w-2xl mx-auto mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-rose">
            Get in touch
          </p>
          <h1 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
            Let's create something beautiful
          </h1>
          <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
            Have a custom arrangement request, an upcoming celebration, or a special milestone? 
            Reach out through any of the channels below—we would love to chat!
          </p>
        </div>

        {/* Contact Info Card Grid */}
        <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
          
          {/* INSTAGRAM CARD */}
          {/* 2. Replace the icon with this SVG block */}
<a 
  href="https://www.instagram.com/jackybouquetss" 
  target="_blank" 
  rel="noopener noreferrer"
  className="group rounded-3xl bg-card p-8 shadow-sm ring-1 ring-border/50 transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
>
  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blush/30 text-rose transition-colors duration-300 group-hover:bg-rose group-hover:text-primary-foreground">
    {/* Clean inline SVG fallback for the Instagram logo */}
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="h-5 w-5"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  </div>
  <h2 className="mt-4 font-serif text-lg text-foreground">Instagram</h2>
  <p className="mt-2 text-sm text-rose font-medium break-all">@jackybouquetss</p>
  <p className="mt-1 text-xs text-muted-foreground">Slide into our DMs</p>
</a>

          {/* PHONE CARD */}
          <div className="rounded-3xl bg-card p-8 shadow-sm ring-1 ring-border/50 transition-all duration-300 hover:shadow-md">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blush/30 text-rose">
              <Phone className="h-5 w-5" />
            </div>
            <h2 className="mt-4 font-serif text-lg text-foreground">Call or Text</h2>
            <p className="mt-2 text-sm text-muted-foreground font-medium">(956) 502-3358  </p>
            <p className="mt-1 text-xs text-muted-foreground">Available for consultations & delivery</p>
          </div>

          {/* EMAIL CARD */}
          <a 
            href="mailto:Yibarrajaqueline@gmail.com"
            className="group rounded-3xl bg-card p-8 shadow-sm ring-1 ring-border/50 transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blush/30 text-rose transition-colors duration-300 group-hover:bg-rose group-hover:text-primary-foreground">
              <Mail className="h-5 w-5" />
            </div>
            <h2 className="mt-4 font-serif text-lg text-foreground">Email</h2>
            <p className="mt-2 text-sm text-rose font-medium break-all">Yibarrajaqueline@gmail.com</p>
            <p className="mt-1 text-xs text-muted-foreground">For formal & custom inquiries</p>
          </a>

        </div>

        {/* Response Notice Footer */}
        <div className="mt-16 flex items-center justify-center gap-2 text-muted-foreground max-w-sm mx-auto bg-card/40 border border-border/40 px-5 py-3 rounded-2xl">
          <Clock className="h-4 w-4 text-rose/70 shrink-0" />
          <p className="text-xs">We typically reply to all messages within 24 hours.</p>
        </div>

      </div>
    </section>
  )
}