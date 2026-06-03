'use server'

import { createAdminClient } from '@/lib/supabase/admin'
import { Resend } from 'resend'

const NOTIFY_EMAIL = 'styrelsen@stockholmsitforening.se'

export type ContactState = { success?: boolean; error?: string }

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const city = formData.get('city') as string
  const phone = formData.get('phone') as string
  const message = formData.get('message') as string

  if (!name?.trim() || !email?.trim() || !city?.trim() || !message?.trim()) {
    return { error: 'Vänligen fyll i alla obligatoriska fält.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { error: 'Ogiltig e-postadress.' }
  }

  const supabase = createAdminClient()
  const { error } = await supabase.from('contact_messages').insert({
    name: name.trim(),
    email: email.trim().toLowerCase(),
    city: city.trim(),
    phone: phone?.trim() || null,
    message: message.trim(),
  })

  if (error) {
    console.error('Contact form error:', error)
    return { error: 'Något gick fel. Försök igen senare.' }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  await resend.emails.send({
    from: 'SITF Webb <noreply@stockholmsitforening.se>',
    to: NOTIFY_EMAIL,
    subject: `Nytt kontaktmeddelande från ${name.trim()}`,
    html: `
      <h2>Nytt meddelande via kontaktformuläret</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px">
        <tr><td style="padding:8px;font-weight:bold;width:120px">Namn</td><td style="padding:8px">${name.trim()}</td></tr>
        <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">E-post</td><td style="padding:8px"><a href="mailto:${email.trim()}">${email.trim()}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold">Stad</td><td style="padding:8px">${city.trim()}</td></tr>
        ${phone?.trim() ? `<tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Telefon</td><td style="padding:8px">${phone.trim()}</td></tr>` : ''}
        <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold;vertical-align:top">Meddelande</td><td style="padding:8px;white-space:pre-wrap">${message.trim()}</td></tr>
      </table>
    `,
  }).catch((err) => console.error('Email send error:', err))

  return { success: true }
}
