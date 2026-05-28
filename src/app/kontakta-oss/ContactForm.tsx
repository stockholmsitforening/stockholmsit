'use client'

import { useActionState } from 'react'
import { submitContact, type ContactState } from './actions'

const initialState: ContactState = {}

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initialState)

  if (state.success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-lg font-bold text-green-800 mb-2">Tack för ditt meddelande!</h3>
        <p className="text-green-700 text-sm">Vi återkommer till dig så snart som möjligt.</p>
      </div>
    )
  }

  return (
    <form action={action} className="space-y-5">
      {state.error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
          {state.error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Namn <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Ditt namn"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#006AA7]/30 focus:border-[#006AA7]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            E-post <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="din@email.se"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#006AA7]/30 focus:border-[#006AA7]"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Stad / Land <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="city"
            required
            placeholder="t.ex. Stockholm, Sverige"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#006AA7]/30 focus:border-[#006AA7]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Telefon <span className="text-gray-400">(valfritt)</span>
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="+46 70 000 00 00"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#006AA7]/30 focus:border-[#006AA7]"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Meddelande <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Skriv ditt meddelande här..."
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#006AA7]/30 focus:border-[#006AA7] resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-[#006AA7] text-white font-semibold py-3 rounded-lg hover:bg-[#005a8e] transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm"
      >
        {pending ? 'Skickar...' : 'Skicka meddelande →'}
      </button>
    </form>
  )
}
