'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mic, Instagram, Users, TrendingUp } from 'lucide-react'

interface CreatorSelectionProps {
  onSelect: (type: 'podcaster' | 'instagram') => void
}

export function CreatorSelection({ onSelect }: CreatorSelectionProps) {
  const [selectedType, setSelectedType] = useState<'podcaster' | 'instagram' | null>(null)

  const creatorTypes = [
    {
      type: 'podcaster' as const,
      icon: <Mic className="w-12 h-12" />,
      title: 'Podcaster',
      description: 'Share your voice and build authentic connections with brands that align with your content.',
      benefits: [
        'Monetize from 1K+ downloads',
        'Host-read ad opportunities',
        'Brand partnership matching',
        'Performance analytics',
        'Creative control maintained'
      ],
      stats: '1000+ Active Podcasters'
    },
    {
      type: 'instagram' as const,
      icon: <Instagram className="w-12 h-12" />,
      title: 'Instagram Creator',
      description: 'Turn your Instagram influence into income with authentic brand collaborations.',
      benefits: [
        'Start earning from 1K followers',
        'Story & post collaborations',
        'Product partnerships',
        'Fair compensation rates',
        'Brand alignment guaranteed'
      ],
      stats: '500+ Instagram Creators'
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-900 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-white text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Creator Network</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Choose your path and start monetizing your content with authentic brand partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {creatorTypes.map((creator, index) => (
            <Card 
              key={creator.type}
              className={`bg-gradient-to-br from-gray-800 to-gray-900 border transition-all duration-500 group cursor-pointer ${
                selectedType === creator.type 
                  ? 'border-purple-500/60 scale-105 shadow-2xl shadow-purple-500/20' 
                  : 'border-purple-500/20 hover:border-purple-500/40 hover:scale-102'
              }`}
              onClick={() => setSelectedType(creator.type)}
              data-cursor-hover
            >
              <CardContent className="p-8 lg:p-12">
                <div className="text-center mb-8">
                  <div className="mb-6 flex justify-center">
                    <div className={`p-4 rounded-full transition-all duration-300 ${
                      selectedType === creator.type
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white scale-110'
                        : 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-400 group-hover:scale-110'
                    }`}>
                      {creator.icon}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {creator.title}
                  </h2>
                  
                  <p className="text-gray-400 text-lg leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {creator.description}
                  </p>

                  <div className="text-sm text-purple-400 font-medium mb-6">
                    <Users className="w-4 h-4 inline mr-2" />
                    {creator.stats}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="text-white font-semibold text-lg">What You Get:</h3>
                  <ul className="space-y-3">
                    {creator.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className={`w-full py-3 font-medium rounded-full transition-all duration-300 transform hover:scale-105 ${
                    selectedType === creator.type
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
                      : 'border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                  }`}
                  variant={selectedType === creator.type ? 'default' : 'outline'}
                  onClick={(e) => {
                    e.stopPropagation()
                    onSelect(creator.type)
                  }}
                  data-cursor-hover
                >
                  {selectedType === creator.type ? 'Continue as ' + creator.title : 'Choose ' + creator.title}
                  <TrendingUp className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Not Sure Which Path to Choose?
            </h3>
            <p className="text-gray-400 mb-6">
              You can always join as both! Many creators successfully monetize across multiple platforms.
            </p>
            <Button 
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-6 py-2 rounded-full"
              data-cursor-hover
            >
              Contact Us for Guidance
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
