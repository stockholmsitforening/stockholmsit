'use server'

import { createAdminClient } from '@/lib/supabase/admin'

export type ContactState = {
  success?: boolean
  error?: string
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
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

  return { success: true }
}
