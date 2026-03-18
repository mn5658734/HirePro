import { useState, useMemo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useProfile } from '../context/ProfileContext'
import { getScenariosForProfile } from '../data/roleplayScenarios'
import StepNav from '../components/StepNav'
import './Step.css'
import './Roleplay.css'

export default function Step6Roleplay() {
  const { t } = useLanguage()
  const { profile, updateProfile } = useProfile()
  const navigate = useNavigate()

  const scenarios = useMemo(
    () => getScenariosForProfile(profile.selectedRoles || profile.skills, 3),
    [profile.selectedRoles, profile.skills]
  )

  const [currentIndex, setCurrentIndex] = useState(0)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [phase, setPhase] = useState(0)
  const [completedScenarios, setCompletedScenarios] = useState(profile.roleplayResponses || [])

  const scenario = scenarios[currentIndex]
  const isLastScenario = currentIndex === scenarios.length - 1

  useEffect(() => {
    if (scenario) {
      setMessages([{ role: 'ai', text: scenario.prompt }])
      setPhase(0)
    }
  }, [currentIndex, scenario?.id])

  const sendMessage = () => {
    if (!input.trim()) return
    const userMsg = { role: 'user', text: input }
    const next = [...messages, userMsg]
    setMessages(next)
    setInput('')

    if (phase === 0) {
      setMessages([...next, { role: 'ai', text: scenario.followUp }])
      setPhase(1)
    } else {
      const responses = [...completedScenarios, { scenarioId: scenario.id, responses: [next[1]?.text, input] }]
      setCompletedScenarios(responses)
      updateProfile({ roleplayResponses: responses })

      if (isLastScenario) {
        navigate('/step/7')
      } else {
        setCurrentIndex((i) => i + 1)
        setMessages([{ role: 'ai', text: scenarios[currentIndex + 1].prompt }])
        setPhase(0)
      }
    }
  }

  const handleNext = () => {
    if (isLastScenario) {
      navigate('/step/7')
    } else {
      setCurrentIndex((i) => i + 1)
      setPhase(0)
      setInput('')
    }
  }

  if (!scenario) {
    return (
      <div className="step">
        <h2 className="step-title">{t('roleplay')}</h2>
        <p className="step-desc">No scenarios available.</p>
        <StepNav current={6} nextPath="/step/7" canSkip skipPath="/step/7" />
      </div>
    )
  }

  return (
    <div className="step">
      <h2 className="step-title">{t('roleplay')}</h2>
      <p className="step-desc">{t('roleplayDesc')}</p>
      <div className="roleplay-progress">
        Scenario {currentIndex + 1} of {scenarios.length}
      </div>
      <div className="roleplay-chat" role="log" aria-live="polite">
        {messages.map((m, i) => (
          <div key={i} className={`roleplay-msg ${m.role}`}>
            <span className="roleplay-role">{m.role === 'ai' ? 'Scenario' : 'You'}</span>
            <p>{m.text}</p>
          </div>
        ))}
      </div>
      <div className="roleplay-input">
        <label htmlFor="roleplay-input" className="visually-hidden">{t('typeResponse')}</label>
        <input
          id="roleplay-input"
          type="text"
          placeholder={t('typeResponse')}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="input"
        />
        <button type="button" onClick={sendMessage} className="btn btn-primary">
          {t('send')}
        </button>
      </div>
      <p className="roleplay-hint">
        Your responses help match you with the right jobs. Be professional and empathetic.
      </p>
      <StepNav current={6} nextPath="/step/7" onNext={handleNext} canSkip skipPath="/step/7" />
    </div>
  )
}
