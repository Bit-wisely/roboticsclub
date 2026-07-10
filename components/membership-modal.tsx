'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { X, Check } from 'lucide-react'

const SEMESTERS = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8']
const BRANCHES = [
  'Computer Science',
  'Cybersecurity',
  'Artificial Intelligence',
  'Electronics',
  'Electrical',
  'Polymer',
]

const fieldClass =
  'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-plum focus:ring-2 focus:ring-lavender/40'

export function MembershipModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [submitted, setSubmitted] = useState(false)

  // Close on Escape + lock body scroll while open.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  // Reset the success state a moment after the modal is dismissed.
  useEffect(() => {
    if (open) return
    const t = setTimeout(() => setSubmitted(false), 250)
    return () => clearTimeout(t)
  }, [open])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Robotics Club membership registration"
        >
          <motion.div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-h-[90svh] w-full max-w-lg overflow-y-auto rounded-3xl border border-border bg-card text-card-foreground shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="size-4" aria-hidden="true" />
            </button>

            {submitted ? (
              <div className="flex flex-col items-center gap-4 px-8 py-16 text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-lavender/30 text-plum">
                  <Check className="size-7" aria-hidden="true" />
                </span>
                <h3 className="font-display text-2xl font-bold">
                  You{'\u2019'}re on the list
                </h3>
                <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
                  Thanks for signing up. Our team will reach out over email once
                  the next intake opens. Keep building.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-2 rounded-full bg-plum px-8 py-3 text-sm font-semibold text-plum-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-6 p-8">
                <div className="flex flex-col gap-2 pr-10">
                  <span className="font-mono text-[11px] font-semibold tracking-[0.3em] text-muted-foreground">
                    MEMBER PASS {'\u00B7'} {'\u20B9'}150 / 4 YEARS
                  </span>
                  <h3 className="font-display text-2xl font-bold leading-tight md:text-3xl">
                    Join the Robotics Club
                  </h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    Fill in your details to register for the 4-year membership
                    pass. It only takes a minute.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="m-name"
                      className="text-xs font-semibold text-foreground"
                    >
                      Full name
                    </label>
                    <input
                      id="m-name"
                      name="name"
                      required
                      placeholder="e.g. Aditya Menon"
                      className={fieldClass}
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="m-phone"
                        className="text-xs font-semibold text-foreground"
                      >
                        Mobile number
                      </label>
                      <input
                        id="m-phone"
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]{10}"
                        required
                        placeholder="e.g. 9876543210"
                        className={fieldClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="m-email"
                        className="text-xs font-semibold text-foreground"
                      >
                        Email address
                      </label>
                      <input
                        id="m-email"
                        name="email"
                        type="email"
                        required
                        placeholder="e.g. you@example.com"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="m-sem"
                        className="text-xs font-semibold text-foreground"
                      >
                        Semester
                      </label>
                      <select
                        id="m-sem"
                        name="semester"
                        required
                        defaultValue=""
                        className={fieldClass}
                      >
                        <option value="" disabled>
                          Select semester
                        </option>
                        {SEMESTERS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="m-branch"
                        className="text-xs font-semibold text-foreground"
                      >
                        Branch
                      </label>
                      <select
                        id="m-branch"
                        name="branch"
                        required
                        defaultValue=""
                        className={fieldClass}
                      >
                        <option value="" disabled>
                          Select branch
                        </option>
                        {BRANCHES.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="m-ktu"
                      className="text-xs font-semibold text-foreground"
                    >
                      KTU / University ID
                    </label>
                    <input
                      id="m-ktu"
                      name="ktuId"
                      required
                      placeholder="e.g. UCE22CS045"
                      className={fieldClass}
                    />
                  </div>

                  <div className="mt-2 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-full bg-plum px-8 py-3 text-sm font-semibold text-plum-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Register now
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
