import { useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './ProgressBar.css'

const STEPS = 10

export default function ProgressBar() {
  const { pathname } = useLocation()
  const { t } = useLanguage()
  const match = pathname.match(/\/step\/(\d+)/)
  const current = match ? parseInt(match[1], 10) : 0
  const percent = (current / STEPS) * 100

  return (
    <div className="progress-bar" role="progressbar" aria-valuenow={current} aria-valuemin={1} aria-valuemax={STEPS} aria-label={`${t('step')} ${current} ${t('of')} ${STEPS}`}>
      <div className="progress-fill" style={{ width: `${percent}%` }} />
      <span className="progress-text">{t('step')} {current} / {STEPS}</span>
    </div>
  )
}
