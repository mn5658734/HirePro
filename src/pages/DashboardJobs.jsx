import { useProfile } from '../context/ProfileContext'
import { MOCK_JOBS } from '../data/mockJobs'
import './Dashboard.css'

export default function DashboardJobs() {
  const { profile, updateProfile } = useProfile()
  const appliedIds = (profile.appliedJobs || []).map((j) => j.id)

  const handleApply = (job) => {
    if (appliedIds.includes(job.id)) return
    updateProfile({
      appliedJobs: [...(profile.appliedJobs || []), { ...job, status: 'Applied' }],
    })
  }

  return (
    <div className="dashboard-jobs">
      <p className="jobs-intro">Browse and apply to jobs matching your profile.</p>
      <div className="job-cards">
        {MOCK_JOBS.map((job) => {
          const applied = appliedIds.includes(job.id)
          return (
            <div key={job.id} className="job-card">
              <h3 className="job-title">{job.title}</h3>
              <p className="job-company">{job.company}</p>
              <p className="job-location">📍 {job.location}</p>
              <p className="job-salary">{job.salary}</p>
              <p className="job-type">{job.type} · {job.posted}</p>
              <button
                type="button"
                onClick={() => handleApply(job)}
                className={`btn ${applied ? 'btn-disabled' : 'btn-primary'}`}
                disabled={applied}
              >
                {applied ? 'Applied' : 'Apply'}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
