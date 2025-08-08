'use client'

import { useEffect, useRef } from 'react'

export function TeamSection() {
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

  const teamStats = [
    { value: '4', label: 'Team Members', icon: '👥', gradient: 'from-purple-600 to-blue-600' },
    { value: '🇮🇳', label: 'Based in India', icon: '🏠', gradient: 'from-blue-600 to-purple-600' },
    { value: '🚀', label: 'Building Movement', icon: '💫', gradient: 'from-purple-600 to-pink-600' },
    { value: '💪', label: 'Rooted in Hustle', icon: '⚡', gradient: 'from-pink-600 to-purple-600' }
  ]

  return (
    <section ref={sectionRef} className="bg-gray-900 py-16 lg:py-24 relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="grid grid-cols-2 gap-4 animate-on-scroll">
            {teamStats.map((stat, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${stat.gradient} h-64 rounded-2xl flex flex-col items-center justify-center text-center hover:scale-105 transition-all duration-500 group cursor-pointer ${
                  index === 1 ? 'lg:mt-8' : index === 2 ? 'lg:-mt-8' : ''
                }`}
                data-cursor-hover
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300 mb-2">
                  {stat.value}
                </div>
                <div className="text-white text-sm font-medium">
                  {stat.label}
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          <div className="animate-on-scroll">
            <h2 className="text-white text-3xl lg:text-5xl font-bold mb-6">
              Small Team. <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Loud</span> Vision.
            </h2>
            <p className="text-gray-400 text-lg lg:text-xl leading-relaxed mb-6">
              4 People. One mission: put podcasters on the map.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              🇮🇳 Based in India. Rooted in hustle. Not trying to be another agency — trying to build a movement.
            </p>
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 p-6 rounded-2xl backdrop-blur-sm">
              <p className="text-white text-lg font-semibold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Vision:</span> Make podcasting a legit career path in the creator economy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
