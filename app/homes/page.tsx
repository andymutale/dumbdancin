import { Metadata } from 'next'
import { HomesHero } from '@/components/homes/homes-hero'
import { HomesGrid } from '@/components/homes/homes-grid'
import { HomesCTA } from '@/components/homes/homes-cta'

export const metadata: Metadata = {
  title: 'Concept Homes | Custom Home Designs in Central Louisiana',
  description: 'Explore concept home designs and styles available for custom building in Cenla. From craftsman to modern farmhouse, find inspiration for your dream home.',
}

export default function HomesPage() {
  return (
    <>
      <HomesHero />
      <HomesGrid />
      <HomesCTA />
    </>
  )
}
