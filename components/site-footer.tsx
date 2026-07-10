'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'

const INSTAGRAM_URL = 'https://www.instagram.com/roboticsclubuce/'

export function SiteFooter() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [80, 0])
  const opacity = useTransform(scrollYProgress, [0.2, 0.8], [0, 1])

  return (
    <footer ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/footer-sky.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-[80svh] flex-col justify-end px-6 pb-10 pt-32 sm:px-8 md:pt-40">
        <motion.p
          style={{ opacity, y }}
          className="mx-auto mb-14 max-w-xl text-balance text-center font-baloo text-4xl font-bold text-white drop-shadow-md sm:text-5xl md:mb-24 md:text-6xl"
        >
          Build beyond limits
        </motion.p>

        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col items-center gap-8 text-white md:flex-row md:items-end md:justify-between md:gap-6">
            <div className="text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-widest opacity-80 sm:text-sm">
                Connect
              </p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block font-baloo text-2xl font-bold transition-opacity hover:opacity-80 md:text-3xl"
              >
                Instagram
              </a>
            </div>
            <Image
              src="/images/logo.png"
              alt="Robotics Club UCE"
              width={200}
              height={74}
              className="h-12 w-auto sm:h-14 md:h-16"
            />
          </div>

          <div className="mt-8 border-t border-white/25 pt-5 text-center text-[11px] text-white/80 sm:text-xs md:mt-10 md:text-left">
            {'Copyright \u00A9 2026 UCE Robotics Club. All rights reserved.'}
          </div>
        </div>
      </div>
    </footer>
  )
}
