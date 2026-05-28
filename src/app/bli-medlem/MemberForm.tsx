'use client'

import { useActionState } from 'react'
import { submitMembership, type MemberState } from './actions'

const interestAreas = [
  'Linux',
  'Windows-systemadministration',
  'DevOps och containerisering (Docker/Kubernetes)',
  'Cybersäkerhet',
  'Nätverksadministration',
  'Cloud-tjänster (AWS, Azure, GCP)',
  'Mjukvaruutveckling och programmering',
  'Databashantering',
  'AI och maskininlärning',
  'Python',
  'Dataanalys',
  'Webbutveckling',
  'Spelutveckling',
  'UI/UX-design',
  'IT-konsultation',
]

const initialState: MemberState = {}

export default function MemberForm() {
  const [state, action, pending] = useActionState(submitMembership, initialState)

  if (state.success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-10 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Välkommen till SITF!</h3>
        <p className="text-green-700 text-sm max-w-md mx-auto">
          Tack för din ansökan! Vi behandlar den och återkommer till dig med mer information
          om nästa steg och kommande aktiviteter.
        </p>
      </div>
    )
  }

  return (
    <form action={action} className="space-y-6">
      {state.error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
          {state.error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Förnamn <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="first_name"
            required
            placeholder="Förnamn"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#006AA7]/30 focus:border-[#006AA7]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Efternamn <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="last_name"
            required
            placeholder="Efternamn"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#006AA7]/30 focus:border-[#006AA7]"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          E-postadress <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="din@email.se"
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#006AA7]/30 focus:border-[#006AA7]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Intresseområden <span className="text-gray-400">(välj alla som gäller)</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-gray-50 rounded-xl p-4 border border-gray-200">
          {interestAreas.map((area) => (
            <label key={area} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                name="interests"
                value={area}
                className="w-4 h-4 rounded border-gray-300 text-[#006AA7] focus:ring-[#006AA7]/30"
              />
              <span className="text-sm text-gray-600 group-hover:text-gray-900">{area}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Meddelande / kommentar <span className="text-gray-400">(valfritt)</span>
        </label>
        <textarea
          name="message"
          rows={3}
          placeholder="Berätta gärna varför du vill gå med eller vad du hoppas få ut av medlemskapet..."
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#006AA7]/30 focus:border-[#006AA7] resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-[#006AA7] text-white font-semibold py-3 rounded-lg hover:bg-[#005a8e] transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm"
      >
        {pending ? 'Skickar ansökan...' : 'Skicka medlemsansökan →'}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Genom att skicka in formuläret godkänner du att vi behandlar dina uppgifter
        i enlighet med GDPR.
      </p>
    </form>
  )
}
