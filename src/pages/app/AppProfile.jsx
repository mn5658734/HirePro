import DashboardProfile from '../DashboardProfile'
import './AppPage.css'

export default function AppProfile() {
  return (
    <div>
      <h1 className="app-page-title">Profile</h1>
      <p className="app-page-sub">Manage your skills, documents, and preferences</p>
      <div className="app-profile-wrap">
        <DashboardProfile />
      </div>
    </div>
  )
}
