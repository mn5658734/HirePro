import { Navigate } from 'react-router-dom'
import { useProfile } from '../../context/ProfileContext'
import Step6Roleplay from '../Step6Roleplay'
import './AppPage.css'

export default function AppPractice() {
  const { profile } = useProfile()

  if (!profile.phoneVerified) {
    return <Navigate to="/step/1" replace />
  }

  return (
    <div>
      <h1 className="app-page-title">AI Prep</h1>
      <p className="app-page-sub">Sharpen your responses with role-based scenarios for service, trades, and care roles</p>
      <div className="app-practice-card">
        <Step6Roleplay variant="practice" />
      </div>
    </div>
  )
}
