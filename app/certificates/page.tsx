import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { CertificateLookup } from '@/components/certificate-lookup'

export const metadata: Metadata = {
  title: 'Certificates — Robotics Club UCE',
  description:
    'Look up and verify your participation certificates from Robotics Club UCE events and workshops.',
}

export default function CertificatesPage() {
  return (
    <main className="paper-grain px-6 pb-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <PageHeader
          tag="CERTIFICATES"
          title="Verify your credentials."
          subtitle="Every workshop and competition comes with a verified participation certificate. Search yours below."
        />
        <CertificateLookup />
      </div>
    </main>
  )
}
