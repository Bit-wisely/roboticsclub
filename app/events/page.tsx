import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { EventsList } from '@/components/events-list'
import { getAllEventPhotos } from '@/lib/event-photos'

export const metadata: Metadata = {
  title: 'Events — Robotics Club UCE',
  description:
    'Workshops, competitions, and showcases by Robotics Club UCE — see what we have built and what is coming next.',
}

export default function EventsPage() {
  const photosBySlug = getAllEventPhotos()

  return (
    <main className="paper-grain px-6 pb-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <PageHeader
          tag="EVENTS"
          title="Where the machines meet the crowd."
          subtitle="From hands-on workshops to head-to-head competitions — every event is a chance to build, break, and learn something new."
        />
        <EventsList photosBySlug={photosBySlug} />
      </div>
    </main>
  )
}
