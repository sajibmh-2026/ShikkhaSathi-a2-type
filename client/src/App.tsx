import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import ChallengesSection from '@/components/sections/ChallengesSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import DashboardPreviewSection from '@/components/sections/DashboardPreviewSection'
import StatsSection from '@/components/sections/StatsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FaqSection from '@/components/sections/FaqSection'
import CtaSection from '@/components/sections/CtaSection'
import Footer from '@/components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg font-inter text-text overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ChallengesSection />
        <FeaturesSection />
        <HowItWorksSection />
        <DashboardPreviewSection />
        <StatsSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
