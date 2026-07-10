'use client'

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Camera, ChevronLeft, ChevronRight, X } from 'lucide-react'

export function EventLightbox({
  title,
  photos,
  onClose,
}: {
  title: string
  photos: string[]
  onClose: () => void
}) {
  const [index, setIndex] = useState(0)

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + photos.length) % photos.length),
    [photos.length],
  )
  const next = useCallback(
    () => setIndex((i) => (i + 1) % photos.length),
    [photos.length],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`Photos from ${title}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-90 flex flex-col bg-ink/95 backdrop-blur-sm"
        onClick={onClose}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <p className="font-mono text-[10px] tracking-[0.25em] text-ink-foreground/60">
            {title.toUpperCase()}
            {photos.length > 0 && ` — ${index + 1} / ${photos.length}`}
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="flex size-10 items-center justify-center rounded-full border border-ink-foreground/20 text-ink-foreground transition-colors hover:bg-ink-foreground/10"
          >
            <X className="size-5" />
          </button>
        </div>

        <div
          className="flex flex-1 items-center justify-center px-4 pb-8"
          onClick={(e) => e.stopPropagation()}
        >
          {photos.length === 0 ? (
            <div className="flex flex-col items-center gap-4 text-center">
              <Camera className="size-10 text-ink-foreground/40" aria-hidden="true" />
              <p className="font-display text-xl font-semibold text-ink-foreground">
                Photos coming soon
              </p>
              <p className="max-w-xs text-pretty text-sm leading-relaxed text-ink-foreground/50">
                Shots from this event haven{'\u2019'}t been uploaded yet.
                Check back in a bit.
              </p>
            </div>
          ) : (
            <div className="flex w-full max-w-4xl items-center gap-3">
              {photos.length > 1 && (
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous photo"
                  className="flex size-11 shrink-0 items-center justify-center rounded-full border border-ink-foreground/20 text-ink-foreground transition-colors hover:bg-ink-foreground/10"
                >
                  <ChevronLeft className="size-5" />
                </button>
              )}
              <motion.img
                key={photos[index]}
                src={photos[index]}
                alt={`${title} photo ${index + 1} of ${photos.length}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="max-h-[70svh] w-full rounded-xl object-contain"
              />
              {photos.length > 1 && (
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next photo"
                  className="flex size-11 shrink-0 items-center justify-center rounded-full border border-ink-foreground/20 text-ink-foreground transition-colors hover:bg-ink-foreground/10"
                >
                  <ChevronRight className="size-5" />
                </button>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
