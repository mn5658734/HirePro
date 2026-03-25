import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useProfile } from '../context/ProfileContext'
import './Step.css'
import './OTP.css'
import './AuthSplit.css'

const DEMO_OTP = '123456'

function BrandPanel() {
  return (
    <div className="auth-split-brand">
      <Link to="/" className="auth-split-logo">
        HirePro<span className="auth-split-logo-dot">.</span>
      </Link>
      <div className="auth-split-brand-inner">
        <h1 className="auth-split-headline">Find the right job. Faster.</h1>
        <p className="auth-split-sub">
          Skill checklists, practice scenarios, and smart matching for blue and pink collar roles — no traditional resume required.
        </p>
      </div>
      <p className="auth-split-copy">© {new Date().getFullYear()} HirePro</p>
    </div>
  )
}

export default function Step1Register() {
  const { t, lang, setLang } = useLanguage()
  const { profile, updateProfile } = useProfile()
  const navigate = useNavigate()
  const [phone, setPhone] = useState(profile.contact || '')
  const [phase, setPhase] = useState('phone')
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const [role, setRole] = useState('candidate')

  const handleSendOtp = () => {
    if (role !== 'candidate') return
    if (!phone.trim()) {
      setError('Please enter your phone number')
      return
    }
    setError('')
    updateProfile({ contact: phone })
    setPhase('otp')
  }

  const handleVerifyOtp = () => {
    if (otp.trim() !== DEMO_OTP) {
      setError('Invalid OTP. Use 123456 for demo.')
      return
    }
    setError('')
    updateProfile({ phoneVerified: true })
    navigate('/step/2')
  }

  const handleBackToPhone = () => {
    setPhase('phone')
    setOtp('')
    setError('')
  }

  const langBar = (
    <div className="auth-split-lang">
      {['en', 'es', 'hi'].map((l) => (
        <button key={l} type="button" className={lang === l ? 'active' : ''} onClick={() => setLang(l)}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )

  if (phase === 'otp') {
    return (
      <div className="auth-split">
        <BrandPanel />
        <div className="auth-split-form" style={{ position: 'relative' }}>
          {langBar}
          <h2 className="step-title" style={{ marginTop: 32 }}>{t('verifyOtp')}</h2>
          <p className="step-desc">
            {t('otpSentTo')} <strong>{phone}</strong>
          </p>
          <button type="button" onClick={handleBackToPhone} className="otp-change-number">
            {t('changeNumber')}
          </button>
          <div className="step-form">
            <label htmlFor="otp" className="visually-hidden">{t('enterOtp')}</label>
            <input
              id="otp"
              type="text"
              inputMode="numeric"
              maxLength={6}
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
              className="input otp-input"
              autoComplete="one-time-code"
            />
          </div>
          {error && <p className="otp-error" role="alert">{error}</p>}
          <p className="otp-demo-hint">Demo: Enter 123456</p>
          <button type="button" onClick={handleVerifyOtp} className="btn btn-primary btn-lg" style={{ width: '100%' }}>
            {t('verifyOtp')}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="auth-split">
      <BrandPanel />
      <div className="auth-split-form" style={{ position: 'relative' }}>
        {langBar}
        <h2 className="step-title" style={{ marginTop: 32 }}>{t('register')}</h2>
        <p className="step-desc">
          Don&apos;t have an account? You&apos;re creating one now with your phone.
        </p>
        <div className="auth-role-toggle">
          <button type="button" className={role === 'candidate' ? 'active' : ''} onClick={() => setRole('candidate')}>
            Candidate
          </button>
          <button type="button" className={role === 'recruiter' ? 'active' : ''} onClick={() => setRole('recruiter')} disabled title="Coming soon">
            Recruiter
          </button>
        </div>
        <p className="step-desc">{t('phoneOrEmailDesc')}</p>
        <div className="step-form">
          <label htmlFor="contact" className="visually-hidden">{t('phoneOrEmail')}</label>
          <input
            id="contact"
            type="tel"
            placeholder="e.g. +91 98765 43210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="input"
            autoComplete="tel"
          />
        </div>
        {error && <p className="otp-error" role="alert">{error}</p>}
        <button type="button" onClick={handleSendOtp} className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: 8 }}>
          {t('sendOtp')}
        </button>
        <Link to="/" className="btn btn-ghost" style={{ marginTop: 16, display: 'block', textAlign: 'center' }}>
          {t('back')}
        </Link>
      </div>
    </div>
  )
}
