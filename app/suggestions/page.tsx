import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { SuggestionForm } from '@/components/suggestion-form'

export const metadata: Metadata = {
  title: 'Suggestions — Robotics Club UCE',
  description:
    'Have an idea for a workshop, event, or improvement? Send your suggestions to Robotics Club UCE.',
}

export default function SuggestionsPage() {
  return (
    <main className="paper-grain px-6 pb-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <PageHeader
          tag="SUGGESTIONS"
          title="Transmit your ideas."
          subtitle="Want a workshop on drones? A robo-soccer tournament? Something we haven't thought of? This channel is open — anonymous transmissions welcome."
        />
        <SuggestionForm />
      </div>
    </main>
  )
}
