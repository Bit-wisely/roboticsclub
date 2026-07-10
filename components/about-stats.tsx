'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'

const STATS = [
  { value: 50, suffix: '+', label: 'Active members' },
  { value: 7, suffix: '', label: 'Events conducted' },
  { value: 3, suffix: '+', label: 'Hands-on workshops' },
  { value: 6, suffix: '+', label: 'Departments involved' },
]

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 2200
    const start = performance.now()
    let frame: number
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      // easeOutExpo — fast start, long gentle settle for a smoother count
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
      setDisplay(Math.round(eased * value))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  )
}

export function AboutStats() {
  return (
    <section className="paper-grain bg-card px-6 py-20 text-card-foreground md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-24 md:gap-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground">
              02 / ABOUT US
            </span>
            <span aria-hidden="true" className="h-px flex-1 bg-border" />
          </div>

          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display max-w-xl text-balance text-3xl font-bold leading-tight md:text-5xl">
              Built by students.{' '}
              <span className="relative inline-block">
                Powered by obsession.
                <motion.span
                  aria-hidden="true"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="absolute -bottom-1 left-0 h-1 w-full origin-left rounded-full bg-lavender"
                />
              </span>
            </h2>

            <div className="flex max-w-md flex-col gap-4">
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                We are the robotics wing of University College of Engineering
                {' \u2014 '}a crew of builders, coders, and tinkerers who
                believe the best classroom is a workbench. From your first
                soldering joint to your first competition, the club is where
                theory gets its hands dirty.
              </p>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                Open to every branch, every semester, every skill level. If
                you{'\u2019'}ve ever wanted to make something move, you belong
                here.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col items-center gap-16 md:gap-20">
          <motion.h3
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="font-display text-balance text-center text-3xl font-bold text-plum md:text-5xl"
          >
            Only real numbers here
          </motion.h3>

          <div className="grid w-full max-w-4xl grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center gap-3 text-center"
              >
                <span className="font-display text-5xl font-bold leading-none text-plum md:text-6xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground md:text-xs">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
