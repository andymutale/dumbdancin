import Image from 'next/image'
import Link from 'next/link'
import { HeroSection } from '@/components/home/hero-section'
import { IntroSection } from '@/components/home/intro-section'
import { WhyBuildSection } from '@/components/home/why-build-section'
import { ProcessPreview } from '@/components/home/process-preview'
import { CTASection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <WhyBuildSection />
      <ProcessPreview />
      <CTASection />
    </>
  )
}
