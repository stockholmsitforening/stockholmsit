import Link from 'next/link'
import { getDictionary, hasLocale } from '../dictionaries'
import { notFound } from 'next/navigation'

const courses = [
  { id: 'python', title: 'Python', level: 'Nybörjare', icon: '🐍', desc_sv: 'Kom igång med ett av världens mest använda programmeringsspråk.', desc_en: 'Get started with one of the world\'s most used programming languages.', desc_es: 'Comienza con uno de los lenguajes de programación más utilizados del mundo.', topics: ['Installation av Anaconda', 'Grundläggande datatyper', 'String-metoder', 'Loopar och villkor', 'Funktioner och moduler'] },
  { id: 'ml', title: 'Maskinlärning / Machine Learning', level: 'Avancerad', icon: '🤖', desc_sv: 'Komplett introduktion till Machine Learning med fokus på praktiska tillämpningar.', desc_en: 'Complete introduction to Machine Learning with a focus on practical applications.', desc_es: 'Introducción completa a Machine Learning con enfoque en aplicaciones prácticas.', topics: ['Python-programmering', 'Dataanalys med MySQL', 'Dataanalys med Python', 'Machine Learning-algoritmer', 'Computer Vision & bildbehandling', 'Deep Learning'] },
  { id: 'dl', title: 'Deep Learning / Djuplärning', level: 'Avancerad', icon: '🧠', desc_sv: 'Djupdyk in i neurala nätverk och deep learning-tekniker som driver modern AI.', desc_en: 'Dive deep into neural networks and deep learning techniques powering modern AI.', desc_es: 'Sumérgete en redes neuronales y técnicas de deep learning que impulsan la IA moderna.', topics: ['Introduktion till djupinlärning', 'Neurala nätverk (CNN)', 'Kostnadsfunktioner', 'Backpropagation', 'Praktiska projekt'] },
  { id: 'linux', title: 'Linux', level: 'Nybörjare', icon: '🐧', desc_sv: 'Lär dig Linux från grunden via Microsoft Teams.', desc_en: 'Learn Linux from scratch via Microsoft Teams.', desc_es: 'Aprende Linux desde cero a través de Microsoft Teams.', topics: ['Terminal och grundläggande kommandon', 'Filsystemnavigering', 'Användare och rättigheter', 'Skript och automatisering', 'Nätverkskonfiguration'] },
  { id: 'cv', title: 'Computer Vision', level: 'Intermediär', icon: '👁️', desc_sv: 'Lär dig hur datorer tolkar och analyserar bilder.', desc_en: 'Learn how computers interpret and analyze images.', desc_es: 'Aprende cómo las computadoras interpretan y analizan imágenes.', topics: ['Bildfundamentals', 'Arbeta med webbkamera/video', 'Bildfiltrering och transformation', 'Ansiktsigenkänning', 'Deep Learning-modeller för datorseende'] },
  { id: 'mysql', title: 'Dataanalys med MySQL', level: 'Nybörjare', icon: '🗄️', desc_sv: 'Lär dig hantera och analysera data med MySQL.', desc_en: 'Learn to manage and analyze data with MySQL.', desc_es: 'Aprende a gestionar y analizar datos con MySQL.', topics: ['MySQL-installation och konfiguration', 'Grundläggande SQL-syntax', 'Datatyper och tabelldesign', 'Användarskapande och rättigheter', 'Avancerade frågor och analys'] },
  { id: 'pydata', title: 'Dataanalys med Python', level: 'Intermediär', icon: '📊', desc_sv: 'Kraftfull dataanalys med Python och NumPy.', desc_en: 'Powerful data analysis with Python and NumPy.', desc_es: 'Análisis de datos potente con Python y NumPy.', topics: ['NumPy arrays', 'Array-operationer', 'Indexering och slicing', 'Datavisualisering', 'Statistisk analys'] },
  { id: 'genai', title: 'Building with Generative AI', level: 'Intermediär', icon: '✨', desc_sv: 'Utforska generativ AI och bygg praktiska applikationer.', desc_en: 'Explore generative AI and build practical applications.', desc_es: 'Explora la IA generativa y construye aplicaciones prácticas.', topics: ['AI-grenar och koncept', 'Grunderna i generativ AI', 'LLMs och språkmodeller', 'Praktiska tillämpningar', 'Industrianvändning av AI'] },
]

const levelColors: Record<string, string> = {
  Nybörjare: 'bg-green-100 text-green-700',
  Intermediär: 'bg-blue-100 text-blue-700',
  Avancerad: 'bg-orange-100 text-orange-700',
}

export default async function Kurser({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const d = await getDictionary(lang)
  const t = d.courses

  return (
    <>
      <section className="bg-gradient-to-br from-[#1a2744] to-[#006AA7] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <span className="text-[#FECC02] font-semibold text-sm uppercase tracking-wider">{t.label}</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">{t.title}</h1>
          <p className="text-white/80 text-lg max-w-2xl">{t.intro}</p>
        </div>
      </section>

      <section className="bg-[#f8f9fc] border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            {['🖥️', '🇸🇪', '📚', '👥'].map((icon, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[#006AA7]">{icon}</span>
                <span>{t.formatItems[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => {
            const desc = lang === 'en' ? course.desc_en : lang === 'es' ? course.desc_es : course.desc_sv
            const levelLabel = t.levels[course.level as keyof typeof t.levels] ?? course.level
            return (
              <div key={course.id} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{course.icon}</span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${levelColors[course.level]}`}>{levelLabel}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1a2744] mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{t.contentLabel}</p>
                    <ul className="space-y-1">
                      {course.topics.map((topic) => (
                        <li key={topic} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-[#006AA7] flex-shrink-0 mt-0.5">›</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-[#1a2744] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">{t.ctaTitle}</h2>
          <p className="text-white/70 mb-6">{t.ctaDesc}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/${lang}/bli-medlem`} className="bg-[#FECC02] text-[#1a2744] font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors text-sm">{t.ctaJoin}</Link>
            <Link href={`/${lang}/kontakta-oss`} className="border border-white/30 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-sm">{t.ctaAsk}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
