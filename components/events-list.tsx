'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { CalendarClock, Camera } from 'lucide-react'
import { PAST_EVENTS } from '@/lib/events-data'
import { EventLightbox } from '@/components/event-lightbox'

export function EventsList({
  photosBySlug,
}: {
  photosBySlug: Record<string, string[]>
}) {
  const [lightbox, setLightbox] = useState<{
    title: string
    photos: string[]
  } | null>(null)

  return (
    <div className="flex flex-col gap-20">
      {/* Upcoming */}
      <section aria-labelledby="upcoming-heading" className="flex flex-col gap-6">
        <span
          id="upcoming-heading"
          className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground"
        >
          01 / UPCOMING EVENTS
        </span>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-border bg-card px-6 py-16 text-center"
        >
          <CalendarClock className="size-8 text-muted-foreground" aria-hidden="true" />
          <h2 className="font-display text-xl font-semibold">
            No upcoming events scheduled
          </h2>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            We{'\u2019'}re planning next semester{'\u2019'}s agenda — follow
            us on Instagram or check back soon.
          </p>
        </motion.div>
      </section>

      {/* Past */}
      <section aria-labelledby="past-heading" className="flex flex-col gap-6">
        <span
          id="past-heading"
          className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground"
        >
          02 / PAST EVENTS {'&'} ACHIEVEMENTS
        </span>
        <div className="grid gap-5 md:grid-cols-2">
          {PAST_EVENTS.map((event, i) => {
            const photos = photosBySlug[event.slug] ?? []
            return (
              <motion.article
                key={event.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg md:p-8"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-semibold tracking-wide text-accent-foreground">
                    {event.category.toUpperCase()}
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground">
                    {event.level} // COMPLETED
                  </span>
                </div>

                <h2 className="font-display text-xl font-semibold leading-tight md:text-2xl">
                  {event.title}
                </h2>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {event.description}
                </p>

                <button
                  type="button"
                  onClick={() => setLightbox({ title: event.title, photos })}
                  className="mt-auto flex items-center gap-2 self-start rounded-full border border-foreground/20 px-5 py-2.5 text-xs font-semibold tracking-wide transition-colors hover:bg-foreground hover:text-background"
                >
                  <Camera className="size-3.5" aria-hidden="true" />
                  VIEW PHOTOS
                  {photos.length > 0 && (
                    <span className="text-muted-foreground">({photos.length})</span>
                  )}
                </button>
              </motion.article>
            )
          })}
        </div>
      </section>

      {lightbox && (
        <EventLightbox
          title={lightbox.title}
          photos={lightbox.photos}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  )
}
