'use client'

import { useEffect, useRef } from 'react'

export function WhyPodcasting() {
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

  const services = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We understand your brand, audience, and goals to find the perfect podcast match.',
      icon: '🔍'
    },
    {
      number: '02',
      title: 'Matchmaking',
      description: 'Our algorithm and human expertise connect you with podcasters who align with your values.',
      icon: '💝'
    },
    {
      number: '03',
      title: 'Creative Launch',
      description: 'We help create authentic content that resonates with the podcast\'s audience.',
      icon: '🚀'
    },
    {
      number: '04',
      title: 'Real-Time Reporting',
      description: 'Track performance with detailed analytics and optimize for better results.',
      icon: '📊'
    }
  ]

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 py-16 lg:py-24 relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-white text-3xl lg:text-5xl font-bold mb-4">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Process</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Simple, transparent, and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group animate-on-scroll"
              style={{ animationDelay: `${index * 150}ms` }}
              data-cursor-hover
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/20 p-6 lg:p-8 rounded-2xl hover:border-purple-500/40 transition-all duration-500 group-hover:transform group-hover:scale-105">
                <div className="flex items-center mb-6">
                  <span className="text-purple-400 text-sm font-medium mr-4">
                    {service.number}
                  </span>
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-white text-2xl lg:text-3xl font-bold mb-6 group-hover:text-purple-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-on-scroll">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 rounded-lg transform hover:scale-105"
              data-cursor-hover
            >
              Schedule a Call
            </button>
            <button 
              className="border-2 border-purple-500 text-purple-400 px-8 py-3 font-medium hover:bg-purple-500 hover:text-white transition-all duration-300 rounded-lg transform hover:scale-105"
              data-cursor-hover
            >
              Download Brand Kit
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
