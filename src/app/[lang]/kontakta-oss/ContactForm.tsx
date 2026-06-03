'use client'

import { useActionState } from 'react'
import { submitContact } from './actions'

type ContactDict = {
  nameLabel: string; namePlaceholder: string
  emailLabel: string; emailPlaceholder: string
  cityLabel: string; cityPlaceholder: string
  phoneLabel: string; phonePlaceholder: string; phoneOptional: string
  messageLabel: string; messagePlaceholder: string
  required: string; submit: string; submitting: string
  successTitle: string; successDesc: string
}

export default function ContactForm({ dict }: { dict: ContactDict }) {
  const [state, action, pending] = useActionState(submitContact, {})

  if (state.success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-lg font-bold text-green-800 mb-2">{dict.successTitle}</h3>
        <p className="text-green-700 text-sm">{dict.successDesc}</p>
      </div>
    )
  }

  return (
    <form action={action} className="space-y-5">
      {state.error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">{state.error}</div>
      )}
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">{dict.nameLabel} <span className="text-red-500">{dict.required}</span></label>
          <input type="text" name="name" required placeholder={dict.namePlaceholder} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#006AA7]/30 focus:border-[#006AA7]" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">{dict.emailLabel} <span className="text-red-500">{dict.required}</span></label>
          <input type="email" name="email" required placeholder={dict.emailPlaceholder} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#006AA7]/30 focus:border-[#006AA7]" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">{dict.cityLabel} <span className="text-red-500">{dict.required}</span></label>
          <input type="text" name="city" required placeholder={dict.cityPlaceholder} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#006AA7]/30 focus:border-[#006AA7]" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">{dict.phoneLabel} <span className="text-gray-400">{dict.phoneOptional}</span></label>
          <input type="tel" name="phone" placeholder={dict.phonePlaceholder} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#006AA7]/30 focus:border-[#006AA7]" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">{dict.messageLabel} <span className="text-red-500">{dict.required}</span></label>
        <textarea name="message" required rows={5} placeholder={dict.messagePlaceholder} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#006AA7]/30 focus:border-[#006AA7] resize-y" />
      </div>
      <button type="submit" disabled={pending} className="w-full bg-[#006AA7] text-white font-semibold py-3 rounded-lg hover:bg-[#005a8e] transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm">
        {pending ? dict.submitting : dict.submit}
      </button>
    </form>
  )
}
