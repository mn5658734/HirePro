import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import { ProfileProvider } from './context/ProfileContext'
import Layout from './components/Layout'
import AppShell from './components/AppShell'
import Landing from './pages/Landing'
import Step1Register from './pages/Step1Register'
import Step2Skills from './pages/Step2Skills'
import Step3Preferences from './pages/Step3Preferences'
import Step4Credentials from './pages/Step4Credentials'
import Step5Geo from './pages/Step5Geo'
import Step6Roleplay from './pages/Step6Roleplay'
import Step7Situation from './pages/Step7Situation'
import Step8Video from './pages/Step8Video'
import Step9Practical from './pages/Step9Practical'
import Step10References from './pages/Step10References'
import Complete from './pages/Complete'
import AppDashboard from './pages/app/AppDashboard'
import AppFindJobs from './pages/app/AppFindJobs'
import AppApplications from './pages/app/AppApplications'
import AppInsights from './pages/app/AppInsights'
import AppPractice from './pages/app/AppPractice'
import AppProfile from './pages/app/AppProfile'

export default function App() {
  return (
    <LanguageProvider>
      <ProfileProvider>
        <BrowserRouter>
          <a href="#main" className="skip-link">Skip to main content</a>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Landing />} />
              <Route path="jobs" element={<FindJobsView isPublic />} />
              <Route path="step/1" element={<Step1Register />} />
              <Route path="step/2" element={<Step2Skills />} />
              <Route path="step/3" element={<Step3Preferences />} />
              <Route path="step/4" element={<Step4Credentials />} />
              <Route path="step/5" element={<Step5Geo />} />
              <Route path="step/6" element={<Step6Roleplay />} />
              <Route path="step/7" element={<Step7Situation />} />
              <Route path="step/8" element={<Step8Video />} />
              <Route path="step/9" element={<Step9Practical />} />
              <Route path="step/10" element={<Step10References />} />
              <Route path="complete" element={<Complete />} />
            </Route>
            <Route path="/app" element={<AppShell />}>
              <Route index element={<AppDashboard />} />
              <Route path="jobs" element={<AppFindJobs />} />
              <Route path="applications" element={<AppApplications />} />
              <Route path="insights" element={<AppInsights />} />
              <Route path="practice" element={<AppPractice />} />
              <Route path="profile" element={<AppProfile />} />
            </Route>
            <Route path="/dashboard" element={<Navigate to="/app" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </ProfileProvider>
    </LanguageProvider>
  )
}
