'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Rocket, TrendingUp, Users, Target } from 'lucide-react'

export function CampaignHero() {
  const heroRef = useRef<HTMLElement>(null)

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

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const benefits = [
    { icon: <Target className="w-5 h-5" />, text: 'Targeted audience reach' },
    { icon: <TrendingUp className="w-5 h-5" />, text: 'Measurable ROI' },
    { icon: <Users className="w-5 h-5" />, text: 'Authentic brand connection' }
  ]

  return (
    <section ref={heroRef} className="relative px-4 lg:px-8 pt-24 pb-16 lg:pb-24 min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="animate-on-scroll">
            <div className="mb-6">
              <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
                Start Your Campaign
              </span>
            </div>
            
            <h1 className="text-white text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Launch Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Podcast Campaign</span>
            </h1>
            
            <p className="text-gray-400 text-lg lg:text-xl leading-relaxed mb-8">
              Ready to reach your ideal customers through authentic podcast advertising? 
              Tell us about your brand and we'll create a custom campaign strategy that delivers results.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-300">
                  <div className="text-purple-400">
                    {benefit.icon}
                  </div>
                  <span className="text-sm">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-medium rounded-full transform hover:scale-105 transition-all duration-300"
                data-cursor-hover
                onClick={() => document.getElementById('campaign-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Campaign
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg font-medium rounded-full transform hover:scale-105 transition-all duration-300"
                data-cursor-hover
              >
                View Pricing
              </Button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="animate-on-scroll">
            <div className="relative">
              <svg
                className="w-full h-96 lg:h-[500px] drop-shadow-2xl"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="campaignGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="50%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                  
                  <radialGradient id="campaignGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
                  </radialGradient>
                </defs>

                {/* Background */}
                <circle cx="200" cy="200" r="180" fill="url(#campaignGlow)" className="animate-pulse" />

                {/* Campaign Launch Visual */}
                <g className="animate-pulse">
                  {/* Rocket */}
                  <path d="M180 120 L220 120 L210 80 L190 80 Z" fill="url(#campaignGradient)" />
                  <path d="M185 120 L215 120 L210 140 L190 140 Z" fill="url(#campaignGradient)" opacity="0.8" />
                  <circle cx="200" cy="100" r="8" fill="white" opacity="0.9" />
                  
                  {/* Rocket flames */}
                  <path d="M190 140 L200 160 L210 140" fill="#FF6B6B" className="animate-pulse" />
                  <path d="M195 140 L200 155 L205 140" fill="#FFE66D" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                </g>

                {/* Target circles */}
                <g className="animate-pulse" style={{ animationDelay: '0.5s' }}>
                  <circle cx="320" cy="150" r="40" fill="none" stroke="url(#campaignGradient)" strokeWidth="3" opacity="0.6" />
                  <circle cx="320" cy="150" r="25" fill="none" stroke="url(#campaignGradient)" strokeWidth="2" opacity="0.8" />
                  <circle cx="320" cy="150" r="10" fill="url(#campaignGradient)" />
                </g>

                {/* Growth chart */}
                <g className="animate-pulse" style={{ animationDelay: '1s' }}>
                  <rect x="80" y="250" width="15" height="30" fill="url(#campaignGradient)" opacity="0.6" />
                  <rect x="100" y="240" width="15" height="40" fill="url(#campaignGradient)" opacity="0.7" />
                  <rect x="120" y="220" width="15" height="60" fill="url(#campaignGradient)" opacity="0.8" />
                  <rect x="140" y="200" width="15" height="80" fill="url(#campaignGradient)" />
                </g>

                {/* Connection lines */}
                <g stroke="url(#campaignGradient)" strokeWidth="2" opacity="0.4" strokeDasharray="5,5">
                  <path d="M 220 110 Q 270 130 280 150" className="animate-pulse" />
                  <path d="M 180 130 Q 130 180 120 220" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                </g>

                {/* Floating elements */}
                <g fill="url(#campaignGradient)" opacity="0.6">
                  <circle cx="100" cy="100" r="4" className="animate-ping" />
                  <circle cx="300" cy="280" r="4" className="animate-ping" style={{ animationDelay: '1s' }} />
                  <circle cx="80" cy="320" r="4" className="animate-ping" style={{ animationDelay: '2s' }} />
                  <circle cx="320" cy="80" r="4" className="animate-ping" style={{ animationDelay: '3s' }} />
                </g>

                {/* Success indicators */}
                <g className="animate-pulse" style={{ animationDelay: '1.5s' }}>
                  <circle cx="300" cy="300" r="20" fill="url(#campaignGradient)" />
                  <path d="M 292 300 L 298 306 L 308 290" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
