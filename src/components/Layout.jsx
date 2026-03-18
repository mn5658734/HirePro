import { Outlet, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import ProgressBar from './ProgressBar'
import './Layout.css'

export default function Layout() {
  const { pathname } = useLocation()
  const { lang, setLang, t } = useLanguage()
  const isStepPage = pathname.match(/\/step\/\d+/)

  return (
    <div className="layout">
      <header className="header" role="banner">
        <div className="header-inner">
          <h1 className="logo">{t('appName')}</h1>
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
