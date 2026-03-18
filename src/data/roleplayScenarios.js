/**
 * Practice scenarios for AI roleplay assessment
 * Each scenario has: id, prompt, followUp, category (for job matching)
 * Responses are scored for empathy, professionalism, problem-solving
 */

export const ROLEPLAY_SCENARIOS = [
  {
    id: 'customer_upset',
    category: ['hospitality', 'customer_support', 'receptionist'],
    prompt: "A customer is upset because their order was delayed. They're raising their voice. What do you say?",
    followUp: "They say: 'This is the third time! I want to speak to a manager.' How do you respond?",
  },
  {
    id: 'coworker_conflict',
    category: ['general', 'assembly', 'warehouse'],
    prompt: "A coworker keeps taking your tools without asking. You need them for your task. What do you do?",
    followUp: "They say: 'Relax, we're a team.' How do you respond?",
  },
  {
    id: 'safety_concern',
    category: ['construction', 'manufacturing', 'forklift', 'welder'],
    prompt: "You notice someone working without safety gear in a hazardous area. What do you do?",
    followUp: "They say: 'I've done this for years, I know what I'm doing.' How do you respond?",
  },
  {
    id: 'sick_customer',
    category: ['hospitality', 'healthcare', 'caregiver'],
    prompt: "A guest looks unwell and is having trouble standing. What do you do?",
    followUp: "They refuse to sit down and say they're fine. How do you respond?",
  },
  {
    id: 'complaint_about_food',
    category: ['chef', 'waiter', 'kitchen_helper'],
    prompt: "A customer says their food is cold and wants it replaced. The kitchen is very busy. What do you say?",
    followUp: "They add: 'And I want a discount for the wait.' How do you respond?",
  },
  {
    id: 'child_misbehaving',
    category: ['teacher', 'daycare_staff', 'babysitter'],
    prompt: "A child is hitting another child during an activity. What do you do?",
    followUp: "The child starts crying and says 'He started it.' How do you respond?",
  },
  {
    id: 'angry_driver',
    category: ['cdl_driver', 'delivery', 'cab_driver'],
    prompt: "Another driver cuts you off and gestures angrily. You're behind schedule. What do you do?",
    followUp: "They pull over and get out of their vehicle, walking toward you. How do you respond?",
  },
  {
    id: 'patient_family',
    category: ['nurse', 'nursing_assistant', 'caregiver'],
    prompt: "A patient's family member is demanding to speak to a doctor immediately. The doctor is in surgery. What do you say?",
    followUp: "They say: 'This is an emergency! I'll report you!' How do you respond?",
  },
  {
    id: 'difficult_client',
    category: ['beautician', 'hair_stylist', 'spa_therapist'],
    prompt: "A client is unhappy with the result and says it doesn't match what they asked for. What do you say?",
    followUp: "They say: 'I'm not paying for this.' How do you respond?",
  },
  {
    id: 'wrong_delivery',
    category: ['warehouse', 'picker_packer', 'delivery'],
    prompt: "You realize you packed the wrong item for a shipment. It's already loaded on the truck. What do you do?",
    followUp: "Your supervisor says there's no time to fix it before the truck leaves. How do you respond?",
  },
]

/**
 * Get scenarios for a candidate based on their selected roles
 * Falls back to first 3 generic scenarios if no match
 */
export function getScenariosForProfile(selectedRoles = [], count = 3) {
  if (!selectedRoles?.length) {
    return ROLEPLAY_SCENARIOS.slice(0, count)
  }
  const roleSet = new Set(selectedRoles)
  const scored = ROLEPLAY_SCENARIOS.map((s) => {
    const match = s.category.some((c) => roleSet.has(c) || c === 'general')
    return { ...s, score: match ? 1 : 0 }
  })
  // Prefer role-matched, then fill with others
  const matched = scored.filter((s) => s.score).sort(() => Math.random() - 0.5)
  const rest = scored.filter((s) => !s.score).sort(() => Math.random() - 0.5)
  return [...matched, ...rest].slice(0, count).map(({ score, ...s }) => s)
}
