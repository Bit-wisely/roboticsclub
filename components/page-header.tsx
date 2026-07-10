'use client'

import { motion } from 'motion/react'

export function PageHeader({
  tag,
  title,
  subtitle,
}: {
  tag: string
  title: string
  subtitle: string
}) {
  return (
    <div className="flex flex-col gap-5 pt-28 md:pt-36">
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground"
      >
        {tag}
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base"
      >
        {subtitle}
      </motion.p>
    </div>
  )
}
