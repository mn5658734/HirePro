import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useProfile } from '../context/ProfileContext'
import { getTasksForProfile } from '../data/practicalTasks'
import StepNav from '../components/StepNav'
import './Step.css'

export default function Step9Practical() {
  const { t } = useLanguage()
  const { profile, updateProfile } = useProfile()
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [scores, setScores] = useState(profile.practicalScores || [])

  const tasks = useMemo(
    () => getTasksForProfile(profile.selectedRoles || profile.skills),
    [profile.selectedRoles, profile.skills]
  )

  const task = tasks[current]
  const isLast = current === tasks.length - 1

  const handleSelect = (idx) => setSelected(idx)

  const handleNext = () => {
    if (selected !== null && task) {
      const correct = selected === task.correct
      const nextScores = [...scores, { taskId: task.id, correct }]
      setScores(nextScores)
      updateProfile({ practicalScores: nextScores })
    }
    if (isLast) {
      navigate('/step/10')
    } else {
      setCurrent((c) => c + 1)
      setSelected(null)
    }
  }

  if (!task) {
    return (
      <div className="step">
        <h2 className="step-title">{t('practicalTask')}</h2>
        <p className="step-desc">No tasks to show. Select roles in Step 2 for profile-based tasks.</p>
        <StepNav current={9} nextPath="/step/10" canSkip skipPath="/step/10" />
      </div>
    )
  }

  return (
    <div className="step">
      <h2 className="step-title">{t('practicalTask')}</h2>
      <p className="step-desc">{t('practicalDesc')}</p>
      <div className="situation-card">
        <p className="situation-scenario">{task.question}</p>
        <div className="situation-options" role="radiogroup" aria-label="Choose your answer">
          {task.options.map((opt, idx) => (
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
      <p className="step-progress">Task {current + 1} of {tasks.length}</p>
      <StepNav
        current={9}
        nextPath={isLast ? '/step/10' : null}
        onNext={handleNext}
        canSkip
        skipPath="/step/10"
      />
    </div>
  )
}
