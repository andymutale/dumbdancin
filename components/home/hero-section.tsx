import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-home.jpg"
          alt="Beautiful custom home in Central Louisiana"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <p className="text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in opacity-80">
          UBH Pineville Design Consultant
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 text-balance">
          Build Permanence<br />
          <span className="italic">and Peace</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-12 opacity-90">
          Helping Central Louisiana families design and build custom homes on their own land—one thoughtful step at a time.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="btn-primary bg-white text-primary hover:bg-accent hover:text-white"
          >
            Schedule Consultation
          </Link>
          <Link
            href="/process"
            className="px-6 py-3 border border-white/50 text-sm uppercase tracking-wider text-white hover:bg-white hover:text-primary transition-all duration-300"
          >
            View Our Process
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-white/70">
          <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/70 to-transparent" />
        </div>
      </div>
    </section>
  )
}
