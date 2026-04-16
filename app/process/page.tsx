import { Metadata } from 'next'
import { ProcessHero } from '@/components/process/process-hero'
import { ProcessSteps } from '@/components/process/process-steps'
import { ProcessCTA } from '@/components/process/process-cta'

export const metadata: Metadata = {
  title: 'Our Process | Building Custom Homes in Central Louisiana',
  description: 'Learn how Michael Gremillion guides families through the custom home building process in Cenla—from initial consultation to move-in day.',
}

export default function ProcessPage() {
  return (
    <>
      <ProcessHero />
      <ProcessSteps />
      <ProcessCTA />
    </>
  )
}
