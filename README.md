# HirePro — Blue Collar Job Hiring Platform

A mobile-first, accessible, and multilingual platform for blue-collar job candidates. No resume required — candidates build their profile through a skill checklist, preferences, credentials, assessments, and more.

## Job Categories (Industry → Skill Type → Role)

- **10 Industries**: Hospitality, Construction, Manufacturing, Equipment, Logistics, Maintenance, Facility, Cleaning, General Labor, Healthcare
- **Skill Types**: Skilled | Semi-Skilled | Unskilled
- **70+ Roles**: Welder, Plumber, Forklift Operator, CDL Driver, HVAC Tech, Chef, etc.
- **Full Forms**: CDL, CNC, HVAC (tooltips in UI)

## Features

1. **Skill Checklist** — Industry expandable → Role selection with skill type badges (no resume)
2. **Work Preferences** — Days of week and shift (Morning/Afternoon/Night/Flexible)
3. **Credentials & Licenses** — Upload certifications and licenses
4. **Geo-Tag** — One-tap location capture for job matching
5. **AI Roleplay Assessment** — Conversational scenario (e.g., handling upset customer)
6. **Situation Judgment Tests** — "What would you do?" multiple-choice scenarios
7. **60-Second Video Introduction** — Record a short video pitch
8. **Practical Skills Mini Tasks** — Profile-based (e.g., Welder → welding safety; Forklift → pre-op checks)
9. **Reference Collection** — Add employer contacts for automated rating requests
10. **Accessible & Multilingual** — EN, ES, HI; low literacy support; large touch targets

## Quick Start

```bash
cd hirepro
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
hirepro/
├── FLOWS.md              # User flows and job category structure
├── src/
│   ├── data/             # jobCategories.js, practicalTasks.js
│   ├── context/          # Language & Profile state
│   ├── components/       # Layout, ProgressBar, StepNav
│   └── pages/            # Landing + Steps 1–10 + Complete
└── index.html
```

## Design Principles

- **Progressive** — Complete in multiple sessions
- **Mobile-first** — Works on any phone
- **Low literacy** — Icons over text, audio support ready
- **Multilingual** — Language switcher (EN/ES/HI)

## Tech Stack

- React 18 + Vite
- React Router
- CSS (no framework) with CSS variables
