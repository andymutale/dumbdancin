"use client"

import Link from 'next/link'
import { Reveal } from '@/components/reveal'

export function ProcessCTA() {
  return (
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <span className="text-sm tracking-[0.2em] uppercase text-accent mb-4 block">
              Ready to Start?
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6 text-balance">
              Begin Your Journey Today
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              The first step is always a conversation. Let&apos;s talk about your vision, your land, and how we can make your dream home a reality. There&apos;s no pressure, just genuine guidance.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Schedule Free Consultation
              </Link>
              <a
                href="tel:318-524-8071"
                className="btn-secondary"
              >
                Call 318-524-8071
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
