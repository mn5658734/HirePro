import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useProfile } from '../context/ProfileContext'
import StepNav from '../components/StepNav'
import './Step.css'
import './Video.css'

export default function Step8Video() {
  const { t } = useLanguage()
  const { updateProfile } = useProfile()
  const navigate = useNavigate()
  const [recording, setRecording] = useState(false)
  const [countdown, setCountdown] = useState(null)
  const [recorded, setRecorded] = useState(false)
  const videoRef = useRef(null)

  const startRecord = () => {
    setCountdown(3)
    const interval = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(interval)
          setRecording(true)
          setCountdown(null)
          // Simulate 60 sec - in real app would use MediaRecorder
          setTimeout(() => {
            setRecording(false)
            setRecorded(true)
            updateProfile({ videoUrl: 'recorded' })
          }, 3000) // shortened for demo
          return 0
        }
        return c - 1
      })
    }, 1000)
  }

  const handleNext = () => navigate('/step/9')

  return (
    <div className="step">
      <h2 className="step-title">{t('videoIntro')}</h2>
      <p className="step-desc">{t('recordDesc')}</p>
      <div className="video-container">
        <div className="video-placeholder">
          {countdown !== null && countdown > 0 ? (
            <span className="video-countdown">{countdown}</span>
          ) : recording ? (
            <span className="video-recording">● Recording... 60 {t('seconds')}</span>
          ) : recorded ? (
            <span className="video-done">✓ Video recorded!</span>
          ) : (
            <span className="video-prompt">Tap to record</span>
          )}
        </div>
        {!recorded && !recording && countdown === null && (
          <button
            type="button"
            onClick={startRecord}
            className="video-record-btn"
            aria-label={t('recordVideo')}
          >
            {t('recordVideo')}
          </button>
        )}
      </div>
      <StepNav current={8} nextPath="/step/9" onNext={handleNext} canSkip />
    </div>
  )
}
