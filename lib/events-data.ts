export type ClubEvent = {
  slug: string
  title: string
  category: string
  description: string
  level: string
  status: 'completed' | 'upcoming'
}

export const PAST_EVENTS: ClubEvent[] = [
  {
    slug: 'vr-experience',
    title: 'Free VR Experience',
    category: 'Virtual Reality',
    description:
      'An open-to-all dive into immersive worlds. Students strapped on headsets and stepped inside virtual environments — for many, their very first taste of VR.',
    level: 'COLLEGE LEVEL',
    status: 'completed',
  },
  {
    slug: 'arduino-workshop',
    title: '2-Day Arduino Workshop',
    category: 'Embedded Systems',
    description:
      'Two days of hands-on hacking with microcontrollers. From blinking the first LED to wiring sensors, participants left with working circuits and new instincts.',
    level: 'COLLEGE LEVEL',
    status: 'completed',
  },
  {
    slug: 'racing-competition',
    title: 'F1 & Disney Speedstorm Racing',
    category: 'Esports',
    description:
      'Engines revved and reflexes were tested as racers battled through F1 and Disney Speedstorm circuits in a high-energy esports showdown.',
    level: 'COLLEGE LEVEL',
    status: 'completed',
  },
  {
    slug: 'poster-competition',
    title: 'Poster Making Competition',
    category: 'Creative Tech',
    description:
      'Technology met artistry. Participants designed posters that reimagined how we visualize robotics, automation, and the machines of tomorrow.',
    level: 'COLLEGE LEVEL',
    status: 'completed',
  },
  {
    slug: 'coding-competition',
    title: 'Algorithmic Coding Competition',
    category: 'Software',
    description:
      'A timed battle of logic and language. Coders raced the clock to crack algorithmic puzzles, with the leaderboard shifting until the final submission.',
    level: 'COLLEGE LEVEL',
    status: 'completed',
  },
  {
    slug: 'pc-assembly',
    title: 'Live PC Assembly Workshop',
    category: 'Hardware',
    description:
      'From bare components to a booting machine — a live, step-by-step build that demystified what actually sits inside the box.',
    level: 'COLLEGE LEVEL',
    status: 'completed',
  },
  {
    slug: 'project-showcase',
    title: 'Project Showcase',
    category: 'Exhibition',
    description:
      'Our members put their builds on display — bots, circuits, and experiments — proving that the best way to learn engineering is to ship something.',
    level: 'COLLEGE LEVEL',
    status: 'completed',
  },
]
