import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useProfile } from '../context/ProfileContext'
import StepNav from '../components/StepNav'
import './Step.css'

export default function Step5Geo() {
  const { t } = useLanguage()
  const { updateProfile } = useProfile()
  const navigate = useNavigate()
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const getLocation = () => {
    setLoading(true)
    setError(null)
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.')
      setLoading(false)
      return
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const loc = { lat: pos.coords.latitude, lng: pos.coords.longitude }
        setLocation(loc)
        updateProfile({ location: loc })
        setLoading(false)
      },
      () => {
        setError('Could not get location. Please allow location access.')
        setLoading(false)
      }
    )
  }

  const handleNext = () => navigate('/step/6')

  return (
    <div className="step">
      <h2 className="step-title">{t('location')}</h2>
      <p className="step-desc">{t('locationDesc')}</p>
      <button
        type="button"
        onClick={getLocation}
        className="geo-btn"
        disabled={loading}
        aria-busy={loading}
      >
        <span className="geo-icon">📍</span>
        {loading ? 'Getting location...' : t('shareLocation')}
      </button>
      {location && (
        <p className="geo-success">
          ✓ Location captured: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
        </p>
      )}
      {error && <p className="geo-error" role="alert">{error}</p>}
      <StepNav current={5} nextPath="/step/6" onNext={handleNext} canSkip />
    </div>
  )
}
