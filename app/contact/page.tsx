import { Metadata } from 'next'
import { ContactHero } from '@/components/contact/contact-hero'
import { ContactForm } from '@/components/contact/contact-form'
import { ContactInfo } from '@/components/contact/contact-info'

export const metadata: Metadata = {
  title: 'Contact | Schedule a Free Consultation - Michael Wood',
  description: 'Schedule a free consultation with Michael Wood to discuss your custom home project in Central Louisiana. Call 318-524-6549 or fill out our contact form.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  )
}
