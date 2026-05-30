'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Hem' },
  { href: '/om-oss', label: 'Om oss' },
  { href: '/styrelsen', label: 'Styrelsen' },
  { href: '/kurser', label: 'Kurser' },
  { href: '/kontakta-oss', label: 'Kontakta oss' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-[#1a2744] text-white sticky top-0 z-50 shadow-lg">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Stockholms IT Förening"
            width={130}
            height={32}
            className="rounded"
            priority
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-[#FECC02] text-sm font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/bli-medlem"
            className="bg-[#FECC02] text-[#1a2744] text-sm font-bold px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors"
          >
            Bli medlem
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Öppna meny"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#142035] border-t border-white/10 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-[#FECC02] text-sm font-medium py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/bli-medlem"
            className="bg-[#FECC02] text-[#1a2744] text-sm font-bold px-4 py-2 rounded-lg text-center mt-2"
            onClick={() => setOpen(false)}
          >
            Bli medlem
          </Link>
        </div>
      )}
    </header>
  )
}
