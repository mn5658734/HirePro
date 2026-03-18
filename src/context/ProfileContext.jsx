import { createContext, useContext, useState } from 'react'

const ProfileContext = createContext()

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState({
    contact: '',
    phoneVerified: false,
    skills: [],
    selectedRoles: [], // role IDs from jobCategories (Industry > Skill Type > Role)
    days: [],
    shift: 'flexible',
    credentials: [],
    location: null,
    roleplayResponses: [],
    situationAnswers: [],
    videoUrl: null,
    practicalScores: [],
    references: [],
    appliedJobs: [],
  })

  const updateProfile = (updates) => {
    setProfile((p) => ({ ...p, ...updates }))
  }

  const resetProfile = () => {
    setProfile({
      contact: '',
      phoneVerified: false,
      skills: [],
      selectedRoles: [],
      days: [],
      shift: 'flexible',
      credentials: [],
      location: null,
      roleplayResponses: [],
      situationAnswers: [],
      videoUrl: null,
      practicalScores: [],
      references: [],
      appliedJobs: [],
    })
  }

  return (
    <ProfileContext.Provider value={{ profile, updateProfile, resetProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}

export function useProfile() {
  return useContext(ProfileContext)
}
