import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Om oss | Stockholms IT Förening',
  description: 'Läs om Stockholms IT Förenings mission, värderingar och hur vi arbetar för en inkluderande digital framtid.',
}

const values = [
  {
    icon: '🔓',
    title: 'Öppenhet',
    desc: 'Vi bryter ned barriärer och gör IT-kunskap tillgänglig för alla, oavsett bakgrund eller förkunskaper.',
  },
  {
    icon: '🤝',
    title: 'Gemenskap',
    desc: 'Vi bygger broar mellan människor, skolor och företag för att skapa ett starkt IT-community.',
  },
  {
    icon: '📈',
    title: 'Tillväxt',
    desc: 'Vi fokuserar på kontinuerligt lärande och personlig utveckling inom IT och teknik.',
  },
  {
    icon: '💡',
    title: 'Innovation',
    desc: 'Vi uppmuntrar nytänkande och skapar en miljö där kreativa IT-lösningar kan blomstra.',
  },
]

const approach = [
  {
    step: '01',
    title: 'Tidseffektivt lärande',
    desc: 'Våra kurser är designade för att ge maximal kunskap på minimal tid, med automatiserade inlärningsflöden.',
  },
  {
    step: '02',
    title: 'Interaktiva onlinekurser',
    desc: 'Vi använder Microsoft Teams för video, chatt och dokumentdelning — flexibelt och tillgängligt var du än befinner dig.',
  },
  {
    step: '03',
    title: 'Mentorskap i små grupper',
    desc: 'Personlig vägledning i åldersblandade grupper där erfarna IT-proffs delar med sig av sin kunskap.',
  },
  {
    step: '04',
    title: 'Karriärkoppling',
    desc: 'Direkta kopplingar till praktikplatser och konsultmöjligheter inom IT-branschen via vårt nätverk.',
  },
]

export default function OmOss() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a2744] to-[#006AA7] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <span className="text-[#FECC02] font-semibold text-sm uppercase tracking-wider">Om oss</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Vi brinner för IT-kunskap
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            En ideell organisation grundad för att skapa en positiv skillnad i samhället
            genom att göra tekniken tillgänglig för alla.
          </p>
        </div>
      </section>

      {/* Mission text */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1a2744] mb-4">Vår berättelse</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Stockholms IT Förening grundades med en klar vision: att skapa en inkluderande
              digital framtid där alla har möjlighet att lära sig och växa inom IT. Vi är en
              frivilligdriven organisation med säte i Sundbyberg/Stockholm.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Vår styrka ligger i vår mångfaldiga styrelse med sammanlagt över 30 års IT-erfarenhet
              inom nätverksteknik, cybersäkerhet, AI/ML, webbutveckling, dataanalys och mer.
              Eventuella överskott återinvesteras alltid i nya community-projekt.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Vi samarbetar aktivt med skolor, företag och organisationer för att bygga broar
              mellan utbildning och näringsliv, och skapar möjligheter för alla att delta i
              den digitala ekonomin.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a2744] mb-4">Vad gör oss unika</h2>
            <ul className="space-y-4">
              {[
                'Mer än 30 års sammanlagd IT-erfarenhet i styrelsen',
                'Starka partnerskap inom IT-sektorn',
                'Aktiv närvaro i sociala medier och community',
                'Tidseffektiva kurser med automatiserade inlärningsflöden',
                'Paketerade träningsprogram för studenter',
                'Karriärstöd inkl. praktikplacering och konsultmöjligheter',
                '14 IT-specialiseringsområden att välja bland',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#006AA7] mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f8f9fc] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#006AA7] font-semibold text-sm uppercase tracking-wider">Värderingar</span>
            <h2 className="text-3xl font-bold text-[#1a2744] mt-2">Det vi tror på</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-[#1a2744] mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-[#006AA7] font-semibold text-sm uppercase tracking-wider">Hur vi arbetar</span>
          <h2 className="text-3xl font-bold text-[#1a2744] mt-2">Vår metodik</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {approach.map((a) => (
            <div key={a.step} className="flex gap-6">
              <div className="text-4xl font-bold text-[#006AA7]/20 flex-shrink-0 w-12">{a.step}</div>
              <div>
                <h3 className="font-bold text-[#1a2744] mb-2">{a.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a2744] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Vill du veta mer eller engagera dig?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/bli-medlem" className="bg-[#FECC02] text-[#1a2744] font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors text-sm">
              Bli medlem
            </Link>
            <Link href="/styrelsen" className="border border-white/40 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-sm">
              Träffa styrelsen
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
