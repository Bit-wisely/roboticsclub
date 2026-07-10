export type CrewMember = {
  name: string
  role: string
  detail: string
  photo: string
  featured?: boolean
}

export const CREW: CrewMember[] = [
  {
    name: 'Lini Abraham',
    role: 'Faculty Mentor',
    detail: 'Faculty Supervisor',
    photo: '/crew/lini-abraham.png',
    featured: true,
  },
  {
    name: 'Hisham T S',
    role: 'Convener',
    detail: 'S5 CSE',
    photo: '/crew/hisham.jpg',
  },
  {
    name: 'Anirudhan K S',
    role: 'Joint Convener',
    detail: 'S7 CSE',
    photo: '/crew/anirudhan.jpeg',
  },
  {
    name: 'Dixon Shaji',
    role: 'Secretary',
    detail: 'S5 AD',
    photo: '/crew/dixon.jpeg',
  },
  {
    name: 'Adhithyan V Shaji',
    role: 'Joint Secretary',
    detail: 'S5 CY',
    photo: '/crew/adhithyan.jpeg',
  },
  {
    name: 'Meenakshi Krishnakumar',
    role: 'Treasurer',
    detail: 'S5 CSE',
    photo: '/crew/meenakshi.jpeg',
  },
  {
    name: 'Sreegovind S',
    role: 'Technical Coordinator',
    detail: 'S5 AD',
    photo: '/crew/sreegovind.jpeg',
  },
]
