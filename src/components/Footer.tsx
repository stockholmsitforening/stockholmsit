import Link from 'next/link'

const footerLabels: Record<string, Record<string, string>> = {
  sv: { description: 'En ideell organisation som brinner för att göra en positiv skillnad genom att främja IT-kunskap och tekniktillgång för alla.', navigation: 'Navigering', courses: 'Kurser', nonprofit: 'Ideell organisation · Sundbyberg, Sverige', rights: 'Alla rättigheter förbehållna.' },
  en: { description: 'A non-profit organization passionate about making a positive difference by promoting IT knowledge and technology access for everyone.', navigation: 'Navigation', courses: 'Courses', nonprofit: 'Non-profit organization · Sundbyberg, Sweden', rights: 'All rights reserved.' },
  es: { description: 'Una organización sin fines de lucro apasionada por hacer una diferencia positiva promoviendo el conocimiento de TI para todos.', navigation: 'Navegación', courses: 'Cursos', nonprofit: 'Organización sin fines de lucro · Sundbyberg, Suecia', rights: 'Todos los derechos reservados.' },
}

const navLinks: Record<string, { href: string; label: string }[]> = {
  sv: [
    { href: '', label: 'Hem' }, { href: '/om-oss', label: 'Om oss' }, { href: '/styrelsen', label: 'Styrelsen' },
    { href: '/kurser', label: 'Kurser' }, { href: '/kontakta-oss', label: 'Kontakta oss' }, { href: '/bli-medlem', label: 'Bli medlem' },
  ],
  en: [
    { href: '', label: 'Home' }, { href: '/om-oss', label: 'About us' }, { href: '/styrelsen', label: 'The Board' },
    { href: '/kurser', label: 'Courses' }, { href: '/kontakta-oss', label: 'Contact us' }, { href: '/bli-medlem', label: 'Become a member' },
  ],
  es: [
    { href: '', label: 'Inicio' }, { href: '/om-oss', label: 'Sobre nosotros' }, { href: '/styrelsen', label: 'La Junta' },
    { href: '/kurser', label: 'Cursos' }, { href: '/kontakta-oss', label: 'Contáctanos' }, { href: '/bli-medlem', label: 'Hazte socio' },
  ],
}

export default function Footer({ lang }: { lang: string }) {
  const t = footerLabels[lang] ?? footerLabels.sv
  const links = navLinks[lang] ?? navLinks.sv

  return (
    <footer className="bg-[#1a2744] text-white/70 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-3 flex items-baseline gap-1.5">
              <span className="font-bold text-lg tracking-wide"><span className="text-white">SIT</span><span className="text-[#FECC02]">F</span></span>
              <span className="text-white/25 font-bold">·</span>
              <span className="text-white font-bold text-lg">Stockholms IT <span className="text-[#FECC02]">Förening</span></span>
            </div>
            <p className="text-sm leading-relaxed">{t.description}</p>
            <p className="text-sm mt-3">📍 Sundbyberg / Stockholm</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">{t.navigation}</h3>
            <ul className="space-y-2 text-sm">
              {links.map(({ href, label }) => (
                <li key={label}>
                  <Link href={`/${lang}${href}`} className="hover:text-[#FECC02] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">{t.courses}</h3>
            <ul className="space-y-2 text-sm">
              {['Python', 'Machine Learning', 'Linux', 'Cybersäkerhet', 'Cloud (AWS/Azure)', 'Generativ AI'].map((c) => (
                <li key={c} className="flex items-center gap-1">
                  <span className="text-[#FECC02]">›</span> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs">
          <span>© {new Date().getFullYear()} Stockholms IT-förening. {t.rights}</span>
          <span>{t.nonprofit}</span>
        </div>
      </div>
    </footer>
  )
}
