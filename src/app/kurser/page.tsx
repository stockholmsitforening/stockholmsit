import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kurser | Stockholms IT Förening',
  description: 'IT-kurser i Python, Machine Learning, Linux, Cybersäkerhet, Cloud och mer. Undervisning på svenska med engelskt material.',
}

const courses = [
  {
    id: 'python',
    title: 'Python',
    level: 'Nybörjare',
    levelColor: '#2f5d50',
    icon: '🐍',
    desc: 'Kom igång med ett av världens mest använda programmeringsspråk. Praktisk och tillgänglig introduktion.',
    topics: [
      'Installation av Anaconda',
      'Grundläggande datatyper',
      'String-metoder',
      'Loopar och villkor',
      'Funktioner och moduler',
    ],
    duration: 'Varierar',
  },
  {
    id: 'ml',
    title: 'Maskinlärning',
    level: 'Avancerad',
    levelColor: '#b8552d',
    icon: '🤖',
    desc: 'Komplett introduktion till Machine Learning med fokus på praktiska tillämpningar och moderna algoritmer.',
    topics: [
      'Python-programmering',
      'Dataanalys med MySQL',
      'Dataanalys med Python',
      'Machine Learning-algoritmer',
      'Computer Vision & bildbehandling',
      'Deep Learning',
    ],
    duration: 'Kurspaket',
  },
  {
    id: 'dl',
    title: 'Djuplärning',
    level: 'Avancerad',
    levelColor: '#b8552d',
    icon: '🧠',
    desc: 'Djupdyk in i neurala nätverk och deep learning-tekniker som driver modern AI.',
    topics: [
      'Introduktion till djupinlärning',
      'Neurala nätverk (CNN)',
      'Kostnadsfunktioner',
      'Backpropagation',
      'Praktiska projekt',
    ],
    duration: 'Varierar',
  },
  {
    id: 'linux',
    title: 'Linux – Nybörjare',
    level: 'Nybörjare',
    levelColor: '#2f5d50',
    icon: '🐧',
    desc: 'Lär dig Linux från grunden. Kursen hålls på svenska med engelskt material i Microsoft Teams.',
    topics: [
      'Terminal och grundläggande kommandon',
      'Filsystemnavigering',
      'Användare och rättigheter',
      'Skript och automatisering',
      'Nätverkskonfiguration',
    ],
    duration: 'Ca 20 deltagare per grupp',
    note: 'Undervisning på svenska · Material på engelska · Via Microsoft Teams',
  },
  {
    id: 'cv',
    title: 'Datorseende & Bildbehandling',
    level: 'Intermediär',
    levelColor: '#006AA7',
    icon: '👁️',
    desc: 'Lär dig hur datorer tolkar och analyserar bilder — från grunderna till ansiktsigenkänning.',
    topics: [
      'Bildfundamentals',
      'Arbeta med webbkamera/video',
      'Bildfiltrering och transformation',
      'Ansiktsigenkänning',
      'Deep Learning-modeller för datorseende',
    ],
    duration: 'Varierar',
  },
  {
    id: 'mysql',
    title: 'Dataanalys med MySQL',
    level: 'Nybörjare',
    levelColor: '#2f5d50',
    icon: '🗄️',
    desc: 'Lär dig hantera och analysera data med MySQL, ett av världens mest populära databashanteringssystem.',
    topics: [
      'MySQL-installation och konfiguration',
      'Grundläggande SQL-syntax',
      'Datatyper och tabelldesign',
      'Användarskapande och rättigheter',
      'Avancerade frågor och analys',
    ],
    duration: 'Varierar',
  },
  {
    id: 'pydata',
    title: 'Dataanalys med Python',
    level: 'Intermediär',
    levelColor: '#006AA7',
    icon: '📊',
    desc: 'Kraftfull dataanalys med Python-biblioteket NumPy och relaterade verktyg.',
    topics: [
      'NumPy arrays',
      'Array-operationer',
      'Indexering och slicing',
      'Datavisualisering',
      'Statistisk analys',
    ],
    duration: 'Varierar',
  },
  {
    id: 'genai',
    title: 'Building with Generative AI',
    level: 'Intermediär',
    levelColor: '#006AA7',
    icon: '✨',
    desc: 'Utforska generativ AI och lär dig bygga praktiska applikationer med de senaste AI-teknologierna.',
    topics: [
      'AI-grenar och koncept',
      'Grunderna i generativ AI',
      'LLMs och språkmodeller',
      'Praktiska tillämpningar',
      'Industrianvändning av AI',
    ],
    duration: 'Varierar',
  },
]

const levelColors: Record<string, string> = {
  'Nybörjare': 'bg-green-100 text-green-700',
  'Intermediär': 'bg-blue-100 text-blue-700',
  'Avancerad': 'bg-orange-100 text-orange-700',
}

export default function Kurser() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a2744] to-[#006AA7] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <span className="text-[#FECC02] font-semibold text-sm uppercase tracking-wider">Kurser</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Lär dig IT med oss
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Praktiska, tidseffektiva kurser undervisade av erfarna IT-proffs.
            Undervisning på svenska med engelskt kursmaterial via Microsoft Teams.
          </p>
        </div>
      </section>

      {/* Format info */}
      <section className="bg-[#f8f9fc] border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-[#006AA7]">🖥️</span>
              <span>Undervisning via Microsoft Teams</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#006AA7]">🇸🇪</span>
              <span>Instruktion på svenska</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#006AA7]">📚</span>
              <span>Material på engelska</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#006AA7]">👥</span>
              <span>Små grupper för bättre inlärning</span>
            </div>
          </div>
        </div>
      </section>

      {/* Courses grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="p-6 flex-1">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{course.icon}</span>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${levelColors[course.level]}`}>
                    {course.level}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1a2744] mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{course.desc}</p>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Innehåll</p>
                  <ul className="space-y-1">
                    {course.topics.map((t) => (
                      <li key={t} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-[#006AA7] flex-shrink-0 mt-0.5">›</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                {course.note && (
                  <p className="mt-4 text-xs text-gray-400 bg-gray-50 rounded-lg px-3 py-2">
                    ℹ️ {course.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a2744] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Intresserad av en kurs?</h2>
          <p className="text-white/70 mb-6">
            Bli medlem och få tillgång till kursanmälningar, studiegrupper och mentorskap.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/bli-medlem" className="bg-[#FECC02] text-[#1a2744] font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors text-sm">
              Bli medlem →
            </Link>
            <Link href="/kontakta-oss" className="border border-white/30 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-sm">
              Fråga om kurs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
