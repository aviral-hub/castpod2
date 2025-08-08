import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { WhyPodcasting } from '@/components/why-podcasting'
import { ProcessSection } from '@/components/process-section'
import { CreatorSection } from '@/components/creator-section'
import { TeamSection } from '@/components/team-section'
import { Footer } from '@/components/footer'
import { CustomCursor } from '@/components/custom-cursor'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden relative">
      <CustomCursor />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none" />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyPodcasting />
        <ProcessSection />
        <CreatorSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}
