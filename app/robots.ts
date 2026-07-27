import type { MetadataRoute } from 'next'

const baseUrl = 'https://dumbdancin.netlify.app'

// Bots known to scrape sites for AI training data rather than search indexing.
// Blocked here so page content and contact details aren't pulled into training sets;
// this list needs occasional updates as new scrapers show up.
const blockedAiBots = [
  'GPTBot',
  'ChatGPT-User',
  'CCBot',
  'anthropic-ai',
  'ClaudeBot',
  'Claude-Web',
  'Google-Extended',
  'Bytespider',
  'PerplexityBot',
  'Omgilibot',
  'Diffbot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      ...blockedAiBots.map((agent) => ({
        userAgent: agent,
        disallow: '/',
      })),
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
