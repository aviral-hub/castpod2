'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { CastPodLogo } from './castpod-logo'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'For Brands', href: '/brands' },
    { name: 'For Podcasters', href: '#podcasters' },
    { name: 'Instagram Creators', href: '#creators' },
    { name: 'About', href: '#about' }
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-purple-500/30' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Simple Logo Section */}
          <div className="flex items-center space-x-3 group cursor-pointer" data-cursor-hover>
            <CastPodLogo size={40} animated={false} />
            <div>
              <span className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                CastPod Connect
              </span>
            </div>
          </div>

          {/* Simple Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium text-sm"
                data-cursor-hover
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Simple CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="/join-network"
              className="px-4 py-2 border border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 rounded-lg font-medium text-sm"
              data-cursor-hover
            >
              Join Network
            </a>
            <a 
              href="/book-call"
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-medium text-sm transition-all duration-300"
              data-cursor-hover
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
            data-cursor-hover
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-purple-500/20">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium py-2 px-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <div className="flex flex-col space-y-2 pt-3">
                <a 
                  href="/join-network"
                  className="px-4 py-2 border border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 rounded-lg font-medium text-sm"
                  data-cursor-hover
                >
                  Join Network
                </a>
                <a 
                  href="/book-call"
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium text-sm transition-all duration-300 text-center block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book a Call
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
