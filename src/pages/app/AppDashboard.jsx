import { Link } from 'react-router-dom'
import { useProfile } from '../../context/ProfileContext'
import { getProfileCompletion } from '../../utils/profileCompletion'
import { getRoleById } from '../../data/jobCategories'
import './AppPage.css'

export default function AppDashboard() {
  const { profile } = useProfile()
  const completion = getProfileCompletion(profile)
  const applied = profile.appliedJobs || []
  const interviews = 0
  const offers = 0
  const inProgress = applied.filter((j) => j.status === 'Applied').length

  const firstName = profile.contact?.split(/[\s@]/)[0] || 'there'
  const recent = applied.slice(0, 3)

  const roleIds = profile.selectedRoles || profile.skills || []
  const skillLabels = roleIds.map((id) => getRoleById(id)?.label).filter(Boolean).slice(0, 8)

  return (
    <div className="app-dashboard">
      <h1 className="app-page-title">Welcome back, {firstName}</h1>
      <p className="app-page-sub">Your job search at a glance</p>

      <div className="app-stat-row">
        <div className="app-stat-card">
          <div className="app-stat-icon blue">📋</div>
          <div>
            <div className="app-stat-value">{applied.length}</div>
            <div className="app-stat-label">Applications</div>
          </div>
        </div>
        <div className="app-stat-card">
          <div className="app-stat-icon purple">💬</div>
          <div>
            <div className="app-stat-value">{interviews}</div>
            <div className="app-stat-label">Interviews</div>
          </div>
        </div>
        <div className="app-stat-card">
          <div className="app-stat-icon green">✓</div>
          <div>
            <div className="app-stat-value">{offers}</div>
            <div className="app-stat-label">Offers</div>
          </div>
        </div>
        <div className="app-stat-card">
          <div className="app-stat-icon orange">⏳</div>
          <div>
            <div className="app-stat-value">{inProgress}</div>
            <div className="app-stat-label">In Progress</div>
          </div>
        </div>
      </div>

      <div className="app-card">
        <div className="app-card-header">
          <h2 className="app-card-title">Recent Applications</h2>
          <Link to="/app/applications" className="app-link">View all →</Link>
        </div>
        {recent.length === 0 ? (
          <p style={{ color: 'var(--beable-muted)', margin: 0 }}>No applications yet. Browse jobs to get started.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {recent.map((job) => (
              <li key={job.id} style={{ padding: '12px 0', borderBottom: '1px solid var(--beable-border)' }}>
                <strong>{job.title}</strong>
                <div style={{ fontSize: '0.85rem', color: 'var(--beable-muted)' }}>{job.company}</div>
                <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: 6, background: '#f3f4f6' }}>{job.status || 'Applied'}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="app-card">
        <h2 className="app-card-title" style={{ marginBottom: 12 }}>Your Profile</h2>
        <p style={{ color: 'var(--beable-muted)', fontSize: '0.9rem', margin: '0 0 12px' }}>
          Skill-based profile for blue & pink collar roles — no traditional resume required. Completion: <strong>{completion}%</strong>
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {skillLabels.map((s) => (
            <span key={s} style={{ padding: '6px 12px', background: '#f3f4f6', borderRadius: 20, fontSize: '0.8rem' }}>{s}</span>
          ))}
        </div>
        {skillLabels.length === 0 && <p style={{ color: 'var(--beable-muted)', fontSize: '0.85rem' }}>Add roles in Profile or complete onboarding.</p>}
        <Link to="/app/profile" className="btn-beable btn-beable-outline" style={{ marginTop: 16, textDecoration: 'none' }}>Edit profile</Link>
      </div>
    </div>
  )
}
