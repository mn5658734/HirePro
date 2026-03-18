# HirePro - User Flows & Application Architecture

## Job Category Structure (Product Insight)

**Level 1: Industry**
- Hospitality & Service
- Construction & Skilled Trades
- Manufacturing & Industrial
- Equipment & Heavy Machinery
- Logistics & Driving
- Maintenance & Technical
- Facility & Outdoor
- Cleaning & Domestic
- General Labor / Helpers
- Healthcare Support

**Level 2: Skill Type**
- **Skilled** — Welder, Electrician, Plumber, Chef, HVAC Tech
- **Semi-Skilled** — Driver, Machine Operator, Waiter, Security
- **Unskilled** — Helper, Cleaner, Daily Wage Worker

**Level 3: Role**
- Specific job titles (e.g., Hotel Boy, Forklift Operator, Ward Boy)

**Full Forms (UI Tooltips)**
- CDL → Commercial Driver's License
- CNC → Computer Numerical Control
- HVAC → Heating, Ventilation, and Air Conditioning

This hierarchy improves search relevance, matching algorithms, and salary benchmarking.

---

## Candidate Journey Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        HIREPRO CANDIDATE JOURNEY                             │
└─────────────────────────────────────────────────────────────────────────────┘

  [1] REGISTER          [2] SKILL CHECKLIST      [3] PREFERENCES
  ┌──────────┐          ┌──────────────────┐    ┌─────────────────┐
  │ Sign up  │ ───────► │ Industry > Role  │ ──►│ Days & shifts   │
  │ (phone/  │          │ (expandable,     │    │ (calendar pick, │
  │  email)  │          │  skill badges)   │    │  AM/PM/night)   │
  └──────────┘          └──────────────────┘    └────────┬────────┘
                                                         │
  [4] CREDENTIALS       [5] GEO-TAG             [6] AI ROLEPLAY
  ┌──────────────────┐  ┌──────────────────┐    ┌─────────────────┐
  │ Upload licenses, │  │ Capture location │    │ Conversational  │
  │ certifications   │◄─┤ (one-tap allow)  │ ──►│ scenario test   │
  └────────┬─────────┘  └──────────────────┘    └────────┬────────┘
           │                                                      │
           │             [7] SITUATION TESTS      [8] VIDEO INTRO  │
           │             ┌──────────────────┐    ┌─────────────────┐
           │             │ Multiple choice  │ ──►│ 60 sec selfie   │
           │             │ "What would you  │    │ video pitch     │
           │             │  do if..."       │    └────────┬────────┘
           │             └──────────────────┘             │
           │                                                      │
           │             [9] PRACTICAL TASKS     [10] REFERENCES   │
           │             ┌──────────────────┐    ┌─────────────────┐
           └────────────►│ Profile-based    │ ──►│ Auto-request     │
                         │ skill mini tasks │    │ from employers  │
                         └──────────────────┘    └────────┬────────┘
                                                           │
                                                           ▼
                                                  ┌─────────────────┐
                                                  │ PROFILE READY    │
                                                  │ Match with jobs  │
                                                  └─────────────────┘
```

---

## Step 2: Skill Checklist (Revamped)

- **Input**: Expandable industry sections → select roles with skill type badges
- **Output**: `selectedRoles` array (role IDs) stored in profile
- **Tooltips**: CDL, CNC, HVAC show full form on hover
- **Accessibility**: Expand/collapse, large touch targets, ARIA

---

## Step 9: Practical Tasks (Profile-Based)

- **Input**: Tasks derived from candidate's selected roles
- **Logic**: If Welder selected → welding safety questions; if Forklift → forklift checks; etc.
- **Fallback**: Generic tasks (PPE, tools) if no role-specific tasks match

---

## Employer Flow (Simplified)

1. Post job (select industry, skill type, role)
2. Receive matched candidates (by role + location + availability)
3. Review profiles (skills, assessments, video, references)
4. Hire

---

## Design Principles

- **Progressive**: Can complete in multiple sessions
- **Mobile-first**: Works on any phone
- **Low literacy**: Icons > text, audio support ready
- **Multilingual**: EN, ES, HI (expandable)
