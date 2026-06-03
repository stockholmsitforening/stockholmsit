import Link from 'next/link'
import { getDictionary, hasLocale } from '../dictionaries'
import { notFound } from 'next/navigation'

export default async function OmOss({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const d = await getDictionary(lang)
  const t = d.about

  return (
    <>
      <section className="bg-gradient-to-br from-[#1a2744] to-[#006AA7] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <span className="text-[#FECC02] font-semibold text-sm uppercase tracking-wider">{t.label}</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">{t.title}</h1>
          <p className="text-white/80 text-lg max-w-2xl">{t.intro}</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#1a2744] mb-4">{t.storyTitle}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{t.storyP1}</p>
            <p className="text-gray-600 leading-relaxed mb-4">{t.storyP2}</p>
            <p className="text-gray-600 leading-relaxed">{t.storyP3}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1a2744] mb-4">{t.uniqueTitle}</h2>
            <ul className="space-y-4">
              {t.uniqueItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#006AA7] mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fc] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#006AA7] font-semibold text-sm uppercase tracking-wider">{t.valuesLabel}</span>
            <h2 className="text-3xl font-bold text-[#1a2744] mt-2">{t.valuesTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-[#1a2744] mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-[#006AA7] font-semibold text-sm uppercase tracking-wider">{t.approachLabel}</span>
          <h2 className="text-3xl font-bold text-[#1a2744] mt-2">{t.approachTitle}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {t.approach.map((a) => (
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

      <section className="bg-[#1a2744] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">{t.ctaTitle}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/${lang}/bli-medlem`} className="bg-[#FECC02] text-[#1a2744] font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors text-sm">{t.ctaJoin}</Link>
            <Link href={`/${lang}/styrelsen`} className="border border-white/40 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-sm">{t.ctaBoard}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
