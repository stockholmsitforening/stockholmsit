import type { MetadataRoute } from 'next';

const BASE = 'https://stockholmsitforening.se';
const LOCALES = ['sv', 'en', 'es'] as const;
const PAGES = ['', '/bli-medlem', '/kontakta-oss', '/kurser', '/om-oss', '/styrelsen'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of LOCALES) {
    for (const page of PAGES) {
      entries.push({
        url: `${BASE}/${lang}${page}`,
        lastModified: now,
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: lang === 'sv' ? (page === '' ? 1.0 : 0.8) : 0.6,
      });
    }
  }

  return entries;
}
