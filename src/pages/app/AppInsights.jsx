import { useProfile } from '../../context/ProfileContext'
import { getProfileCompletion } from '../../utils/profileCompletion'
import { getRoleById } from '../../data/jobCategories'
import './AppPage.css'

export default function AppInsights() {
  const { profile } = useProfile()
  const completion = getProfileCompletion(profile)
  const readiness = Math.min(100, completion + (profile.credentials?.length ? 5 : 0))

  const sections = [
    { label: 'Contact & verification', ok: !!profile.contact },
    { label: 'Skills & roles', ok: (profile.selectedRoles?.length || profile.skills?.length) > 0 },
    { label: 'Work availability', ok: (profile.days?.length || 0) > 0 },
    { label: 'Licenses & certs', ok: (profile.credentials?.length || 0) > 0 },
    { label: 'Location', ok: !!profile.location },
    { label: 'Practice scenarios', ok: (profile.roleplayResponses?.length || 0) > 0 },
  ]
  const done = sections.filter((s) => s.ok).length

  const roleIds = profile.selectedRoles || profile.skills || []
  const skills = roleIds.map((id) => getRoleById(id)?.label).filter(Boolean)

  return (
    <div>
      <h1 className="app-page-title">Resume Insights</h1>
      <p className="app-page-sub">Profile readiness, skill gaps, and tips for blue & pink collar roles</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 28 }}>
        <div className="app-card" style={{ textAlign: 'center', marginBottom: 0 }}>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: readiness >= 70 ? '#15803d' : 'var(--beable-text)' }}>{readiness}</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--beable-muted)' }}>Profile readiness / 100</div>
          <span style={{ display: 'inline-block', marginTop: 8, padding: '4px 10px', borderRadius: 20, background: 'var(--beable-success-soft)', color: '#15803d', fontSize: '0.75rem', fontWeight: 600 }}>
            {readiness >= 70 ? 'Strong' : 'Keep building'}
          </span>
        </div>
        <div className="app-card" style={{ textAlign: 'center', marginBottom: 0 }}>
          <div style={{ fontSize: '2rem', fontWeight: 700 }}>{completion}%</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--beable-muted)' }}>Onboarding complete</div>
        </div>
        <div className="app-card" style={{ textAlign: 'center', marginBottom: 0 }}>
          <div style={{ fontSize: '2rem', fontWeight: 700 }}>{(profile.appliedJobs || []).length}</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--beable-muted)' }}>Applications sent</div>
        </div>
      </div>

      <div className="app-card">
        <h2 className="app-card-title" style={{ marginBottom: 16 }}>📋 Profile sections</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 12 }}>
          {sections.map((s) => (
            <div key={s.label} style={{ padding: 14, borderRadius: 8, background: s.ok ? 'var(--beable-success-soft)' : '#f9fafb', border: '1px solid var(--beable-border)' }}>
              <span style={{ color: s.ok ? '#15803d' : 'var(--beable-muted)' }}>{s.ok ? '✓' : '○'}</span>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
        <p style={{ margin: '12px 0 0', fontSize: '0.85rem', color: 'var(--beable-muted)' }}>{done}/{sections.length} sections complete</p>
      </div>

      <div className="app-insights-split">
        <div className="app-card" style={{ marginBottom: 0 }}>
          <h2 className="app-card-title" style={{ marginBottom: 12 }}>⚡ Your skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {skills.map((s) => (
              <span key={s} style={{ padding: '6px 12px', background: '#f3f4f6', borderRadius: 20, fontSize: '0.8rem' }}>{s}</span>
            ))}
          </div>
          {skills.length === 0 && <p style={{ color: 'var(--beable-muted)', fontSize: '0.85rem' }}>Add roles in your profile.</p>}
        </div>
        <div className="app-card" style={{ marginBottom: 0 }}>
          <h2 className="app-card-title" style={{ marginBottom: 12 }}>🎯 Suggested next steps</h2>
          <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--beable-muted)', fontSize: '0.9rem' }}>
            {!profile.location && <li>Add your location for nearby matches</li>}
            {(profile.credentials?.length || 0) === 0 && <li>Upload licenses or certifications</li>}
            {(profile.references?.length || 0) === 0 && <li>Add a work reference for trust</li>}
            {profile.location && profile.credentials?.length > 0 && <li>Try Practice Interview to sharpen responses</li>}
          </ul>
        </div>
      </div>
    </div>
  )
}
