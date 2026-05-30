import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#1a2744] text-white/70 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-3">
              <span className="text-white font-bold text-lg tracking-tight">
                Stockholms IT <span className="text-[#FECC02]">Förening</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              En ideell organisation som brinner för att göra en positiv skillnad
              genom att främja IT-kunskap och tekniktillgång för alla.
            </p>
            <p className="text-sm mt-3">📍 Sundbyberg / Stockholm</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Navigering</h3>
            <ul className="space-y-2 text-sm">
              {[
                ['/', 'Hem'],
                ['/om-oss', 'Om oss'],
                ['/styrelsen', 'Styrelsen'],
                ['/kurser', 'Kurser'],
                ['/kontakta-oss', 'Kontakta oss'],
                ['/bli-medlem', 'Bli medlem'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-[#FECC02] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Kurser</h3>
            <ul className="space-y-2 text-sm">
              {['Python', 'Machine Learning', 'Linux', 'Cybersäkerhet', 'Cloud (AWS/Azure)', 'Generativ AI'].map(
                (c) => (
                  <li key={c} className="flex items-center gap-1">
                    <span className="text-[#FECC02]">›</span> {c}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs">
          <span>© {new Date().getFullYear()} Stockholms IT-förening. Alla rättigheter förbehållna.</span>
          <span>Ideell organisation · Sundbyberg, Sverige</span>
        </div>
      </div>
    </footer>
  )
}
