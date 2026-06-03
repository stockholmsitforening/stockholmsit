'use client'

import { useActionState } from 'react'
import { submitMembership } from './actions'

const interestAreas = [
  'Linux', 'Windows-systemadministration', 'DevOps och containerisering (Docker/Kubernetes)',
  'Cybersäkerhet', 'Nätverksadministration', 'Cloud-tjänster (AWS, Azure, GCP)',
  'Mjukvaruutveckling och programmering', 'Databashantering', 'AI och maskininlärning',
  'Python', 'Dataanalys', 'Webbutveckling', 'Spelutveckling', 'UI/UX-design', 'IT-konsultation',
]

type JoinDict = {
  firstNameLabel: string; firstNamePlaceholder: string
  lastNameLabel: string; lastNamePlaceholder: string
  emailLabel: string; emailPlaceholder: string
  interestsLabel: string; interestsHint: string
  messageLabel: string; messageOptional: string; messagePlaceholder: string
  submit: string; submitting: string; gdpr: string
  successTitle: string; successDesc: string
}

export default function MemberForm({ dict }: { dict: JoinDict }) {
  const [state, action, pending] = useActionState(submitMembership, {})

  if (state.success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-10 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">{dict.successTitle}</h3>
        <p className="text-green-700 text-sm max-w-md mx-auto">{dict.successDesc}</p>
      </div>
    )
  }

  return (
    <form action={action} className="space-y-6">
      {state.error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">{state.error}</div>
      )}
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">{dict.firstNameLabel} <span className="text-red-500">*</span></label>
          <input type="text" name="first_name" required placeholder={dict.firstNamePlaceholder} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#006AA7]/30 focus:border-[#006AA7]" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">{dict.lastNameLabel} <span className="text-red-500">*</span></label>
          <input type="text" name="last_name" required placeholder={dict.lastNamePlaceholder} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#006AA7]/30 focus:border-[#006AA7]" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">{dict.emailLabel} <span className="text-red-500">*</span></label>
        <input type="email" name="email" required placeholder={dict.emailPlaceholder} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#006AA7]/30 focus:border-[#006AA7]" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">{dict.interestsLabel} <span className="text-gray-400">{dict.interestsHint}</span></label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-gray-50 rounded-xl p-4 border border-gray-200">
          {interestAreas.map((area) => (
            <label key={area} className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" name="interests" value={area} className="w-4 h-4 rounded border-gray-300 text-[#006AA7] focus:ring-[#006AA7]/30" />
              <span className="text-sm text-gray-600 group-hover:text-gray-900">{area}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">{dict.messageLabel} <span className="text-gray-400">{dict.messageOptional}</span></label>
        <textarea name="message" rows={3} placeholder={dict.messagePlaceholder} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#006AA7]/30 focus:border-[#006AA7] resize-y" />
      </div>
      <button type="submit" disabled={pending} className="w-full bg-[#006AA7] text-white font-semibold py-3 rounded-lg hover:bg-[#005a8e] transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm">
        {pending ? dict.submitting : dict.submit}
      </button>
      <p className="text-xs text-gray-400 text-center">{dict.gdpr}</p>
    </form>
  )
}
