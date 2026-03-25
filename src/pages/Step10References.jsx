import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useProfile } from '../context/ProfileContext'
import StepNav from '../components/StepNav'
import './Step.css'

export default function Step10References() {
  const { t } = useLanguage()
  const { profile, updateProfile } = useProfile()
  const navigate = useNavigate()
  const [refs, setRefs] = useState(profile.references || [])
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')

  const addRef = () => {
    if (!name.trim() || !contact.trim()) return
    const next = [...refs, { name, contact }]
    setRefs(next)
    updateProfile({ references: next })
    setName('')
    setContact('')
  }

  const removeRef = (i) => {
    const next = refs.filter((_, idx) => idx !== i)
    setRefs(next)
    updateProfile({ references: next })
  }

  const handleNext = () => navigate('/complete')

  return (
    <div className="step">
      <h2 className="step-title">{t('references')}</h2>
      <p className="step-desc">{t('referenceDesc')}</p>
      <div className="ref-form">
        <input
          type="text"
          placeholder="Employer or supervisor name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Email or phone"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="input"
        />
        <button type="button" onClick={addRef} className="btn btn-outline">
          {t('addReference')}
        </button>
      </div>
      {refs.length > 0 && (
        <ul className="cred-list">
          {refs.map((r, i) => (
            <li key={i} className="cred-item">
              <span>{r.name} — {r.contact}</span>
              <button type="button" onClick={() => removeRef(i)} aria-label="Remove">×</button>
            </li>
          ))}
        </ul>
      )}
      <p className="ref-note">
        We'll send them a simple 1–5 star rating request. No long forms.
      </p>
      <StepNav current={10} nextPath="/app" onNext={handleNext} canSkip />
    </div>
  )
}
