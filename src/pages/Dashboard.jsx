import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useProfile } from '../context/ProfileContext'
import { getRoleById } from '../data/jobCategories'
import './Dashboard.css'

export default function Dashboard() {
  const { t } = useLanguage()
  const { profile } = useProfile()

  const roleIds = profile.selectedRoles || profile.skills || []
  const rolesWithIndustry = roleIds
    .map((id) => getRoleById(id))
    .filter(Boolean)

  const byIndustry = rolesWithIndustry.reduce((acc, r) => {
    const key = r.industryLabel
    if (!acc[key]) acc[key] = []
    acc[key].push(r.label)
    return acc
  }, {})

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">My Dashboard</h1>
        <p className="dashboard-welcome">
          Welcome back{profile.contact ? `, ${profile.contact}` : ''}
        </p>
      </div>

      <div className="dashboard-card profile-summary">
        <h2>Profile Summary</h2>
        <ul>
          {profile.contact && <li>Contact: {profile.contact}</li>}
          {profile.days?.length > 0 && <li>Available: {profile.days.join(', ')}</li>}
          {profile.shift && <li>Shift: {profile.shift}</li>}
          {profile.location && <li>Location: Captured</li>}
          {profile.references?.length > 0 && <li>References: {profile.references.length}</li>}
        </ul>
        {Object.keys(byIndustry).length > 0 && (
          <div className="dashboard-roles">
            <h3>Your roles</h3>
            {Object.entries(byIndustry).map(([industry, roles]) => (
              <div key={industry} className="dashboard-industry">
                <strong>{industry}</strong>
                <ul>
                  {roles.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="dashboard-card">
        <h2>Matched Jobs</h2>
        <p className="dashboard-empty">No new matches yet. Complete your profile to get matched with employers.</p>
        <Link to="/step/2" className="btn btn-outline">
          Edit Profile
        </Link>
      </div>

      <div className="dashboard-card">
        <h2>Applications</h2>
        <p className="dashboard-empty">You haven't applied to any jobs yet.</p>
      </div>
    </div>
  )
}
