'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { CheckCircle2, Loader2, Radio, Send } from 'lucide-react'

const CATEGORIES = [
  'Workshop idea',
  'Event idea',
  'Website feedback',
  'Club improvement',
  'Something else',
]

type FormState = 'idle' | 'sending' | 'sent'

export function SuggestionForm() {
  const [state, setState] = useState<FormState>('idle')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (state !== 'idle') return
    setState('sending')
    setTimeout(() => setState('sent'), 1400)
  }

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <AnimatePresence mode="wait">
        {state === 'sent' ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            role="status"
            className="flex flex-col items-center justify-center gap-5 rounded-3xl border border-border bg-card px-8 py-20 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.15 }}
            >
              <CheckCircle2 className="size-12 text-accent-foreground" aria-hidden="true" />
            </motion.div>
            <h2 className="font-display text-2xl font-semibold">
              Transmission received!
            </h2>
            <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              Thanks for the signal. The crew reviews every suggestion when
              planning what we build next.
            </p>
            <button
              type="button"
              onClick={() => setState('idle')}
              className="rounded-full border border-foreground/20 px-6 py-3 text-xs font-semibold tracking-wide transition-colors hover:bg-foreground hover:text-background"
            >
              SEND ANOTHER
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 md:p-10"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="sugg-name" className="text-sm font-medium">
                Name{' '}
                <span className="font-normal text-muted-foreground">(optional)</span>
              </label>
              <input
                id="sugg-name"
                name="name"
                type="text"
                placeholder="Stay anonymous if you like"
                className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/40"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="sugg-category" className="text-sm font-medium">
                Category
              </label>
              <select
                id="sugg-category"
                name="category"
                required
                defaultValue=""
                className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/40"
              >
                <option value="" disabled>
                  What kind of idea is it?
                </option>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="sugg-message" className="text-sm font-medium">
                Your suggestion
              </label>
              <textarea
                id="sugg-message"
                name="message"
                required
                rows={5}
                placeholder="Tell us what you'd like the club to do, build, or fix..."
                className="resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm leading-relaxed outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/40"
              />
            </div>

            <button
              type="submit"
              disabled={state === 'sending'}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold tracking-wide text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
            >
              {state === 'sending' ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                  TRANSMITTING...
                </>
              ) : (
                <>
                  <Send className="size-4" aria-hidden="true" />
                  SEND SUGGESTION
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      <div className="hidden flex-col items-center justify-center gap-4 text-center lg:flex">
        <Radio className="size-8 text-muted-foreground" aria-hidden="true" />
        <p className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
          // CHANNEL OPEN — ALL FREQUENCIES
        </p>
        <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
          The best events we{'\u2019'}ve run started as a suggestion from
          someone like you. No idea is too small or too wild.
        </p>
      </div>
    </div>
  )
}
