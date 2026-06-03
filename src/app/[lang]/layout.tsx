import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { locales, hasLocale } from './dictionaries'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  return (
    <>
      <Navbar lang={lang} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} />
    </>
  )
}
