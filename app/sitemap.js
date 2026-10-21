const BASE_URL = 'https://mylifestory.app'

export default function sitemap() {
  const routes = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: '/help', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/privacy', priority: 0.4, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.4, changeFrequency: 'yearly' },
    { path: '/delete-account', priority: 0.3, changeFrequency: 'yearly' },
  ]
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
