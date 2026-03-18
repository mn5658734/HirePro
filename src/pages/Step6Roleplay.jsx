import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useProfile } from '../context/ProfileContext'
import StepNav from '../components/StepNav'
import './Step.css'
import './Roleplay.css'

const SCENARIO = {
  prompt: "A customer is upset because their order was delayed. They're raising their voice. What do you say?",
  followUp: "They say: 'This is the third time! I want to speak to a manager.' How do you respond?",
}

export default function Step6Roleplay() {
  const { t } = useLanguage()
  const { profile, updateProfile } = useProfile()
  const navigate = useNavigate()
  const [messages, setMessages] = useState([
    { role: 'ai', text: SCENARIO.prompt },
  ])
  const [input, setInput] = useState('')
  const [phase, setPhase] = useState(0)

  const sendMessage = () => {
    if (!input.trim()) return
    const userMsg = { role: 'user', text: input }
    const next = [...messages, userMsg]
    setMessages(next)
    setInput('')

    if (phase === 0) {
      setMessages([...next, { role: 'ai', text: SCENARIO.followUp }])
      setPhase(1)
    } else {
      updateProfile({ roleplayResponses: [...(profile.roleplayResponses || []), input] })
    }
  }

  const handleNext = () => navigate('/step/7')

  return (
    <div className="step">
      <h2 className="step-title">{t('roleplay')}</h2>
      <p className="step-desc">{t('roleplayDesc')}</p>
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
      <StepNav current={6} nextPath="/step/7" onNext={handleNext} canSkip />
    </div>
  )
}
