import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useProfile } from '../context/ProfileContext'
import { getRoleById } from '../data/jobCategories'
import './Complete.css'

export default function Complete() {
  const { t } = useLanguage()
  const { profile } = useProfile()

  const roleIds = profile.selectedRoles || profile.skills || []
  const rolesWithIndustry = roleIds
    .map((id) => {
      const r = getRoleById(id)
      return r ? { ...r, roleId: id } : null
    })
    .filter(Boolean)

  // Group by industry for display
  const byIndustry = rolesWithIndustry.reduce((acc, r) => {
    const key = r.industryLabel
    if (!acc[key]) acc[key] = []
    acc[key].push(r.label)
    return acc
  }, {})

  return (
    <div className="complete">
      <div className="complete-icon" aria-hidden="true">✓</div>
      <h2 className="complete-title">{t('profileComplete')}</h2>
      <p className="complete-desc">
        Your profile is ready. Employers can now find and match with you.
      </p>
      <div className="complete-summary">
        <h3>Your profile summary</h3>
        <ul>
          {profile.contact && <li>Contact: {profile.contact}</li>}
          {profile.days?.length > 0 && <li>Days: {profile.days.join(', ')}</li>}
          {profile.shift && <li>Shift: {profile.shift}</li>}
          {profile.location && <li>Location: Captured</li>}
          {profile.references?.length > 0 && <li>References: {profile.references.length} added</li>}
        </ul>
        {Object.keys(byIndustry).length > 0 && (
          <div className="complete-roles">
            <h4>Roles by industry</h4>
            {Object.entries(byIndustry).map(([industry, roles]) => (
              <div key={industry} className="complete-industry">
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
      <Link to="/dashboard" className="btn btn-primary btn-lg">
        {t('goToDashboard')}
      </Link>
    </div>
  )
}
