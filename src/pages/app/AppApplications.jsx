import { useState } from 'react'
import { useProfile } from '../../context/ProfileContext'
import './AppPage.css'

const FILTERS = ['All', 'Applied', 'Shortlisted', 'Interview Scheduled', 'Interviewed', 'Offered', 'Rejected', 'Withdrawn']

export default function AppApplications() {
  const { profile } = useProfile()
  const [filter, setFilter] = useState('All')
  const applied = profile.appliedJobs || []

  const filtered = filter === 'All'
    ? applied
    : applied.filter((j) => (j.status || 'Applied') === filter)

  return (
    <div>
      <h1 className="app-page-title">My Applications</h1>
      <p className="app-page-sub">{applied.length} total applications</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            style={{
              padding: '8px 14px',
              borderRadius: 20,
              border: filter === f ? 'none' : '1px solid var(--beable-border)',
              background: filter === f ? 'var(--beable-accent)' : 'white',
              color: filter === f ? 'white' : 'var(--beable-text)',
              fontSize: '0.8rem',
              fontWeight: 500,
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="app-card">
          <p style={{ color: 'var(--beable-muted)', margin: 0 }}>No applications in this category yet.</p>
        </div>
      ) : (
        filtered.map((job) => (
          <div key={job.id} className="app-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
            <div>
              <strong style={{ fontSize: '1.05rem' }}>{job.title}</strong>
              <span style={{ marginLeft: 8, fontSize: '0.75rem', padding: '2px 8px', background: '#f3f4f6', borderRadius: 6 }}>{job.status || 'Applied'}</span>
              <p style={{ margin: '8px 0 0', fontSize: '0.85rem', color: 'var(--beable-muted)' }}>{job.company} · {job.location}</p>
            </div>
            <div style={{ textAlign: 'right', minWidth: 72 }}>
              <div style={{ width: 56, height: 56, borderRadius: 12, background: 'var(--beable-success-soft)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto' }}>
                <span style={{ fontWeight: 700, color: '#15803d' }}>—</span>
                <span style={{ fontSize: '0.65rem', color: '#15803d' }}>Score</span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
