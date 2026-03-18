import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useProfile } from '../context/ProfileContext'
import StepNav from '../components/StepNav'
import './Step.css'

export default function Step4Credentials() {
  const { t } = useLanguage()
  const { profile, updateProfile } = useProfile()
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState(profile.credentials || [])

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || [])
    const names = files.map((f) => f.name)
    const next = [...credentials, ...names]
    setCredentials(next)
    updateProfile({ credentials: next })
  }

  const removeCred = (i) => {
    const next = credentials.filter((_, idx) => idx !== i)
    setCredentials(next)
    updateProfile({ credentials: next })
  }

  const handleNext = () => navigate('/step/5')

  return (
    <div className="step">
      <h2 className="step-title">{t('credentials')}</h2>
      <p className="step-desc">{t('uploadCreds')}</p>
      <div className="cred-upload">
        <label htmlFor="cred-file" className="cred-upload-btn">
          <span className="cred-icon">📄</span>
          {t('takePhoto')} / Upload
        </label>
        <input
          id="cred-file"
          type="file"
          accept="image/*,.pdf"
          multiple
          onChange={handleFileChange}
          className="visually-hidden"
        />
      </div>
      {credentials.length > 0 && (
        <ul className="cred-list">
          {credentials.map((name, i) => (
            <li key={i} className="cred-item">
              <span>{name}</span>
              <button type="button" onClick={() => removeCred(i)} aria-label="Remove">×</button>
            </li>
          ))}
        </ul>
      )}
      <StepNav current={4} nextPath="/step/5" onNext={handleNext} canSkip />
    </div>
  )
}
