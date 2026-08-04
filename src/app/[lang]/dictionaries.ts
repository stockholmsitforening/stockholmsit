import 'server-only'

const dictionaries = {
  sv: () => import('@/dictionaries/sv.json').then((m) => m.default),
  en: () => import('@/dictionaries/en.json').then((m) => m.default),
  es: () => import('@/dictionaries/es.json').then((m) => m.default),
}

export type Locale = keyof typeof dictionaries
export type Dictionary = Awaited<ReturnType<typeof getDictionary>>

export const locales: Locale[] = ['sv', 'en', 'es']
export const defaultLocale: Locale = 'sv'

export const hasLocale = (locale: string): locale is Locale => locale in dictionaries

export const getDictionary = async (locale: Locale) => dictionaries[locale]()

/** Canonical + hreflang para una ruta bajo [lang], ej. buildAlternates('sv', '/om-oss') */
export function buildAlternates(locale: Locale, path: string = '') {
  return {
    canonical: `/${locale}${path}`,
    languages: Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])),
  }
}
