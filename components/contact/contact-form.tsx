"use client"

import { useState } from 'react'
import { Reveal } from '@/components/reveal'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    landStatus: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <Reveal>
        <div className="bg-muted p-12 text-center">
          <h3 className="font-serif text-3xl font-light mb-4">Thank You!</h3>
          <p className="text-muted-foreground leading-relaxed">
            I&apos;ve received your message and will be in touch within 24 hours. Looking forward to discussing your home building journey.
          </p>
        </div>
      </Reveal>
    )
  }

  return (
    <Reveal>
      <div>
        <h2 className="font-serif text-3xl font-light mb-6">Send a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border bg-white focus:border-accent focus:outline-none transition-colors"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border bg-white focus:border-accent focus:outline-none transition-colors"
                placeholder="(318) 555-0123"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border bg-white focus:border-accent focus:outline-none transition-colors"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="landStatus" className="block text-sm font-medium mb-2">
              Do you own land?
            </label>
            <select
              id="landStatus"
              name="landStatus"
              value={formData.landStatus}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border bg-white focus:border-accent focus:outline-none transition-colors"
            >
              <option value="">Select an option</option>
              <option value="own">Yes, I own land</option>
              <option value="searching">I&apos;m searching for land</option>
              <option value="family">Family land / inherited property</option>
              <option value="unsure">Not sure yet</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Tell me about your vision <span className="text-accent">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border bg-white focus:border-accent focus:outline-none transition-colors resize-none"
              placeholder="Share your dreams for your new home..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </Reveal>
  )
}
