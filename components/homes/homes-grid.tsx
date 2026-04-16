"use client"

import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { Bed, Bath, Maximize } from 'lucide-react'

const homes = [
  {
    title: 'The Craftsman',
    style: 'Craftsman',
    beds: 4,
    baths: 3,
    sqft: '2,400',
    description: 'Timeless craftsman details with modern open-concept living. Perfect for families who appreciate architectural character.',
    image: '/images/home-craftsman.jpg',
  },
  {
    title: 'The Modern Farmhouse',
    style: 'Modern Farmhouse',
    beds: 4,
    baths: 2.5,
    sqft: '2,800',
    description: 'Clean lines meet country charm. This design blends contemporary aesthetics with warm, welcoming spaces.',
    image: '/images/home-modern.jpg',
  },
  {
    title: 'The Estate',
    style: 'Traditional',
    beds: 5,
    baths: 4,
    sqft: '3,500',
    description: 'Grand Southern living with formal and informal spaces. Designed for families who love to entertain.',
    image: '/images/home-traditional.jpg',
  },
  {
    title: 'The Ranch',
    style: 'Ranch',
    beds: 3,
    baths: 2,
    sqft: '1,800',
    description: 'Single-story living at its finest. Open, accessible, and perfect for growing families or empty nesters.',
    image: '/images/home-ranch.jpg',
  },
  {
    title: 'The Cottage',
    style: 'Cottage',
    beds: 3,
    baths: 2,
    sqft: '1,600',
    description: 'Cozy and charming with efficient use of space. Ideal for smaller lots or those seeking simplicity.',
    image: '/images/home-cottage.jpg',
  },
  {
    title: 'The Acadian',
    style: 'Acadian',
    beds: 4,
    baths: 3,
    sqft: '2,200',
    description: 'Classic Louisiana style with steep rooflines and inviting porches. A nod to our regional heritage.',
    image: '/images/home-acadian.jpg',
  },
]

export function HomesGrid() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homes.map((home, index) => (
            <Reveal key={home.title} delay={index * 100}>
              <article className="group bg-white border border-border card-hover overflow-hidden">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={home.image}
                    alt={home.title}
                    fill
                    className="object-cover grayscale-hover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-wider text-primary">
                      {home.style}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-light mb-2">{home.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {home.description}
                  </p>

                  {/* Specs */}
                  <div className="flex items-center gap-6 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Bed className="w-4 h-4" />
                      <span>{home.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Bath className="w-4 h-4" />
                      <span>{home.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Maximize className="w-4 h-4" />
                      <span>{home.sqft} sqft</span>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Note */}
        <Reveal delay={600}>
          <p className="text-center text-muted-foreground mt-16 max-w-2xl mx-auto">
            These are concept designs to inspire your vision. Every home we build is customized to fit your specific needs, preferences, and land. 
            <span className="font-medium text-primary"> Your home will be uniquely yours.</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
