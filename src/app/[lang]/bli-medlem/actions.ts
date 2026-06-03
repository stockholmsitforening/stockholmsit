'use server'

import { createAdminClient } from '@/lib/supabase/admin'
import { Resend } from 'resend'

const NOTIFY_EMAIL = 'styrelsen@stockholmsitforening.se'

export type MemberState = { success?: boolean; error?: string }

export async function submitMembership(_prev: MemberState, formData: FormData): Promise<MemberState> {
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

  const supabase = createAdminClient()
  const { error } = await supabase.from('membership_applications').insert({
    first_name: firstName.trim(),
    last_name: lastName.trim(),
    email: email.trim().toLowerCase(),
    interests,
    message: message?.trim() || null,
    status: 'pending',
  })

  if (error) {
    console.error('Membership form error:', error)
    if (error.code === '23505') {
      return { error: 'Den här e-postadressen är redan registrerad.' }
    }
    return { error: 'Något gick fel. Försök igen senare.' }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  await resend.emails.send({
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
  }).catch((err) => console.error('Email send error:', err))

  return { success: true }
}
