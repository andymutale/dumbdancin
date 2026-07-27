import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dumbdancin.netlify.app'),
  title: {
    default: 'Michael Wood | Design Consultant - Custom Homes in Central Louisiana',
    template: '%s | Michael Wood',
  },
  description: 'Build permanence and peace—one home at a time. Michael Wood is a Pineville consultant helping families build custom homes on their own land in Cenla.',
  keywords: 'Pineville consultant, Cenla homes, build on your own land, custom homes in Central Louisiana, home design consultant',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Michael Wood | Design Consultant',
    description: 'Build permanence and peace—one home at a time in Central Louisiana.',
    type: 'website',
    url: 'https://dumbdancin.netlify.app',
    siteName: 'Michael Wood | Design Consultant',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Michael Wood | UBH Design Consultant',
  description: 'UBH design consultant helping Central Louisiana families build custom homes on their own land.',
  url: 'https://dumbdancin.netlify.app',
  telephone: '+1-318-524-6549',
  areaServed: [
    'Pineville, LA',
    'Alexandria, LA',
    'Rapides Parish, LA',
    'Central Louisiana',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pineville',
    addressRegion: 'LA',
    addressCountry: 'US',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-3 focus:rounded"
        >
          Skip to main content
        </a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
