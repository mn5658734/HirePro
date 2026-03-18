import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useProfile } from '../context/ProfileContext'
import StepNav from '../components/StepNav'
import './Step.css'

const SITUATIONS = [
  {
    id: 1,
    scenario: "You notice a coworker taking tools home without permission. What do you do?",
    options: [
      "Ignore it - not my business",
      "Report it to the supervisor immediately",
      "Talk to the coworker privately first",
      "Tell other workers about it",
    ],
    best: 2,
  },
  {
    id: 2,
    scenario: "A machine is making an unusual noise. Your shift ends in 10 minutes. What do you do?",
    options: [
      "Leave it for the next shift",
      "Report it and tag the machine before leaving",
      "Try to fix it quickly yourself",
      "Ignore it if it still works",
    ],
    best: 1,
  },
]

export default function Step7Situation() {
  const { t } = useLanguage()
  const { profile, updateProfile } = useProfile()
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answers, setAnswers] = useState(profile.situationAnswers || [])

  const sit = SITUATIONS[current]
  const isLast = current === SITUATIONS.length - 1

  const handleSelect = (idx) => {
    setSelected(idx)
  }

  const handleNext = () => {
    if (selected !== null) {
      const nextAnswers = [...answers, { situationId: sit.id, choice: selected }]
      setAnswers(nextAnswers)
      updateProfile({ situationAnswers: nextAnswers })
    }
    if (isLast) {
      navigate('/step/8')
    } else {
      setCurrent((c) => c + 1)
      setSelected(null)
    }
  }

  return (
    <div className="step">
      <h2 className="step-title">{t('situationTest')}</h2>
      <p className="step-desc">{t('situationDesc')}</p>
      <div className="situation-card">
        <p className="situation-scenario">{sit.scenario}</p>
        <div className="situation-options" role="radiogroup" aria-label="Choose your response">
          {sit.options.map((opt, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelect(idx)}
              className={`situation-opt ${selected === idx ? 'selected' : ''}`}
              role="radio"
              aria-checked={selected === idx}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
      <p className="step-progress">Question {current + 1} of {SITUATIONS.length}</p>
      <StepNav
        current={7}
        nextPath={isLast ? '/step/8' : null}
        onNext={handleNext}
        canSkip
        skipPath="/step/8"
      />
    </div>
  )
}
