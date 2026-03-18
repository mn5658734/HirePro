/**
 * Profile-based practical skill tasks
 * Key: roleId from jobCategories
 * Used when candidate has selected that role
 */

export const PRACTICAL_TASKS_BY_ROLE = {
  welder: [
    { id: 'w1', question: 'Which safety gear is essential for welding?', options: ['Helmet with shade', 'Sunglasses', 'Cap', 'Gloves only'], correct: 0 },
    { id: 'w2', question: 'What does MIG stand for in welding?', options: ['Metal Inert Gas', 'Manual Iron Guide', 'Metal Iron Glue', 'Manual Inert Gas'], correct: 0 },
  ],
  plumber: [
    { id: 'p1', question: 'What tool tightens pipe fittings?', options: ['Hammer', 'Pipe wrench', 'Screwdriver', 'Pliers'], correct: 1 },
    { id: 'p2', question: 'What color pipe is typically used for hot water?', options: ['Blue', 'Red', 'Green', 'White'], correct: 1 },
  ],
  electrician: [
    { id: 'e1', question: 'What should you do before working on a circuit?', options: ['Turn off power', 'Wear gloves', 'Use wet hands', 'Check voltage'], correct: 0 },
    { id: 'e2', question: 'What does a red wire usually indicate?', options: ['Neutral', 'Ground', 'Live/Hot', 'Switch'], correct: 2 },
  ],
  forklift: [
    { id: 'f1', question: 'Before operating a forklift, you should:', options: ['Check brakes and horn', 'Skip inspection', 'Drive fast', 'Ignore load capacity'], correct: 0 },
    { id: 'f2', question: 'When carrying a load, forks should be:', options: ['Tilted back', 'Tilted forward', 'Level', 'Raised high'], correct: 0 },
  ],
  cdl_driver: [
    { id: 'd1', question: 'CDL stands for:', options: ['Commercial Driver License', 'Commercial Driver\'s License', 'Common Driver License', 'Certified Driver License'], correct: 1 },
    { id: 'd2', question: 'Before a long trip, you should check:', options: ['Tires and brakes', 'Radio only', 'Nothing', 'Fuel only'], correct: 0 },
  ],
  hvac_tech: [
    { id: 'h1', question: 'HVAC stands for:', options: ['Heating, Ventilation, Air Conditioning', 'High Voltage Air Control', 'Home Ventilation AC', 'Heavy Ventilation Air Cool'], correct: 0 },
    { id: 'h2', question: 'Refrigerant in AC systems:', options: ['Should be released outdoors', 'Must be recovered properly', 'Can be dumped', 'Is harmless'], correct: 1 },
  ],
  chef: [
    { id: 'c1', question: 'Danger zone for food storage is:', options: ['0–4°C', '5–60°C (41–140°F)', '60–100°C', 'Below 0°C'], correct: 1 },
    { id: 'c2', question: 'Cross-contamination is prevented by:', options: ['Using same cutting board', 'Separating raw and cooked', 'Reusing towels', 'Skipping hand wash'], correct: 1 },
  ],
  assembly: [
    { id: 'a1', question: 'Quality check means:', options: ['Ignore defects', 'Inspect product before passing', 'Speed up only', 'Skip steps'], correct: 1 },
    { id: 'a2', question: 'PPE in manufacturing often includes:', options: ['Safety glasses, gloves', 'Sunglasses only', 'No protection', 'Just a cap'], correct: 0 },
  ],
  security: [
    { id: 's1', question: 'When you see suspicious activity:', options: ['Ignore it', 'Report to supervisor', 'Confront alone', 'Leave post'], correct: 1 },
    { id: 's2', question: 'Access control means:', options: ['Let everyone in', 'Verify identity before entry', 'No checks needed', 'Only at night'], correct: 1 },
  ],
  janitor: [
    { id: 'j1', question: 'Wet floor sign should be used when:', options: ['Floor is dry', 'Floor is wet or being cleaned', 'Never', 'Only at night'], correct: 1 },
    { id: 'j2', question: 'Cleaning chemicals should be:', options: ['Mixed randomly', 'Stored and used as labeled', 'Left open', 'Used without gloves'], correct: 1 },
  ],
  landscaping: [
    { id: 'l1', question: 'Best time to water plants is usually:', options: ['Midday in sun', 'Early morning or evening', 'At night only', 'Never'], correct: 1 },
    { id: 'l2', question: 'Weed removal helps plants by:', options: ['Reducing competition', 'Adding weeds', 'Blocking sun', 'Nothing'], correct: 0 },
  ],
  cnc_operator: [
    { id: 'cnc1', question: 'CNC stands for:', options: ['Computer Numerical Control', 'Central Network Control', 'Manual Control', 'Digital Control'], correct: 0 },
    { id: 'cnc2', question: 'Before running a CNC program:', options: ['Run immediately', 'Verify setup and tool', 'Skip checks', 'Only check once'], correct: 1 },
  ],
  nurse: [
    { id: 'n1', question: 'Before giving medication, you must:', options: ['Check patient ID and dosage', 'Give quickly', 'Skip verification', 'Assume it\'s correct'], correct: 0 },
    { id: 'n2', question: 'Hand hygiene should be done:', options: ['Before and after patient contact', 'Only at shift start', 'Never', 'Only when dirty'], correct: 0 },
  ],
  nursing_assistant: [
    { id: 'na1', question: 'When moving a patient, you should:', options: ['Use proper body mechanics', 'Lift with back bent', 'Rush', 'Do it alone'], correct: 0 },
  ],
  caregiver: [
    { id: 'cg1', question: 'A fall risk patient should:', options: ['Have call bell within reach', 'Be left alone', 'Have no assistance', 'Be restrained'], correct: 0 },
  ],
  teacher: [
    { id: 't1', question: 'For young children, learning works best when:', options: ['Activities are age-appropriate', 'Only lectures are used', 'No play is allowed', 'Parents are absent'], correct: 0 },
  ],
  cook: [
    { id: 'ck1', question: 'Danger zone for food storage is:', options: ['0–4°C', '5–60°C (41–140°F)', '60–100°C', 'Below 0°C'], correct: 1 },
    { id: 'ck2', question: 'Raw meat should be stored:', options: ['Below ready-to-eat food', 'Above vegetables', 'With cooked food', 'On top shelf'], correct: 0 },
  ],
  babysitter: [
    { id: 'bb1', question: 'In an emergency, first:', options: ['Stay calm and call for help', 'Panic', 'Leave the child', 'Wait'], correct: 0 },
  ],
  customer_support: [
    { id: 'cs1', question: 'An angry customer calls. You should:', options: ['Listen first, then respond calmly', 'Hang up', 'Argue back', 'Transfer immediately'], correct: 0 },
  ],
  office_assistant: [
    { id: 'oa1', question: 'Confidential documents should be:', options: ['Stored securely, not left on desk', 'Shared freely', 'Thrown in bin', 'Left open'], correct: 0 },
  ],
  beautician: [
    { id: 'bt1', question: 'Before any treatment, you should:', options: ['Check for allergies', 'Skip consultation', 'Assume no issues', 'Start immediately'], correct: 0 },
  ],
  hair_stylist: [
    { id: 'hs1', question: 'Hair color patch test is done to:', options: ['Check for allergic reaction', 'Save product', 'Skip it', 'Waste time'], correct: 0 },
  ],
}

