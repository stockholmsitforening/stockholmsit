import Link from 'next/link'
import { getDictionary, hasLocale } from './dictionaries'
import { notFound } from 'next/navigation'

const courses = ['Python', 'Machine Learning', 'Deep Learning', 'Linux', 'Cybersäkerhet', 'Cloud Services', 'Dataanalys med MySQL', 'Generativ AI']
const boardTags = ['Nätverksdesign', 'Cybersäkerhet', 'AI/ML', 'Webbutveckling', 'Dataanalys', 'Linux', 'Cloud', 'Fintech']

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const d = await getDictionary(lang)
  const t = d.home

  return (
    <>
      <section className="bg-gradient-to-br from-[#1a2744] via-[#1e3060] to-[#006AA7] text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#FECC02]/20 text-[#FECC02] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
              {t.badge}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              {t.h1}<br />
              <span className="text-[#FECC02]">{t.h1Yellow}</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">{t.intro}</p>
            <div className="flex flex-wrap gap-4">
              <Link href={`/${lang}/bli-medlem`} className="bg-[#FECC02] text-[#1a2744] font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors text-sm">{t.ctaJoin}</Link>
              <Link href={`/${lang}/kurser`} className="border border-white/40 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-sm">{t.ctaCourses}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#006AA7] text-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {t.statsItems.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-[#FECC02]">{s.value}</div>
                <div className="text-white/80 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#006AA7] font-semibold text-sm uppercase tracking-wider">{t.missionLabel}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mt-2 mb-6">{t.missionTitle}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{t.missionP1}</p>
            <p className="text-gray-600 leading-relaxed mb-6">{t.missionP2}</p>
            <Link href={`/${lang}/om-oss`} className="text-[#006AA7] font-semibold hover:underline">{t.missionLink}</Link>
          </div>
          <div className="bg-[#f8f9fc] rounded-2xl p-8">
            <h3 className="text-[#1a2744] font-bold text-lg mb-4">{t.coursesBoxTitle}</h3>
            <div className="flex flex-wrap gap-2">
              {courses.map((c) => (
                <span key={c} className="bg-white border border-[#006AA7]/20 text-[#006AA7] text-sm px-3 py-1.5 rounded-full font-medium">{c}</span>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-500 text-sm">{t.coursesNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fc] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#006AA7] font-semibold text-sm uppercase tracking-wider">{t.activitiesLabel}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mt-2">{t.activitiesTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.activities.map((a) => (
              <div key={a.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="text-3xl mb-4">{a.icon}</div>
                <h3 className="font-bold text-[#1a2744] mb-2">{a.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-[#006AA7] font-semibold text-sm uppercase tracking-wider">{t.boardLabel}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mt-2">{t.boardTitle}</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{t.boardDesc}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {boardTags.map((tag) => (
            <span key={tag} className="bg-[#1a2744]/5 text-[#1a2744] text-sm px-4 py-2 rounded-full">{tag}</span>
          ))}
        </div>
        <div className="text-center">
          <Link href={`/${lang}/styrelsen`} className="bg-[#1a2744] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#142035] transition-colors text-sm">{t.boardLink}</Link>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#1a2744] to-[#006AA7] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.ctaTitle}</h2>
          <p className="text-white/80 text-lg mb-8">{t.ctaDesc}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/${lang}/bli-medlem`} className="bg-[#FECC02] text-[#1a2744] font-bold px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors">{t.ctaJoin2}</Link>
            <Link href={`/${lang}/kontakta-oss`} className="border border-white/40 text-white font-medium px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">{t.ctaContact}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
