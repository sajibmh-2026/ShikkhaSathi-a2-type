import { Routes, Route } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import LandingPage from '@/pages/LandingPage'
import FeaturesPage from '@/pages/FeaturesPage'
import AboutPage from '@/pages/AboutPage'
import ContactPage from '@/pages/ContactPage'

function App() {
  return (
    <div className="min-h-screen bg-bg font-inter text-text overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
