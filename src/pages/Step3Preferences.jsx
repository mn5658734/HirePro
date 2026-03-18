import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useProfile } from '../context/ProfileContext'
import StepNav from '../components/StepNav'
import './Step.css'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const SHIFTS = [
  { id: 'morning', labelKey: 'morning', icon: '🌅' },
  { id: 'afternoon', labelKey: 'afternoon', icon: '☀️' },
  { id: 'night', labelKey: 'night', icon: '🌙' },
  { id: 'flexible', labelKey: 'flexible', icon: '🔄' },
]

export default function Step3Preferences() {
  const { t } = useLanguage()
  const { profile, updateProfile } = useProfile()
  const navigate = useNavigate()
  const [days, setDays] = useState(profile.days || [])
  const [shift, setShift] = useState(profile.shift || 'flexible')

  const toggleDay = (d) => {
    const next = days.includes(d) ? days.filter((x) => x !== d) : [...days, d]
    setDays(next)
    updateProfile({ days: next })
  }

  const handleShift = (id) => {
    setShift(id)
    updateProfile({ shift: id })
  }

  const handleNext = () => navigate('/step/4')

  return (
    <div className="step">
      <h2 className="step-title">{t('workPreferences')}</h2>
      <p className="step-desc">{t('selectDays')}</p>
      <div className="day-grid" role="group" aria-label="Select work days">
        {DAYS.map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => toggleDay(d)}
            className={`day-btn ${days.includes(d) ? 'selected' : ''}`}
            aria-pressed={days.includes(d)}
          >
            {d}
          </button>
        ))}
      </div>
      <p className="step-desc" style={{ marginTop: 24 }}>{t('selectShift')}</p>
      <div className="shift-grid" role="group" aria-label="Select shift">
        {SHIFTS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => handleShift(s.id)}
            className={`shift-btn ${shift === s.id ? 'selected' : ''}`}
            aria-pressed={shift === s.id}
          >
            <span className="shift-icon">{s.icon}</span>
            <span>{t(s.labelKey)}</span>
          </button>
        ))}
      </div>
      <StepNav current={3} nextPath="/step/4" onNext={handleNext} />
    </div>
  )
}
