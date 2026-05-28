import type { Metadata } from 'next'
import MemberForm from './MemberForm'

export const metadata: Metadata = {
  title: 'Bli medlem | Stockholms IT Förening',
  description: 'Gå med i Stockholms IT Förening och få tillgång till IT-kurser, mentorskap och ett starkt nätverk i Stockholm.',
}

const benefits = [
  { icon: '🎓', text: 'Tillgång till alla kurser och workshops' },
  { icon: '🤝', text: 'Personligt mentorskap av erfarna IT-proffs' },
  { icon: '💼', text: 'Hjälp med praktikplacering och karriär' },
  { icon: '🌐', text: 'Nätverk med IT-proffs i Stockholm' },
  { icon: '📚', text: 'Studiegrupper och kursstöd' },
  { icon: '🚀', text: 'Konsultmöjligheter via vårt nätverk' },
]

export default function BliMedlem() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a2744] to-[#006AA7] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <span className="text-[#FECC02] font-semibold text-sm uppercase tracking-wider">Bli medlem</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Gå med i vår gemenskap
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Bli en del av Stockholms IT Förening och ta del av kurser, mentorskap,
            nätverk och karriärmöjligheter.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Benefits */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold text-[#1a2744] mb-6">Som medlem får du</h2>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b.text} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">{b.icon}</span>
                  <span className="text-gray-600 text-sm leading-relaxed">{b.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 bg-[#FECC02]/10 border border-[#FECC02]/30 rounded-xl p-5">
              <div className="text-2xl mb-2">💡</div>
              <h3 className="font-bold text-[#1a2744] mb-1">Ideell förening</h3>
              <p className="text-gray-600 text-sm">
                Stockholms IT Förening är helt ideell. Eventuella intäkter
                återinvesteras alltid i nya projekt och aktiviteter för våra medlemmar.
              </p>
            </div>

            <div className="mt-4 bg-[#f8f9fc] rounded-xl p-5">
              <h3 className="font-semibold text-[#1a2744] mb-2 text-sm">14 specialiseringsområden</h3>
              <p className="text-gray-500 text-xs">
                Från Linux och Python till AI/ML, cybersäkerhet, cloud, webbutveckling och mer.
                Det finns något för alla IT-intressen.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-[#1a2744] mb-6">Skicka din ansökan</h2>
            <MemberForm />
          </div>
        </div>
      </section>
    </>
  )
}
