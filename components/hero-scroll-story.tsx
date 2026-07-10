'use client'

import { useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from 'motion/react'

const CHAPTERS = [
  {
    tag: '01 / LEARN',
    title: 'Every engineer starts with a single spark.',
    body: 'Workshops, study jams, and late-night debugging sessions — we plant the seed and let it grow.',
    art: '/art/trees-1.png',
  },
  {
    tag: '02 / BUILD',
    title: 'From breadboards to bots — we build what we imagine.',
    body: 'Circuits, code, and chassis come together in our lab. Ideas branch out into working machines.',
    art: '/art/trees-2.png',
  },
  {
    tag: '03 / COMPETE',
    title: 'Then we take our machines to the arena.',
    body: 'Competitions, showcases, and challenges — where everything we grew stands tall.',
    art: '/art/trees-3.png',
  },
]

function Chapter({
  index,
  progress,
  chapter,
}: {
  index: number
  progress: MotionValue<number>
  chapter: (typeof CHAPTERS)[number]
}) {
  const count = CHAPTERS.length
  const start = index / count
  const end = (index + 1) / count
  const mid = 0.18 / count

  const opacity = useTransform(
    progress,
    [start, start + mid, end - mid, end],
    [index === 0 ? 1 : 0, 1, 1, index === count - 1 ? 1 : 0],
  )
  const artScale = useTransform(progress, [start, end], [1.04, 1.14])
  const textY = useTransform(progress, [start, start + mid], [40, 0])

  // Once a chapter is fully faded, stop painting it so it can't leave a
  // composited ghost behind the active chapter.
  const [painted, setPainted] = useState(index === 0)
  useMotionValueEvent(opacity, 'change', (v) => {
    setPainted((prev) => {
      const next = v > 0.01
      return prev === next ? prev : next
    })
  })

  return (
    <motion.div
      style={{ opacity, visibility: painted ? 'visible' : 'hidden' }}
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
    >
      <motion.div
        aria-hidden="true"
        style={{ backgroundImage: `url('${chapter.art}')`, scale: artScale }}
        className="absolute inset-0 bg-cover bg-center opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-background/70 via-transparent to-background/70"
      />
      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex max-w-2xl flex-col items-center gap-5 px-6 text-center"
      >
        <span className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground">
          {chapter.tag}
        </span>
        <h2 className="font-display text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          {chapter.title}
        </h2>
        <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
          {chapter.body}
        </p>
      </motion.div>
    </motion.div>
  )
}

export function HeroScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="story"
      ref={containerRef}
      aria-label="The club journey: learn, build, compete"
      className="relative h-[300svh] md:h-[350svh]"
    >
      <div className="sticky top-0 h-svh [isolation:isolate] overflow-hidden">
        {CHAPTERS.map((chapter, i) => (
          <Chapter
            key={chapter.tag}
            index={i}
            progress={scrollYProgress}
            chapter={chapter}
          />
        ))}

        {/* progress rail */}
        <div
          aria-hidden="true"
          className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-2 md:flex"
        >
          {CHAPTERS.map((c, i) => (
            <ChapterDot key={c.tag} index={i} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ChapterDot({
  index,
  progress,
}: {
  index: number
  progress: MotionValue<number>
}) {
  const count = CHAPTERS.length
  const opacity = useTransform(
    progress,
    [index / count, index / count + 0.05, (index + 1) / count - 0.05, (index + 1) / count],
    [0.3, 1, 1, 0.3],
  )
  return (
    <motion.span
      style={{ opacity }}
      className="block size-2 rounded-full bg-foreground"
    />
  )
}
