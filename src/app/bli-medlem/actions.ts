'use server'

import { createAdminClient } from '@/lib/supabase/admin'

export type MemberState = {
  success?: boolean
  error?: string
}

export async function submitMembership(
  _prev: MemberState,
  formData: FormData
): Promise<MemberState> {
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

  return { success: true }
}
