# Michael Wood | Design Consultant

A marketing website for Michael Wood, a home design consultant in Pineville, Louisiana, who helps families in Central Louisiana ("Cenla") build custom homes on their own land.

**Live site:** [dumbdancin.netlify.app](https://dumbdancin.netlify.app)

## About

The site's tagline is "Build permanence and peace—one home at a time." It's a five-page brochure/lead-generation site covering the business's story, process, and services, with a contact form for scheduling consultations.

## Screenshots

| Home (desktop) | Contact (desktop) |
|---|---|
| ![Home page](docs/screenshots/home-desktop.png) | ![Contact page](docs/screenshots/contact-desktop.jpg) |

| Contact (tablet) | Mobile menu |
|---|---|
| ![Contact page on tablet](docs/screenshots/contact-tablet.jpg) | ![Mobile navigation menu](docs/screenshots/mobile-menu.jpg) |

**Process page**
![Process page](docs/screenshots/process-desktop.jpg)

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, intro, "why build" section, process preview, call to action |
| `/about` | About — Michael Wood's story, background, and values |
| `/process` | Process — step-by-step walkthrough of the home-building journey |
| `/homes` | Homes — gallery of concept home styles (craftsman, modern farmhouse, etc.) |
| `/contact` | Contact — consultation request form and contact info |

## Tech Stack

- **[Next.js 16](https://nextjs.org/)** (App Router) with **React 19** and **TypeScript**
- **[Tailwind CSS v4](https://tailwindcss.com/)** for styling
- **[shadcn/ui](https://ui.shadcn.com/)** (new-york style) built on **Radix UI** primitives
- **[Lucide](https://lucide.dev/)** icons
- **[React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)** for form handling/validation
- **[Vercel Analytics](https://vercel.com/analytics)**
- Fonts: Inter and Cormorant Garamond (via `next/font/google`)
- Deployed on **Netlify**

The site also includes structured data (JSON-LD `LocalBusiness` schema), an `app/sitemap.ts` and `app/robots.ts`, and per-page SEO metadata targeting Central Louisiana home-building searches.

## Getting Started

### Prerequisites

- Node.js 18.18+ (Node 20+ recommended)
- npm or pnpm (both a `package-lock.json` and `pnpm-lock.yaml` are present — pick one package manager and stick with it)

### Installation

```bash
git clone https://github.com/andymutale/dumbdancin.git
cd dumbdancin
npm install
# or: pnpm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
app/                  # Next.js App Router pages (home, about, process, homes, contact)
components/           # Page sections and shared UI components
  ui/                 # shadcn/ui primitives
hooks/                # Custom React hooks
lib/                  # Shared utilities
public/images/        # Static image assets
styles/               # Global styles
```

## Notes

- This project was originally scaffolded with [v0](https://v0.dev) (Vercel's AI UI generator); a few v0-specific files/folders are excluded via `.gitignore`.
- Images are served unoptimized (`images.unoptimized: true` in `next.config.mjs`), and TypeScript build errors are currently ignored during builds (`typescript.ignoreBuildErrors: true`) — worth revisiting before scaling the project further.
- The contact form currently simulates submission (a delayed success state) and isn't yet wired to an email service or backend — that's a good next step if lead capture needs to go live.
- The `package.json` name field (`michael-wood-design-consultant`) differs from the GitHub repo name (`dumbdancin`); consider aligning these if it matters for your workflow.

## License

No license file is currently included. Add one (e.g. MIT) if you intend this project to be reused or open-sourced.
