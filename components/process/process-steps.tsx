"use client"

import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    number: '01',
    title: 'Where You Are',
    subtitle: 'Discovery & Consultation',
    description: 'Every great home starts with a conversation. We\'ll discuss where you are in your journey—whether you already own land, are searching for the perfect lot, or are just beginning to dream. This is a no-pressure meeting where I listen to understand your family\'s needs, lifestyle, and vision.',
    details: [
      'Discuss your land situation and options',
      'Understand your family\'s needs and priorities',
      'Explore budget considerations openly',
      'Answer all your questions about the process',
    ],
    image: '/images/process-discovery.jpg',
  },
  {
    number: '02',
    title: 'Vision & Design',
    subtitle: 'Planning Your Dream',
    description: 'With a clear understanding of your needs, we move into the exciting design phase. Together, we\'ll explore floor plans, layouts, and features that fit your lifestyle. I\'ll help you balance wants and needs, making sure your design is both beautiful and practical.',
    details: [
      'Review UBH floor plans and customization options',
      'Select features and finishes that suit your style',
      'Work within your budget without compromising quality',
      'Create a home design that fits your land perfectly',
    ],
    image: '/images/process-design.jpg',
  },
  {
    number: '03',
    title: 'Building Together',
    subtitle: 'Construction Phase',
    description: 'Once your design is finalized, the building begins. Throughout construction, I remain your point of contact—providing updates, answering questions, and ensuring everything stays on track. You\'ll never feel left in the dark.',
    details: [
      'Clear communication throughout the build',
      'Regular progress updates and milestone check-ins',
      'Quality oversight at every stage',
      'Addressing any concerns promptly and honestly',
    ],
    image: '/images/process-build.jpg',
  },
  {
    number: '04',
    title: 'Home Sweet Home',
    subtitle: 'Move-In & Beyond',
    description: 'The day you\'ve been waiting for—move-in day. But my support doesn\'t end when you get your keys. I\'m here to help with the transition and ensure you\'re completely satisfied with your new home. Your family\'s happiness is my ultimate goal.',
    details: [
      'Final walkthrough and orientation',
      'Smooth handoff and key delivery',
      'Continued support after move-in',
      'A relationship that lasts beyond the build',
    ],
    image: '/images/process-complete.jpg',
  },
]

export function ProcessSteps() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="space-y-32">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <Reveal delay={index % 2 === 1 ? 200 : 0}>
                <div className={`relative aspect-[4/3] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                  {/* Step Number Overlay */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2">
                    <span className="font-serif text-3xl font-light text-accent">
                      Step {step.number}
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <Reveal delay={index % 2 === 1 ? 0 : 200}>
                  <span className="text-sm tracking-[0.2em] uppercase text-accent mb-2 block">
                    {step.subtitle}
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6">
                    {step.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
