import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Styrelsen | Stockholms IT Förening',
  description: 'Möt styrelsen i Stockholms IT Förening — erfarna IT-proffs inom nätverksdesign, AI, webbutveckling, dataanalys och cybersäkerhet.',
}

const boardMembers = [
  {
    name: 'Andres Calderon',
    role: 'Ordförande',
    roleEn: 'Chair',
    initials: 'AC',
    color: '#006AA7',
    expertise: ['Nätverksdesign', 'IT-säkerhet', 'AI/DL/ML', 'Cisco CCNA/CCNP'],
    bio: 'Specialiserad inom avancerad IT-kommunikation med bred erfarenhet inom nätverksdesign, IT-säkerhet och felsökning. Certifierad inom Cisco CCNA, CCNP, Juniper Networks, Microsoft Professional och LPI Linux.',
  },
  {
    name: 'Maria Valkova',
    role: 'Sekreterare',
    roleEn: 'Secretary',
    initials: 'MV',
    color: '#5a4a8a',
    expertise: ['Statistisk analys', 'Sociologi', 'Makroekonomi', 'Ekonometri'],
    bio: 'Utbildad inom sociologi och ekonomi med expertis i kvalitativ och kvantitativ statistisk analys, makroekonomi och ekonometri.',
  },
  {
    name: 'Frans Eliasson',
    role: 'Ledamot',
    roleEn: 'Board Member',
    initials: 'FE',
    color: '#2f5d50',
    expertise: ['Dataanalys', 'Forskningsdesign', 'Media', 'Nonprofit'],
    bio: 'Statistikspecialist med erfarenhet från data­analys och forskningsdesign. Bred bakgrund inom media och ideell sektor med fokus på att bygga analytiska avdelningar.',
  },
  {
    name: 'Bernardo Troncoso',
    role: 'Ledamot',
    roleEn: 'Board Member',
    initials: 'BT',
    color: '#b8552d',
    expertise: ['Virtualisering', 'Python/VB.NET', 'Linux', 'Kubernetes/CI-CD'],
    bio: 'Teknisk expert inom virtualisering (KVM, VMware, Proxmox), applikationsutveckling (Visual Basic .NET, Python, APEX), databasadministration, Linux-system och Openshift/Kubernetes/CI-CD.',
  },
  {
    name: 'Khalid Hasan',
    role: 'Kassör',
    roleEn: 'Treasurer',
    initials: 'KH',
    color: '#c9a227',
    expertise: ['Nätverksteknik', 'Trådlösa nätverk', 'Brandväggar', 'Cisco/Juniper'],
    bio: 'Nätverksingenjör med specialkompetens inom nätverksdesign, trådlösa nätverk och brandväggshantering. Certifierad inom Cisco och Juniper Networks.',
  },
  {
    name: 'Martin Nissfolk',
    role: 'Ledamot',
    roleEn: 'Board Member',
    initials: 'MN',
    color: '#006AA7',
    expertise: ['Webbutveckling', '.NET', 'Fintech', 'Uppsala University'],
    bio: 'Civilingenjörsexamen från Uppsala Universitet. Webbutvecklare specialiserad på fintech-lösningar och .NET-plattformen.',
  },
  {
    name: 'Patrik Hertzman',
    role: 'Ledamot',
    roleEn: 'Board Member',
    initials: 'PH',
    color: '#3d6b8c',
    expertise: ['IT-säkerhet', 'Tekniksäkerhet', 'Kompetensutveckling', 'IT/Tech workforce'],
    bio: 'Teknisk säkerhetsproffs med fokus på IT/tech-kompetensförsörjning och initiativ för personalutveckling inom IT och teknik.',
  },
]

export default function Styrelsen() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a2744] to-[#006AA7] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <span className="text-[#FECC02] font-semibold text-sm uppercase tracking-wider">Styrelsen</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Träffa vår styrelse
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Sju engagerade IT-proffs med sammanlagt över 30 års erfarenhet som driver
            Stockholms IT Förening framåt.
          </p>
        </div>
      </section>

      {/* Board grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              {/* Color bar + initials */}
              <div className="h-2" style={{ backgroundColor: member.color }} />
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a2744] text-lg leading-tight">{member.name}</h3>
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full text-white"
                      style={{ backgroundColor: member.color }}
                    >
                      {member.role}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-1.5">
                  {member.expertise.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full border font-medium"
                      style={{ borderColor: member.color + '40', color: member.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-[#f8f9fc] py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#1a2744] mb-2">
            Intresserad av att engagera dig?
          </h2>
          <p className="text-gray-600 mb-6">
            Vill du bidra till vår organisation eller lära dig av våra erfarna styrelsemedlemmar?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/bli-medlem" className="bg-[#1a2744] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#142035] transition-colors text-sm">
              Bli medlem
            </Link>
            <Link href="/kontakta-oss" className="border border-[#1a2744]/20 text-[#1a2744] font-medium px-6 py-3 rounded-lg hover:bg-white transition-colors text-sm">
              Kontakta oss
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