/** Default tasks when no role-specific tasks match */
export const DEFAULT_TASKS = [
  { id: 'def1', question: 'Which tool is used to tighten bolts?', options: ['Hammer', 'Wrench', 'Screwdriver', 'Pliers'], correct: 1 },
  { id: 'def2', question: 'What color is a typical fire extinguisher?', options: ['Blue', 'Green', 'Red', 'Yellow'], correct: 2 },
  { id: 'def3', question: 'PPE means:', options: ['Personal Protective Equipment', 'Professional Protection', 'Public Safety', 'Private Equipment'], correct: 0 },
]

/**
 * Get practical tasks for a candidate based on their selected roles
 * Picks up to 3 tasks from their roles, or uses defaults
 */
export function getTasksForProfile(selectedRoles) {
  if (!selectedRoles?.length) return DEFAULT_TASKS
  const tasks = []
  const seen = new Set()
  for (const roleId of selectedRoles) {
    const roleTasks = PRACTICAL_TASKS_BY_ROLE[roleId]
    if (roleTasks) {
      for (const t of roleTasks) {
        if (!seen.has(t.id)) {
          tasks.push(t)
          seen.add(t.id)
        }
      }
    }
  }
  if (tasks.length >= 2) return tasks.slice(0, 3)
  return [...tasks, ...DEFAULT_TASKS].slice(0, 3)
}
