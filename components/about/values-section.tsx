"use client"

import Link from 'next/link'
import { Reveal } from '@/components/reveal'

export function ValuesSection() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <Reveal>
              <span className="text-sm tracking-[0.2em] uppercase text-accent mb-4 block">
                My Promise
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-8 text-balance">
                What You Can Expect
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <ul className="space-y-6">
                {[
                  'Patient guidance through every step of the process',
                  'Transparent communication about timelines and budgets',
                  'Designs tailored to your family\'s unique needs',
                  'No-pressure consultations focused on your goals',
                  'A partner who genuinely cares about your outcome',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* CTA Box */}
          <Reveal delay={300}>
            <div className="bg-white/10 backdrop-blur-sm p-10 border border-white/20">
              <h3 className="font-serif text-3xl font-light mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                Let&apos;s have a conversation about your vision. I offer free consultations to discuss your land, your ideas, and how we can bring your dream home to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="btn-primary bg-accent hover:bg-white hover:text-primary"
                >
                  Schedule Consultation
                </Link>
                <a
                  href="tel:318-524-8071"
                  className="px-6 py-3 border border-white/30 text-sm uppercase tracking-wider text-center hover:bg-white hover:text-primary transition-all duration-300"
                >
                  318-524-8071
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
