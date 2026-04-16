import { Metadata } from 'next'
import { AboutHero } from '@/components/about/about-hero'
import { AboutStory } from '@/components/about/about-story'
import { BackgroundSection } from '@/components/about/background-section'
import { ValuesSection } from '@/components/about/values-section'

export const metadata: Metadata = {
  title: 'About Michael Gremillion | UBH Design Consultant in Pineville, LA',
  description: 'Meet Michael Gremillion, a pastor and UBH home design consultant in Pineville, Louisiana, helping Cenla families build custom homes with faith and care.',
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
