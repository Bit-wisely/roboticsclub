import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { CrewGrid } from '@/components/crew-grid'

export const metadata: Metadata = {
  title: 'The Crew — Robotics Club UCE',
  description:
    'Meet the people behind the machines — the faculty mentor and student leads driving Robotics Club UCE.',
}

export default function CrewPage() {
  return (
    <main className="paper-grain px-6 pb-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <PageHeader
          tag="THE CREW"
          title="The people behind the machines."
          subtitle="Builders, coders, and organizers keeping the club's gears turning — guided by our faculty mentor and driven by student leads across departments."
        />
        <CrewGrid />
      </div>
    </main>
  )
}
