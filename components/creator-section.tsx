'use client'

import { useEffect, useRef } from 'react'

export function CreatorSection() {
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

  const features = [
    { value: '1K+', label: 'Followers needed to start earning', icon: '👥', gradient: 'from-purple-600 to-blue-600' },
    { value: '💰', label: 'Fair compensation for all', icon: '💎', gradient: 'from-blue-600 to-purple-600' },
    { value: '🎯', label: 'Brand alignment guaranteed', icon: '✨', gradient: 'from-purple-600 to-pink-600' },
    { value: '📈', label: 'Growth strategy included', icon: '🚀', gradient: 'from-pink-600 to-purple-600' }
  ]

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 py-16 lg:py-24 relative">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="grid grid-cols-2 gap-4 animate-on-scroll">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/20 p-6 rounded-2xl h-64 flex flex-col justify-center items-center text-center hover:border-purple-500/40 transition-all duration-500 group cursor-pointer ${
                  index === 1 ? 'lg:mt-8' : index === 2 ? 'lg:-mt-8' : ''
                }`}
                data-cursor-hover
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient} group-hover:scale-110 transition-transform duration-300`}>
                  {feature.value}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.label}
                </div>
                
                {/* Hover effect particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full animate-ping"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${i * 200}ms`
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="animate-on-scroll">
            <h2 className="text-white text-3xl lg:text-5xl font-bold mb-6">
              Turn Your Passion Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Paychecks</span>
            </h2>
            <p className="text-gray-400 text-lg lg:text-xl leading-relaxed mb-8">
              Truth: Your voice has value. It's time someone paid you for it. Whether you're a podcaster or Instagram creator, we help you monetize authentically.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 rounded-lg transform hover:scale-105"
                data-cursor-hover
              >
                I'm a Podcaster
              </button>
              <button 
                className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 font-medium hover:from-pink-700 hover:to-purple-700 transition-all duration-300 rounded-lg transform hover:scale-105"
                data-cursor-hover
              >
                I'm an Influencer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
