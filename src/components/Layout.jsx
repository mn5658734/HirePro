import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useProfile } from '../context/ProfileContext'
import ProgressBar from './ProgressBar'
import './Layout.css'

export default function Layout() {
  const { pathname } = useLocation()
  const { lang, setLang, t } = useLanguage()
  const { profile } = useProfile()
  const isStepPage = pathname.match(/\/step\/\d+/)
  const isAuthStep = pathname === '/step/1'
  const isOnboardingSteps = Boolean(isStepPage && !isAuthStep)
  const isPostOnboardingFlow = pathname === '/complete'
  const isPublicJobs = pathname === '/jobs'
  const useWebAppChrome = isOnboardingSteps || isPostOnboardingFlow || isPublicJobs
  const hasProfile = profile?.contact

  return (
    <div
      className={`layout ${isAuthStep ? 'layout--auth' : ''} ${useWebAppChrome ? 'layout--onboarding' : ''}`}
    >
      {!isAuthStep && (
        <header className="header" role="banner">
          <div className="header-inner">
            <div className="header-left">
              <Link to="/" className="logo">
                {t('appName')}<span className="logo-dot">.</span>
              </Link>
              <nav className="header-nav-tabs" aria-label="Site sections">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => `header-tab ${isActive ? 'header-tab--active' : ''}`}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/jobs"
                  className={({ isActive }) => `header-tab ${isActive ? 'header-tab--active' : ''}`}
                >
                  Find Jobs
                </NavLink>
                <NavLink
                  to="/app/practice"
                  className={({ isActive }) => `header-tab ${isActive ? 'header-tab--active' : ''}`}
                >
                  Prep AI
                </NavLink>
              </nav>
            </div>
            <div className="header-actions">
              {hasProfile && (
                <Link to="/app" className="header-dashboard">
                  Dashboard
                </Link>
              )}
              <div className="lang-switcher" role="group" aria-label="Language">
                {['en', 'es', 'hi'].map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={lang === l ? 'active' : ''}
                    aria-pressed={lang === l}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {isStepPage && (
            <div className="header-progress-track">
              <ProgressBar />
            </div>
          )}
        </header>
      )}
      <main id="main" className={`main ${isAuthStep ? 'main--auth' : ''}`} role="main">
        <Outlet />
      </main>
      {!isAuthStep && (
        <footer className="footer" role="contentinfo">
          <p>HirePro — Blue collar hiring made simple. Accessible & multilingual.</p>
        </footer>
      )}
    </div>
  )
}
