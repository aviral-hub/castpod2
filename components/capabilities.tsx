'use client'

import { useState } from 'react'

export function Capabilities() {
  const [activeCapability, setActiveCapability] = useState(0)
  
  const capabilities = [
    'Innovation',
    'Research and insight',
    'Product design',
    'Technology',
    'Digital marketing',
    'Creative Writing',
    'Brand design'
  ]

  const clients = [
    '/abstract-tech-logo.png',
    '/startup-brand-logo.png',
    '/creative-agency-logo.png',
    '/digital-brand-logo.png',
    '/modern-company-logo.png',
    '/generic-business-logo.png'
  ]

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Video and Clients Section */}
        <div className="mb-16 lg:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/placeholder-hbb4l.png"
                alt="Team meeting"
                className="w-full h-80 lg:h-96 object-cover rounded"
              />
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-l-[12px] border-l-black border-y-[8px] border-y-transparent ml-1"></div>
                </div>
              </button>
            </div>
            
            <div>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {clients.map((client, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded flex items-center justify-center h-16">
                    <img src={client || "/placeholder.svg"} alt={`Client ${index + 1}`} className="max-h-8 opacity-60" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="mb-6">
              <span className="text-green-700 text-sm font-medium tracking-wider uppercase">
                Capabilities
              </span>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our approach combines creativity with insights, using user data to refine designs that are not only appealing but also more effective.
            </p>
          </div>

          <div className="space-y-4">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className={`group cursor-pointer border-b border-gray-200 pb-4 ${
                  activeCapability === index ? 'border-green-700' : ''
                }`}
                onMouseEnter={() => setActiveCapability(index)}
              >
                <h3 className={`text-xl lg:text-2xl font-semibold transition-colors ${
                  activeCapability === index ? 'text-green-700' : 'text-black group-hover:text-green-700'
                }`}>
                  {capability}
                </h3>
              </div>
            ))}
            
            <div className="cursor-pointer border-b border-gray-200 pb-4 group">
              <h3 className="text-xl lg:text-2xl font-semibold text-black group-hover:text-green-700 transition-colors underline">
                +19 More
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
