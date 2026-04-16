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
  title: 'Michael Gremillion | UBH Design Consultant - Custom Homes in Central Louisiana',
  description: 'Build permanence and peace—one home at a time. Michael Gremillion is a UBH Pineville consultant helping families build custom homes on their own land in Cenla.',
  keywords: 'UBH Pineville consultant, Cenla homes, build on your own land, custom homes in Central Louisiana, home design consultant',
  openGraph: {
    title: 'Michael Gremillion | UBH Design Consultant',
    description: 'Build permanence and peace—one home at a time in Central Louisiana.',
    type: 'website',
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
        <Nav />
        <main>{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
