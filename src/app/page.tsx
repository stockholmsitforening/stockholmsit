import Link from 'next/link'

const activities = [
  {
    icon: '🎓',
    title: 'IT-kurser',
    desc: 'Praktiska kurser i Python, Linux, Machine Learning, cybersäkerhet och mer — anpassade för alla nivåer.',
  },
  {
    icon: '🤝',
    title: 'Mentorskap',
    desc: 'Personlig vägledning i små, åldersblandade grupper med erfarna IT-proffs.',
  },
  {
    icon: '💼',
    title: 'Karriärstöd',
    desc: 'Vi hjälper dig med praktikplacering och konsultmöjligheter inom IT-branschen.',
  },
  {
    icon: '🌐',
    title: 'Nätverk',
    desc: 'Bygg kontakter med IT-proffs, företag och organisationer i Stockholmsregionen.',
  },
]

const stats = [
  { value: '30+', label: 'Års sammanlagd IT-erfarenhet' },
  { value: '8', label: 'Kurser & workshops' },
  { value: '14', label: 'IT-specialiseringsområden' },
  { value: '100%', label: 'Ideell verksamhet' },
]

const courses = [
  'Python', 'Machine Learning', 'Deep Learning',
  'Linux', 'Cybersäkerhet', 'Cloud Services',
  'Dataanalys med MySQL', 'Generativ AI',
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a2744] via-[#1e3060] to-[#006AA7] text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#FECC02]/20 text-[#FECC02] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
              Ideell IT-organisation · Sundbyberg / Stockholm
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Vi öppnar dörrar
              <br />
              <span className="text-[#FECC02]">till den digitala världen</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Stockholms IT Förening är en ideell organisation som brinner för att göra en positiv
              skillnad genom att främja IT-kunskap och tekniktillgång för alla i samhället.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/bli-medlem"
                className="bg-[#FECC02] text-[#1a2744] font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors text-sm"
              >
                Bli medlem gratis →
              </Link>
              <Link
                href="/kurser"
                className="border border-white/40 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-sm"
              >
                Se våra kurser
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#006AA7] text-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-[#FECC02]">{s.value}</div>
                <div className="text-white/80 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#006AA7] font-semibold text-sm uppercase tracking-wider">Vår mission</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mt-2 mb-6">
              En inkluderande digital framtid för alla
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Vi tror att IT-kunskap är en grundläggande kompetens i det moderna samhället. Vår
              organisation arbetar aktivt för att bryta ned barriärer och göra tekniken tillgänglig
              — oavsett bakgrund, ålder eller förkunskaper.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Genom kurser, mentorskap och ett aktivt nätverk skapar vi broar mellan utbildning
              och näringsliv. Vi samarbetar med skolor, företag och organisationer för att bygga
              en inkluderande innovationskultur.
            </p>
            <Link href="/om-oss" className="text-[#006AA7] font-semibold hover:underline">
              Läs mer om oss →
            </Link>
          </div>
          <div className="bg-[#f8f9fc] rounded-2xl p-8">
            <h3 className="text-[#1a2744] font-bold text-lg mb-4">Våra kurser inkluderar</h3>
            <div className="flex flex-wrap gap-2">
              {courses.map((c) => (
                <span
                  key={c}
                  className="bg-white border border-[#006AA7]/20 text-[#006AA7] text-sm px-3 py-1.5 rounded-full font-medium"
                >
                  {c}
                </span>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                Kurser hålls via Microsoft Teams med video, chatt och dokumentdelning.
                Materialet är på engelska, instruktionen på svenska.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="bg-[#f8f9fc] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#006AA7] font-semibold text-sm uppercase tracking-wider">Vad vi erbjuder</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mt-2">
              Mer än bara kurser
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((a) => (
              <div
                key={a.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-3xl mb-4">{a.icon}</div>
                <h3 className="font-bold text-[#1a2744] mb-2">{a.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board teaser */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-[#006AA7] font-semibold text-sm uppercase tracking-wider">Vilka är vi</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mt-2">
            Styrelse med bred expertis
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Vår styrelse samlar över 30 års sammanlagd IT-erfarenhet inom nätverksteknik,
            cybersäkerhet, mjukvaruutveckling, AI och dataanalys.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['Nätverksdesign', 'Cybersäkerhet', 'AI/ML', 'Webbutveckling', 'Dataanalys', 'Linux', 'Cloud', 'Fintech'].map(
            (tag) => (
              <span key={tag} className="bg-[#1a2744]/5 text-[#1a2744] text-sm px-4 py-2 rounded-full">
                {tag}
              </span>
            )
          )}
        </div>
        <div className="text-center">
          <Link
            href="/styrelsen"
            className="bg-[#1a2744] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#142035] transition-colors text-sm"
          >
            Träffa styrelsen →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#1a2744] to-[#006AA7] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Redo att börja din IT-resa?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Gå med i vår gemenskap och få tillgång till kurser, mentorskap och ett starkt nätverk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/bli-medlem"
              className="bg-[#FECC02] text-[#1a2744] font-bold px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Bli medlem →
            </Link>
            <Link
              href="/kontakta-oss"
              className="border border-white/40 text-white font-medium px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Kontakta oss
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
