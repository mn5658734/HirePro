import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './Landing.css'

export default function Landing() {
  const { t } = useLanguage()

  return (
    <div className="landing">
      <div className="landing-hero">
        <div className="hero-icon" aria-hidden="true">🔧</div>
        <h2 className="landing-title">{t('tagline')}</h2>
        <p className="landing-desc">
          No resume needed. Show your skills, get matched with jobs.
        </p>
      </div>
      <div className="landing-features">
        <div className="feature">
          <span className="feature-icon">✓</span>
          <span>Skill checklist instead of resume</span>
        </div>
        <div className="feature">
          <span className="feature-icon">✓</span>
          <span>Set your schedule & shift</span>
        </div>
        <div className="feature">
          <span className="feature-icon">✓</span>
          <span>Quick assessments & video intro</span>
        </div>
        <div className="feature">
          <span className="feature-icon">✓</span>
          <span>Works in your language</span>
        </div>
      </div>
      <Link to="/step/1" className="btn btn-primary btn-lg">
        {t('getStarted')}
      </Link>
    </div>
  )
}
