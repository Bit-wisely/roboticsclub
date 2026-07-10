import fs from 'fs'
import path from 'path'
import { PAST_EVENTS } from './events-data'

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif'])

/**
 * Reads the photos uploaded into public/events/<slug>/.
 * Drop image files into an event folder — no code changes needed.
 */
export function getEventPhotos(slug: string): string[] {
  try {
    const dir = path.join(process.cwd(), 'public', 'events', slug)
    return fs
      .readdirSync(dir)
      .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
      .sort()
      .map((file) => `/events/${slug}/${file}`)
  } catch {
    return []
  }
}

/** Photos for every past event, keyed by slug. */
export function getAllEventPhotos(): Record<string, string[]> {
  const map: Record<string, string[]> = {}
  for (const event of PAST_EVENTS) {
    map[event.slug] = getEventPhotos(event.slug)
  }
  return map
}

/** Flat randomized sample across all event folders (for the home photo wall). */
export function getRandomPhotoSample(count: number): string[] {
  const all = Object.values(getAllEventPhotos()).flat()
  // deterministic-ish shuffle is fine here; runs server-side per render
  const shuffled = [...all].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}
