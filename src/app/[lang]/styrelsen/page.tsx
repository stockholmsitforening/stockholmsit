import Link from 'next/link'
import { getDictionary, hasLocale } from '../dictionaries'
import { notFound } from 'next/navigation'

export default async function Styrelsen({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const d = await getDictionary(lang)
  const t = d.board

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.members.map((member) => (
            <div key={member.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="h-2" style={{ backgroundColor: member.color }} />
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0" style={{ backgroundColor: member.color }}>
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a2744] text-lg leading-tight">{member.name}</h3>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: member.color }}>
                      {member.role}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-1.5">
                  {member.expertise.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full border font-medium" style={{ borderColor: member.color + '40', color: member.color }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f8f9fc] py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#1a2744] mb-2">{t.ctaTitle}</h2>
          <p className="text-gray-600 mb-6">{t.ctaDesc}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/${lang}/bli-medlem`} className="bg-[#1a2744] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#142035] transition-colors text-sm">{t.ctaJoin}</Link>
            <Link href={`/${lang}/kontakta-oss`} className="border border-[#1a2744]/20 text-[#1a2744] font-medium px-6 py-3 rounded-lg hover:bg-white transition-colors text-sm">{t.ctaContact}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
