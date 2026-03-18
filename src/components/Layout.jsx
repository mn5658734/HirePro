import { Link, Outlet, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useProfile } from '../context/ProfileContext'
import ProgressBar from './ProgressBar'
import './Layout.css'

export default function Layout() {
  const { pathname } = useLocation()
  const { lang, setLang, t } = useLanguage()
  const { profile } = useProfile()
  const isStepPage = pathname.match(/\/step\/\d+/)
  const isDashboard = pathname === '/dashboard'
  const hasProfile = profile?.contact

  return (
    <div className="layout">
      <header className="header" role="banner">
        <div className="header-inner">
          <Link to="/" className="logo">{t('appName')}</Link>
          <div className="header-actions">
            {hasProfile && !isDashboard && (
              <Link to="/dashboard" className="header-dashboard">
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
        {isStepPage && <ProgressBar />}
      </header>
      <main id="main" className="main" role="main">
        <Outlet />
      </main>
      <footer className="footer" role="contentinfo">
        <p>HirePro — Blue collar hiring made simple. Accessible & multilingual.</p>
      </footer>
    </div>
  )
}
