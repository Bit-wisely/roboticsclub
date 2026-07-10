# Robotics Club UCE Website

The official website for **Robotics Club UCE** (University College of Engineering), a student-driven collective where curiosity meets circuitry. This modern web application serves as the central hub for showcasing club activities, events, crew members, and managing community suggestions and certificate verifications.

## Features

- **Home Page**: Features a stunning, interactive hero section, a scroll-based storytelling component, key club statistics, and a dynamic photo wall of recent builds and activities.
- **Crew**: Page showcasing the students and faculty mentors driving the club forward.
- **Events**: A detailed gallery and list of workshops, competitions, project showcases, and interactive experiences.
- **Certificates**: A built-in certificate lookup system for event participants to verify and view their certificates.
- **Suggestions**: An interactive suggestion form enabling students to provide feedback or pitch project ideas.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [PostCSS](https://postcss.org/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/) & [Base UI](https://base-ui.com/)
- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion)

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Bit-wisely/roboticsclub.git
   cd roboticsclub
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

### Running Locally

To start the development server:
   ```bash
   pnpm dev
   ```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

To create an optimized production build:
   ```bash
   pnpm build
   pnpm start
   ```
