import { getDictionary, hasLocale } from '../dictionaries'
import { notFound } from 'next/navigation'
import ContactForm from './ContactForm'

export default async function KontaktaOss({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const d = await getDictionary(lang)
  const t = d.contact

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
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold text-[#1a2744] mb-6">{t.infoTitle}</h2>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-[#006AA7] font-semibold text-sm mb-1"><span>📍</span> {t.locationLabel}</div>
                <p className="text-gray-600 text-sm">{t.locationValue}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-[#006AA7] font-semibold text-sm mb-1"><span>🌐</span> {t.websiteLabel}</div>
                <p className="text-gray-600 text-sm">stockholmsitforening.se</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-[#006AA7] font-semibold text-sm mb-1"><span>🏛️</span> {t.orgLabel}</div>
                <p className="text-gray-600 text-sm">{t.orgValue}</p>
              </div>
            </div>
            <div className="mt-8 bg-[#f8f9fc] rounded-xl p-5">
              <h3 className="font-semibold text-[#1a2744] mb-3 text-sm">{t.faqTitle}</h3>
              <div className="space-y-3">
                {t.faq.map((item) => (
                  <div key={item.q}>
                    <p className="text-xs font-semibold text-gray-700">{item.q}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-[#1a2744] mb-6">{t.formTitle}</h2>
            <ContactForm dict={t} />
          </div>
        </div>
      </section>
    </>
  )
}
