'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react'

function Word({
  word,
  index,
  total,
  progress,
}: {
  word: string
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const start = index / total
  const end = start + 1 / total
  const opacity = useTransform(progress, [start, end], [0.12, 1])
  return (
    <motion.span style={{ opacity }} className="inline">
      {word}{' '}
    </motion.span>
  )
}

export function WordReveal({ tag, text }: { tag: string; text: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.45'],
  })
  const words = text.split(' ')

  return (
    <section id="about" ref={ref} className="paper-grain px-6 py-24 md:py-36">
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        <span className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground">
          {tag}
        </span>
        <p className="font-display text-pretty text-2xl font-semibold leading-snug md:text-4xl md:leading-snug">
          {words.map((word, i) => (
            <Word
              key={`${word}-${i}`}
              word={word}
              index={i}
              total={words.length}
              progress={scrollYProgress}
            />
          ))}
        </p>
      </div>
    </section>
  )
}
