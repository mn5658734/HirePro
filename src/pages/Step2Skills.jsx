import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useProfile } from '../context/ProfileContext'
import { JOB_CATEGORIES, SKILL_TYPES, FULL_FORMS } from '../data/jobCategories'
import StepNav from '../components/StepNav'
import './Step.css'
import './Skills.css'

export default function Step2Skills() {
  const { t } = useLanguage()
  const { profile, updateProfile } = useProfile()
  const navigate = useNavigate()
  const selectedRoles = profile.selectedRoles || []
  const [expanded, setExpanded] = useState(null)

  const toggleRole = (roleId) => {
    const next = selectedRoles.includes(roleId)
      ? selectedRoles.filter((r) => r !== roleId)
      : [...selectedRoles, roleId]
    updateProfile({ selectedRoles: next, skills: next }) // keep skills for backward compat
  }

  const toggleIndustry = (id) => {
    setExpanded(expanded === id ? null : id)
  }

  const handleNext = () => navigate('/step/3')

  return (
    <div className="step">
      <h2 className="step-title">{t('selectSkills')}</h2>
      <p className="step-desc">{t('selectSkillsDesc')}</p>
      <p className="skills-hint">Select your industry, then tap roles you can do.</p>
      <div className="skills-industries" role="group" aria-label="Select industries and roles">
        {JOB_CATEGORIES.map((industry, index) => (
          <div key={industry.id} className="industry-block">
            <button
              type="button"
              onClick={() => toggleIndustry(industry.id)}
              className={`industry-header ${expanded === industry.id ? 'expanded' : ''}`}
              aria-expanded={expanded === industry.id}
              aria-controls={`roles-${industry.id}`}
            >
              <span className="industry-icon" aria-hidden="true">{industry.icon}</span>
              <span className="industry-label">
                {index + 1}. {industry.label}
              </span>
              <span className="industry-arrow" aria-hidden="true">{expanded === industry.id ? '▲' : '▼'}</span>
            </button>
            <div
              id={`roles-${industry.id}`}
              className={`industry-roles ${expanded === industry.id ? 'open' : ''}`}
              role="region"
              aria-label={`${industry.label} roles`}
            >
              {industry.roles.map((role) => {
                const skillType = SKILL_TYPES[role.skillType]
                const isSelected = selectedRoles.includes(role.id)
                const tooltip = role.fullForm ? FULL_FORMS[role.fullForm] : null
                return (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => toggleRole(role.id)}
                    className={`role-chip ${isSelected ? 'selected' : ''}`}
                    aria-pressed={isSelected}
                    title={tooltip ? `${role.label} — ${tooltip}` : undefined}
                  >
                    <span className="role-label">{role.label}</span>
                    <span
                      className="role-skill-badge"
                      style={{ '--badge-color': skillType?.color }}
                    >
                      {skillType?.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
      {selectedRoles.length > 0 && (
        <p className="skills-count">{selectedRoles.length} role{selectedRoles.length !== 1 ? 's' : ''} selected</p>
      )}
      <StepNav current={2} nextPath="/step/3" onNext={handleNext} />
    </div>
  )
}
