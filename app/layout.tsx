import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Space_Grotesk, Baloo_2 } from 'next/font/google'
import { LoadingScreen } from '@/components/loading-screen'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-baloo-src',
})

export const metadata: Metadata = {
  title: 'Robotics Club UCE — Engineering the Minds Behind Tomorrow\u2019s Machines',
  description:
    'Robotics Club UCE is a student-driven collective at University College of Engineering where curiosity meets circuitry. Workshops, competitions, and hands-on builds.',
  generator: 'v0.app',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f2efe9',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${bricolage.variable} ${spaceGrotesk.variable} ${baloo.variable}`}
    >
      <body className="font-sans antialiased">
        <LoadingScreen />
        <SiteNav />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
