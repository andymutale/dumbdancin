"use client"

import { Reveal } from '@/components/reveal'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export function ContactInfo() {
  return (
    <div className="lg:pl-8">
      <Reveal delay={200}>
        <h2 className="font-serif text-3xl font-light mb-6">Direct Contact</h2>
        
        {/* Phone */}
        <div className="mb-8">
          <a
            href="tel:318-524-8071"
            className="inline-flex items-center gap-3 text-3xl font-serif font-light text-accent hover:text-primary transition-colors"
          >
            <Phone className="w-6 h-6" />
            318-524-8071
          </a>
          <p className="text-muted-foreground mt-2 text-sm">
            Call or text anytime. I&apos;m happy to answer quick questions.
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-6 mb-10">
          <div className="flex items-start gap-4">
            <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium mb-1">Location</h4>
              <p className="text-muted-foreground text-sm">
                Pineville, Louisiana<br />
                Serving all of Central Louisiana (Cenla)
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium mb-1">Availability</h4>
              <p className="text-muted-foreground text-sm">
                Monday – Friday: 8am – 6pm<br />
                Saturday: By appointment<br />
                Sunday: Church first, then available
              </p>
            </div>
          </div>
        </div>

        {/* UBH Info */}
        <div className="bg-muted p-8 border-l-4 border-accent">
          <h3 className="font-serif text-xl font-light mb-3">About UBH</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            United Built Homes (UBH) has been helping families build custom homes on their own land since 1959. As your local UBH consultant, I bring their proven building expertise together with personal, attentive service.
          </p>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              Build on your land
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              Fully customizable floor plans
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              Quality craftsmanship since 1959
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              Transparent pricing
            </li>
          </ul>
        </div>
      </Reveal>
    </div>
  )
}
