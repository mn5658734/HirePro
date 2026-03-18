import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useProfile } from '../context/ProfileContext'
import './Step.css'
import './OTP.css'

// Demo OTP - in production, send via SMS and verify server-side
const DEMO_OTP = '123456'

export default function Step1Register() {
  const { t } = useLanguage()
  const { profile, updateProfile } = useProfile()
  const navigate = useNavigate()
  const [phone, setPhone] = useState(profile.contact || '')
  const [phase, setPhase] = useState('phone') // 'phone' | 'otp'
  const [otp, setOtp] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [error, setError] = useState('')

  const handleSendOtp = () => {
    if (!phone.trim()) {
      setError('Please enter your phone number')
      return
    }
    setError('')
    updateProfile({ contact: phone })
    setOtpSent(true)
    setPhase('otp')
    // In production: call API to send OTP via SMS
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
    setOtpSent(false)
    setError('')
  }

  if (phase === 'otp') {
    return (
      <div className="step">
        <h2 className="step-title">{t('verifyOtp')}</h2>
        <p className="step-desc">
          {t('otpSentTo')} <strong>{phone}</strong>
        </p>
        <button
          type="button"
          onClick={handleBackToPhone}
          className="otp-change-number"
          aria-label="Change phone number"
        >
          {t('changeNumber')}
        </button>
        <div className="step-form">
          <label htmlFor="otp" className="visually-hidden">{t('enterOtp')}</label>
          <input
            id="otp"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={6}
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
            className="input otp-input"
            autoComplete="one-time-code"
            aria-required="true"
          />
        </div>
        {error && <p className="otp-error" role="alert">{error}</p>}
        <p className="otp-demo-hint">Demo: Enter 123456</p>
        <div className="step-nav-single">
          <button type="button" onClick={handleVerifyOtp} className="btn btn-primary btn-lg">
            {t('verifyOtp')}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="step">
      <h2 className="step-title">{t('register')}</h2>
      <p className="step-desc">{t('phoneOrEmailDesc')}</p>
      <div className="step-form">
        <label htmlFor="contact" className="visually-hidden">{t('phoneOrEmail')}</label>
        <input
          id="contact"
          type="tel"
          placeholder="e.g. +1 555-123-4567"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="input"
          autoComplete="tel"
          aria-required="true"
        />
      </div>
      {error && <p className="otp-error" role="alert">{error}</p>}
      <div className="step-nav-single">
        <button type="button" onClick={handleSendOtp} className="btn btn-primary btn-lg">
          {t('sendOtp')}
        </button>
        <Link to="/" className="btn btn-ghost" style={{ marginTop: 12, display: 'block', textAlign: 'center' }}>
          {t('back')}
        </Link>
      </div>
    </div>
  )
}
