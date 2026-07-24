'use server'

import { Resend } from 'resend'

const NOTIFY_EMAIL = 'styrelsen@stockholmsitforening.se'

export type MemberState = { success?: boolean; error?: string }

export async function submitMembership(_prev: MemberState, formData: FormData): Promise<MemberState> {
  // Honeypot: bots fill this hidden field, humans never see it
  if (formData.get('website')) return { success: true }

  const firstName = formData.get('first_name') as string
  const lastName = formData.get('last_name') as string
  const email = formData.get('email') as string
  const interests = formData.getAll('interests') as string[]
  const message = formData.get('message') as string

  if (!firstName?.trim() || !lastName?.trim() || !email?.trim()) {
    return { error: 'Vänligen fyll i alla obligatoriska fält.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { error: 'Ogiltig e-postadress.' }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const { error } = await resend.emails.send({
    from: 'SITF Webb <noreply@stockholmsitforening.se>',
    to: NOTIFY_EMAIL,
    subject: `Ny medlemsansökan från ${firstName.trim()} ${lastName.trim()}`,
    html: `
      <h2>Ny medlemsansökan</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px">
        <tr><td style="padding:8px;font-weight:bold;width:160px">Namn</td><td style="padding:8px">${firstName.trim()} ${lastName.trim()}</td></tr>
        <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">E-post</td><td style="padding:8px"><a href="mailto:${email.trim()}">${email.trim()}</a></td></tr>
        ${interests.length ? `<tr><td style="padding:8px;font-weight:bold;vertical-align:top">Intressen</td><td style="padding:8px">${interests.join(', ')}</td></tr>` : ''}
        ${message?.trim() ? `<tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold;vertical-align:top">Meddelande</td><td style="padding:8px;white-space:pre-wrap">${message.trim()}</td></tr>` : ''}
      </table>
    `,
  })

  if (error) {
    console.error('Email send error:', error)
    return { error: 'Något gick fel. Försök igen senare.' }
  }

  return { success: true }
}
