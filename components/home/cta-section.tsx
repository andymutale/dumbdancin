"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/land-build.jpg"
          alt="Land ready for custom home in Central Louisiana"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <Reveal>
          <span className="text-sm tracking-[0.2em] uppercase text-accent mb-4 block">
            Ready to Begin?
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 text-balance max-w-4xl mx-auto">
            Let&apos;s Build Your<br />
            <span className="italic">Forever Home</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="max-w-2xl mx-auto text-lg text-white/80 leading-relaxed mb-10">
            Schedule a free consultation to discuss your vision, your land, and how we can bring your dream home to life in Central Louisiana.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary bg-accent text-white hover:bg-white hover:text-primary"
            >
              Schedule Free Consultation
            </Link>
            <a
              href="tel:318-524-8071"
              className="px-6 py-3 border border-white/30 text-sm uppercase tracking-wider text-white hover:bg-white hover:text-primary transition-all duration-300"
            >
              Call 318-524-8071
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
