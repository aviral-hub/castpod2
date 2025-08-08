'use client'

import { useEffect, useRef } from 'react'

export function ServicesSection() {
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

  const projects = [
    {
      title: '4x Higher Trust Rate',
      category: 'Podcast Advertising — 2024',
      description: 'Podcast listeners are 4x more likely to trust brands they hear in shows',
      icon: '4x',
      gradient: 'from-purple-600 to-blue-600'
    },
    {
      title: 'India\'s Audio Boom',
      category: 'Market Growth — 2024',
      description: 'India\'s audio scene is exploding. Ride the wave or miss the moment',
      icon: '🚀',
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Authentic Connections',
      category: 'Brand Strategy — 2024',
      description: 'Stop interrupting. Start belonging in conversations that matter',
      icon: '💬',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      title: '1000+ Active Creators',
      category: 'Network Size — 2024',
      description: 'Join thousands of creators already earning through our platform',
      icon: '1K+',
      gradient: 'from-pink-600 to-purple-600'
    }
  ]

  return (
    <section ref={sectionRef} className="bg-gray-900 py-16 lg:py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="mb-16 animate-on-scroll">
          <div className="mb-4">
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
              Why Podcasting
            </span>
          </div>
          <h2 className="text-white text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            Stats aren't decoration.<br />
            They're <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">ammo</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            People are done with ads. But they still trust voices. Be the brand that belongs in the conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group cursor-pointer animate-on-scroll ${index === 1 ? 'lg:mt-24' : ''}`}
              style={{ animationDelay: `${index * 200}ms` }}
              data-cursor-hover
            >
              <div className="relative overflow-hidden mb-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/20 h-80 lg:h-96 flex items-center justify-center rounded-2xl group-hover:border-purple-500/40 transition-all duration-500">
                <div className={`text-6xl lg:text-8xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500`}>
                  {project.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(6)].map((_, i) => (
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
              <div className="group-hover:translate-y-[-4px] transition-transform duration-300">
                <h3 className="text-white text-xl lg:text-2xl font-semibold mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <span className="text-purple-400 text-sm block mb-2">
                  {project.category}
                </span>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
          
          <div className="flex flex-col justify-center items-center text-center p-8 animate-on-scroll" data-cursor-hover>
            <p className="text-gray-400 text-base mb-8 max-w-xs">
              Ready to join the creator economy revolution? Start earning today.
            </p>
            <button className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium hover:scale-110 transition-all duration-300 group">
              <span className="group-hover:scale-110 transition-transform duration-300">
                Join <br />
                Network
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
