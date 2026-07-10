import { Hero } from '@/components/hero'
import { HeroScrollStory } from '@/components/hero-scroll-story'
import { WordReveal } from '@/components/word-reveal'
import { AboutStats } from '@/components/about-stats'
import { PhotoWall } from '@/components/photo-wall'
import { JoinSection } from '@/components/join-section'
import { getRandomPhotoSample } from '@/lib/event-photos'

export default function HomePage() {
  const photos = getRandomPhotoSample(8)

  return (
    <main>
      <Hero />
      <HeroScrollStory />
      <WordReveal
        tag="01 / WHO WE ARE"
        text="Robotics Club UCE is a student-driven collective at University College of Engineering, where curiosity meets circuitry. We exist to turn lecture-hall theory into machines that move — one workshop, one build, and one competition at a time."
      />
      <AboutStats />
      <PhotoWall photos={photos} />
      <JoinSection />
    </main>
  )
}
