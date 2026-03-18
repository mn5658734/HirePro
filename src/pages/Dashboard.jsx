import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useProfile } from '../context/ProfileContext'
import { getRoleById } from '../data/jobCategories'
import { MOCK_JOBS } from '../data/mockJobs'
import { getProfileCompletion } from '../utils/profileCompletion'
import DashboardHome from './DashboardHome'
import DashboardProfile from './DashboardProfile'
import DashboardJobs from './DashboardJobs'
import './Dashboard.css'

export default function Dashboard() {
  const { t } = useLanguage()
  const { profile, resetProfile } = useProfile()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('home')

  const handleLogout = () => {
    resetProfile()
    navigate('/')
  }

  const tabs = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'jobs', label: 'Jobs', icon: '💼' },
    { id: 'logout', label: 'Logout', icon: '🚪' },
  ]

  const handleTabClick = (id) => {
    if (id === 'logout') {
      handleLogout()
    } else {
      setActiveTab(id)
    }
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">My Dashboard</h1>
        <p className="dashboard-welcome">
          Welcome back{profile.contact ? `, ${profile.contact}` : ''}
        </p>
      </div>

      <nav className="dashboard-nav" role="tablist" aria-label="Dashboard sections">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => handleTabClick(tab.id)}
            className={`dashboard-nav-btn ${activeTab === tab.id ? 'active' : ''} ${tab.id === 'logout' ? 'logout' : ''}`}
          >
            <span className="nav-icon">{tab.icon}</span>
            <span className="nav-label">{tab.label}</span>
          </button>
        ))}
      </nav>

      <div className="dashboard-content">
        {activeTab === 'home' && (
          <div id="panel-home" role="tabpanel" aria-labelledby="tab-home">
            <DashboardHome onNavigate={(tab) => setActiveTab(tab)} />
          </div>
        )}
        {activeTab === 'profile' && (
          <div id="panel-profile" role="tabpanel" aria-labelledby="tab-profile">
            <DashboardProfile />
          </div>
        )}
        {activeTab === 'jobs' && (
          <div id="panel-jobs" role="tabpanel" aria-labelledby="tab-jobs">
            <DashboardJobs />
          </div>
        )}
      </div>
    </div>
  )
}
