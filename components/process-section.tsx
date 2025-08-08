'use client'

import { useEffect, useRef } from 'react'

export function ProcessSection() {
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

  const capabilities = [
    { title: 'Host-read ads', description: 'Personal endorsements that feel authentic' },
    { title: 'Custom segments', description: 'Tailored content that fits naturally' },
    { title: 'Real metrics', description: 'Track engagement, not just impressions' },
    { title: 'Brand alignment', description: 'Perfect matches for your values' },
    { title: 'Creative content', description: 'Authentic storytelling that converts' },
    { title: 'Performance tracking', description: 'Real-time analytics and optimization' }
  ]

  const stats = [
    { value: '4x', label: 'Higher Trust', icon: '📈' },
    { value: '🇮🇳', label: 'India Focused', icon: '🎯' },
    { value: '1K+', label: 'Creators', icon: '👥' },
    { value: '💰', label: 'Monetization', icon: '💎' }
  ]

  return (
    <section ref={sectionRef} className="bg-gray-900 py-16 lg:py-24 relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Video and Stats Section */}
        <div className="mb-16 lg:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/20 h-80 lg:h-96 rounded-2xl flex items-center justify-center group hover:border-purple-500/40 transition-all duration-500 animate-on-scroll" data-cursor-hover>
              <div className="text-8xl group-hover:scale-110 transition-transform duration-500">🎙️</div>
              <button className="absolute inset-0 flex items-center justify-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
                  <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                </div>
              </button>
              
              {/* Floating elements */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-purple-400 rounded-full animate-ping"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${i * 300}ms`
                    }}
                  />
                ))}
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Why Podcast Ads <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Work</span>
              </h3>
              <p className="text-gray-400 mb-6 text-lg">
                Listeners choose to tune in. That's permission you can't buy elsewhere.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/20 p-4 rounded-xl text-center hover:border-purple-500/40 transition-all duration-300 group cursor-pointer"
                    data-cursor-hover
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="animate-on-scroll">
            <div className="mb-6">
              <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
                Our Services
              </span>
            </div>
            <h3 className="text-white text-3xl lg:text-4xl font-bold mb-6">
              You're not here to stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">small</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Let people see what's coming.
            </p>
          </div>

          <div className="space-y-4 animate-on-scroll">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className="group cursor-pointer border-b border-gray-700 pb-4 hover:border-purple-500 transition-all duration-300"
                data-cursor-hover
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300 mb-2">
                  {capability.title}
                </h4>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {capability.description}
                </p>
              </div>
            ))}
            
            <div className="cursor-pointer border-b border-gray-700 pb-4 group hover:border-purple-500 transition-all duration-300" data-cursor-hover>
              <h4 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300 underline">
                +More Services Coming Soon
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
