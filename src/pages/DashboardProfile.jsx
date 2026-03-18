import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useProfile } from '../context/ProfileContext'
import { getRoleById } from '../data/jobCategories'
import { JOB_CATEGORIES, SKILL_TYPES } from '../data/jobCategories'
import './Dashboard.css'
import './Step.css'
import './Skills.css'

export default function DashboardProfile() {
  const { profile, updateProfile } = useProfile()
  const [expanded, setExpanded] = useState(null)

  const roleIds = profile.selectedRoles || profile.skills || []
  const rolesWithIndustry = roleIds.map((id) => getRoleById(id)).filter(Boolean)
  const byIndustry = rolesWithIndustry.reduce((acc, r) => {
    const key = r.industryLabel
    if (!acc[key]) acc[key] = []
    acc[key].push(r.label)
    return acc
  }, {})

  const toggleRole = (roleId) => {
    const next = roleIds.includes(roleId)
      ? roleIds.filter((r) => r !== roleId)
      : [...roleIds, roleId]
    updateProfile({ selectedRoles: next, skills: next })
  }

  const toggleIndustry = (id) => setExpanded(expanded === id ? null : id)

  return (
    <div className="dashboard-profile">
      <div className="dashboard-card">
        <h2>Contact</h2>
        <p>{profile.contact || 'Not set'}</p>
        <Link to="/step/1" className="btn btn-outline btn-sm">
          Edit
        </Link>
      </div>

      <div className="dashboard-card">
        <h2>Skills & Roles</h2>
        <p className="profile-desc">Tap to add or remove roles</p>
        <div className="skills-industries">
          {JOB_CATEGORIES.map((industry) => (
            <div key={industry.id} className="industry-block">
              <button
                type="button"
                onClick={() => toggleIndustry(industry.id)}
                className={`industry-header ${expanded === industry.id ? 'expanded' : ''}`}
              >
                <span className="industry-icon">{industry.icon}</span>
                <span className="industry-label">{industry.label}</span>
                <span>{expanded === industry.id ? '▲' : '▼'}</span>
              </button>
              {expanded === industry.id && (
                <div className="industry-roles open">
                  {industry.roles.map((role) => {
                    const skillType = SKILL_TYPES[role.skillType]
                    const isSelected = roleIds.includes(role.id)
                    return (
                      <button
                        key={role.id}
                        type="button"
                        onClick={() => toggleRole(role.id)}
                        className={`role-chip ${isSelected ? 'selected' : ''}`}
                      >
                        <span className="role-label">{role.label}</span>
                        <span className="role-skill-badge" style={{ '--badge-color': skillType?.color }}>
                          {skillType?.label}
                        </span>
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-card">
        <h2>Work Preferences</h2>
        <p>Days: {profile.days?.length ? profile.days.join(', ') : 'Not set'}</p>
        <p>Shift: {profile.shift || 'Not set'}</p>
        <Link to="/step/3" className="btn btn-outline btn-sm">
          Edit
        </Link>
      </div>

      <div className="dashboard-card">
        <h2>Credentials & Documents</h2>
        {profile.credentials?.length > 0 ? (
          <ul>
            {profile.credentials.map((name, i) => (
              <li key={i}>{name}</li>
            ))}
          </ul>
        ) : (
          <p className="dashboard-empty">No documents uploaded</p>
        )}
        <label className="btn btn-outline btn-sm" style={{ display: 'inline-block', marginTop: 8 }}>
          Upload Document
          <input
            type="file"
            accept="image/*,.pdf"
            multiple
            onChange={(e) => {
              const files = Array.from(e.target.files || [])
              const names = files.map((f) => f.name)
              updateProfile({ credentials: [...(profile.credentials || []), ...names] })
            }}
            style={{ display: 'none' }}
          />
        </label>
      </div>

      <div className="dashboard-card">
        <h2>Location</h2>
        <p>{profile.location ? 'Captured' : 'Not set'}</p>
        <Link to="/step/5" className="btn btn-outline btn-sm">
          Update
        </Link>
      </div>

      <div className="dashboard-card">
        <h2>References</h2>
        {profile.references?.length > 0 ? (
          <ul>
            {profile.references.map((r, i) => (
              <li key={i}>{r.name} — {r.contact}</li>
            ))}
          </ul>
        ) : (
          <p className="dashboard-empty">No references added</p>
        )}
        <Link to="/step/10" className="btn btn-outline btn-sm">
          Add Reference
        </Link>
      </div>
    </div>
  )
}
