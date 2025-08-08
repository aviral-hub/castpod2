import { Header } from '@/components/header'
import { CampaignHero } from '@/components/start-campaign/campaign-hero'
import { CampaignForm } from '@/components/start-campaign/campaign-form'
import { Footer } from '@/components/footer'
import { CustomCursor } from '@/components/custom-cursor'

export default function StartCampaignPage() {
  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden relative">
      <CustomCursor />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none" />
      <Header />
      <main>
        <CampaignHero />
        <CampaignForm />
      </main>
      <Footer />
    </div>
  )
}
