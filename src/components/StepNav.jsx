import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './StepNav.css'

export default function StepNav({ current, nextPath, onNext, canSkip, skipPath }) {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const prevPath = current > 1 ? `/step/${current - 1}` : '/'
  const effectiveSkipPath = skipPath ?? nextPath

  const handleNext = () => {
    if (onNext) {
      onNext()
    } else if (nextPath) {
      navigate(nextPath)
    }
  }

  const showNext = nextPath || onNext

  return (
    <nav className="step-nav" aria-label="Step navigation">
      <Link to={prevPath} className="btn btn-outline">
        {t('back')}
      </Link>
      <div className="step-nav-right">
        {canSkip && effectiveSkipPath && (
          <Link to={effectiveSkipPath} className="btn btn-ghost">
            {t('skip')}
          </Link>
        )}
        {showNext && (
          <button onClick={handleNext} className="btn btn-primary">
            {nextPath ? t('next') : t('save')}
          </button>
        )}
      </div>
    </nav>
  )
}
