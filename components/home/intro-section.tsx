"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'

export function IntroSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/home-intro.jpg"
                alt="Custom home interior in Central Louisiana"
                fill
                className="object-cover"
              />
              {/* Accent Frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent -z-10" />
            </div>
          </Reveal>

          {/* Content */}
          <div className="lg:pl-8">
            <Reveal delay={100}>
              <span className="text-sm tracking-[0.2em] uppercase text-accent mb-4 block">
                Welcome
              </span>
            </Reveal>
            <Reveal delay={200}>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6 text-balance">
                Your Vision,<br />
                <span className="italic">Thoughtfully Built</span>
              </h2>
            </Reveal>
            <Reveal delay={300}>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I&apos;m Michael Gremillion, a home design consultant serving families throughout Central Louisiana. As a pastor in Pineville and a UBH design consultant, I bring a unique perspective to homebuilding—one rooted in faith, family, and creating spaces where both can flourish.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you&apos;re building on inherited land, starting fresh on a new lot, or designing the forever home you&apos;ve always dreamed of, I&apos;m here to guide you through every step with patience and expertise.
              </p>
            </Reveal>
            <Reveal delay={500}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="btn-primary">
                  Learn More About Me
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Let&apos;s Talk
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
