'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Camera } from 'lucide-react'

const TILE_ROTATIONS = ['-2deg', '1.5deg', '-1deg', '2deg', '1deg', '-1.5deg', '2.5deg', '-0.5deg']

export function PhotoWall({ photos }: { photos: string[] }) {
  const [active, setActive] = useState<number | null>(null)
  const tiles = photos.slice(0, 8)

  return (
    <section className="paper-grain overflow-hidden px-6 py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground">
            03 / MOMENTS
          </span>
          <h2 className="font-display text-balance text-3xl font-bold leading-tight md:text-5xl">
            Caught in the act of building.
          </h2>
          <p className="max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            Snapshots from our workshops, competitions, and showcases.
            {tiles.length > 0 ? ' Hover or tap to take a closer look.' : ''}
          </p>
        </div>

        {tiles.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {tiles.map((src, i) => (
              <motion.button
                key={src}
                type="button"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                onClick={() => setActive(active === i ? null : i)}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                aria-label={`View club photo ${i + 1}`}
                className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-card"
                style={{
                  rotate: active === i ? '0deg' : TILE_ROTATIONS[i % TILE_ROTATIONS.length],
                  scale: active === i ? 1.05 : 1,
                  zIndex: active === i ? 10 : 1,
                  transition: 'rotate 0.35s ease, scale 0.35s ease',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src || '/placeholder.svg'}
                  alt=""
                  loading="lazy"
                  className={`size-full object-cover transition-all duration-500 ${
                    active === i ? 'grayscale-0' : 'grayscale-[65%]'
                  }`}
                />
              </motion.button>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-border bg-card px-6 py-16 text-center">
            <Camera className="size-8 text-muted-foreground" aria-hidden="true" />
            <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              Event photos are on their way. Once uploaded, moments from our
              workshops and competitions will appear here.
            </p>
          </div>
        )}

        <Link
          href="/events"
          className="self-start rounded-full border border-foreground/20 px-6 py-3 text-xs font-semibold tracking-wide transition-colors hover:bg-foreground hover:text-background"
        >
          SEE ALL EVENTS
        </Link>
      </div>
    </section>
  )
}
