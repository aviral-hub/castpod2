import { Header } from '@/components/header'
import { BrandsHero } from '@/components/brands/brands-hero'
import { WhyPodcastAds } from '@/components/brands/why-podcast-ads'
import { BrandServices } from '@/components/brands/brand-services'
import { CaseStudies } from '@/components/brands/case-studies'
import { PricingPlans } from '@/components/brands/pricing-plans'
import { BrandTestimonials } from '@/components/brands/brand-testimonials'
import { GetStarted } from '@/components/brands/get-started'
import { Footer } from '@/components/footer'
import { CustomCursor } from '@/components/custom-cursor'

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden relative">
      <CustomCursor />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none" />
      <Header />
      <main>
        <BrandsHero />
        <WhyPodcastAds />
        <BrandServices />
        <CaseStudies />
        <PricingPlans />
        <BrandTestimonials />
        <GetStarted />
      </main>
      <Footer />
    </div>
  )
}
