import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import LandingPage from '@/pages/LandingPage'
import FeaturesPage from '@/pages/FeaturesPage'
import AboutPage from '@/pages/AboutPage'
import ContactPage from '@/pages/ContactPage'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import ForgotPasswordPage from '@/pages/ForgotPasswordPage'
import DashboardLayout from '@/components/dashboard/layout/DashboardLayout'
import DashboardPlaceholder from '@/pages/dashboard/DashboardPlaceholder'

// Auth pages that should render WITHOUT Navbar/Footer
const AUTH_PATHS = ['/login', '/register', '/forgot-password']

// Dashboard pages — rendered with DashboardLayout
const DASHBOARD_PREFIX = '/dashboard'

function App() {
  const { pathname } = useLocation()
  const isAuthPage = AUTH_PATHS.includes(pathname)
  const isDashboardPage = pathname.startsWith(DASHBOARD_PREFIX)

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Auth pages — no Navbar/Footer
  if (isAuthPage) {
    return (
      <div className="min-h-screen bg-bg font-inter text-text overflow-x-hidden">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Routes>
      </div>
    )
  }

  // Dashboard pages — DashboardLayout with sidebar + topbar
  if (isDashboardPage) {
    return (
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPlaceholder />} />
          <Route path="planner" element={<DashboardPlaceholder />} />
          <Route path="worksheets" element={<DashboardPlaceholder />} />
          <Route path="exams" element={<DashboardPlaceholder />} />
          <Route path="reports" element={<DashboardPlaceholder />} />
          <Route path="history" element={<DashboardPlaceholder />} />
          <Route path="profile" element={<DashboardPlaceholder />} />
          <Route path="settings" element={<DashboardPlaceholder />} />
        </Route>
      </Routes>
    )
  }

  // Public pages — Navbar + Footer
  return (
    <div className="min-h-screen bg-bg font-inter text-text overflow-x-hidden">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
