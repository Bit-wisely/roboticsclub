'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FileSearch, Loader2, SearchX } from 'lucide-react'
import { PAST_EVENTS } from '@/lib/events-data'

type LookupState = 'idle' | 'searching' | 'not-found'

export function CertificateLookup() {
  const [state, setState] = useState<LookupState>('idle')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (state === 'searching') return
    setState('searching')
    setTimeout(() => setState('not-found'), 1600)
  }

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 md:p-10"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="cert-name" className="text-sm font-medium">
            Full name
          </label>
          <input
            id="cert-name"
            name="name"
            type="text"
            required
            placeholder="As printed on your certificate"
            className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/40"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="cert-id" className="text-sm font-medium">
            Certificate ID
          </label>
          <input
            id="cert-id"
            name="certificateId"
            type="text"
            placeholder="e.g. RC-UCE-2025-014 (optional)"
            className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/40"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="cert-event" className="text-sm font-medium">
            Event
          </label>
          <select
            id="cert-event"
            name="event"
            required
            defaultValue=""
            className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/40"
          >
            <option value="" disabled>
              Select the event
            </option>
            {PAST_EVENTS.map((event) => (
              <option key={event.slug} value={event.slug}>
                {event.title}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={state === 'searching'}
          className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold tracking-wide text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
        >
          {state === 'searching' ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              SEARCHING RECORDS...
            </>
          ) : (
            <>
              <FileSearch className="size-4" aria-hidden="true" />
              SEARCH CERTIFICATE
            </>
          )}
        </button>
      </motion.form>

      <div className="flex items-center justify-center">
        <AnimatePresence mode="wait">
          {state === 'not-found' ? (
            <motion.div
              key="not-found"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              role="status"
              className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-border bg-card px-8 py-14 text-center"
            >
              <SearchX className="size-9 text-muted-foreground" aria-hidden="true" />
              <h2 className="font-display text-xl font-semibold">
                No record found
              </h2>
              <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
                Online certificate verification is coming soon. If you
                attended an event and need your certificate, reach out to us
                on Instagram and we{'\u2019'}ll sort you out.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="hidden max-w-xs flex-col gap-3 text-center lg:flex"
            >
              <p className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
                // HOW IT WORKS
              </p>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                Enter the name you registered with, pick the event, and
                we{'\u2019'}ll pull up your participation record.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
