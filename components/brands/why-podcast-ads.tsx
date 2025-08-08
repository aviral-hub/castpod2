'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, Heart, Zap, Users } from 'lucide-react'

export function WhyPodcastAds() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Trust & Authenticity',
      description: 'Podcast listeners are 4x more likely to trust brands they hear in their favorite shows.',
      stat: '4x Higher Trust'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Engaged Audience',
      description: 'Listeners actively choose to tune in, creating a receptive environment for your message.',
      stat: '85% Engagement'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Host Endorsement',
      description: 'Personal recommendations from trusted hosts carry more weight than traditional ads.',
      stat: '3x Conversion'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Targeted Reach',
      description: 'Connect with specific demographics through niche podcast communities.',
      stat: '92% Accuracy'
    }
  ]

  return (
    <section ref={sectionRef} className="bg-gray-900 py-16 lg:py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="mb-4">
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
              Why Podcast Advertising
            </span>
          </div>
          <h2 className="text-white text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Your Customers Are Already <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Listening</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Podcast advertising isn't just effective—it's the future of authentic brand connection. 
            Here's why smart brands are making the switch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 group animate-on-scroll"
              style={{ animationDelay: `${index * 200}ms` }}
              data-cursor-hover
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                    {benefit.stat}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-2xl p-8 lg:p-12 backdrop-blur-sm">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Join the Audio Revolution?
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Don't let your competitors get ahead. Start building authentic connections with your audience today.
            </p>
            <button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-medium transform hover:scale-105 transition-all duration-300"
              data-cursor-hover
            >
              Schedule Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
