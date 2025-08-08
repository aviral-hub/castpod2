'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, Users, TrendingUp } from 'lucide-react'

export function BrandsCallHero() {
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
    { icon: <TrendingUp className="w-5 h-5" />, text: 'ROI-focused strategy' },
    { icon: <Users className="w-5 h-5" />, text: 'Audience alignment' },
    { icon: <Clock className="w-5 h-5" />, text: '30-minute consultation' }
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
                Free Strategy Call
              </span>
            </div>
            
            <h1 className="text-white text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Let's Talk About Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Brand's Growth</span>
            </h1>
            
            <p className="text-gray-400 text-lg lg:text-xl leading-relaxed mb-8">
              Book a free 30-minute strategy call with our team. We'll discuss your brand goals, 
              target audience, and how podcast advertising can drive real results for your business.
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
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Free Call
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
                  <linearGradient id="callGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="50%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                  
                  <radialGradient id="callGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
                  </radialGradient>
                </defs>

                {/* Background */}
                <circle cx="200" cy="200" r="180" fill="url(#callGlow)" className="animate-pulse" />

                {/* Calendar/Schedule Visual */}
                <g className="animate-pulse">
                  {/* Calendar base */}
                  <rect x="120" y="100" width="160" height="200" rx="12" fill="url(#callGradient)" opacity="0.9" />
                  <rect x="130" y="110" width="140" height="180" rx="8" fill="white" opacity="0.95" />
                  
                  {/* Calendar header */}
                  <rect x="130" y="110" width="140" height="40" rx="8" fill="url(#callGradient)" />
                  <text x="200" y="135" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">SCHEDULE</text>
                  
                  {/* Calendar grid */}
                  <g fill="url(#callGradient)" opacity="0.6">
                    <rect x="140" y="160" width="20" height="15" rx="2" />
                    <rect x="170" y="160" width="20" height="15" rx="2" />
                    <rect x="200" y="160" width="20" height="15" rx="2" />
                    <rect x="230" y="160" width="20" height="15" rx="2" />
                    <rect x="260" y="160" width="20" height="15" rx="2" />
                    
                    <rect x="140" y="185" width="20" height="15" rx="2" />
                    <rect x="170" y="185" width="20" height="15" rx="2" />
                    <rect x="200" y="185" width="20" height="15" rx="2" opacity="1" />
                    <rect x="230" y="185" width="20" height="15" rx="2" />
                    <rect x="260" y="185" width="20" height="15" rx="2" />
                    
                    <rect x="140" y="210" width="20" height="15" rx="2" />
                    <rect x="170" y="210" width="20" height="15" rx="2" />
                    <rect x="200" y="210" width="20" height="15" rx="2" />
                    <rect x="230" y="210" width="20" height="15" rx="2" />
                    <rect x="260" y="210" width="20" height="15" rx="2" />
                  </g>
                  
                  {/* Selected date highlight */}
                  <rect x="198" y="183" width="24" height="19" rx="4" fill="url(#callGradient)" className="animate-pulse" />
                  <text x="210" y="195" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">15</text>
                </g>

                {/* Clock elements */}
                <g className="animate-pulse" style={{ animationDelay: '0.5s' }}>
                  <circle cx="320" cy="120" r="30" fill="url(#callGradient)" opacity="0.8" />
                  <circle cx="320" cy="120" r="25" fill="white" opacity="0.9" />
                  
                  {/* Clock hands */}
                  <line x1="320" y1="120" x2="320" y2="105" stroke="url(#callGradient)" strokeWidth="3" strokeLinecap="round" />
                  <line x1="320" y1="120" x2="330" y2="120" stroke="url(#callGradient)" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="320" cy="120" r="3" fill="url(#callGradient)" />
                </g>

                {/* Connection lines */}
                <g stroke="url(#callGradient)" strokeWidth="2" opacity="0.4" strokeDasharray="5,5">
                  <path d="M 80 80 Q 200 60 320 80" className="animate-pulse" />
                  <path d="M 80 320 Q 200 340 320 320" className="animate-pulse" style={{ animationDelay: '1s' }} />
                </g>

                {/* Floating elements */}
                <g fill="url(#callGradient)" opacity="0.6">
                  <circle cx="80" cy="80" r="4" className="animate-ping" />
                  <circle cx="320" cy="280" r="4" className="animate-ping" style={{ animationDelay: '1s' }} />
                  <circle cx="80" cy="320" r="4" className="animate-ping" style={{ animationDelay: '2s' }} />
                  <circle cx="320" cy="80" r="4" className="animate-ping" style={{ animationDelay: '3s' }} />
                </g>

                {/* Success checkmark */}
                <g className="animate-pulse" style={{ animationDelay: '1.5s' }}>
                  <circle cx="200" cy="320" r="25" fill="url(#callGradient)" />
                  <path d="M 190 320 L 198 328 L 210 312" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
