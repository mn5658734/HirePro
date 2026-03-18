import { Link } from 'react-router-dom'
import { useProfile } from '../context/ProfileContext'
import { getProfileCompletion } from '../utils/profileCompletion'
import './Dashboard.css'

export default function DashboardHome({ onNavigate }) {
  const { profile } = useProfile()
  const completion = getProfileCompletion(profile)
  const appliedJobs = profile.appliedJobs || []

  return (
    <div className="dashboard-home">
      <div className="dashboard-card completion-card">
        <h2>Profile Completion</h2>
        <div className="completion-ring" style={{ '--progress': completion }}>
          <div className="completion-inner">
            <span className="completion-value">{completion}%</span>
          </div>
        </div>
        <p className="completion-hint">
          {completion < 100
            ? 'Complete your profile to get better job matches.'
            : 'Your profile is complete!'}
        </p>
        {completion < 100 && (
          <Link to="/step/2" className="btn btn-outline">
            Complete Profile
          </Link>
        )}
      </div>

      <div className="dashboard-card">
        <h2>Applied Jobs</h2>
        {appliedJobs.length === 0 ? (
          <>
            <p className="dashboard-empty">You haven't applied to any jobs yet.</p>
            {onNavigate && (
              <button type="button" className="btn btn-outline" onClick={() => onNavigate('jobs')}>
                Browse Jobs
              </button>
            )}
          </>
        ) : (
          <ul className="applied-list">
            {appliedJobs.map((job) => (
              <li key={job.id} className="applied-item">
                <strong>{job.title}</strong>
                <span>{job.company}</span>
                <span className="status">{job.status || 'Applied'}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
