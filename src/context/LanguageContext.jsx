import { createContext, useContext, useState } from 'react'

const translations = {
  en: {
    appName: 'HirePro',
    tagline: 'Find Your Next Job',
    getStarted: 'Get Started',
    next: 'Next',
    back: 'Back',
    save: 'Save',
    skip: 'Skip',
    // Step 1
    register: 'Create Account',
    phoneOrEmail: 'Phone Number',
    phoneOrEmailDesc: 'Enter your phone number. We\'ll send you a verification code.',
    sendOtp: 'Send OTP',
    verifyOtp: 'Verify OTP',
    enterOtp: 'Enter 6-digit OTP',
    otpSentTo: 'We sent a code to',
    changeNumber: 'Change number',
    continue: 'Continue',
    // Step 2
    selectSkills: 'What can you do?',
    selectSkillsDesc: 'Tap the skills you have (no resume needed)',
    // Step 3
    workPreferences: 'When can you work?',
    selectDays: 'Select days',
    selectShift: 'Shift preference',
    morning: 'Morning',
    afternoon: 'Afternoon',
    night: 'Night',
    flexible: 'Flexible',
    // Step 4
    credentials: 'Licenses & Certifications',
    uploadCreds: 'Upload your licenses',
    takePhoto: 'Take Photo',
    // Step 5
    location: 'Your Location',
    shareLocation: 'Share My Location',
    locationDesc: 'Helps match you with nearby jobs',
    // Step 6
    roleplay: 'Practice Scenario',
    roleplayDesc: 'A customer is upset. How do you respond?',
    typeResponse: 'Type your response...',
    send: 'Send',
    // Step 7
    situationTest: 'What would you do?',
    situationDesc: 'Choose the best response',
    // Step 8
    videoIntro: '60 Second Introduction',
    recordVideo: 'Record Video',
    recordDesc: 'Tell employers about yourself',
    seconds: 'sec',
    // Step 9
    practicalTask: 'Quick Skill Check',
    practicalDesc: 'Based on your profile',
    // Step 10
    references: 'Work References',
    referenceDesc: 'We\'ll ask your past employers for feedback',
    addReference: 'Add Employer Contact',
    // Progress
    step: 'Step',
    of: 'of',
    profileComplete: 'Profile Complete!',
    goToDashboard: 'Go to Dashboard',
  },
  es: {
    appName: 'HirePro',
    tagline: 'Encuentra Tu Próximo Trabajo',
    getStarted: 'Comenzar',
    next: 'Siguiente',
    back: 'Atrás',
    save: 'Guardar',
    skip: 'Omitir',
    selectSkills: '¿Qué sabes hacer?',
    selectSkillsDesc: 'Toca las habilidades que tienes',
    workPreferences: '¿Cuándo puedes trabajar?',
    selectDays: 'Selecciona días',
    selectShift: 'Turno preferido',
    morning: 'Mañana',
    afternoon: 'Tarde',
    night: 'Noche',
    flexible: 'Flexible',
    credentials: 'Licencias y Certificaciones',
    uploadCreds: 'Sube tus licencias',
    takePhoto: 'Tomar Foto',
    location: 'Tu Ubicación',
    shareLocation: 'Compartir Mi Ubicación',
    roleplay: 'Escenario de Práctica',
    situationTest: '¿Qué harías?',
    videoIntro: 'Introducción de 60 Segundos',
    recordVideo: 'Grabar Video',
    practicalTask: 'Verificación Rápida',
    references: 'Referencias de Trabajo',
    step: 'Paso',
    of: 'de',
  },
  hi: {
    appName: 'HirePro',
    tagline: 'अपनी अगली नौकरी खोजें',
    getStarted: 'शुरू करें',
    next: 'आगे',
    back: 'पीछे',
    selectSkills: 'आप क्या कर सकते हैं?',
    workPreferences: 'आप कब काम कर सकते हैं?',
    morning: 'सुबह',
    afternoon: 'दोपहर',
    night: 'रात',
    shareLocation: 'मेरा स्थान साझा करें',
    step: 'चरण',
    of: 'में से',
  },
}

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  const t = (key) => translations[lang]?.[key] ?? translations.en[key] ?? key
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
