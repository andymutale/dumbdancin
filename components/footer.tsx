import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/process', label: 'Process' },
  { href: '/homes', label: 'Homes' },
  { href: '/contact', label: 'Contact' },
]

const serviceAreas = [
  'Pineville',
  'Alexandria',
  'Cenla',
  'Rapides Parish',
  'Central Louisiana',
]

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col">
              <span className="font-serif text-2xl font-light tracking-wide">
                Michael Wood
              </span>
              <span className="text-xs tracking-widest uppercase text-white/60 mt-1">
                Design Consultant
              </span>
            </Link>
            <p className="mt-6 text-sm text-white/70 leading-relaxed">
              Building permanence and peace—one home at a time. Helping families in Central Louisiana create their dream homes on their own land.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 text-white/60">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area Column */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 text-white/60">
              Service Area
            </h4>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <span className="text-sm text-white/80">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 text-white/60">
              Direct Contact
            </h4>
            <div className="space-y-4">
              <a
                href="tel:318-524-8071"
                className="block text-2xl font-serif font-light text-accent hover:text-white transition-colors"
              >
                318-524-8071
              </a>
              <p className="text-sm text-white/70 leading-relaxed">
                UBH Pineville Consultant<br />
                Pineville, Louisiana
              </p>
              <Link
                href="/contact"
                className="inline-block mt-4 px-6 py-3 border border-white/30 text-sm uppercase tracking-wider hover:bg-white hover:text-primary transition-all duration-300"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Michael Wood. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Proudly serving Central Louisiana families
          </p>
        </div>
      </div>
    </footer>
  )
}
