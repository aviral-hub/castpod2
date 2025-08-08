'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Play, TrendingUp, Users, Target } from 'lucide-react'

export function BrandsHero() {
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

  const stats = [
    { icon: <TrendingUp className="w-6 h-6" />, value: '4x', label: 'Higher Trust Rate' },
    { icon: <Users className="w-6 h-6" />, value: '1M+', label: 'Monthly Listeners' },
    { icon: <Target className="w-6 h-6" />, value: '85%', label: 'Engagement Rate' }
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
                For Brands
              </span>
            </div>
            
            <h1 className="text-white text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Stop <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Interrupting</span><br />
              Start <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Belonging</span>
            </h1>
            
            <p className="text-gray-400 text-lg lg:text-xl leading-relaxed mb-8">
              Your customers are already listening. They trust the voices they choose to hear. 
              Be the brand that belongs in their favorite conversations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-medium rounded-full transform hover:scale-105 transition-all duration-300"
                data-cursor-hover
              >
                <Play className="w-5 h-5 mr-2" />
                Start Your Campaign
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg font-medium rounded-full transform hover:scale-105 transition-all duration-300"
                data-cursor-hover
              >
                View Case Studies
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex justify-center mb-2 text-purple-400 group-hover:text-blue-400 transition-colors duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
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
                  <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="50%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                  
                  <radialGradient id="brandGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
                  </radialGradient>
                </defs>

                {/* Background */}
                <circle cx="200" cy="200" r="180" fill="url(#brandGlow)" className="animate-pulse" />

                {/* Brand Icons */}
                <g className="animate-pulse">
                  <rect x="100" y="80" width="60" height="40" rx="8" fill="url(#brandGradient)" opacity="0.8" />
                  <rect x="240" y="100" width="60" height="40" rx="8" fill="url(#brandGradient)" opacity="0.8" />
                  <rect x="80" y="180" width="60" height="40" rx="8" fill="url(#brandGradient)" opacity="0.8" />
                  <rect x="260" y="200" width="60" height="40" rx="8" fill="url(#brandGradient)" opacity="0.8" />
                  <rect x="120" y="280" width="60" height="40" rx="8" fill="url(#brandGradient)" opacity="0.8" />
                  <rect x="220" y="300" width="60" height="40" rx="8" fill="url(#brandGradient)" opacity="0.8" />
                </g>

                {/* Central Podcast Hub */}
                <circle cx="200" cy="200" r="40" fill="url(#brandGradient)" className="animate-pulse" />
                <circle cx="200" cy="200" r="25" fill="white" opacity="0.9" />
                
                {/* Microphone in center */}
                <rect x="190" y="185" width="20" height="30" rx="10" fill="url(#brandGradient)" />
                <rect x="198" y="215" width="4" height="15" fill="url(#brandGradient)" />
                <ellipse cx="200" cy="235" rx="15" ry="3" fill="url(#brandGradient)" opacity="0.8" />

                {/* Connection Lines */}
                <g stroke="url(#brandGradient)" strokeWidth="2" opacity="0.6" strokeDasharray="5,5">
                  <line x1="130" y1="100" x2="170" y2="170" className="animate-pulse" />
                  <line x1="270" y1="120" x2="230" y2="170" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <line x1="110" y1="200" x2="160" y2="200" className="animate-pulse" style={{ animationDelay: '1s' }} />
                  <line x1="290" y1="220" x2="240" y2="210" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                  <line x1="150" y1="300" x2="180" y2="240" className="animate-pulse" style={{ animationDelay: '2s' }} />
                  <line x1="250" y1="320" x2="220" y2="240" className="animate-pulse" style={{ animationDelay: '2.5s' }} />
                </g>

                {/* Sound Waves */}
                <g stroke="url(#brandGradient)" strokeWidth="3" fill="none" opacity="0.4">
                  <circle cx="200" cy="200" r="60" className="animate-ping" />
                  <circle cx="200" cy="200" r="80" className="animate-ping" style={{ animationDelay: '0.5s' }} />
                  <circle cx="200" cy="200" r="100" className="animate-ping" style={{ animationDelay: '1s' }} />
                </g>

                {/* Floating Elements */}
                <g fill="url(#brandGradient)" opacity="0.6">
                  <circle cx="50" cy="50" r="3" className="animate-ping" />
                  <circle cx="350" cy="80" r="3" className="animate-ping" style={{ animationDelay: '1s' }} />
                  <circle cx="80" cy="350" r="3" className="animate-ping" style={{ animationDelay: '2s' }} />
                  <circle cx="320" cy="320" r="3" className="animate-ping" style={{ animationDelay: '3s' }} />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
