import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useProfile } from '../context/ProfileContext'
import './AppShell.css'

const NAV_CORE = [
  { to: '/app', end: true, label: 'Dashboard', icon: 'grid' },
  { to: '/app/jobs', label: 'Find Jobs', icon: 'search' },
  { to: '/app/applications', label: 'Applications', icon: 'doc' },
  { to: '/app/insights', label: 'Resume Insights', icon: 'chart' },
]

const NAV_AI_PREP = { to: '/app/practice', label: 'AI Prep', icon: 'brain' }

const NAV_TAIL = [{ to: '/app/profile', label: 'Profile', icon: 'user' }]

function buildNav(showAiPrep) {
  return showAiPrep ? [...NAV_CORE, NAV_AI_PREP, ...NAV_TAIL] : [...NAV_CORE, ...NAV_TAIL]
}

function NavIcon({ name }) {
  const p = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.75 }
  if (name === 'grid') return <svg {...p}><path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z" /></svg>
  if (name === 'search') return <svg {...p}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
  if (name === 'doc') return <svg {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" /><path d="M14 2v6h6M8 13h8M8 17h8M8 9h4" /></svg>
  if (name === 'chart') return <svg {...p}><path d="M3 3v18h18" /><path d="M7 16l4-4 4 4 5-6" /></svg>
  if (name === 'brain') return <svg {...p}><path d="M12 5a3 3 0 0 0-3 3v1a3 3 0 1 0 0 6v1a3 3 0 0 0 6 0v-1a3 3 0 1 0 0-6V8a3 3 0 0 0-3-3z" /><path d="M12 5v14" /></svg>
  if (name === 'user') return <svg {...p}><circle cx="12" cy="8" r="4" /><path d="M4 20v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" /></svg>
  return null
}

export default function AppShell() {
  const { profile, resetProfile } = useProfile()
  const navigate = useNavigate()

  const signOut = () => {
    resetProfile?.()
    navigate('/')
  }

  const displayName = profile?.contact || 'Candidate'
  const initials = displayName.slice(0, 1).toUpperCase()

  return (
    <div className="app-shell">
      <aside className="app-shell-sidebar" aria-label="Main navigation">
        <div className="app-shell-brand">
          <NavLink to="/app" className="app-shell-logo">
            HirePro<span className="app-shell-logo-dot">.</span>
          </NavLink>
        </div>
        <nav className="app-shell-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `app-shell-link ${isActive ? 'active' : ''}`}
            >
              <span className="app-shell-link-icon" aria-hidden>
                <NavIcon name={item.icon} />
              </span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="app-shell-footer">
          <div className="app-shell-user">
            <div className="app-shell-avatar">{initials}</div>
            <div className="app-shell-user-meta">
              <span className="app-shell-user-name">{displayName}</span>
              <span className="app-shell-user-role">Candidate</span>
            </div>
          </div>
          <button type="button" className="app-shell-signout" onClick={signOut}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
            </svg>
            Sign out
          </button>
        </div>
      </aside>
      <div className="app-shell-main">
        <Outlet />
      </div>
    </div>
  )
}
