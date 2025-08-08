'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CustomCursor } from '@/components/custom-cursor'
import { CreatorSelection } from '@/components/join-network/creator-selection'
import { PodcasterForm } from '@/components/join-network/podcaster-form'
import { InstagramForm } from '@/components/join-network/instagram-form'

export default function JoinNetworkPage() {
  const [selectedType, setSelectedType] = useState<'podcaster' | 'instagram' | null>(null)

  const handleSelection = (type: 'podcaster' | 'instagram') => {
    setSelectedType(type)
  }

  const handleBack = () => {
    setSelectedType(null)
  }

  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden relative">
      <CustomCursor />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none" />
      <Header />
      <main>
        {!selectedType && (
          <CreatorSelection onSelect={handleSelection} />
        )}
        {selectedType === 'podcaster' && (
          <PodcasterForm onBack={handleBack} />
        )}
        {selectedType === 'instagram' && (
          <InstagramForm onBack={handleBack} />
        )}
      </main>
      <Footer />
    </div>
  )
}
