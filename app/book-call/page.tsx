import { Header } from '@/components/header'
import { BrandsCallHero } from '@/components/book-call/brands-hero'
import { CallTypes } from '@/components/book-call/call-types'
import { WhatToExpect } from '@/components/book-call/what-to-expect'
import { SchedulingWidget } from '@/components/book-call/scheduling-widget'
import { FAQSection } from '@/components/book-call/faq-section'
import { Footer } from '@/components/footer'
import { CustomCursor } from '@/components/custom-cursor'

export default function BookCallPage() {
  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden relative">
      <CustomCursor />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none" />
      <Header />
      <main>
        <BrandsCallHero />
        <CallTypes />
        <WhatToExpect />
        <SchedulingWidget />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
