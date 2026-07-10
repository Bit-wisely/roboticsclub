'use client'

import { motion } from 'motion/react'
import { CREW, type CrewMember } from '@/lib/crew-data'

function CrewCard({ member, index }: { member: CrewMember; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.06 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-accent-foreground/30"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={member.photo || '/placeholder.svg'}
          alt={`${member.name}, ${member.role}`}
          loading="lazy"
          className="size-full object-cover object-[center_30%] transition-transform duration-500 group-hover:scale-[1.05]"
        />
      </div>
      <div className="flex flex-col gap-1.5 p-4">
        <span className="inline-flex w-fit rounded-full bg-accent-foreground/10 px-2.5 py-1 font-mono text-[10px] font-medium tracking-[0.15em] text-accent-foreground">
          {member.role.toUpperCase()}
        </span>
        <h2 className="font-display text-base font-semibold leading-tight text-foreground">
          {member.name}
        </h2>
        <p className="text-xs text-muted-foreground">{member.detail}</p>
      </div>
    </motion.article>
  )
}

export function CrewGrid() {
  const mentor = CREW.find((m) => m.featured)
  const leads = CREW.filter((m) => !m.featured)

  return (
    <div className="flex flex-col gap-16">
      {mentor && (
        <div className="flex flex-col gap-6">
          <span className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground">
            01 / FACULTY MENTOR
          </span>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            <CrewCard member={mentor} index={0} />
          </div>
        </div>
      )}

      <div className="flex flex-col gap-6">
        <span className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground">
          02 / STUDENT LEADS
        </span>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {leads.map((member, i) => (
            <CrewCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
