import { Metadata } from 'next'
import { AboutHero } from '@/components/about/about-hero'
import { AboutStory } from '@/components/about/about-story'
import { BackgroundSection } from '@/components/about/background-section'
import { ValuesSection } from '@/components/about/values-section'

export const metadata: Metadata = {
  title: 'About Michael Wood |  Design Consultant in Pineville, LA',
  description: 'Meet Michael Wood, a UBH home design consultant in Pineville, Louisiana, helping Cenla families build custom homes with care and attention to detail.',
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <BackgroundSection />
      <ValuesSection />
    </>
  )
}
