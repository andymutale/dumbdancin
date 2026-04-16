"use client"

import Link from 'next/link'
import { Reveal } from '@/components/reveal'

export function HomesCTA() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <span className="text-sm tracking-[0.2em] uppercase text-accent mb-4 block">
              Your Vision Awaits
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6 text-balance">
              Ready to Design Your Custom Home?
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              These concepts are just the beginning. Let&apos;s talk about your family&apos;s needs, your land, and create something perfectly suited to you.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary bg-accent hover:bg-white hover:text-primary"
              >
                Start Your Custom Design
              </Link>
              <Link
                href="/process"
                className="px-6 py-3 border border-white/30 text-sm uppercase tracking-wider text-center hover:bg-white hover:text-primary transition-all duration-300"
              >
                Learn Our Process
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
