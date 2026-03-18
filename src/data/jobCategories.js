/**
 * HirePro Job Categories
 * Level 1: Industry | Level 2: Skill Type | Level 3: Role
 * Full forms: CDL, CNC, HVAC (see FULL_FORMS)
 */

export const FULL_FORMS = {
  CDL: 'Commercial Driver\'s License',
  CNC: 'Computer Numerical Control',
  HVAC: 'Heating, Ventilation, and Air Conditioning',
}

export const SKILL_TYPES = {
  skilled: { label: 'Skilled', color: '#0f4c3a' },
  semiSkilled: { label: 'Semi-Skilled', color: '#1a6b4f' },
  unskilled: { label: 'Unskilled', color: '#6b6b6b' },
}

export const JOB_CATEGORIES = [
  {
    id: 'hospitality',
    label: 'Hospitality & Service Jobs',
    icon: '🏨',
    roles: [
      { id: 'hotel_boy', label: 'Hotel Boy / Bellboy', skillType: 'semiSkilled' },
      { id: 'room_service', label: 'Room Service Attendant', skillType: 'semiSkilled' },
      { id: 'housekeeping', label: 'Housekeeping Staff', skillType: 'unskilled' },
      { id: 'waiter', label: 'Waiter / Steward', skillType: 'semiSkilled' },
      { id: 'kitchen_helper', label: 'Kitchen Helper', skillType: 'unskilled' },
      { id: 'chef', label: 'Chef / Cook', skillType: 'skilled' },
      { id: 'bartender', label: 'Bartender', skillType: 'skilled' },
      { id: 'front_desk', label: 'Front Desk Assistant', skillType: 'semiSkilled' },
      { id: 'receptionist', label: 'Receptionist', skillType: 'semiSkilled' },
      { id: 'hostess', label: 'Hostess', skillType: 'semiSkilled' },
      { id: 'salon_assistant', label: 'Salon Assistant', skillType: 'semiSkilled' },
      { id: 'laundry', label: 'Laundry Staff', skillType: 'unskilled' },
      { id: 'banquet', label: 'Banquet Staff', skillType: 'semiSkilled' },
    ],
  },
  {
    id: 'construction',
    label: 'Construction & Skilled Trades Jobs',
    icon: '🔨',
    roles: [
      { id: 'welder', label: 'Welder', skillType: 'skilled' },
      { id: 'plumber', label: 'Plumber', skillType: 'skilled' },
      { id: 'electrician', label: 'Electrician', skillType: 'skilled' },
      { id: 'carpenter', label: 'Carpenter', skillType: 'skilled' },
      { id: 'painter', label: 'Painter', skillType: 'skilled' },
      { id: 'mason', label: 'Mason (Bricklayer)', skillType: 'skilled' },
      { id: 'tile_installer', label: 'Tile Installer', skillType: 'skilled' },
      { id: 'steel_fixer', label: 'Steel Fixer', skillType: 'skilled' },
      { id: 'scaffolding', label: 'Scaffolding Worker', skillType: 'semiSkilled' },
    ],
  },
  {
    id: 'manufacturing',
    label: 'Manufacturing & Industrial Jobs',
    icon: '⚙️',
    roles: [
      { id: 'assembly', label: 'Assembly Line Worker', skillType: 'semiSkilled' },
      { id: 'cnc_operator', label: 'Machine Operator (CNC)', skillType: 'skilled', fullForm: 'CNC' },
      { id: 'quality_checker', label: 'Quality Checker / Inspector', skillType: 'skilled' },
      { id: 'packaging', label: 'Packaging Staff', skillType: 'unskilled' },
      { id: 'production', label: 'Production Worker', skillType: 'semiSkilled' },
      { id: 'fabricator', label: 'Fabricator', skillType: 'skilled' },
    ],
  },
  {
    id: 'equipment',
    label: 'Equipment & Heavy Machinery Jobs',
    icon: '🚜',
    roles: [
      { id: 'forklift', label: 'Forklift Operator', skillType: 'semiSkilled' },
      { id: 'crane_operator', label: 'Crane Operator', skillType: 'skilled' },
      { id: 'jcb_operator', label: 'JCB Operator (Excavator)', skillType: 'skilled' },
      { id: 'loader_operator', label: 'Loader Operator', skillType: 'semiSkilled' },
      { id: 'machine_tech', label: 'Machine Technician', skillType: 'skilled' },
    ],
  },
  {
    id: 'logistics',
    label: 'Logistics & Driving',
    icon: '🚛',
    roles: [
      { id: 'cdl_driver', label: 'Driver (CDL)', skillType: 'skilled', fullForm: 'CDL' },
      { id: 'delivery', label: 'Delivery Executive', skillType: 'semiSkilled' },
      { id: 'truck_driver', label: 'Truck Driver', skillType: 'skilled' },
      { id: 'cab_driver', label: 'Cab Driver', skillType: 'semiSkilled' },
      { id: 'warehouse', label: 'Warehouse Associate', skillType: 'semiSkilled' },
      { id: 'picker_packer', label: 'Picker / Packer', skillType: 'unskilled' },
    ],
  },
  {
    id: 'maintenance',
    label: 'Maintenance & Technical Jobs',
    icon: '❄️',
    roles: [
      { id: 'hvac_tech', label: 'HVAC Technician', skillType: 'skilled', fullForm: 'HVAC' },
      { id: 'ac_tech', label: 'AC Technician', skillType: 'skilled' },
      { id: 'fridge_tech', label: 'Refrigerator Repair Technician', skillType: 'skilled' },
      { id: 'lift_tech', label: 'Lift/Elevator Technician', skillType: 'skilled' },
      { id: 'generator_tech', label: 'Generator Technician', skillType: 'skilled' },
    ],
  },
  {
    id: 'facility',
    label: 'Facility & Outdoor',
    icon: '🌿',
    roles: [
      { id: 'landscaping', label: 'Landscaping / Gardener', skillType: 'semiSkilled' },
      { id: 'security', label: 'Security Guard', skillType: 'semiSkilled' },
      { id: 'waste_mgmt', label: 'Waste Management Worker', skillType: 'unskilled' },
      { id: 'pest_control', label: 'Pest Control Technician', skillType: 'skilled' },
    ],
  },
  {
    id: 'cleaning',
    label: 'Cleaning & Domestic Jobs',
    icon: '🧹',
    roles: [
      { id: 'janitor', label: 'Janitor / Housekeeping', skillType: 'unskilled' },
      { id: 'office_cleaner', label: 'Office Cleaner', skillType: 'unskilled' },
      { id: 'home_maid', label: 'Home Maid', skillType: 'semiSkilled' },
      { id: 'car_cleaner', label: 'Car Cleaner', skillType: 'unskilled' },
      { id: 'sanitation', label: 'Sanitation Worker', skillType: 'unskilled' },
    ],
  },
  {
    id: 'general_labor',
    label: 'General Labor / Helpers',
    icon: '👷',
    roles: [
      { id: 'helper', label: 'Helper / Assistant', skillType: 'unskilled' },
      { id: 'daily_wage', label: 'Daily Wage Worker', skillType: 'unskilled' },
      { id: 'construction_helper', label: 'Construction Helper', skillType: 'unskilled' },
      { id: 'loading', label: 'Loading/Unloading Worker', skillType: 'unskilled' },
    ],
  },
  {
    id: 'healthcare',
    label: 'Healthcare & Caregiving Jobs',
    icon: '🏥',
    roles: [
      { id: 'nurse', label: 'Nurse', skillType: 'skilled' },
      { id: 'nursing_assistant', label: 'Nursing Assistant', skillType: 'semiSkilled' },
      { id: 'caregiver', label: 'Caregiver / Home Nurse', skillType: 'semiSkilled' },
      { id: 'anganwadi_worker', label: 'Anganwadi Worker', skillType: 'semiSkilled' },
      { id: 'childcare_worker', label: 'Childcare Worker', skillType: 'semiSkilled' },
      { id: 'ward_boy', label: 'Ward Boy', skillType: 'unskilled' },
      { id: 'ambulance_driver', label: 'Ambulance Driver', skillType: 'semiSkilled' },
      { id: 'lab_assistant', label: 'Lab Technician Assistant', skillType: 'semiSkilled' },
    ],
  },
  {
    id: 'education',
    label: 'Education & Training Jobs',
    icon: '🏫',
    roles: [
      { id: 'teacher', label: 'Teacher (Primary / Pre-school)', skillType: 'skilled' },
      { id: 'tutor', label: 'Tutor', skillType: 'skilled' },
      { id: 'daycare_staff', label: 'Daycare Staff', skillType: 'semiSkilled' },
    ],
  },
  {
    id: 'personal_care',
    label: 'Personal Care & Beauty Jobs',
    icon: '💄',
    roles: [
      { id: 'beautician', label: 'Beautician', skillType: 'skilled' },
      { id: 'hair_stylist', label: 'Hair Stylist', skillType: 'skilled' },
      { id: 'makeup_artist', label: 'Makeup Artist', skillType: 'skilled' },
      { id: 'spa_therapist', label: 'Spa Therapist', skillType: 'skilled' },
    ],
  },
  {
    id: 'administrative',
    label: 'Administrative & Support Jobs',
    icon: '🧾',
    roles: [
      { id: 'office_assistant', label: 'Office Assistant', skillType: 'semiSkilled' },
      { id: 'hr_coordinator', label: 'HR Coordinator', skillType: 'skilled' },
      { id: 'customer_support', label: 'Customer Support Executive', skillType: 'semiSkilled' },
      { id: 'data_entry', label: 'Data Entry Operator', skillType: 'semiSkilled' },
    ],
  },
  {
    id: 'domestic',
    label: 'Domestic & Household Services',
    icon: '🏠',
    roles: [
      { id: 'maid', label: 'Maid / Domestic Help', skillType: 'semiSkilled' },
      { id: 'cook', label: 'Cook', skillType: 'skilled' },
      { id: 'babysitter', label: 'Babysitter', skillType: 'semiSkilled' },
    ],
  },
]

/** Get role by id across all categories */
export function getRoleById(roleId) {
  for (const cat of JOB_CATEGORIES) {
    const role = cat.roles.find((r) => r.id === roleId)
    if (role) return { ...role, industryId: cat.id, industryLabel: cat.label }
  }
  return null
}
