import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Kontakta oss | Stockholms IT Förening',
  description: 'Kontakta Stockholms IT Förening med frågor om kurser, medlemskap eller samarbeten.',
}

export default function KontaktaOss() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a2744] to-[#006AA7] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <span className="text-[#FECC02] font-semibold text-sm uppercase tracking-wider">Kontakt</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Kontakta oss
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Har du frågor om kurser, medlemskap eller vill samarbeta med oss?
            Vi återkommer så snart som möjligt.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Info column */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold text-[#1a2744] mb-6">Kontaktinformation</h2>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-[#006AA7] font-semibold text-sm mb-1">
                  <span>📍</span> Plats
                </div>
                <p className="text-gray-600 text-sm">Sundbyberg / Stockholm, Sverige</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-[#006AA7] font-semibold text-sm mb-1">
                  <span>🌐</span> Webbplats
                </div>
                <p className="text-gray-600 text-sm">stockholmsitforening.se</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-[#006AA7] font-semibold text-sm mb-1">
                  <span>🏛️</span> Organisation
                </div>
                <p className="text-gray-600 text-sm">Ideell förening, ej vinstdrivande</p>
              </div>
            </div>

            <div className="mt-8 bg-[#f8f9fc] rounded-xl p-5">
              <h3 className="font-semibold text-[#1a2744] mb-3 text-sm">Vanliga frågor</h3>
              <div className="space-y-3">
                {[
                  ['Vad kostar kurserna?', 'Kontakta oss för aktuell prisinformation.'],
                  ['Är ni öppna för samarbeten?', 'Ja! Vi samarbetar med skolor, företag och organisationer.'],
                  ['Hur ansöker jag om mentorskap?', 'Bli medlem och kontakta oss via formuläret.'],
                ].map(([q, a]) => (
                  <div key={q}>
                    <p className="text-xs font-semibold text-gray-700">{q}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-[#1a2744] mb-6">Skicka ett meddelande</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
