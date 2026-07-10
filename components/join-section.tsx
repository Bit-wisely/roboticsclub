'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Check, Lock } from 'lucide-react'
import { MembershipModal } from '@/components/membership-modal'

const PERKS = [
  {
    title: 'Interactive Tech Sessions',
    body: 'Participate in expert-led lectures and tutorials',
  },
  {
    title: 'Hands-On Workshops',
    body: 'Apply concepts in practical lab environments',
  },
  {
    title: 'Collaborative Project Clusters',
    body: 'Team up with peers to design hardware/software',
  },
  {
    title: 'Priority Event Entry',
    body: 'Get early access to premium tech seminars',
  },
]

export function JoinSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section
      id="join"
      className="paper-grain scroll-mt-20 bg-background px-6 py-20 text-foreground md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — copy + perks */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-5">
            <span className="font-mono text-[11px] font-semibold tracking-[0.3em] text-muted-foreground">
              REGISTER MEMBERSHIP
            </span>
            <h2 className="font-display max-w-md text-balance text-4xl font-bold leading-[1.05] md:text-5xl">
              Robotics Club Membership
            </h2>
            <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
              Membership registration is currently closed. Registration for all
              students will reopen when the new first-year student batch arrives.
            </p>
          </div>

          <ul className="flex flex-col gap-5">
            {PERKS.map((perk) => (
              <li key={perk.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-lavender/30 text-plum">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="font-display font-semibold leading-tight">
                    {perk.title}
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {perk.body}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right — member pass card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-plum to-ink p-8 text-ink-foreground shadow-xl md:p-10"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-lavender/20 blur-3xl"
          />

          <div className="relative flex items-center justify-between">
            <span className="rounded-full bg-lavender/20 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-lavender">
              Active
            </span>
            <span className="text-xs font-medium uppercase tracking-widest text-ink-foreground/60">
              Robotics Club UCE
            </span>
          </div>

          <div className="relative mt-10 flex flex-col gap-4">
            <span className="text-sm font-semibold uppercase tracking-widest text-ink-foreground/70">
              Member Pass
            </span>
            <div className="flex items-end gap-2">
              <span className="font-display text-5xl font-bold md:text-6xl">
                {'\u20B9'}150
              </span>
              <span className="mb-2 text-sm text-ink-foreground/60">
                / 4 years
              </span>
            </div>
            <p className="max-w-sm text-pretty text-sm leading-relaxed text-ink-foreground/70">
              Get a full membership pass to access the lab, participate in
              technical workshops, and collaborate on projects.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="relative mt-8 flex w-full items-center justify-center rounded-full bg-ink-foreground px-8 py-4 text-sm font-semibold tracking-wide text-ink transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Get 4-Year Pass
          </button>

          <div className="relative mt-5 flex flex-col items-center gap-2">
            <span className="flex items-center gap-1.5 text-xs text-ink-foreground/50">
              <Lock className="size-3" aria-hidden="true" />
              Secure instant registration
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-lavender">
              Registration temporarily paused
            </span>
          </div>
        </motion.div>
      </div>

      <MembershipModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
