'use client'

import { useEffect, useRef, useState } from 'react'

export function HeroSection() {
  const [currentText, setCurrentText] = useState('Podcasts')
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentText(prev => prev === 'Podcasts' ? 'Influencers' : 'Podcasts')
        setIsAnimating(false)
      }, 300)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

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

  const services = [
    'Talent Discovery',
    'Brand Partnerships', 
    'Creator Growth',
    'Monetization',
    'Authentic Connection'
  ]

  const socialLinks = [
    { name: 'For Brands', href: '#brands' },
    { name: 'For Podcasters', href: '#podcasters' },
    { name: 'Instagram Creators', href: '#creators' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' }
  ]

  return (
    <section ref={heroRef} className="relative px-4 lg:px-8 pt-24 pb-16 lg:pb-24 min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between mb-16 lg:mb-24">
          {/* Left side - Service card */}
          <div className="w-full lg:w-auto mb-8 lg:mb-0 animate-on-scroll">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/20 text-white p-6 lg:p-8 w-full lg:w-80 rounded-2xl backdrop-blur-sm hover:border-purple-500/40 transition-all duration-500 group" data-cursor-hover>
              <div className="text-lg lg:text-xl font-light mb-4 lg:mb-8 text-purple-300">
                What We Do
              </div>
              <ul className="space-y-3 text-sm lg:text-base">
                {services.map((service, index) => (
                  <li key={index} className="font-light flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right side - Tagline */}
          <div className="flex-1 lg:ml-8 text-right animate-on-scroll">
            <h2 className="text-gray-300 text-2xl lg:text-4xl xl:text-5xl font-light leading-tight">
              Where Brands Meet <span className={`italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 ${
                isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
              }`}>
                {currentText}
              </span><br />
              That Matter
            </h2>
          </div>
        </div>

        {/* Main title */}
        <div className="relative mb-16 animate-on-scroll">
          <h1 className="text-white font-bold leading-none">
            <div className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl hover:scale-105 transition-transform duration-500 cursor-default">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">REAL</span>
            </div>
            <div className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl flex items-center mt-2 hover:scale-105 transition-transform duration-500 cursor-default">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-2 lg:px-4 mr-2 lg:mr-4 rounded-lg">_</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">VOICES</span>
            </div>
            <div className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl mt-2 hover:scale-105 transition-transform duration-500 cursor-default">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">REAL BRANDS</span>
            </div>
            <div className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl mt-2 hover:scale-105 transition-transform duration-500 cursor-default">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">REAL IMPACT</span>
            </div>
          </h1>

          <div className="absolute bottom-0 right-0 max-w-xs text-gray-300 text-sm lg:text-base leading-relaxed animate-on-scroll">
            <p>This isn't just advertising—it's authentic connection. Turn your passion into paychecks with India's fastest growing podcast network.</p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between animate-on-scroll">
          <ul className="flex flex-wrap gap-4 lg:gap-6 text-gray-300 text-sm mb-8 lg:mb-0">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="hover:text-purple-400 transition-all duration-300 relative group" 
                  data-cursor-hover
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>
          
          <div className="relative w-32 h-32 lg:w-40 lg:h-40 group" data-cursor-hover>
            <svg
              className="w-full h-full drop-shadow-2xl"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Gradient Definitions */}
              <defs>
                <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
                
                <linearGradient id="heroSecondary" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EC4899" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
                
                <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
                </radialGradient>
              </defs>

              {/* Background Circle */}
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="url(#heroGlow)"
                className="animate-pulse"
              />

              {/* Podcast Waveform Visualization */}
              <g className="group-hover:scale-110 transition-transform duration-500">
                {/* Waveform bars */}
                <rect x="60" y="80" width="4" height="40" rx="2" fill="url(#heroGradient)" className="animate-pulse" style={{ animationDelay: '0s' }} />
                <rect x="70" y="70" width="4" height="60" rx="2" fill="url(#heroGradient)" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
                <rect x="80" y="85" width="4" height="30" rx="2" fill="url(#heroGradient)" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                <rect x="90" y="60" width="4" height="80" rx="2" fill="url(#heroGradient)" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                <rect x="100" y="50" width="4" height="100" rx="2" fill="url(#heroGradient)" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                <rect x="110" y="65" width="4" height="70" rx="2" fill="url(#heroGradient)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                <rect x="120" y="75" width="4" height="50" rx="2" fill="url(#heroGradient)" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
                <rect x="130" y="85" width="4" height="30" rx="2" fill="url(#heroGradient)" className="animate-pulse" style={{ animationDelay: '0.7s' }} />
                <rect x="140" y="70" width="4" height="60" rx="2" fill="url(#heroGradient)" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
              </g>

              {/* Connecting Network Lines */}
              <g stroke="url(#heroSecondary)" strokeWidth="2" opacity="0.6" className="group-hover:opacity-100 transition-opacity duration-500">
                <path d="M 30 50 Q 100 30 170 50" strokeDasharray="5,5" className="animate-pulse" />
                <path d="M 30 150 Q 100 170 170 150" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '1s' }} />
                <path d="M 50 30 Q 70 100 50 170" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '2s' }} />
                <path d="M 150 30 Q 130 100 150 170" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '3s' }} />
              </g>

              {/* Connection Nodes */}
              <g fill="url(#heroSecondary)">
                <circle cx="30" cy="50" r="4" className="animate-ping" />
                <circle cx="170" cy="50" r="4" className="animate-ping" style={{ animationDelay: '1s' }} />
                <circle cx="30" cy="150" r="4" className="animate-ping" style={{ animationDelay: '2s' }} />
                <circle cx="170" cy="150" r="4" className="animate-ping" style={{ animationDelay: '3s' }} />
              </g>

              {/* Central Microphone Icon */}
              <g className="group-hover:scale-125 transition-transform duration-300">
                <ellipse cx="100" cy="90" rx="15" ry="25" fill="url(#heroGradient)" />
                <rect x="95" y="115" width="10" height="20" fill="url(#heroSecondary)" />
                <ellipse cx="100" cy="140" rx="20" ry="5" fill="url(#heroGradient)" opacity="0.8" />
                
                {/* Microphone grille */}
                <g stroke="white" strokeWidth="1" opacity="0.8">
                  <line x1="90" y1="80" x2="110" y2="80" />
                  <line x1="90" y1="85" x2="110" y2="85" />
                  <line x1="90" y1="90" x2="110" y2="90" />
                  <line x1="90" y1="95" x2="110" y2="95" />
                  <line x1="90" y1="100" x2="110" y2="100" />
                </g>
              </g>

              {/* Floating Particles */}
              <g className="group-hover:opacity-100 opacity-60 transition-opacity duration-500">
                <circle cx="40" cy="40" r="2" fill="url(#heroSecondary)" className="animate-ping" />
                <circle cx="160" cy="40" r="2" fill="url(#heroSecondary)" className="animate-ping" style={{ animationDelay: '0.5s' }} />
                <circle cx="40" cy="160" r="2" fill="url(#heroSecondary)" className="animate-ping" style={{ animationDelay: '1s' }} />
                <circle cx="160" cy="160" r="2" fill="url(#heroSecondary)" className="animate-ping" style={{ animationDelay: '1.5s' }} />
              </g>

              {/* Brand Text */}
              <text x="100" y="180" textAnchor="middle" fontSize="12" fill="url(#heroGradient)" fontFamily="monospace" fontWeight="bold">
                CONNECT
              </text>
            </svg>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
