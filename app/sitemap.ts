import type { MetadataRoute } from 'next'

const baseUrl = 'https://dumbdancin.netlify.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/process', '/homes', '/contact']

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
