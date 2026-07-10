'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const BOOT_LINES = [
  'INITIALIZING SYSTEMS...',
  'CALIBRATING SERVOS...',
  'LOADING NEURAL PATHWAYS...',
  'ROBOTICS CLUB UCE ONLINE',
]

export function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [lineIndex, setLineIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (sessionStorage.getItem('rc-booted')) {
      setVisible(false)
      return
    }

    const lineTimer = setInterval(() => {
      setLineIndex((i) => Math.min(i + 1, BOOT_LINES.length - 1))
    }, 520)

    const progressTimer = setInterval(() => {
      setProgress((p) => Math.min(p + Math.random() * 22 + 8, 100))
    }, 260)

    const doneTimer = setTimeout(() => {
      sessionStorage.setItem('rc-booted', '1')
      setVisible(false)
    }, 2400)

    return () => {
      clearInterval(lineTimer)
      clearInterval(progressTimer)
      clearTimeout(doneTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          role="status"
          aria-label="Loading Robotics Club UCE"
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-ink px-6"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.img
            src="/logo-white.png"
            alt="Robotics Club UCE"
            className="w-56 max-w-[70vw] md:w-72"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />

          <div className="mt-10 flex w-56 max-w-[70vw] flex-col items-center gap-4 md:w-72">
            <div className="h-px w-full overflow-hidden bg-ink-foreground/20">
              <motion.div
                className="h-full bg-lavender"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.25 }}
              />
            </div>
            <motion.p
              key={lineIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-[10px] tracking-[0.25em] text-ink-foreground/60"
            >
              {BOOT_LINES[lineIndex]}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
