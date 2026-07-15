import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://stockholmsitforening.se'),
  title: 'Stockholms IT Förening',
  description: 'En ideell organisation som främjar IT-kunskap och tekniktillgång för alla i samhället.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  )
}
