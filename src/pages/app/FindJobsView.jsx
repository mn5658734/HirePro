import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProfile } from '../../context/ProfileContext'
import { MOCK_JOBS } from '../../data/mockJobs'
import './AppPage.css'

/**
 * Shared job browser for /jobs (public) and /app/jobs (signed-in app).
 */
export default function FindJobsView({ isPublic = false }) {
  const { profile, updateProfile } = useProfile()
  const navigate = useNavigate()
  const [q, setQ] = useState('')
  const [typeFilter, setTypeFilter] = useState('All Types')
  const appliedIds = (profile.appliedJobs || []).map((j) => j.id)

  const isLoggedIn = Boolean(profile.phoneVerified)

  const filtered = useMemo(() => {
    return MOCK_JOBS.filter((job) => {
      const matchQ =
        !q || `${job.title} ${job.company} ${job.location}`.toLowerCase().includes(q.toLowerCase())
      const matchType = typeFilter === 'All Types' || job.type === typeFilter
      return matchQ && matchType
    })
  }, [q, typeFilter])

  const roleIds = new Set(profile.selectedRoles || profile.skills || [])
  const recommended = MOCK_JOBS.filter((j) => roleIds.has(j.roleId)).slice(0, 3)

  const showRecommended = !isPublic && isLoggedIn && recommended.length > 0

  const handleApply = (job) => {
    if (!isLoggedIn) {
      navigate('/step/1')
      return
    }
    if (appliedIds.includes(job.id)) return
    updateProfile({
      appliedJobs: [...(profile.appliedJobs || []), { ...job, status: 'Applied' }],
    })
  }

  return (
    <div>
      <h1 className="app-page-title">Find Jobs</h1>
      <p className="app-page-sub">{filtered.length} jobs available</p>

      {isPublic && (
        <p className="find-jobs-public-hint">
          You can browse all listings without an account. Sign in to apply and track applications.
        </p>
      )}

      <div className="find-jobs-toolbar">
        <div className="find-jobs-search-wrap">
          <span className="find-jobs-search-icon">🔍</span>
          <input
            type="search"
            className="find-jobs-search"
            placeholder="Search jobs, skills..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
        <select className="find-jobs-select" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
          <option>All Types</option>
          <option>Full-time</option>
          <option>Shift-based</option>
        </select>
      </div>

      {showRecommended && (
        <div className="app-card find-jobs-recommended">
          <h2 className="app-card-title find-jobs-rec-title">Recommended for you ({recommended.length})</h2>
          <div className="find-jobs-rec-grid">
            {recommended.map((job) => (
              <div key={job.id} className="find-jobs-rec-card">
                <strong>{job.title}</strong>
                <div className="find-jobs-rec-company">{job.company}</div>
                <span className="find-jobs-rec-loc">{job.location}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="find-jobs-list">
        {filtered.map((job) => {
          const applied = appliedIds.includes(job.id)
          const applyLabel = !isLoggedIn ? 'Sign in to apply' : applied ? 'Applied' : 'Apply'
          return (
            <div key={job.id} className="app-card find-job-card">
              <h3 className="find-job-title">{job.title}</h3>
              <p className="find-job-company">{job.company}</p>
              <p className="find-job-meta">
                {job.location} · {job.type} · {job.posted}
              </p>
              <p className="find-job-salary">{job.salary}</p>
              <button
                type="button"
                className="btn-beable btn-beable-primary"
                disabled={isLoggedIn && applied}
                onClick={() => handleApply(job)}
              >
                {applyLabel}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
