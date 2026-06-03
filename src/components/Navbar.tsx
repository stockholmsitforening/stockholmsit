'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

const navKeys = ['home', 'about', 'board', 'courses', 'contact'] as const
const navPaths = ['', '/om-oss', '/styrelsen', '/kurser', '/kontakta-oss'] as const

const navLabels: Record<string, Record<string, string>> = {
  sv: { home: 'Hem', about: 'Om oss', board: 'Styrelsen', courses: 'Kurser', contact: 'Kontakta oss', join: 'Bli medlem' },
  en: { home: 'Home', about: 'About us', board: 'The Board', courses: 'Courses', contact: 'Contact us', join: 'Become a member' },
  es: { home: 'Inicio', about: 'Sobre nosotros', board: 'La Junta', courses: 'Cursos', contact: 'Contáctanos', join: 'Hazte socio' },
}

const langNames: Record<string, string> = { sv: 'SV', en: 'EN', es: 'ES' }

export default function Navbar({ lang }: { lang: string }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const labels = navLabels[lang] ?? navLabels.sv

  function switchLang(newLang: string) {
    const segments = pathname.split('/')
    segments[1] = newLang
    router.push(segments.join('/') || `/${newLang}`)
  }

  return (
    <header className="bg-[#1a2744] text-white sticky top-0 z-50 shadow-lg">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-baseline gap-1.5">
          <span className="font-bold text-lg tracking-wide"><span className="text-white">SIT</span><span className="text-[#FECC02]">F</span></span>
          <span className="text-white/25 font-bold">·</span>
          <span className="text-white font-bold text-lg">Stockholms IT <span className="text-[#FECC02]">Förening</span></span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-5">
          {navKeys.map((key, i) => (
            <Link key={key} href={`/${lang}${navPaths[i]}`} className="text-white/80 hover:text-[#FECC02] text-sm font-medium transition-colors">
              {labels[key]}
            </Link>
          ))}
          <Link href={`/${lang}/bli-medlem`} className="bg-[#FECC02] text-[#1a2744] text-sm font-bold px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors">
            {labels.join}
          </Link>
          {/* Lang switcher */}
          <div className="flex items-center gap-1 border border-white/20 rounded-lg overflow-hidden">
            {(['sv', 'en', 'es'] as const).map((l) => (
              <button
                key={l}
                onClick={() => switchLang(l)}
                className={`px-2 py-1 text-xs font-semibold transition-colors ${lang === l ? 'bg-[#FECC02] text-[#1a2744]' : 'text-white/60 hover:text-white hover:bg-white/10'}`}
              >
                {langNames[l]}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label="Öppna meny">
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#142035] border-t border-white/10 px-4 py-4 flex flex-col gap-3">
          {navKeys.map((key, i) => (
            <Link key={key} href={`/${lang}${navPaths[i]}`} className="text-white/80 hover:text-[#FECC02] text-sm font-medium py-1" onClick={() => setOpen(false)}>
              {labels[key]}
            </Link>
          ))}
          <Link href={`/${lang}/bli-medlem`} className="bg-[#FECC02] text-[#1a2744] text-sm font-bold px-4 py-2 rounded-lg text-center mt-2" onClick={() => setOpen(false)}>
            {labels.join}
          </Link>
          <div className="flex items-center gap-2 pt-2 border-t border-white/10">
            <span className="text-white/50 text-xs">Språk / Language:</span>
            {(['sv', 'en', 'es'] as const).map((l) => (
              <button key={l} onClick={() => { switchLang(l); setOpen(false) }}
                className={`px-2 py-1 text-xs font-semibold rounded ${lang === l ? 'bg-[#FECC02] text-[#1a2744]' : 'text-white/60 hover:text-white'}`}>
                {langNames[l]}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
