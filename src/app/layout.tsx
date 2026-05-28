import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Stockholms IT Förening',
  description:
    'En ideell organisation som främjar IT-kunskap och tekniktillgång för alla i samhället. Kurser, mentorskap och gemenskap i Sundbyberg/Stockholm.',
  keywords: 'IT-kurser, Stockholm, Sundbyberg, programmering, Linux, Python, cybersäkerhet',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
