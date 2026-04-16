"use client"

import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start with a conversation about where you are, what you envision, and what matters most to your family.',
  },
  {
    number: '02',
    title: 'Vision & Design',
    description: 'Together we explore floor plans, features, and finishes that bring your vision to life within your budget.',
  },
  {
    number: '03',
    title: 'Build & Beyond',
    description: 'From groundbreaking to move-in day, I guide you through the construction process with clear communication.',
  },
]

export function ProcessPreview() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-sm tracking-[0.2em] uppercase text-accent mb-4 block">
                The Journey
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight text-balance">
                From Vision to Reality
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <Link
              href="/process"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-primary hover:text-accent transition-colors group"
            >
              View Full Process
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 100 + 300}>
              <div className="group">
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-serif text-5xl font-light text-accent/30 group-hover:text-accent transition-colors">
                    {step.number}
                  </span>
                  <div className="w-full h-px bg-border mt-6" />
                </div>
                <h3 className="font-serif text-2xl font-light mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
