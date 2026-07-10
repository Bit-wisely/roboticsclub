'use client'

import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pt-16 md:pt-24">
      {/* Tree line-art backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('/art/trees-hero.png')" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-background/60 via-transparent to-background"
      />

      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground"
        >
          ROBOTICS CLUB // UCE
        </motion.p>

        <h1 className="font-display text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          Engineering the minds behind tomorrow{'\u2019'}s machines
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          A student-driven collective at University College of Engineering
          where curiosity meets circuitry.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          href="#story"
          className="group flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-semibold tracking-wide text-accent-foreground transition-transform hover:scale-[1.04] active:scale-[0.98]"
        >
          DISCOVER THE CLUB
          <ChevronDown
            className="size-4 transition-transform group-hover:translate-y-0.5"
            aria-hidden="true"
          />
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown className="size-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
