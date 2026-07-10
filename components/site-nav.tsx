'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Instagram, Menu, X } from 'lucide-react'

const LINKS = [
  { href: '/#about', label: 'About us' },
  { href: '/crew', label: 'Crew' },
  { href: '/events', label: 'Events' },
  { href: '/certificates', label: 'Certificates' },
  { href: '/suggestions', label: 'Suggestions' },
]

export function SiteNav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Main navigation"
        className={`transition-all duration-300 ${
          open
            ? 'bg-background'
            : scrolled
              ? 'bg-background/80 shadow-[0_1px_0_0_var(--border)] backdrop-blur-md'
              : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20 md:px-6">
        <Link href="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <img
            src="/logo-white.png"
            alt="Robotics Club UCE home"
            className="h-9 w-auto invert md:h-11"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://www.instagram.com/roboticsclubuce"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground/70 transition-colors hover:border-accent hover:text-foreground"
          >
            <Instagram className="size-3.5" aria-hidden="true" />
            @roboticsclubuce
          </a>
          <Link
            href="/#join"
            className="rounded-full bg-primary px-5 py-2.5 text-xs font-semibold tracking-wide text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Join club
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full border border-border bg-card lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-40 flex flex-col bg-background lg:hidden"
          >
            <div className="flex flex-1 flex-col justify-center gap-2 px-8">
              {LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.35, ease: 'easeOut' }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display block py-3 text-3xl font-semibold text-foreground"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * LINKS.length, duration: 0.35, ease: 'easeOut' }}
                className="mt-6 flex flex-col gap-3"
              >
                <Link
                  href="/#join"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-primary px-6 py-4 text-center text-sm font-semibold text-primary-foreground"
                >
                  Join club
                </Link>
                <a
                  href="https://www.instagram.com/roboticsclubuce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-4 text-sm font-medium text-foreground/70"
                >
                  <Instagram className="size-4" aria-hidden="true" />
                  @roboticsclubuce
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
