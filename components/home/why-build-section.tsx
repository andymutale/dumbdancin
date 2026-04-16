"use client"

import { Reveal } from '@/components/reveal'
import { Home, MapPin, Heart } from 'lucide-react'

const reasons = [
  {
    icon: MapPin,
    title: 'Build on Your Land',
    description: 'Already own land in Cenla? Building on your own property gives you freedom to design a home that fits your lifestyle and your lot perfectly.',
  },
  {
    icon: Home,
    title: 'Custom Design Freedom',
    description: 'Unlike buying existing homes, building custom means every room, every feature, and every detail is exactly what your family needs.',
  },
  {
    icon: Heart,
    title: 'Create Lasting Legacy',
    description: 'A custom-built home becomes more than shelter—it becomes the backdrop for generations of memories, holidays, and family gatherings.',
  },
]

export function WhyBuildSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="text-sm tracking-[0.2em] uppercase text-accent mb-4 block">
              The Benefits
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6 text-balance">
              Why Build on Your Own Land?
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-muted-foreground leading-relaxed">
              Building a custom home in Central Louisiana offers unique advantages that buying an existing property simply cannot match.
            </p>
          </Reveal>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 100 + 300}>
              <div className="bg-white p-8 border border-border card-hover h-full">
                <div className="w-12 h-12 flex items-center justify-center bg-accent/10 text-accent mb-6">
                  <reason.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-light mb-4">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
