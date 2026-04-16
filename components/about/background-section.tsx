"use client"

import { Reveal } from '@/components/reveal'
import { Church, Compass, Users, Award } from 'lucide-react'

const backgrounds = [
  {
    icon: Church,
    title: 'Therapist Background',
    description: 'Decades of serving families in Pineville has given me a deep understanding of what makes a house truly become a home.',
  },
  {
    icon: Compass,
    title: 'Design Expertise',
    description: 'As a UBH consultant, I bring technical knowledge and creative vision to help translate your dreams into buildable plans.',
  },
  {
    icon: Users,
    title: 'Community Roots',
    description: 'Born and raised in Central Louisiana, I know Cenla—the land, the people, and what families here value most.',
  },
  {
    icon: Award,
    title: 'Trusted Partner',
    description: 'My clients become like family. I walk alongside you through every decision, celebration, and challenge.',
  },
]

export function BackgroundSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="text-sm tracking-[0.2em] uppercase text-accent mb-4 block">
              Why Work With Me
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6 text-balance">
              Background That Shapes My Approach
            </h2>
          </Reveal>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {backgrounds.map((item, index) => (
            <Reveal key={item.title} delay={index * 100 + 200}>
              <div className="bg-white p-8 border border-border card-hover h-full text-center">
                <div className="w-14 h-14 flex items-center justify-center bg-accent/10 text-accent mx-auto mb-6">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl font-light mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
