"use client"

import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function AboutStory() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <Reveal>
            <div className="relative aspect-[3/4] overflow-hidden sticky top-32">
              <Image
                src="/images/michael-portrait.jpg"
                alt="Michael Gremillion - Home Design Consultant"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Content */}
          <div className="space-y-8">
            <Reveal>
              <span className="text-sm tracking-[0.2em] uppercase text-accent mb-4 block">
                My Story
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6 text-balance">
                Building Homes,<br />
                <span className="italic">Serving Families</span>
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-muted-foreground leading-relaxed">
                For over two decades, I&apos;ve had the privilege of serving the Central Louisiana community in two distinct but deeply connected roles: as a pastor in Pineville and as a home design consultant with United Built Homes.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-muted-foreground leading-relaxed">
                In ministry, I&apos;ve learned that homes are far more than structures—they&apos;re the foundation of family life, the backdrop for memories, and the place where faith takes root. This understanding shapes every consultation I have with families looking to build.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p className="text-muted-foreground leading-relaxed">
                When you work with me, you&apos;re not just getting someone who knows floor plans and building codes. You&apos;re getting someone who understands what it means to create a space where your family can truly flourish—where children grow, meals are shared, and life&apos;s most precious moments unfold.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <blockquote className="border-l-4 border-accent pl-6 py-2 my-8">
                <p className="font-serif text-2xl font-light italic text-primary">
                  &ldquo;Build permanence and peace—one home at a time.&rdquo;
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={500}>
              <p className="text-muted-foreground leading-relaxed">
                My approach is patient, thorough, and always centered on your family&apos;s unique needs. I believe the best homes are built through careful listening, thoughtful design, and genuine partnership between consultant and client.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
