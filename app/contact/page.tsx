import { Metadata } from 'next'
import { ContactHero } from '@/components/contact/contact-hero'
import { ContactForm } from '@/components/contact/contact-form'
import { ContactInfo } from '@/components/contact/contact-info'

export const metadata: Metadata = {
  title: 'Contact | Schedule a Free Consultation - Michael Gremillion',
  description: 'Schedule a free consultation with Michael Gremillion to discuss your custom home project in Central Louisiana. Call 318-524-8071 or fill out our contact form.',
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
