import { getDictionary, hasLocale } from '../dictionaries'
import { notFound } from 'next/navigation'
import MemberForm from './MemberForm'

export default async function BliMedlem({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const d = await getDictionary(lang)
  const t = d.join

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
            <h2 className="text-xl font-bold text-[#1a2744] mb-6">{t.benefitsTitle}</h2>
            <ul className="space-y-4">
              {t.benefits.map((b) => (
                <li key={b.text} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">{b.icon}</span>
                  <span className="text-gray-600 text-sm leading-relaxed">{b.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 bg-[#FECC02]/10 border border-[#FECC02]/30 rounded-xl p-5">
              <div className="text-2xl mb-2">💡</div>
              <h3 className="font-bold text-[#1a2744] mb-1">{t.nonprofitTitle}</h3>
              <p className="text-gray-600 text-sm">{t.nonprofitDesc}</p>
            </div>
            <div className="mt-4 bg-[#f8f9fc] rounded-xl p-5">
              <h3 className="font-semibold text-[#1a2744] mb-2 text-sm">{t.areasTitle}</h3>
              <p className="text-gray-500 text-xs">{t.areasDesc}</p>
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-[#1a2744] mb-6">{t.formTitle}</h2>
            <MemberForm dict={t} />
          </div>
        </div>
      </section>
    </>
  )
}
