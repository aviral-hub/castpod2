'use client'

import { useEffect, useRef } from 'react'

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)

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

    const elements = footerRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className="bg-black text-white py-16 lg:py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {/* CTA Section */}
          <div className="lg:col-span-1 animate-on-scroll">
            <h3 className="text-white text-lg font-semibold mb-4">Ready to Start?</h3>
            <p className="text-gray-400 text-sm mb-6">
              Don't hide. Make it easy.
            </p>
            <div className="space-y-3">
              <button 
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 rounded-lg transform hover:scale-105"
                data-cursor-hover
              >
                Send Message
              </button>
              <button 
                className="w-full border border-purple-500 text-purple-400 py-2 px-4 text-sm font-medium hover:bg-purple-500 hover:text-white transition-all duration-300 rounded-lg transform hover:scale-105"
                data-cursor-hover
              >
                Book Discovery Call
              </button>
            </div>
          </div>

          {/* For Brands */}
          <div className="animate-on-scroll" style={{ animationDelay: '100ms' }}>
            <h3 className="text-white text-lg font-semibold mb-6">For Brands</h3>
            <ul className="space-y-3">
              {['Brand Interest Form', 'Partnership Inquiry', 'Campaign Planning', 'ROI Tracking', 'Success Stories'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm group"
                    data-cursor-hover
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Creators */}
          <div className="animate-on-scroll" style={{ animationDelay: '200ms' }}>
            <h3 className="text-white text-lg font-semibold mb-6">For Creators</h3>
            <ul className="space-y-3">
              {['Submit Podcast', 'Instagram Network', 'Creator Resources', 'Monetization Guide', 'Success Tips'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm group"
                    data-cursor-hover
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-on-scroll" style={{ animationDelay: '300ms' }}>
            <h3 className="text-white text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm hover:text-purple-400 transition-colors duration-300 cursor-pointer" data-cursor-hover>
                castpodconnect@gmail.com
              </li>
              <li className="text-gray-400 text-sm">Based in India</li>
              <li className="text-gray-400 text-sm">Building the future</li>
              <li className="text-gray-400 text-sm">of creator economy</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 animate-on-scroll">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 CastPod Connect. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Real Voices. Real Brands. Real Impact.</span>
            </p>
            <div className="flex space-x-6 text-sm">
              <a 
                href="#" 
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                data-cursor-hover
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                data-cursor-hover
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                data-cursor-hover
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
